const express = require('express');
const router = express.Router();
const testController=require('../controllers/testController')


router.get('/addresses', testController.addresses);
router.get('/authors', testController.authors);
router.get('/carts', testController.carts);
router.get('/editorials', testController.editorials);
router.get('/genres', testController.genres);
/*router.get('/invoices', testController.invoices);*/
router.get('/payment-method', testController.paymentMethods);
router.get('/products', testController.products);
router.get('/users', testController.users);

/* ; 
router.get('/products', testController.index); 
*/

module.exports = router;