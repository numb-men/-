//小程序接口

var host = "http://server.jihuayu.site:8080/msy"

var config = {
  host,
  get_openId: `${host}/wechat/get/`,
  login: `${host}/login/`,
  save_user: `${host}/user/update`,
}

module.exports = config