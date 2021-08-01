function userLoggedMiddleware(req,res,next){
    res.locals.logged=false;

    if(req.session.loggedUser){
        
        res.locals.logged=true;
        res.locals.loggedUser=req.session.loggedUser;
        console.log(res.locals.loggedUser)
        
    };

    console.log('estoy en auth')
    next();
}

module.exports=userLoggedMiddleware;