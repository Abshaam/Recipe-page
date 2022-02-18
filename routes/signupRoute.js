const express = require('express');
const multer = require ('multer');
const registerControllers = require('../controllers/registerControllers');
const router = express.Router()



// saving signup to the database

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, 'public/upload')
    },


    filename: function (req, file, cb ) {
        const unique = file.originalname
        cb(null, file.fieldname + unique)  
    }  
})

// saving the image in a storage
const upload = multer({storage})




// post request
router.post('/sign-up',  registerControllers.signup)

// get
router.get('/fetch-chef', registerControllers.fetchChefs)

// login

router.post('/login', registerControllers.login)

//getbyid
router.get('/get/:id', registerControllers.getChefById)

router.get('/logout',registerControllers.logout)


module.exports= router