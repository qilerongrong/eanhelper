module.exports = class BaseService {
    constructor(){
        this.model = null;
        this.limit = 10;
        this.page = {
            total:0,
            pageSize:10,
            pageNo:0
        }
    }
    async find(condition,projection,options){
        if(!this.model){
            return
        }
        const query = this.model.find(condition,projection,options);
        console.log('query db:',query.getQuery());
        const results = await query.exec();
        return results;
    }
    async findById(id,projection,options){
        const query = this.model.findById(id,projection,options);
        console.log('query db:',query.getQuery());
        const results = await query.exec();
        return results;
    }
    async findAll(){
        const results = await this.find({},null,{limit:this.limit});
        return results;
    }
    async findByPage(pageNo=0){

    }
    async create(model){

    }
    async update(model){

    }
    async save(model){

    }
    async remove(ids){

    }
}