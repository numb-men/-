//小程序接口

var host = "https://www.finalexam.cn/print"

var config = {
  host,
  get_openId: `${host}/wechat/get/`,
  login: `${host}/login`,
  save_user: `${host}/user/save`
}

module.exports = config