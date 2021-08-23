const express = require('express');
const router = express.Router();
const testController=require('../controllers/testController')


router.get('/genres', testController.genres);
router.get('/authors', testController.authors);
router.get('/users', testController.users)
router.get('/products', testController.products)
router.get('/payment-method', testController.paymentMethods)
router.get('/editorials', testController.editorials)

/* ; 
router.get('/products', testController.index); 
*/

module.exports = router;