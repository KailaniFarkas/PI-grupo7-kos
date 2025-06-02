 //importo los modelos
 const db = require ("../database/models")
 const Usuario = db.Usuario;
 const bcrypt = require('bcrypt'); //para poder guardar las contrasenas




const userController = {
   login: function (req, res) {
       //  renderiza nomas
       console.log (req.session);
       return res.render('login', {
           error: '',
           usuarioLogueado: req.session.usuarioLogueado
       });
      
   },


   loginProcess: function (req, res) {
       let mail = req.body.usuario
       let pass = req.body.contrasenia
       let remember = req.body.recordarme
      
    
       Usuario.findOne ({where: {email: mail}})
       .then (function (user){
           if (!user){
               return res.render("login", {
                   usuarioLogueado: req.session.usuarioLogueado,
                   error: "El mail ingresado no está registrado."
               });
           }


           
           if (bcrypt.compareSync(pass, user.contrasena)) {
            
               req.session.usuarioLogueado = { //guardo la pass en session.
                   id: user.id,
                   nombre: user.username,
                   email: user.email,
                   foto: user.fotoPerfil
               };
               console.log (req.session)


               if (remember) {       
                   res.cookie('recordame', user.id, { maxAge: 1000 * 60 * 5 });
               }
                  
               return res.redirect("/");


       } else {return res.render("login", {
               usuarioLogueado: req.session.usuarioLogueado,
               error: "La contraseña es incorrecta."
           });
       }
   })

   
   },

   logout: function (req, res) {
       req.session.destroy();
  
       if (req.cookies.recordame) {
           res.clearCookie('recordame');
       }
  
       return res.redirect('/');
   },

   register: function(req, res){
       if (req.session.user) return res.redirect('/user/profile');
       return res.render('register', {
           usuarioLogueado: req.session.usuarioLogueado,
       }
       ); // Muestra la vista
    },

   create: function(req, res) {
    let form = req.body;

    // Validaciones básicas
    if (form.email == "") {
        return res.render("register", {
            usuarioLogueado: req.session.usuarioLogueado,
            error: "El campo email no puede estar vacío."
        });
    }

    if (form.username == "") {
        return res.render("register", {
            usuarioLogueado: req.session.usuarioLogueado,
            error: "El nombre de usuario no puede estar vacío."
        });
    }

    if (form.contrasenia == "") {
        return res.render("register", {
            usuarioLogueado: req.session.usuarioLogueado,
            error: "El campo contraseña no puede estar vacío."
        });
    }

    if (form.contrasenia.length < 3) {
        return res.render("register", {
            usuarioLogueado: req.session.usuarioLogueado,
            error: "La contraseña debe tener al menos 3 caracteres."
        });
    }

    // Verifico si ya existe el email
    db.Usuario.findOne({ where: { email: form.email } })
        .then(function(usuarioExistente) {
            if (usuarioExistente) {
                return res.render("register", {
                    usuarioLogueado: req.session.usuarioLogueado,
                    error: "El email ya está registrado."
                });
            }

            // Si no existe, creo el nuevo usuario
            let usuario = {
                username: form.username,
                email: form.email,
                contrasena: bcrypt.hashSync(form.contrasenia, 10),
                fecha: form.fechaNacimiento,
                dni: form.dni,
                fotoPerfil: form.fotoPerfil,
                created_at: new Date()
            };

            console.log("Formulario recibido:", form);
            return db.Usuario.create(usuario);
        })
        .then(function() {
            return res.redirect("/user/login");
        })
        .catch(function(error) {
            console.log(error);
            return res.render("register", {
                usuarioLogueado: req.session.usuarioLogueado,
                error: "Ocurrió un error al registrar el usuario."
            });
        });
    },
  
   index: function(req, res){
      
       return res.render("index", {
           listado: db.lista,
           session: true, // false para que mueste el deslogueado
           usuario : db.usuario
       })
   },
   perfil: function(req, res) {
       // Verificamos que el usuario esté logueado
       if (!req.session.usuarioLogueado) {
           return res.redirect('/user/login');
       }

       // Traigo al usuario junto con sus productos
       db.Usuario.findByPk(req.session.usuarioLogueado.id, {
           include: [
               {
                   association: 'productos' // Usamos el alias que pusiste en el modelo
               }
           ]
       })
       .then(function(usuario) {
           return res.render("profile", {
               usuario: usuario,
               productos: usuario.productos,
               cantidad: usuario.productos.length
           });
       })
       .catch(function(err) {
           console.log(err);
           return res.send("Error al cargar el perfil.");
       });
   }
};

module.exports = userController;