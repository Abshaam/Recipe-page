const express = require('express');
const multer = require ('multer');
const reviewControllers = require('../controllers/reviewControllers');
const router = express.Router()


// post request
router.post('/review', reviewControllers.saveReview)

// get
// router.get('/', reviewControllers.fetchReview)

// getbyid
// router.get('/get/:id', reviewControllers.getReviewById)




module.exports= router