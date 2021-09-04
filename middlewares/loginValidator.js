const {body}=require('express-validator')

module.exports=[
    body('email').notEmpty().withMessage('Debes escribir un email válido'),
    body('password').notEmpty().withMessage('Debes ingresar una contraseña')
]

