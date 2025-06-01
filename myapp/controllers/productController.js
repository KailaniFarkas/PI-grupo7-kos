  //importo los modelos 
  const db = require ("../database/models")
  const Producto = db.Producto;
  
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
    },
    agregar: function (req, res) {
        return res.render('product-add',{usuario:db.usuario}) // llamando a la vista
    }
 };

 module.exports = productController;