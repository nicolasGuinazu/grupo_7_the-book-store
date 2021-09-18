const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index')
  })

router.get('/cart', (req, res) => {
    res.render('cart')
  })  

  module.exports = router;