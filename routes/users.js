// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const usersController = require('../controllers/usersController');

// ************ Registro usuario ***********
router.get('/login', usersController.login);

// ************ Login usuario ***********
router.get('/register', usersController.register);

// ************ Perfil de Usuario ***********


module.exports = router;