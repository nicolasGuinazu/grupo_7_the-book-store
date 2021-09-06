const {body}=require('express-validator');

module.exports=[
    body('name')
    .notEmpty().withMessage('Este es un campo obligatorio'),
    body('author')
    .notEmpty().withMessage('Este es un campo obligatorio'),
    body('editorial')
    .notEmpty().withMessage('Este es un campo obligatorio'),
    body('isbn')
    .notEmpty().withMessage('Este es un campo obligatorio')
    .isLength({min: 11}).withMessage('El ISBN debe contener al menos 11 caracteres'),
    body('synopsis')
    .notEmpty().withMessage('Este es un campo obligatorio'),
    body('gender')
    .notEmpty().withMessage('Este es un campo obligatorio'),
    body('format')
    .notEmpty().withMessage('Este es un campo obligatorio'),
    body('price')
    .notEmpty().withMessage('Este es un campo obligatorio')
]