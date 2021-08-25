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
router.get('/products/list', testController.index);//trae el listado con todos los productos
router.get('/products/create', testController.create); //vista con formulario creacion
router.post('/products/create', testController.store);  //creacion de producto
router.get('/products/details/:id', testController.singleProduct); //detalle de un producto
router.get('/products/modify/:id',testController.modify); //vista con formulario edicion
router.put('/products/modify/:id', testController.processModify)//metodo update (modificacion de base) 
router.delete('/products/delete/:id', testController.destroy); //metodo destroy (hard delete) 


module.exports = router;