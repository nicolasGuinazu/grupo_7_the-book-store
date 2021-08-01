function authMiddleware(req,res,next){
    
    if(req.session.loggedUser == undefined){
        return res.redirect('/users/login')
    }else{
   
        next();
    }
}

module.exports=authMiddleware;