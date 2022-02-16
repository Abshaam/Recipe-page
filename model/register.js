const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const {Schema} = mongoose

const userSchema = new Schema({
    username : {
        type: String,
        required: true
    },

    password : {
        type: String,
        required: [true, "Please enter a password"],
        minlength: [8, "Please the password length should be at least eight "]
    },

    email : {
        type: String,
        required: true
    },

   
    name: {
        type: String
    },

    address: {
        type: String,
        required: true
    },

    profileImage: {
        type: String,
        required: true
    }


}, {timestamps: true},)

// After saving, use bcrypt to hash password
userSchema.pre('save', async function(next){
    // generate salt
    const salt = await bcrypt.genSalt()

    this.password = await bcrypt.hash(this.password, salt)
    next()
})

// creating the model and assigning a variable to it
const user = mongoose.model('user', userSchema)

module.exports = user