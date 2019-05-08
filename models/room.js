const mongoose = require('mongoose');
const roomSchema = new mongoose.Schema({
    "roomNo":Number,
    "roomType":String,
    "beds":Number
    // bedrooms:Number,
    // address:Object,
    // reviews:Array
})

module.exports = mongoose.model('room', roomSchema,'room');