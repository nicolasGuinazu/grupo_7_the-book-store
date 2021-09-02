const {body}=require('express-validator')

module.exports=[
    body('email').notEmpty().withMessage('Debes escribir un email valido'),
    body('password').notEmpty().withMessage('Debes crear una contrasena')
]

