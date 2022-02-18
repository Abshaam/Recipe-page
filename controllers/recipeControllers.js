const express = require('express');
const Post = require('../model/user')
const multer = require('multer')



//callbacks for the post request
const saveRecipe =  (req, res) => {
    //destructuring the objects in the model

    console.log(req.file)
    const{name, email_address, address, dish_name, category,
        ingredients, recipe} = req.body;
        //declaring a variable to pass the object
    const addRecipe = {
        name,
		email_address,
        address,
        dish_name,
        category,
        ingredients,
        recipe,
        image: req.file.originalname
    }
    //creating an instance of the schema
    const recipes = new Post (addRecipe)
    //saving data to the database
    recipes.save().then((results) => {
        if(results)res.render('success', {title:"Success"})
    }).catch((err) =>{
        console.log(err)
    }) 
}

// fetching from the database
const fetchChef =  (req, res) => {
    Post.find().then(results => {
        if(results) {
            const reversed = results.reverse()
            res.render("chef", {title : "Chefs", signUps: reversed})
        } 
    }).catch(err => console.log(err))
}

// fetching  recipes from the database
const fetchRecipe =  (req, res) => {
    Post.find().then(results => {
        if(results) {
            const reversed = results.reverse()
            res.render("index", {title : "HomePage", recipe: reversed})
        } 
    }).catch(err => console.log(err))
}

// getting all recipes from the database
const allRecipe = (req, res) =>{
    Post.find().then(results =>{
        if(results){
            const reversed = results.reverse()
            res.render("allrecipe", {title : "All Recipes", allRecipe: reversed})
        }
    })
}




const getRecipeById = (req, res) => {
    Post.findById(req.params.id).then(result => {
        if(result) {
            res.render("detail", {title : "Recipe Details", recipeData: result})
        } 
    }).catch(err => console.log(err))
}




module.exports = {
    saveRecipe,
    fetchRecipe,
    getRecipeById,
    fetchChef,
    allRecipe,
   
}



