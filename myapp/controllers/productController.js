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

      let palabraBuscada = req.query.search;

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
            return res.render('search-results', {libro: resultadoBusqueda, mensaje: null});

          } else {
            return res.render('search-results', {libro: [], mensaje: 'No existen resultados para su búsqueda'
            });
          }
        })
        .catch(function(error) {
          console.log(error);
          return res.send('Error al buscar productos');
        });
    },

    // esta funcion es para la vista del formulario
    productAdd: function (req, res) {
      if (!req.session.user) {
        return res.redirect('/user/login');
      }
  
      return res.render('product-add', {
        nombre: req.session.user.nombre,
        pfp: req.session.user.foto,
        mail: req.session.user.email
      });
    },
  
    // esta función es la que me ayudará a guardar el producto
    agregarProducto: function (req, res) {
      if (!req.session.user) {
        return res.redirect('/user/login');
      }
  
      db.Producto.create({
        nombre_producto: req.body.nombre,
        descripcion: req.body.descripcion,
        imagen: '/images/products/' + req.body.imagen,
        usuario_id: req.session.user.id
      })
      .then(function (productoCreado) {
        return res.redirect('/product/detail/' + productoCreado.id);
      })
      .catch(function (error) {
        console.log(error);
        return res.send('Error al crear el producto');
      });
    }
    
    
          

};


 module.exports = productController;