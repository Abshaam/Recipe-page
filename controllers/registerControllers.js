// requiring all modules
const express = require('express');
const register = require('../model/register')
const bcrypt = require('bcrypt');
const multer = require('multer');

const {handleErrors, generateToken} = require("../helpers/userHelper");

// signup
const signup = async (req, res) =>{
    const{firstName, lastName, username, password, email, address} = req.body

try {
    const newUser = new register ({firstName, lastName, username, password, email, address})
    

    const User = await newUser.save()

    if(User){
        // generating a token
        const token = generateToken(User._id)

        // set cookies
        res.cookie('jwt', token, {maxAge: 1 * 24 * 60 * 60 *1000, httpOnly:true})

        // send our data
        res.status(201).json({User})
    }
} catch (error) {

    const errors = handleErrors(error);
    
    res.json({ errors });
    console.log(error)
}
}

// login
const login = async (req, res) => {
    const{ email, password} = req.body

    try {
        const user = await register.findOne({email})

        console.log(user)

        // compare password and hash the one the user is entering and 
        // compare with the one in the database

        if(user){
            const isSame = await bcrypt.compare(password, user.password);

            console.log(isSame)

            if(isSame) {
                // using the token
                const token = generateToken(user._id)

                // set cookies
                res.cookie('jwt', token, {maxAge: 3 * 24 * 60* 60 * 1000, httpOnly: true})

                res.status(201).json({user})
            }else{
                res.json ({error: "Password Incorrect"})
            }

            // send our data
        }else{
            res.json({error: "Email not found, Signup"})
        }
    }catch (error) {
        console.log(error)
    }
}

// getting details for chefs
// fetching from the database
const fetchChefs =  (req, res) => {
    register.find().then(results => {
        if(results) {
            const reversed = results.reverse()
            res.render("chef", {title : "Chefs", signUps: reversed})
        } 
    }).catch(err => console.log(err))
}

// fetch signup chef by id
const getChefById = (req, res) => {
    register.findById(req.params.id).then(result => {
        if(result) {
            res.render("chef", {title : "Chef", Cook: result})
        } 
    }).catch(err => console.log(err))
}

// logout
const logout = (req, res) =>{
    res.cookie('jwt', 0, {maxAge: 0, httpOnly:true})
    res.redirect('/sign-in')
    next()

}


module.exports ={
    signup,
    login,
    fetchChefs,
    logout,
    getChefById
}
