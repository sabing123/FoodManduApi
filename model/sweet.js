const mongoose = require ('mongoose');
const sweetSchema = new mongoose.Schema({
name: {
    type: String,
    required: true
},
type: {
    type: String,
    required: true
},
image: {
    type:String,
    required:false
},
},{timestamps:true});

module.exports = mongoose.model('Sweet',sweetSchema);