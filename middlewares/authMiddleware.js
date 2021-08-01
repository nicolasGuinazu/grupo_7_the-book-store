function authMiddleware(req,res,next){
    if(!req.session.loggedUser){   //si no hay nada en session es undefined. Si pasa esto entra en el if y redirecciona
        return res.redirect('/users/login')
    }else{
   
        next();
    }
}

module.exports=authMiddleware;