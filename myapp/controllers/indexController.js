const db = require("../db/db");

const indexController = {
    index: function(req, res){
        res.render("index", {
            listado: db.lista,
            session: true, // false para que mueste el deslogueado
            usuario : db.usuario
        })
    }
};


module.exports = indexController;