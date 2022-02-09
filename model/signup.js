const mongoose = require('mongoose');
const { Schema } = mongoose;
const signUpSchema = new Schema({
    
    name: {
        type: String,
        required:true
     },

    address: {
        type: String,
        required: true
    },

    email: {
    type: String,
    required: true   
    },

    userName: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    profileImage: {
        type: String,
        required: true
    }

  
    
})
const signUp = mongoose.model("signUp", signUpSchema)
module.exports = signUp;