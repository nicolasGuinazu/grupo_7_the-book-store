const express = require('express');
const router = express.Router();
const usersController = require('../../controllers/api/usersController')

router.get('/', usersController.users); // localhost:3000/api/users  || Devuelve listado completo de productos (id,name,email)
router.get('/:id',usersController.usersDetails) // localhost:3000/api/users/id

module.exports = router;