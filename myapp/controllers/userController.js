  //importo los modelos 
  const db = require ("../database/models")
  const Usuario = db.Usuario;


 
const userController = {
    login: function (req, res) {
        //  renderiza nomas
        return res.render('login');
    },

    loginProcess: function (req, res) {
        let mail = req.body.usuario
        let pass = req.body.contrasenia
        let remember = req.body.recordarme
        
      
        Usuario.findOne ({where: {email: mail}})  //valido que exista el mail en la db
        .then (function (user){
            if (!user){
                return res.render("login", {
                    error: "El mail ingresado no está registrado." //el mail esta mal, mensaje de error.
                });
            }
            if (pass == user.contrasena){ //comparo la pass ingresada con la de la db (solo si el mail esta bien)
                req.session.usuarioLogueado = { //guardo la pass en session.
                    id: user.id,
                    nombre: user.username,
                    email: user.email,
                    foto: user.fotoPerfil
                };

                if (remember) {        
                    res.cookie('recordame', user.id, { maxAge: 1000 * 60 * 5 }); //si tildo recordarme, tengo que guardar la contra en cookies 
                }
                    
                return res.redirect("/"); //y redirijo a home 

        } else {return res.render("login", { //si la pass no es la misma que la de la db
                error: "La contraseña es incorrecta."
            });
        } 
    })

    },

    //logout: function (req, res) {} // para el logout



    perfil: function (req, res) {
        // return res.send(db.lista)
            return res.render("profile", {listado: db.lista,usuario: db.usuario, nombre:db.usuario, ft:db.usuario.fotoPerfil, mail:db.usuario.email });
        //mismo for de index con 3 productos
    },

    register: function(req, res){
        if (req.session.user) return res.redirect('/user/profile');
        return res.render('register'); // Muestra la vista
    },

    create: function(req, res){
        //recuperar los datos del form
            let form = req.body;
        return res.send(form)
            return res.redirect("/");
    }, 

    index: function(req, res){
        
        return res.render("index", {
            listado: db.lista,
            session: true, // false para que mueste el deslogueado
            usuario : db.usuario
        })
    },
    perfil: function (req, res) {
        return res.render("profile", { listado: db.lista, usuario: db.usuario });
    }
};


module.exports = userController;