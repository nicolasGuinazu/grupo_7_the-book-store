function adminhMiddleware(req,res,next){
    if(req.session.loggedUser.admin=='a'){   //si es admin sigue 
        next()
    }else{
        return res.redirect('/') //si es usuario se redirecciona al home
    }
}

module.exports=adminhMiddleware;