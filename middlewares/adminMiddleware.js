function adminMiddleware(req,res,next){
    console.log(req.headers)
    if((req.headers.auth=='admin') || (req.session.loggedUser && req.session.loggedUser.admin=='a')){   //si es admin sigue
        next()
    }else{
        return res.redirect('/') //si es usuario se redirecciona al home
    }
}

module.exports=adminMiddleware;