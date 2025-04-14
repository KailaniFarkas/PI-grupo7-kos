<<<<<<< HEAD

const db = require('../db/db');
=======
const db = require('../db/usuarios');
>>>>>>> refs/remotes/origin/main

const userController = {
    login: function (req, res) {
        //  renderiza nomas
        return res.render('login');
    },

    perfil: function (req, res) {
        // return res.send(db.lista)
            return res.render("profile", {listado: db.lista,usuario: db.usuario, nombre:db.usuario, ft:db.usuario.fotoPerfil, mail:db.usuario.email });
        //mismo for de index con 3 productos
    },

    register: function (req, res) {
        return res.render('register');
    },

    index: function(req, res){
        
        return res.render("index", {
            listado: db.lista,
            session: true, // false para que mueste el deslogueado
            usuario : db.usuario
        })
    }
};


module.exports = userController;