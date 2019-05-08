const roomReviewModel = require('../models/roomReview')
const BaseService = require('./BaseService')
module.exports = class RoomReview extends BaseService {
    constructor(){
        super();
        this.model = roomReviewModel;
    }
    queryMostPopular(){

    }
}