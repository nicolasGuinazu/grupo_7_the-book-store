const express = require('express');
const { indexProducts } = require('../controllers/productsController');
const router = express.Router();
const productsController = require('../controllers/productsController');


router.get('/', productsController.indexProducts)

router.get('/cart', (req, res) => {
    res.render('cart')
  })  

  module.exports = router;