const listaLibros = require("../db/libros");

const indexController = {
    index: function(req, res){
        res.render("index", {
            listado: listaLibros.lista
        })
    }
};


module.exports = indexController;