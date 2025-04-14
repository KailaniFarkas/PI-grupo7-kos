 // product/id/:id
const db = require("../db/db");

 const productController = {
    index: function(req, res){
        const id = req.params.id;

        for(let i = 0; i < db.lista.length; i++) {
            if(db.lista[i].id == id) {
                res.render("product", {
                    libro: db.lista[i]
                })
            }
        }

    },
    busqueda:  function (req, res) {
        return res.render('search-results');
    }
 }


 module.exports = productController;