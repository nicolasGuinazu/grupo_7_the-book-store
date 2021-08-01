const path = require('path');
const fs = require('fs');
const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));


function userLoggedMiddleware(req,res,next){
    res.locals.logged=false;
    let cookieExists
    if(req.cookies && req.cookies.userEmail){ //que haya cookies (evitar error property of undefined) y que exista esa
       cookieExists=req.cookies.userEmail;
    }
    let userExists= users.find( elem => elem.email == cookieExists); //buscar en db usuario con email de esa cookie
    if(cookieExists && userExists){
        req.session.loggedUser=userExists // si existe pasarlo a session
    }
    if(req.session.loggedUser){
        res.locals.logged=true;
        res.locals.loggedUser=req.session.loggedUser;     
    };
    next();
}

module.exports=userLoggedMiddleware;