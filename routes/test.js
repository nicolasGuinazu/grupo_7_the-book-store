const express = require('express');
const router = express.Router();
const testController=require('../controllers/testController')


router.get('/addresses', testController.addresses);
router.get('/authors', testController.authors);
router.get('/carts', testController.carts);
router.get('/editorials', testController.editorials);
router.get('/genres', testController.genres);
router.get('/invoices', testController.invoices);
router.get('/payment-method', testController.paymentMethods);
router.get('/products', testController.products);
router.get('/users', testController.users);

//rutas para el crud de producto
router.get('/products', testController.products);//todos los productos
router.get('/products/:id', testController.singleProduct); //detalle del producto// igual para el get del modify
router.post('/products/create', testController.create);  //creacion de producto
router.put('/products/modify/:id', testController.processModify)//metodo update (modificacion de base) falta la ruta por get
router.delete('/products/delete/:id', testController.destroy); //metodo destroy (borrado de base) falta la ruta por get


module.exports = router;