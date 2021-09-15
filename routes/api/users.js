const express = require('express');
const router = express.Router();
const usersController = require('../../controllers/api/usersController')

router.get('/', usersController.users); // localhost:3000/api/users


module.exports = router;