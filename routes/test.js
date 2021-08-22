const express = require('express');
const router = express.Router();
const testController=require('../controllers/testController')


router.get('/genres', testController.genres);

/* router.get('/address', testController.index); 
router.get('/products', testController.index); 
*/

module.exports = router;