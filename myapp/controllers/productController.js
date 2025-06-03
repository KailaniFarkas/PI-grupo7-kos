  //importo los modelos 
  const db = require ("../database/models")
  const Producto = db.Producto;
  const { Op } = require('sequelize');
  
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
    })
},
    busqueda: function(req, res) {
      console.log('BUSQUEDA FUNCIONANDO');

      let palabraBuscada = req.query.search;

     console.log('Palabra buscada:', palabraBuscada);

      db.Producto.findAll({
        where: {
          nombre_producto: {
            [Op.like]: `%${palabraBuscada}%`
          }
        },
        include: [{ association: 'usuario' }]
      })
        .then(function(resultadoBusqueda) {
          if (resultadoBusqueda.length > 0) {
            return res.render('search-results', {
              libro: resultadoBusqueda,
              mensaje: null
            });
          } else {
            return res.render('search-results', {
              libro: [],
              mensaje: 'No existen resultados para su búsqueda'
            });
          }
        })
        .catch(function(error) {
          console.log(error);
          return res.send('Error al buscar productos');
        });
    }
          

};


 module.exports = productController;