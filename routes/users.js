// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer');

// ********** Manejo de archivos con Multer ***********
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images/users')
    },
    filename: function (req, file, cb) {      
        cb(null, file.fieldname + '-' + Date.now() + '.png')
    }
})

const upload = multer({storage});

// ************ Controller Require ************
const usersController = require('../controllers/usersController');

// ************ Login usuario ***********
router.get('/login', usersController.login);
router.post('/login', usersController.processLogin);

// ************ Registro usuario ***********
router.get('/register', usersController.register);
router.post('/register', upload.single('avatar'), usersController.registerUser);

// ************ Perfil de Usuario ***********


module.exports = router;