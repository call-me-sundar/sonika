const mongoose = require('mongoose');
const { Schema } = mongoose;

const sonikkaSchema = new Schema({
    fname: {
        type: String,
       
    },
    date: {
        type: String,
       
    },
    phone:{
        type:Number,
     
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
