const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const controller = {
    login: (req, res) =>{
        res.render('./users/login');
    },

    register: (req, res) =>{
        res.render('./users/registerForm');
    },

    registerUser: (req, res) =>{

       //Obtengo la última posición del JSON para luego obtener el último ID
       const lastUser = users[users.length - 1];

       //Usuario a crear. Obtengo los datos ingresados en el form
       const userToCreate = req.body;
       const imageName = req.file.filename;

       //Encriptamos la contraseña
       let passEncriptada = bcrypt.hashSync(userToCreate.password, 10);

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
    },

    processLogin: (req, res) => {

        const userReq = req.body;

        //Busca el usuario que se está logueando en la Base de Datos
        const userToLogin = users.find( elem => elem.email == userReq.mail);

        //Verifica que la contraseña sea la misma que la registrada
        let check = bcrypt.compareSync(userReq.psw, userToLogin.password);
        
        if(check){
            res.send(userToLogin);            
        }else{
            res.send("Le erraste al password vieja")
        }

        //res.send(userToLogin);



    }
}

module.exports = controller;