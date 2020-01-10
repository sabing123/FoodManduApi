const mongoose = require('mongoose');

const ResturantsSchema = new mongoose.Schema({
    image:{
        type:String,
        required:false
    },
    name:{
        type:String,
        required:true
    },
    image: {
        type:String,
        required:false
    },
    location:{ 
        type: String,
        required:true},
    food: { 
        type: String,
        required:true
    }
},{timestamps:true});

module.exports = mongoose.model('Resturants',ResturantsSchema);