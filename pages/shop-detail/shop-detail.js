// pages/shop-detail/shop-detail.js
var app = getApp()
Page({
  data: {
    shop: {
      shop_head_img: "/static/icon/shop-head-img.png",
      shop_is_open: false,
      shop_name: "超人文印",
      shop_addr: "闽侯县上街镇福州大学生活一区#8楼下",
      shop_credit: 4.2,
      shop_rave_reviews: 92,
      shop_order_num: 232,
      shop_delivery: 1.2,
      shop_info: "满15减1，满30减2，下雨天配送较慢请耐心等候.",
      shop_merchandises_list: [
        {
          name: "黑白单面",
          price: "0.10",
          describe: "黑白单面打印",
          sales: 111,
          type: 'main',
        },
        {
          name: "黑白双面",
          price: "0.15",
          describe: "黑白双面打印",
          sales: 211,
          type: 'main'
        },
        {
          name: "彩色单面",
          price: "1.00",
          describe: "彩色单面打印",
          sales: 21,
          type: 'main'
        },
        {
          name: "彩色双面",
          price: "2.00",
          describe: "彩色双面打印",
          sales: 4,
          type: 'main'
        },
        {
          name: "配送",
          price: "2.00",
          describe: "配送费用",
          sales: 111,
          type: 'minor'
        },
        {
          name: "装订",
          price: "0.00",
          describe: "装订费用",
          sales: 222,
          type: 'minor'
        }
      ],
      shop_comments: [
        {
          comment_user_head_img: "/static/icon/user.png",
          comment_user_name: "落霜飞雪",
          comment_datetime: "2019-01-20 10:12:10",
          comment_stars: 5,
          comment_contain: "很不错。"
        },
        {
          comment_user_head_img: "/static/icon/user.png",
          comment_user_name: "peace",
          comment_datetime: "2019-01-20 10:12:10",
          comment_stars: 4,
          comment_contain: "很方便。"
        },
        {
          comment_user_head_img: "/static/icon/user.png",
          comment_user_name: "红尘道人",
          comment_datetime: "2019-01-20 10:12:10",
          comment_stars: 4,
          comment_contain: "很方便。"
        },
      ],
      shop_intro_pic: '/static/pic/test2.jpg',
      shop_intro_text: '在福州大学开了十余年的一家打印店。\r\n用心对待每一个订单。'
    },
    tap_sle: 0,
    shop_comments_style: ''
  },
  onLoad: function (options) {
    // 屏幕适配
    console.log((this.data.shop.shop_comments.length) * 235 * app.globalData.rpx_to_px)
    console.log(app.globalData.screenHeight - 400)
    if ((this.data.shop.shop_comments.length) * 235 * app.globalData.rpx_to_px
      < app.globalData.screenHeight - 400) {
      this.setData({
        shop_comments_style: "height:" + (app.globalData.screenHeight - 360) + "px;"
      })
    } else {
      console.log("screen full")
      this.setData({
        shop_comments_style: "padding-bottom: 120rpx;"
      })
    }
  },

  change_tap: function(e) {
    this.setData({
      tap_sle: e.target.id
    })
  },
})