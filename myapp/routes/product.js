// product

var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');

// router.get('/search', productController.busqueda);
router.get("/detail/:id", productController.index);


//router.get('/add', productController.agregar); // product/add

module.exports = router;
