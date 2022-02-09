const express = require('express');
const multer = require ('multer');
const recipeControllers = require('../controllers/recipeControllers');
const router = express.Router()



// saving post-recipe to the database

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
router.post('/post', upload.single('image'), recipeControllers.saveRecipe)

//get
router.get('/', recipeControllers.fetchRecipe)

//getbyid
router.get('/get/:id', recipeControllers.getRecipeById)




module.exports= router