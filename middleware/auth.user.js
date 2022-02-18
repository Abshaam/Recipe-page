const jwt = require("jsonwebtoken");
const User = require('../model/register')

const authUser = (req, res, next) =>{
    const token = req.cookies.jwt;

    if(token){
        jwt.verify(token, process.env.privateKey, (err, decoded) =>{
            if(err) {
                console.log(err)
                res.redirect('/login')
            }else{
                console.log(decoded)
                next()
            }
        })
    }else{
        res.redirect('/login')
    }
}

// Authenticate user 
const getUser = (req, res, next) =>{
    const token = req.cookies.jwt;

    if(token){
        jwt.verify(token, process.env.privateKey, async(err, decoded) =>{
            if(err){
                console.log(err);
                res.locals.user = null;
                next();
            }else{
                console.log(decoded)
               const user = await User.findById(decoded.id);
               res.locals.user = user
               next();
            }
        })
    }else{
        res.locals.err = null
        next()
    }

}

module.exports ={
    getUser,
    authUser
    
}