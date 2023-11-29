const mongoose = require('mongoose');
const { Schema } = mongoose;

const sonikkaSchema = new Schema({
    fname: {
        type: String,
        required: true,
        minlength:'2',
        maxlength:'20'
    },
    date: {
        type: Date,
        required: true
    },
    phone:{
        type:Number,
         required: true
       
    },

    email: {
        type: String,
        required: true,
        unique: true // Corrected spelling of 'unique'
    },
    message: {
        type: String
    }
}, { timestamps: true }); 

module.exports = mongoose.model('Sonikka', sonikkaSchema);
