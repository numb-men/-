// order-detail/order-detail.js
Page({

  data: {
    shop_head_img: "/static/icon/shop-head-img.png",
    shop_name: "八号楼打印店",
    shop_phone: "1234567890",
    status_point: [
      "status-point-finish", 
      "status-point-wait", 
      "status-point-future", 
      "status-point-future"
      ],
    long_string: [
      "long-string-finish",
      "long-string-wait",
      "long-string-future"
      ],
    status_title: [
      "status-title-finish",
      "status-title-wait",
      "status-title-future",
      "status-title-future"
      ],
    status_title_text: [
      "已接单",
      "打印中",
      "待取件",
      "订单完成"
    ],
    status_datetime: [
      "11:10",
      "12:10",
      "",
      ""
      ],
    file_type: "pdf",
    file_name: "福州大学实验1.pdf",
    page_num: 10,
    order_type: "黑白双面",
    unit_price: "0.15",
    file_unit_price: "1.50",
    file_num: 10,
    all_price: "15.00",
    bind_price: "1.00",
    delivery_price: "2.00",
    discount_price: "1.00",
    payment_price: "17.00",

    recipients_name: "衡与墨",
    recipients_phonenum: "13290936793",
    recipients_address: "福州大学数学与计算机科学学院#3 206",
    order_id: "ax1232123",
    place_order_datetime: "2019-01-07 11:12:15",
    take_order_datetime: "2019-01-07 12:12:15",
    print_finish_datetime: "2019-01-07 13:12:15",
    order_finish_datetime: "2019-01-07 14:12:15",
  },

  change_position: function(){
    var that = this
    console.log("change position " + that.data.to_top)
    this.setData({
      to_top: that.data.to_top ? false:true
    })
  },

  to_chargeback_page: function() {
    wx.navigateTo({
      url: '../chargeback/chargeback',
    })
  },

  call_shop: function() {
    var shop_phone = this.data.shop_phone
    wx.makePhoneCall({
      phoneNumber: shop_phone,
      fail: e => console.log(e)
    })
  },

  to_order_evaluation_page() {
    wx.navigateTo({
      url: '../order-evaluation/order-evaluation',
    })
  }
})