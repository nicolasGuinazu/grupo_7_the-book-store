const db = require('../database/models');


const controller = {
    genres: async (req, res) => {
        try{
            let genres=await db.Genre.findAll({
                include: ['products']
            })
            res.send(genres)
        }catch(err){
            console.log(err)
        }
  
    },
    users: async (req, res) => {
        try{
            let users=await db.User.findAll()
            res.send(users)
        }catch(err){
            console.log(err)
        }
  
    },
    paymentMethods: async (req, res) => {
        try{
            let paymentMethod=await db.PaymentMethod.findAll()
            res.send(paymentMethod)
        }catch(err){
            console.log(err)
        }
  
    },
    products: async (req, res) => {
        try{
            let products=await db.Product.findAll({
                include:['author','genre']
            }) //Association with alias "author" does not exist on Product
            res.send(products)
        }catch(err){
            console.log(err)
        }
  
    },
    authors: async (req, res) => {
        try{
            let authors=await db.Author.findAll({
                include: ['products']
            })
            res.send(authors)
        }catch(err){
            console.log(err)
        }
  
    },

    editorials: async (req, res) => {
        try{
            let editorials=await db.Editorial.findAll({
                include: ['products']
            })
            res.send(editorials)
        }catch(err){
            console.log(err)
        }
    },
  
}

module.exports = controller;