// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer');
const authMiddleware=require('../middlewares/authMiddleware')

// ********** Manejo de archivos con Multer ***********
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images')
    },
    filename: function (req, file, cb) {      
        cb(null, file.fieldname + '-' + Date.now() + '.png')
    }
})

const upload = multer({storage});

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

// ************ Index Productos ***********
router.get('/', productsController.index);

// ************ Crear Producto ***********
router.get('/create', authMiddleware,productsController.create);
router.post('/create', upload.single('image'), productsController.store);
//router.post('/create', productsController.store);

// ************ Modificar Producto ***********
router.get('/modify/:id', authMiddleware,productsController.modify);
router.put('/modify/:id',upload.single('image'), productsController.processModify);

// ************ Detalle de Producto ***********
router.get('/detail/:id', productsController.detail);

// ************ Elminar Producto ***********
router.delete('/:id', productsController.destroy);

module.exports = router;