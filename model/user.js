const mongoose = require('mongoose');
const { Schema } = mongoose;
const recipeSchema = new Schema({
    name: {
        type: String,
    // required:true
  },

    email_address: {
    type: String,
    // required: true   
    },

    address: {
        type: String,
        // required: true
    },

    dish_name: {
        type: String,
    // required:true 
 },

 category: {
    type: String,
    // required: true
},


    ingredients :{
        type: String,
        // required: true
    },

    recipe: {
        type: String,
        // required: true
    },

    image: {
        type: String,
        // required: true
    },

  
    
})
const recipe = mongoose.model("recipe", recipeSchema)
module.exports = recipe;
