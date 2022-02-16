const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan")
const dotenv = require("dotenv").config()
const path = require ('path')
const allRoute = require('./routes/allRouts')
const recipeRoute = require('./routes/reecipeRoute')
const signupRoute = require ('./routes/signupRoute')
const reviewRoute = require ('./routes/reviewRoute')
const cookieParser = require('cookie-parser');
const { authUser } = require("./middleware/auth.user");





const PORT = process.env.PORT ||7000

// assigning a variable to express
const app = express()

// converting it into json format
app.use (express.json())

// making pass to url encoded
app.use(express.urlencoded ({extended: true}))

// serving static files
app.use(express.static('public'))

// viewing ejs files
app.set('view engine', 'ejs')

// using morgan a middleware as a dev dependency
app.use(morgan('dev'));

// using cookie parser as a middleware
app.use(cookieParser())


// endpoint for user
app.use(allRoute)
app.use(recipeRoute)
app.use(signupRoute)
app.use(reviewRoute)


// serving files with controllers
//app.set('views', path.join(__dirname+'/views/'));

// app.post('/newrec', upload.single('imageUpload'), recipeController.saveRecipe)

// url for mongoose
const mongoUri =  process.env.MONGO_URI;


mongoose.connect(mongoUri, {useNewUrlParser: true,
    useUnifiedTopology :true}).then(result => {
        console.log('mongodb connected')
    }).catch(err => {
        console.log(err)
    })


// app.get('*')



// using locals
// app.locals.data = 'login'

// console.log(app.locals)



// ensuring that connection is secured
app.listen(PORT, () =>{
    console.log(`server is running on ${PORT}`)
})