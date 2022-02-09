const express = require('express');

const allControl = require('../controllers/allControl');
const router = express.Router()



// router.get('/', allControl.home)

router.get('/explore', allControl.explore)

router.get('/categories', allControl.categories)

router.get('/chef', allControl.chef)

router.get('/form', allControl.form)

router.get('/success', allControl.Success)

router.get('/sign-in', allControl.signing)

router.get('/sign-up', allControl.signup)


router.get('/set-cookie', allControl.setCookie) 




module.exports= router