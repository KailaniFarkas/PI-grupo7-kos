const db = require("../db/db");

const indexController = {
    index: function(req, res){
        console.log (req.session)
        res.render("index", {
            listado: db.lista,
            session: true, // false para que mueste el deslogueado
            usuario : db.usuario,
            usuarioLogueado: req.session.usuarioLogueado,
        })
    }
};


module.exports = indexController;