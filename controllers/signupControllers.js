const express = require('express');
const Signup = require('../model/signup')
const multer = require('multer')
const bcrypt = require("bcrypt")




//callbacks for the post request
const saveSignup = async (req, res) => {
    //destructuring the objects in the model

    console.log(req.file)
    const{name, address, email, userName, password } = req.body;
        //declaring a variable to pass the object

    try {
        // generating salt for hashing
      const salt = await bcrypt.genSalt();

      const hashedPassword = await bcrypt.hash(password, salt);

      const signUps = new Signup ({
        name,
		address,
        email,
        userName,
        password: hashedPassword,
        profileImage: req.file.originalname
      }) ;

      const signUp = await signUps.save()
      if(signUp) {
          res.render('success', {title:"Success"})
        //   Status(201).json({message: "Sign up successful"})
      }
    } catch (error) {
        console.log(error)
    }
} 

// fetching from the database
const fetchSignup =  (req, res) => {
    Signup.find().then(results => {
        if(results) {
            const reversed = results.reverse()
            res.render("chef", {title : "Chefs", signUps: reversed})
        } 
    }).catch(err => console.log(err))
}



module.exports = {
    saveSignup,
    fetchSignup
    
}