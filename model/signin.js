const mongoose = require('mongoose');
const { Schema } = mongoose;
const signInSchema = new Schema({

    userName: {
        type: String,
    required:true
    },

    password: {
        type: String,
        required: true
    },

  
    
})
const signIn = mongoose.model("signIn", signInSchema)
module.exports = signIn;