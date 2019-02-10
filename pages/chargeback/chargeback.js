// pages/chargeback/chargeback.js
Page({

  data: {
    reason: ""
  },

  onLoad: function(options) {

  },

  verify: function () {
    wx.showToast({
      title: '我们会尽快处理您的退单请求~',
      icon: 'none',
      mask: true,
      duration: 1000,
    })
    setTimeout(function () {
      wx.navigateBack({
        delta: 1
      })
    }, 2000)
  }
})