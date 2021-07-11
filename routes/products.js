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
router.get('/detail/:id', productsController.detail);

// ************ Elminar Producto ***********
router.delete('/:id', productsController.destroy);

module.exports = router;