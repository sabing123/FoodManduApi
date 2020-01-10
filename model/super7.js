const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    item: {
        type: String,
        required:true
    }
});

const SuperSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    itemtype:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    fooditem: {
        type: String,
        required:true
    },
    image: {
        type:String,
        required:false
    },
    food: [foodSchema]
},{timestamps:true});

module.exports = mongoose.model('supers',SuperSchema);