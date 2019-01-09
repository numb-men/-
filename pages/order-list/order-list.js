// pages/order-list/order-list.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    order_list: [
      {
        file_type: "ppt",
        file_name: "实验1.ppt",
        order_status: "打印中",
        shop_head_img: "/static/icon/shop-head-img.png",
        shop_name: "8号楼打印店",
        order_create_datetime: "2018-11-10 10:10",
        order_copies: 2,
        tag_list: [
          "黑白",
          "双面",
          "配送",
          "装订"
        ],
        order_price: 3.00
      },
      {
        file_type: "doc",
        file_name: "数学与计算机学院实验1.doc",
        order_status: "打印中",
        shop_head_img: "/static/icon/shop-head-img.png",
        shop_name: "9号楼打印店",
        order_create_datetime: "2018-12-10 10:10",
        order_copies: 2,
        tag_list: [
          "彩色",
          "单面",
          "配送",
          "装订"
        ],
        order_price: 3.00
      },
      {
        file_type: "xls",
        file_name: "软件工程实验1.xls",
        order_status: "打印中",
        shop_head_img: "/static/icon/shop-head-img.png",
        shop_name: "8号楼打印店",
        order_create_datetime: "2018-11-10 10:10",
        order_copies: 20,
        tag_list: [
          "黑白",
          "单面",
          "配送",
        ],
        order_price: 3.00
      },

    ],
    contain_style : ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var order_list_height = this.data.order_list.length * 220 * app.globalData.rpx_to_px
    //console.log(order_list_height, app.globalData.screenHeight)
    if (order_list_height + 60 < app.globalData.screenHeight){
      var contain_height = app.globalData.screenHeight - 60
      this.setData({
        contain_style: "height: " + contain_height + "px;"
      })
    }
  },
  to_order_detail_page: function () {
    wx.navigateTo({
      url: '../order-detail/order-detail',
    })
  },
})