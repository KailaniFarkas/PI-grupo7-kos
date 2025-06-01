const { Association } = require('sequelize');
const db = require('../database/models');
const op = db.Sequelize.Op;



const searchResultsController ={  

    busqueda: function (req, res) {
        let palabraBuscada = req.query.name;

        db.Producto.findAll({

            where: {
                nombre_producto: {
                    [op.like] : `%${palabraBuscada}%`
                }

            },

            include : [{association: 'usuario'}]
        })
        
        .then(function (resultadoBusqueda) {
            if (resultadoBusqueda.length > 0){
                return res.render('search-results', {resultadoBusqueda});
            }   else{
                return res.render('search-results', {resultadoBusqueda: null, mensaje: "No existen resultados para su búsqueda"});

            }
            
        });

    }

};

module.exports = searchResultsController;