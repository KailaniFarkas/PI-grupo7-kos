// product

var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');

router.get('/id/:id', productController.index);

router.get('/search', productController.busqueda);


// product/add
router.get('/add', productController.agregar);


module.exports = router;
