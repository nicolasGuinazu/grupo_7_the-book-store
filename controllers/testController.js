const db = require("../database/models");
const bcrypt = require('bcryptjs');

const controller = {
  addresses: async (req, res) => {
    try {
      let address = await db.Address.findAll();
      res.send(address);
    } catch (err) {
      console.log(err);
    }
  },
  authors: async (req, res) => {
    try {
      let authors = await db.Author.findAll({
        include: ["products"],
      });
      res.send(authors);
    } catch (err) {
      console.log(err);
    }
  },
  carts: async (req, res) => {
    try {
      let carts = await db.Cart.findAll({
        include: ["address", "paymentMethod", "user", "products", "invoice"],
      });
      res.send(carts);
    } catch (err) {
      console.log(err);
    }
  },
  editorials: async (req, res) => {
    try {
      let editorials = await db.Editorial.findAll({
        include: ["products"],
      });
      res.send(editorials);
    } catch (err) {
      console.log(err);
    }
  },
  genres: async (req, res) => {
    try {
      let genres = await db.Genre.findAll({
        include: ["products"],
      });
      res.send(genres);
    } catch (err) {
      console.log(err);
    }
  },
  invoices: async (req, res) => {
    try {
      let invoice = await db.Invoice.findAll();
      res.send(invoice);
    } catch (err) {
      console.log(err);
    }
  },
  paymentMethods: async (req, res) => {
    try {
      let paymentMethod = await db.PaymentMethod.findAll();
      res.send(paymentMethod);
    } catch (err) {
      console.log(err);
    }
  },
  products: async (req, res) => {
    try {
      let products = await db.Product.findAll({
        include: ["author", "genre"],
      }); //Association with alias "author" does not exist on Product
      res.send(products);
    } catch (err) {
      console.log(err);
    }
  },
  users: async (req, res) => {
    try {
      let users = await db.User.findAll();
      res.send(users);
    } catch (err) {
      console.log(err);
    }
  },

  //**************************************************metodos para el crud**************************************************************//
  index: async (req, res) => {
    try {
        let products = await db.Product.findAll({
          include: ["author", "genre"],
        }); //Association with alias "author" does not exist on Product
        return res.render('./products/indexProductsTest', {products}); 
      } catch (err) {
        console.log(err);
      }
    
    },
  singleProduct: async (req, res) => {
    try {
      let product = await db.Product.findByPk(req.params.id, {
        include: ["author", "genre"],
      }); //Association with alias "author" does not exist on Product
      return res.render('./products/productDetail', {product});
    } catch (err) {
      console.log(err);
    }
  },
  create: (req, res) => {
    return res.render("./products/createProductTest");
  },
  store: async function (req, res) {
    try {
      await db.Product.create(req.body);
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
            return res.render("./products/modifyProductTest", { productToEdit });
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

  registerView: (req, res) =>{
    //console.log("Paso por registerView");
    return res.render('./users/registerForm');
},

  processRegister: async function (req, res) {
    try {

      //Encrypt password
      let cryptedPass = bcrypt.hashSync(req.body.password, 10);

      let userToCreate = {
        admin: "a",
        email: req.body.email,
        password: cryptedPass,
        avatar: req.file.filename,
        user_name: req.body.user_name,
        name: req.body.name,
        last_name: req.body.last_name,
        birth_date: req.body.birth_date,
        phone_number: req.body.phone_number
      }

      //console.log(userToCreate);
      await db.User.create(userToCreate);
      return  res.redirect('/users/login');

    } catch (err) {
      console.log(err);
    }
  }, 

  login: (req, res) =>{
    return res.render('./users/login');
  },

  processLogin: async function (req, res){

    //const userReq = req.body;

    let error={msg:''}

    //Busca el usuario que se está logueando en la Base de Datos
    try {
      let userToLogin = await db.User.findOne({
        where: {
        email: req.body.email
        }
        });

    //Se procesa el logueo
      if (userToLogin){
        //Verifica que la contraseña sea la misma que la registrada
        let check = bcrypt.compareSync(req.body.password, userToLogin.password);
                
        if(check){
            req.session.loggedUser=userToLogin
            if(req.body.remember){
                res.cookie('userEmail', req.body.email, {
                    maxAge: (1000 * 6) * 2
                })
            }
            return res.redirect('/')      
        }else{
            error.msg='Password incorrecto';
        }
    
        //res.send(userToLogin);
        }else{
            error.msg='El usuario no existe';
            
        }
        return res.render('./users/login',{error})
        
    } catch (err) {
      console.log(err);      
    }

  },
};

module.exports = controller;
