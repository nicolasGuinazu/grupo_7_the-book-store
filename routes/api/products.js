const express = require('express');
const router = express.Router();
const productsController = require('../../controllers/api/productsController')

router.get('/', productsController.products);  // localhost:3000/api/products || Devuelve listado completo de productos (id,name,synopsis)
router.get('/:id',productsController.productsDetails) // localhost:3000/api/products/id

module.exports = router;