const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const controller = {
    create: (req, res) =>{
        res.render('./products/createProduct');
    },

    modify: (req, res) =>{
        let productToEdit = products.find(element => element.id == req.params.id)
        res.render('./products/modifyProduct', {productToEdit});
    },

    processModify: (req, res) =>{
         let idEdit = req.params.id;
         for (element of products) {
             if (element.id == idEdit){
                 element.title = req.body.title;
                 element.author = req.body.author;
                 element.editorial = req.body.editorial;
                 element.gender = req.body.gender;
                 element.synopsis = req.body.synopsis;
                 element.image = req.body.image;
                 element.category = req.body.category;
                 element.price = req.body.price
             }
         }
         let arrayJSON = JSON.stringify(products);
         fs.writeFileSync(productsFilePath, arrayJSON, null, 2)
         res.redirect("/")
        // res.render('./products/modifyProduct');
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