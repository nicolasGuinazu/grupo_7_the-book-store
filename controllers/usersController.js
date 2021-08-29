/* const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8')); */
const db = require("../database/models");
const bcrypt = require('bcryptjs');


const controller = {
    login: (req, res) =>{
        return res.render('./users/login');
    },

    register: (req, res) =>{
        return res.render('./users/registerForm');
    },

    registerUser: async function (req, res) {

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
        try {
          await db.User.create(userToCreate);
          return  res.redirect('/users/login');
    
        } catch (err) {
          console.log(err);
        }
      }, 

    /*registerUser: (req, res) =>{

       //Obtengo la última posición del JSON para luego obtener el último ID
       const lastUser = users[users.length - 1];

       //Usuario a crear. Obtengo los datos ingresados en el form
       const userToCreate = req.body;
       const imageName = req.file.filename;

       //Encriptamos la contraseña
       let passEncriptada = bcrypt.hashSync(userToCreate.psw, 10);

       //Armo objeto con la misma estructura que el JSON de Usuarios
       const userToPush = {
           id: lastUser.id + 1,
           first_name: userToCreate.first_name,
           last_name: userToCreate.lastname,
           email: userToCreate.email,
           password: passEncriptada,
           rol: "user",
           avatar: imageName,
           phone: userToCreate.phone,
           user_name: userToCreate.user_name     
       }
       
       console.log(userToPush);
       
       //Actualizo la base de datos
       users.push(userToPush);
       fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 4));

       return  res.redirect('/users/login');
    },*/

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

    /*processLogin: (req, res) => {

        const userReq = req.body;
        let error={msg:''}
        //Busca el usuario que se está logueando en la Base de Datos
        const userToLogin = users.find( elem => elem.email == userReq.mail);

        if (userToLogin){
        //Verifica que la contraseña sea la misma que la registrada
        let check = bcrypt.compareSync(userReq.psw, userToLogin.password);
                
        if(check){
            req.session.loggedUser=userToLogin
            if(req.body.remember){
                res.cookie('userEmail', req.body.mail, {
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

    },*/

    logout:(req,res)=>{
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/')
    },
    profile:(req,res)=>{
        return res.render('./users/profile')
    }
}

module.exports = controller;