 // product/id/:id
const listaLibros = require("../db/libros");

 const productController = {
    index: function(req, res){
        const id = req.params.id;

        for(let i = 0; i < listaLibros.lista.length; i++) {
            if(listaLibros.lista[i].id == id) {
                res.render("product", {
                    libro: listaLibros.lista[i]
                })
            }
        }

    }
 }


 module.exports = productController;