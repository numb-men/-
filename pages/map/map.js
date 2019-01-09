// pages/map/map.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arround_printer_num: 0,
    //定位中心
    latitude: 26.06178,
    longitude: 119.20079,
    //主标记
    markers: [{
      id: 1,
      latitude: 26.06178,
      longitude: 119.20079,
      title: '趣小印开发团队',
      iconPath: '/static/icon/location.png',
      width: 30,
      height: 30,
      callout: {
        content: "福州大学旗山校区",
        color: "#343131",
        fontSize: 10,
        padding: 3,
        borderRadius: 3
      },
      label: {
        content: "趣小印开发团队",
        color: "#343131",
        bgColor: "#ffffff",
        fontSize: 10,
        padding: 3,
        borderRadius: 3
      }
    }],
    covers: []
  },

  onLoad: function (options) {
    console.log(app.globalData.rpx_to_px)
    this.setData({
      screenHeight: app.globalData.screenHeight - 70 * app.globalData.rpx_to_px - 110
    })
  },

  onReady: function () {
    this.mapCtx = wx.createMapContext('arround-printer-map')
    this.mapCtx.moveToLocation()
  },
})