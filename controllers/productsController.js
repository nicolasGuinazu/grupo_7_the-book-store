const db = require("../database/models");
const bcrypt = require('bcryptjs');
const { Op } = require("sequelize");
const { validationResult} = require('express-validator');

const controller = {
  search: async (req, res) => {
    try {
        let products = await db.Product.findAll({
          where:{
            name: {
              [Op.like]: `%${req.query.search}%`
            }
          },
          include: ["author", "genre"],
        }); //Association with alias "author" does not exist on Product
        if(products.length<1){
          let searched=req.query.search
          return res.render('./products/productNotFound', {searched}); 
        }
        return res.render('./products/indexProducts', {products}); 
      } catch (err) {
        console.log(err);
      }
    
    },
  offers: async (req, res) => {
    try {
        let products = await db.Product.findAll({
          where:{
            price:{[Op.lt]: 100}
          },
          include: ["author", "genre"],
        }); //Association with alias "author" does not exist on Product
        return res.render('./products/indexProducts', {products}); 
      } catch (err) {
        console.log(err);
      }
    
    },
  ebooks: async (req, res) => {
    try {
        let products = await db.Product.findAll({
          where:{
            format:'d'
          },
          include: ["author", "genre"],
        }); //Association with alias "author" does not exist on Product
        return res.render('./products/indexProducts', {products}); 
      } catch (err) {
        console.log(err);
      }
    
    },

  index: async (req, res) => {
    try {
        let products = await db.Product.findAll({
          include: ["author", "genre"],
        }); //Association with alias "author" does not exist on Product
        return res.render('./products/indexProducts', {products}); 
      } catch (err) {
        console.log(err);
      }
    
    },
  detail: async (req, res) => {
    try {
      let product = await db.Product.findByPk(req.params.id, {
        include: ["author", "genre"],
      }); //Association with alias "author" does not exist on Product
      return res.render('./products/productDetail', {product});
    } catch (err) {
      console.log(err);
    }
  },
  create:async (req, res) => {
    let genres = await db.Genre.findAll();
    let authors = await db.Author.findAll()
    return res.render("./products/createProduct",{genres, authors});
  },
  store: async function (req, res) {
    try {
      await db.Product.create({
        name:req.body.name,
        genre_id:req.body.genre,
        author_id:req.body.author,
        image:req.body.image,
        price:req.body.price,
        synopsis:req.body.synopsis,
        format:req.body.format,
        isbn:req.body.isbn,
        pages:req.body.pages, 
        release_date:req.body.release_date,
        image:req.file.filename
      });
     
      return res.redirect('/')
    } catch (err) {
      console.log(err);
    }
  },
  destroy: async function (req, res) {
    try {
      await db.Product.destroy({
        where: { idproduct: req.params.id },
      });
      return res.redirect('/');
    } catch (err) {
      console.log(err);
    }
  },
  modify: async(req, res) => {
    try {
        let productToEdit = await db.Product.findByPk(req.params.id, {
          include: ["author", "genre"],
        }); //Association with alias "author" does not exist on Product
        if(productToEdit){
            return res.render("./products/modifyProduct", { productToEdit });
        }else{
            return res.redirect('/')
        }
        
      } catch (err) {
        console.log(err);
      }

    
  },
  processModify: async function (req, res) {
    try {
      await db.Product.update(req.body, {
        where: { idproduct: req.params.id },
      });
      return res.redirect('/')
    } catch (err) {
      console.log(err);
    }
  },

};

module.exports = controller;
















































/* 
const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const Genres = db.Genre

const controller = {
    index: (req, res) => {
      
        return res.render('./products/indexProducts', {products}); 
    },

    create: (req, res) =>{
        return res.render('./products/createProduct');
    },

    store: (req, res) =>{

        //Obtengo la última posición del JSON para luego obtener el último ID
        const lastProduct = products[products.length - 1];

        //Producto a crear. Obtengo los datos ingresados en el form
        const productToCreate = req.body;
        const imageName = req.file.filename;

        //Armo objeto con la misma estructura que el JSON de Productos
        const objToPush = {
            id: lastProduct.id + 1,
            title: productToCreate.title,
            author: productToCreate.author,
            gender: productToCreate.gender,
            synopsis: productToCreate.synopsis,
            editorial: productToCreate.editorial,
            isbn: "",
            category: productToCreate.category,
            price: productToCreate.price,
            type: "wanted",
            image: imageName
        }
        
        console.log(objToPush);
        
        //Actualizo la base de datos
        products.push(objToPush);
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 4));

        return  res.render('./products/createProduct');
    },

    modify: (req, res) =>{
        let productToEdit = products.find(element => element.id == req.params.id)
        return res.render('./products/modifyProduct', {productToEdit});
    },

    processModify: (req, res) =>{

         let idEdit = req.params.id;
         let productToEdit=products.find(el=>el.id==idEdit)
         let image;
         if(req.file){
            image=req.file.filename
         }else{
            image=productToEdit.image
         }

         for (element of products) {
             if (element.id == idEdit){
                 element.title = req.body.title;
                 element.author = req.body.author;
                 element.editorial = req.body.editorial;
                 element.gender = req.body.gender;
                 element.synopsis = req.body.synopsis;
                 element.image = image;
                 element.category = req.body.category;
                 element.price = req.body.price
             }
         }
         let arrayJSON = JSON.stringify(products);
         fs.writeFileSync(productsFilePath, arrayJSON, null, 2)
         return res.redirect("/")
        // res.render('./products/modifyProduct');
    },

    detail: (req, res) =>{

        const idLibro = req.params.id;

        const product = products.find( elem => elem.id == idLibro);
        
        return res.render('./products/productDetail', {product});
    },
    destroy:(req,res)=>{
        const idLibro = req.params.id;
        const product = products.filter( elem => elem.id != idLibro) //nuevo array con todos los productos con id distinto al que viene
        fs.writeFileSync(productsFilePath,JSON.stringify(product,null,2)) // el parametro 2 le da formato para poder leerlo mejor
        return res.redirect('/')
    }
}

module.exports = controller; */