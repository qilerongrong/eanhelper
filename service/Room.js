const RoomModel = require('../models/room')
const BaseService = require('./BaseService.js')
module.exports = class RoomService extends BaseService{
    constructor(){
        super();
        this.model = RoomModel;
        // this.limit = 999;
    }
    queryEmptyRoom(){

    }
}