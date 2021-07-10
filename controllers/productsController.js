const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const controller = {
    create: (req, res) =>{
        res.render('./products/createProduct');
    },

    modify: (req, res) =>{
        res.render('./products/modifyProduct');
    },

    detail: (req, res) =>{

        const idLibro = req.params.id;

        const product = products.find( elem => elem.id == idLibro);
        
        res.render('./products/productDetail', {product});
    }
}

module.exports = controller;