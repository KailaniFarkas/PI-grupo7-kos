const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/login', userController.login);
router.post('/loginProcess', userController.loginProcess);
router.get('/register', userController.register);
router.get('/profile/', userController.perfil);
router.post('/newuser', userController.create);

module.exports = router;
