// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer');
const authMiddleware=require('../middlewares/authMiddleware');
const adminMiddleware=require('../middlewares/adminMiddleware');
const storeProductValidator=require('../middlewares/storeProductValidator')

// ********** Manejo de archivos con Multer ***********
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images/products')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.png')
    }
})

const upload = multer({storage});

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

// ************ Index Productos ***********
router.get('/', productsController.list);
router.get('/search', productsController.search);
router.get('/ebooks', productsController.ebooks);
router.get('/offers', productsController.offers);
// ************ Crear Producto ***********
router.get('/create', adminMiddleware,productsController.create); //middlewares para checkear que este logeado y sea admin
router.post('/create', upload.single('image'), storeProductValidator, productsController.store);
//router.post('/create', productsController.store);

// ************ Modificar Producto ***********
router.get('/modify/:id', authMiddleware,productsController.modify);
router.put('/modify/:id',upload.single('image'), productsController.processModify);

// ************ Detalle de Producto ***********
router.get('/detail/:id',productsController.detail);

// ************ Elminar Producto ***********
router.delete('/:id',adminMiddleware,productsController.destroy);

module.exports = router;