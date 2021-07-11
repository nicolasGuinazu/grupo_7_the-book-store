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
    },
    destroy:(req,res)=>{
        const idLibro = req.params.id;
        const product = products.filter( elem => elem.id != idLibro) //nuevo array con todos los productos con id distinto al que viene
        fs.writeFileSync(productsFilePath,JSON.stringify(product,null,2)) // el parametro 2 le da formato para poder leerlo mejor
        res.redirect('/')
    }
}

module.exports = controller;