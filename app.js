//app.js
App({
  onLaunch: function () {
    this.getScreenSize()
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        } else{
          console.log("未授权-获取信息")
        }
      }
    })
  },

  //在每次登陆的时候都保存一下userInfo，防止用户更换头像、昵称
  saveUserInfo: function (userInfo) {
    if (userInfo) {
      this.globalData.userInfo = userInfo
      //var url = 'wx_save_userInfo_url', data = {}, that = this
      //data.userInfo = userInfo
      //that.requestTos(url, data, that, function () { })
    }
  },

  //获取屏幕长宽
  getScreenSize: function(){
    var that = this
    wx.getSystemInfo({
      success(res) {
        that.globalData.screenWidth = res.screenWidth
        that.globalData.screenHeight = res.screenHeight
        that.globalData.rpx_to_px = res.screenWidth / 750
      }
    })
    //console.log(this.globalData.rpx_to_px)
  },

  globalData: {
    userInfo: null
  },
})