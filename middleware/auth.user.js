const jwt = require("jsonwebtoken");
const User = require('../model/register')

module.exports.authUser = (req, res, next) =>{
    const token = req.cookies.jwt;

    if(token){
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) =>{
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
module.exports.getUser = (requests, response, next) =>{
    const token = req.cookies.jwt;

    if(token){
        jwt.verify(token, process.env.JWT_SECRET, async(err, decoded) =>{
            if(err){
                console.log(err);
                response.locals.user = null;
                next();
            }else{
                console.log(decoded)
               const user = await User.findById(decoded.id);
               response.locals.user = user
               next();
            }
        })
    }

}