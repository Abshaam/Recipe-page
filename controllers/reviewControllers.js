const express = require('express');
const Review = require('../model/review')




//callbacks for the post request
const saveReview =  (req, res) => {
    //destructuring the objects in the model

   
    const{name, comment,rating } = req.body;
        //declaring a variable to pass the object
    const addReview = {
        name,
		comment,
        rating
    }
    //creating an instance of the schema
    const reviews = new Review (addReview)
    //saving data to the database
    reviews.save().then((results) => {
        if(results)res.render('success', {title:"Success"})
    }).catch((err) =>{
        console.log(err)
    }) 
}

// fetching from the database
const fetchReview =  (req, res) => {
    Review.find().then(results => {
        if(results) {
            const reversed = results.reverse()
            res.render("detail", {title : "Recipe Details", review: reversed})
        } 
    }).catch(err => console.log(err))
}




const getReviewById = (req, res) => {
    Review.findById(req.params.id).then(result => {
        if(result) {
            res.render("detail", {title : "Recipe Details", reviewData: result})
        
        } 
    }).catch(err => console.log(err))
}




module.exports = {
    saveReview,
    getReviewById,
    fetchReview
    
}