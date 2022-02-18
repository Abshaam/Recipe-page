const express = require('express');
const cookieParser = require('cookie-parser')
const Post = require('../model/user')


// getting the create page
const form = (req,res) =>{
    res.render('form', {title:"FORM"})
}

// getting success page
const Success = (req, res) =>
res.render('success' , {title:"Success"})

// getting the chef page
const chef = (req,res) =>{
    res.render('chef' , {title:"Chef"})
}

// getting the categories page
const categories = (req,res) =>{
    res.render('categories' , {title:"Categories"})
}

// getting the explore page
const explore = (req,res) =>{
    res.render('explore' , {title:"Explore"})
}

// getting the homepage
const home = (req,res) =>{
    res.render('index' , {title:"HomePage"})
}

// getting sign up page
const signup = (req,res) =>{
    res.render('signup' , {title:"SIGN UP"})
}

// getting sign in page
const signing = (req,res) =>{
    res.render('signin' , {title:"SIGN IN"})
}

// adding cookies
// const kookie = (req, res) =>{
//     res.header("Set-Cookie", "isAdmin=false")
//     res.json({message: "cookie set"})
// }

// getting cookie
// const getCookie = (req, res) =>{
//     res.cookie('jwt', 'nzxcnsd');
//     res.json({message: "cookie set"})
// }

const setCookie = (req, res) =>{
    res.cookie ('jwt', 'wnjmmdnjsw', {maxAge: 3 * 24 * 60 * 60 * 1000, httpOnly: true});

    res.json({message: "cookie set"})
}

const notFound = (req,res) =>{
    res.render('notFound')
}

const searchRecipe = (req, res) =>{

    Post.find().exec().then(results =>{
        console.log(results)

        if(Object.keys(req.query).length) {
            const render = results.filter(result=> result.dish_name.includes(req.query.search) || 
            result.name.includes(req.query.search))
            if(render.length) {
               
                
                res.render("search", {title : "Search result", recipes:render})
            }else (res.render('notFound', { title: "Not found"}))
        } 
    })
}


module.exports = {
   
    home,
    explore,
    chef,
    form,
    categories,
    Success,
    signup,
    signing,
    // kookie,
    // getCookie,
    setCookie,
    searchRecipe,
    notFound
}


