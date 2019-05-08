const wx = require('../service/wx')
module.exports = (router) => {
    router.get('/wx/service',async (ctx, next) => {
        const {signature, timestamp, nonce, echostr} = ctx.query
        ctx.body = signature;
    })
}