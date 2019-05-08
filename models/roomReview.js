const mongoose = require('mongoose');
const roomReviewSchema = new mongoose.Schema({
    beds:Number,
    room_type:String,
    bedrooms:Number,
    address:Object,
    first_review:Date,
    last_review:Date,
    reviews:Array
})

module.exports = mongoose.model('roomReview', roomReviewSchema,'listingsAndReviews');