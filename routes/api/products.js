const express = require('express');
const router = express.Router();
const productsController = require('../../controllers/api/productsController')

router.get('/', productsController.products);  // localhost:3000/api/products

module.exports = router;