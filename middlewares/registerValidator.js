const {body}=require('express-validator');

module.exports=[
    body('email')
    .notEmpty().withMessage('E-mail es un campo obligatorio')
    .isEmail().withMessage('Completar un email válido'),
    body('password')
    .notEmpty().withMessage('Contraseña es un campo obligatorio')
    .isLength({min: 8}).withMessage('Contraseña debe contener al menos 8 caracteres'),
    //body('avatar').notEmpty().withMessage('Avatar es un campo obligatorio'),
    body('user_name')
    .notEmpty().withMessage('El nombre de usuario es un campo obligatorio')
    .isLength({min: 2}).withMessage('El Nombre de Usuario debe contener al menos 2 caracteres'),
    body('name')
    .notEmpty().withMessage('Nombre es un campo obligatorio')
    .isLength({min: 2}).withMessage('El Nombre debe contener al menos 2 caracteres'),
    body('last_name')
    .notEmpty().withMessage('Apellido es un campo obligatorio')
    .isLength({min: 2}).withMessage('El Apellido debe contener al menos 2 caracteres'),
    body('birth_date').notEmpty().withMessage('Fecha de nacimiento es un campo obligatorio'),
    body('phone_number').notEmpty().withMessage('Telefono es un campo obligatorio')
]