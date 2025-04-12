// product
// product/add

var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');

router.get('/id/:id', productController.index);

module.exports = router;
