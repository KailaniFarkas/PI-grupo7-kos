  //importo los modelos 
  const db = require ("../database/models")
  const Producto = db.Producto;
  
 const productController = {
    index: function(req, res) {
    const id = req.params.id;

    db.Producto.findByPk(id, {
        include: ['comentarios', 'usuario']
    })
    .then(function(producto) {
        if (!producto) {
            return res.status(404).send("Producto no encontrado");
        }
        return res.render("product", {
            producto: producto
        });
    })
    .catch(function(error) {
        console.log(error);
        return res.status(500).send("Error al obtener el producto");
    });

}};


 module.exports = productController;