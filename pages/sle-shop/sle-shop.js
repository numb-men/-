// pages/sle-shop/sle-shop.js
var app = getApp()
Page({
  data: {
    shop_list: [
      {
        shop_head_img: "/static/icon/shop-head-img.png",
        shop_name: "超人文印",
        shop_is_open: false,
        shop_distance: 1.2,
        shop_order_num: 123,
        shop_rave_reviews: 92.2,
        shop_open_time: "8:00",
        shop_rest_time: "20:00",
        shop_addr: "闽侯县上街镇福州大学生活一区8号楼楼下",
        shop_is_sle: false,
        shop_tag_list: [
          "黑白",
          "彩印",
          "自取",
          "配送"
        ]
      },
      {
        shop_head_img: "/static/icon/shop-head-img.png",
        shop_name: "超人文印",
        shop_is_open: false,
        shop_distance: 1.2,
        shop_order_num: 123,
        shop_rave_reviews: 92.2,
        shop_open_time: "8:00",
        shop_rest_time: "20:00",
        shop_addr: "闽侯县上街镇福州大学生活一区8号楼楼下",
        shop_is_sle: false,
        shop_tag_list: [
          "黑白",
          "彩印",
          "自取",
          "配送"
        ]
      },
      {
        shop_head_img: "/static/icon/shop-head-img.png",
        shop_name: "超人文印",
        shop_is_open: true,
        shop_distance: 1.2,
        shop_order_num: 123,
        shop_rave_reviews: 92.2,
        shop_open_time: "8:00",
        shop_rest_time: "20:00",
        shop_addr: "闽侯县上街镇福州大学生活一区8号楼楼下",
        shop_is_sle: false,
        shop_tag_list: [
          "黑白",
          "彩印",
          "自取",
          "配送"
        ]
      },
      {
        shop_head_img: "/static/icon/shop-head-img.png",
        shop_name: "超人文印",
        shop_is_open: true,
        shop_distance: 1.2,
        shop_order_num: 123,
        shop_rave_reviews: 92.2,
        shop_open_time: "8:00",
        shop_rest_time: "20:00",
        shop_addr: "闽侯县上街镇福州大学生活一区8号楼楼下",
        shop_is_sle: false,
        shop_tag_list: [
          "黑白",
          "彩印",
          "自取",
          "配送"
        ]
      },
    ],

    contain_style: ''
  },

  onLoad: function (options) {
    // 屏幕适配
    console.log((this.data.shop_list.length) * 320 * app.globalData.rpx_to_px)
    console.log(app.globalData.screenHeight - 60)
    if ((this.data.shop_list.length) * 320 * app.globalData.rpx_to_px
      < app.globalData.screenHeight - 60) {
      this.setData({
        contain_style: "height:" + (app.globalData.screenHeight - 60) + "px;"
      })
    } else {
      console.log("screen full")
      this.setData({
        contain_style: "padding-bottom: 200rpx;"
      })
    }
  },

  //选择事件
  select_it: function (e) {
    var index = e.currentTarget.id
    var shop_list_ = this.data.shop_list
    if (! shop_list_[index].shop_is_open){
      return false
    }
    if (! shop_list_[index].shop_is_sle) {
      for (var i = 0; i < shop_list_.length; i++) {
        shop_list_[i].shop_is_sle = false
      }
      shop_list_[index].shop_is_sle = true
      this.setData({
        shop_list: shop_list_
      })
    }
    try {
      wx.setStorageSync('sle-shop', shop_list_[index])
    } catch (e) { }
  },

  //选择按钮
  sle_it: function () {
    wx.navigateBack({
      delta: 1
    })
  },

  to_shop_detail_page: function() {
    wx.navigateTo({
      url: '../shop-detail/shop-detail',
    })
  }
})