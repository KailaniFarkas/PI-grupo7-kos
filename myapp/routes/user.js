const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/login', userController.login);
router.get('/register', userController.register);
router.get('/profile/:id', userController.perfil);

router.post('/loginProcess', userController.loginProcess);
router.post('/logout', userController.logout); //para el logout
router.post('/newuser', userController.create);

module.exports = router;
