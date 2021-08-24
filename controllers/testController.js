const db = require('../database/models');


const controller = {
    addresses: async (req, res) => {
        try{
            let address=await db.Address.findAll()
            res.send(address)
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
    carts: async (req, res) => {
        try{
            let carts=await db.Cart.findAll({
                include: ['address', 'paymentMethod', 'user', 'products']
            })
            res.send(carts)
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
    /*invoices: async (req, res) => {
        try{
            let invoice=await db.Invoice.findAll()
            res.send(invoice)
        }catch(err){
            console.log(err)
        }    
    },*/
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
    users: async (req, res) => {
        try{
            let users=await db.User.findAll()
            res.send(users)
        }catch(err){
            console.log(err)
        }
    },  
}

module.exports = controller;