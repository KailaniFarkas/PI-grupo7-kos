// product

var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');

router.get('/id/:id', productController.index);

router.get('/search', productController.busqueda);


router.get('/add', productController.agregar); // product/add

module.exports = router;
