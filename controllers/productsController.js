const db = require("../database/models");
const { Op } = require("sequelize");
const { validationResult} = require('express-validator');

const controller = {
  search: async (req, res) => {
    try {
        let products = await db.Product.findAll({
          where:{
            [Op.or]:[
              {name: {
              [Op.like]: `%${req.query.search}%`
            }},{'$author.name$': {
              [Op.like]: `%${req.query.search}%`
            }}]
          },
          include: ["author", "genre"],
        });
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
            price:{[Op.lt]: 1500}
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

  list: async (req, res) => {
    try {
        let products = await db.Product.findAll({
          include: ["author", "genre"]
        });
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
      return res.render('./products/productDetail2', {product});
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

  indexProducts: async (req, res) => {
    try {
        let products = await db.Product.findAll({
          include: ["author", "genre"],
          limit: 16
        }); //Association with alias "author" does not exist on Product
        return res.render('index', {products});
      } catch (err) {
        console.log(err);
      }

    },
};

module.exports = controller;