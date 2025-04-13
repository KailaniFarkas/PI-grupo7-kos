var express = require('express');
var router = express.Router();
const loginController = require('../controllers/loginController');

router.get('/login/email/:email', loginController);

router.get('/login', function(req, res) {
    const { email, password } = req.body;
    // lógica del controlador
});
