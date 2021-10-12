const db = require("../database/models");
const bcrypt = require('bcryptjs');
const { validationResult} = require('express-validator');


const controller = {
    login: (req, res) =>{
        return res.render('./users/login');
    },

    register: (req, res) =>{
        return res.render('./users/registerForm');
    },

    registerUser: async function (req, res) {

        let error = validationResult(req);

        //Si hay errores los muestra y no procesa el registro
        if (!error.isEmpty()){
            error=error.mapped()
           return res.render('./users/registerForm',{error, old: req.body})
        }

        //Valida que el usuario a crear no exista en la base de datos
        try {
            let userCheck = await db.User.findOne({
                where: {
                email: req.body.email
                }
                });

            if (userCheck){
                let errorRepeat = "Existe un usuario registrado con este Email"
                return res.render('./users/registerForm',{errorRepeat, old: req.body})
            }

        }catch (err) {
            console.log(err);
            }


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

        try {
          let newUser=await db.User.create(userToCreate);
          req.session.loggedUser=newUser
          return  res.redirect('/');

        } catch (err) {
          console.log(err);
        }
      },
    processLogin: async function (req, res){

        //const userReq = req.body;
        let error = validationResult(req);
        if (!error.isEmpty()){
            error=error.mapped()
           return res.render('./users/login',{error})
        }

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
                error={password:{msg:'Password incorrecto'}};
            }

            //res.send(userToLogin);
            }else{
               error={email:{msg:'El usuario no existe'}};

            }
            return res.render('./users/login',{error})

        } catch (err) {
          console.log(err);
        }

      },

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