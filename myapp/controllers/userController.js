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
        return res.render('register');
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