const db = require("../database/models")

function userLoggedMiddleware(req,res,next){
    res.locals.logged=false;
    let cookieExists=''
    if(req.cookies && req.cookies.userEmail){ //que haya cookies (evitar error property of undefined) y que exista esa
       cookieExists=req.cookies.userEmail;
    }
    userExists=db.User.findOne({
        where:{email:cookieExists},
      }).then((user)=>{
         
        if(cookieExists && user){
            req.session.loggedUser=user
        }
        if(req.session.loggedUser){
            res.locals.logged=true;
            res.locals.loggedUser=req.session.loggedUser;     
        };
        next();
      }).catch(err=>console.log(err))
      
  
}

module.exports=userLoggedMiddleware;

