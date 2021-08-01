const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index')
  })

router.get('/carrito-compra', (req, res) => {
    res.render('carrito-compras')
  })  

  module.exports = router;