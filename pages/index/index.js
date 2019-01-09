// pages/index/index.js
var app = getApp()
Page({

  data: {
    swiper_imgs: [
      "/static/pic/swiper_img1.png",
      "/static/pic/swiper_img2.png"
    ],
    print_status: [
      "打印中",
      "待取中",
      "配送中",
      "已完成"
    ],
    userInfo: null,
    notice_me: false,
    notice_title: "请您登录",
    notice_detail: "为了您能获得更好的程序体验，请您先登录",
  },

  onLoad: function (options) {
    var that = this
    wx.getSetting({ // 获取用户信息
      success: res => {
        if (!res.authSetting['scope.userInfo']) {
          // 如果还未授权获取用户信息，则弹窗询问
          that.noticeMe()
        }else{
          console.log("已授权获取用户信息")
        }
      }
    })
  },

  noticeMe: function () {
    this.setData({
      notice_me: true
    })
  },

  Iknowit: function () {
    this.setData({
      notice_me: false
    })
  },

  getUserInfo: function (e) {
    var userInfo = e.detail.userInfo
    if (userInfo) {
      // 用户按了允许授权按钮
      // console.log('btn getUserInfo')
      app.saveUserInfo(userInfo)
    } else {
      //用户按了拒绝按钮
      wx.showToast({
        title: '未登录',
        icon: 'none',
        duration: 1000,
        mask: true
      })
    }
    this.Iknowit()
  },

  to_order_list_page: function () {
    wx.navigateTo({
      url: '../order-list/order-list',
    })
  },

  to_order_detail_page: function () {
    wx.navigateTo({
      url: '../order-detail/order-detail',
    })
  },

  to_upload_pic_page: function () {
    wx.navigateTo({
      url: '../upload-pic/upload-pic',
    })
  },
})