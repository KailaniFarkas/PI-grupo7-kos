  //importo los modelos 
  const db = require ("../database/models")
  const Usuario = db.Usuario;
  const bcrypt = require('bcryptjs'); //para poder guardar las contrasenas 


 
const userController = {
    login: function (req, res) {
        //  renderiza nomas
        return res.render('login');
    },

    loginProcess: function (req, res) {
        let mail = req.body.usuario
        let pass = req.body.contrasenia
        let remember = req.body.recordarme
        console.log (mail, pass, remember)
        Usuario.findOne ({where: {email: mail}})  //valido que exista el mail en la db
        .then (function (user){
            if (pass == user.contrasena){ //comparo la pass ingresada con la de la db 
        
            } else {} //si no coinciden tengo que mandar error
        })

    },

    perfil: function (req, res) {
        // return res.send(db.lista)
            return res.render("profile", {listado: db.lista,usuario: db.usuario, nombre:db.usuario, ft:db.usuario.fotoPerfil, mail:db.usuario.email });
        //mismo for de index con 3 productos
    },

    register: function(req, res){
        if (req.session.user) return res.redirect('/user/profile');
        return res.render('register'); // Muestra la vista
    },

    create: function(req, res) {
        let form = req.body;
    
        // Validaciones básicas según teoría (una por una)
        if (form.email == "") {
            return res.render("register", {
                error: "El campo email no puede estar vacío."
            });
        }
    
        if (form.contrasenia == "") {
            return res.render("register", {
                error: "El campo contraseña no puede estar vacío."
            });
        }
    
        if (form.contrasenia.length < 3) {
            return res.render("register", {
                error: "La contraseña debe tener al menos 3 caracteres."
            });
        }
    
        // Verifico si ya existe el email
        db.Usuario.findOne({ where: { email: form.email } })
            .then(function(usuarioExistente) {
                if (usuarioExistente) {
                    return res.render("register", {
                        error: "El email ya está registrado."
                    });
                }
    
                // Si no existe, creo el nuevo usuario
                let usuario = {
                    username: form.usuario,
                    email: form.email,
                    contrasena: bcrypt.hashSync(form.contrasenia, 10),
                    fecha: form.fechaNacimiento,
                    dni: form.dni,
                    fotoPerfil: form.fotoPerfil,
                    created_at: new Date()
                };
    
                return db.Usuario.create(usuario);
            })
            .then(function() {
                return res.redirect("/login");
            })
            .catch(function(error) {
                console.log(error);
                return res.render("register", {
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
        if (!req.session.user) {
            return res.redirect('/user/login');
        }
    
        // Traigo al usuario junto con sus productos
        db.Usuario.findByPk(req.session.user.id, {
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