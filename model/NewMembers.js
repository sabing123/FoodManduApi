const mongoose = require('mongoose');


const NewMembers = new mongoose.Schema({

    image: {
        type:String,
        required:false
    },
    name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    foodtype: {
        type: String,
        required:true
    }
},{timestamps:true});

module.exports = mongoose.model('members',NewMembers);