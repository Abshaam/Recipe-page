const mongoose = require('mongoose');
const { Schema } = mongoose;
const reviewSchema = new Schema({

    name: {
        type: String
    },

    comment: {
        type: String,
    },

    rate: {
        type: Number
    }

  
    
})
const review = mongoose.model("review", reviewSchema)
module.exports = review;