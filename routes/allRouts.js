const express = require('express');

const allControl = require('../controllers/allControl');
const router = express.Router()
const{authUser, getUser} = require('../middleware/auth.user')



// router.get('/', allControl.home)

router.get('/explore', allControl.explore)

router.get('/categories', allControl.categories)

router.get('/chef', allControl.chef)

router.get('/form', authUser, allControl.form)

router.get('/success', allControl.Success)

router.get('/sign-in', allControl.signing)

router.get('/sign-up', allControl.signup)


router.get('/set-cookie', allControl.setCookie) 


// searchRecipe
router.get('/search', allControl.searchRecipe)

// getting the 404 page
router.get('/notFound', allControl.notFound)

// authenticate user
router.get('*', getUser)


module.exports= router