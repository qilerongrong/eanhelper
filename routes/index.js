const wx = require('../service/wx')
const wxRoute = require('./wx')
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
  wxRoute(router);
}
