const axios = require('axios')
const config = require('../../config/index.js')

const getAccessToken = function(code){
    const url = `https://api.weixin.qq.com/sns/oauth2/access_token?appid=${config.wx.appId}&secret=${config.wx.appId}&code=${code}&grant_type=authorization_code`
    axios.get(url).then(data => data)
}
const updateAccessToken = function(){

}
module.exports = {
    getAccessToken,
    updateAccessToken
}