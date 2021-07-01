// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

// ************ Crear Producto ***********
router.get('/create', productsController.create);

// ************ Modificar Producto ***********
router.get('/modify', productsController.modify);

// ************ Detalle de Producto ***********


module.exports = router;