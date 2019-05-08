const wx = require('../service/wx')
const wxRoute = require('./wx')
const RoomService = require('../service/Room')
const RoomReviewService = require('../service/RoomReview')
module.exports = (router) => {
  router.get('/welcome', async function (ctx, next) {
    ctx.state = {
      title: 'koa2 title'
    };
    await ctx.render('welcome', {title: ctx.state});
  });
  router.get('/test', async (ctx, next) => {
    ctx.body = {result:'test'};
    await next();
  });
  router.get('/wx/auth',async (ctx, next) => {
    const query = ctx.query;
    const data = await wx.auth(query.code);
    ctx.body = data;
    await next();
  });
  router.get('/room',async(ctx, next) => {
    const roomService = new RoomService();
    try{
      const results = await roomService.findAll();
      ctx.body = {
        errCode:0,
        msg:'success',
        results
      };
    }catch(err){
      console.log(err);
    } 
    next();
  });
  router.get('/room/:id',async(ctx, next) => {
    const roomService = new RoomService();
    try{
      const results = await roomService.findById(ctx.params.id);
      ctx.body = {
        errCode:0,
        msg:'success',
        results
      };
    }catch(err){
      console.log(err);
    } 
    next();
  });
  router.get('/roomReview',async(ctx, next) => {
    const service = new RoomReviewService();
    try{
      const results = await service.findAll();
      ctx.body = {
        errCode:0,
        msg:'success',
        results
      };
    }catch(err){
      console.log(err);
    }
  })
  wxRoute(router);
}
