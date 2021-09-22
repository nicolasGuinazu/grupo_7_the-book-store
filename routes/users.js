// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer');
const guestMiddleware=require('../middlewares/guestMiddleware')
const authMiddleware=require('../middlewares/authMiddleware')
const loginValidator=require('../middlewares/loginValidator')
const registerValidator=require('../middlewares/registerValidator')
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
router.get('/login',  guestMiddleware,usersController.login); //acceso permitido solo para usuarios invitados (sin logearse) 
router.post('/login', loginValidator,usersController.processLogin);

// ************ Registro usuario ***********
router.get('/register',  guestMiddleware,usersController.register); //acceso permitido solo para usuarios invitados (sin logearse) 
router.post('/register', upload.single('avatar'), registerValidator,usersController.registerUser);

// ************ User Logout ***********

router.get('/logout',authMiddleware, usersController.logout);  //acceso permitido solo para usuarios logeados 

// ************ Perfil de Usuario ***********
router.get('/profile', authMiddleware,usersController.profile);  //acceso permitido solo para usuarios logeados 

module.exports = router;