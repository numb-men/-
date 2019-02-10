// pages/user/user.js
var app = getApp()
Page({

  data: {
    phone_num: "132 xxxx 6793",
    userInfo: null
  },

  onLoad: function (options) {
    this.setData({
      screenHeight: app.globalData.screenHeight - 420 * app.globalData.rpx_to_px - 110,
      userInfo: app.globalData.userInfo
    })
  },

  onShow: function() {
    if (!this.data.userInfo) {
      this.getUIFO()
    }
  },

  getUIFO: function () {
    var that = this
    if (app.globalData.userInfo) {
      // console.log('use app userInfo')
      that.saveUserInfo(app.globalData.userInfo)
    } else if (that.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        // console.log('res', res)
        console.log('use app callback userInfo')
        that.saveUserInfo(res.userInfo)
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          console.log('use getUserInfo')
          that.saveUserInfo(res.userInfo)
        }
      })
    }
  },

  getUserInfo: function (e) {
    var userInfo = e.detail.userInfo
    if (userInfo) {
      // 用户按了允许授权按钮
      console.log('btn getUserInfo')
      this.saveUserInfo(userInfo)
    } else {
      //用户按了拒绝按钮
      wx.showToast({
        title: '未登录',
        icon: 'none',
        duration: 1000,
        mask: true
      })
    }
  },

  saveUserInfo: function (userInfo) {
    //保存用户数据，同时更新用户数据
    if (!app.globalData.userInfo) {
      console.log('save app userInfo')
      app.saveUserInfo(userInfo)
    }
    console.log('save this userInfo')
    this.setData({
      userInfo: userInfo
    })
    //this.updateSomeData()
  },

  to_order_list_page: function(){
    wx.navigateTo({
      url: '../order-list/order-list',
    })
  },

  to_consignee_manage_page: function() {
    wx.navigateTo({
      url: '../consignee-manage/consignee-manage',
    })
  },

  to_shop_join_page: function() {
    wx.navigateTo({
      url: '../shop-join/shop-join',
    })
  },

  to_feedback_page: function() {
    wx.navigateTo({
      url: '../feedback/feedback',
    })
  }
})