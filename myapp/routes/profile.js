var express = require('express');
var router = express.Router();

router.get('/id/:id', productController.index);