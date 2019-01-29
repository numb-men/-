// pages/print-settings/print-settings.js
Page({

  data: {
    file_type: "unknow",
    file_name: "福州大学实验报告1.doc",
    sigle_double_page: [
      {
        name: "单面",
        checked: true
      },
      {
        name: "双面",
        checked: false
      }
    ],
    print_color: [
      {
        name: "黑白",
        checked: true
      },
      {
        name: "彩色",
        checked: false
      }
    ],
    whether_delivery: [
      {
        name: "自取",
        checked: true
      },
      {
        name: "配送",
        checked: false
      }
    ],
    consignee: {
      name: "衡与墨",
      phone: "13290936793",
      addr: "福州大学计算机科学与技术学院3号楼206室"
    },
    comment: "",
    comment_p: "备注信息..",
    shop: {
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
    settings: {
      file_name: "",
      file_num: 1,
      sigle_double_page: "单面",
      print_color: "黑白",
      whether_delivery: "自取",
      consignee: {},
      paper_size: 0,
      bind: 0,
      comment: ""
    },
    paper_size_range: [
      "A4",
      "A5"
    ],
    bind_range: [
      "左侧装订",
      "右侧装订",
      "顶部装订",
      "不装订"
    ],

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

    verify_text: "确定"
  },

  onLoad: function (options) {
    console.log(options)
    if ("fileName" in options){
      //取得文件名和文件类型
      var spl = options.fileName.split('.')
      var type = "unknow"
      if (spl.length > 1){
        if (spl[spl.length - 1] in { doc: '', pdf: '', xls: '' }){
          type = spl[spl.length - 1]
        }
        if (spl[spl.length - 1] in { jpg:'', png:'' }){
          type = "pic"
        }
      }
      this.setData({
        file_name: options.fileName,
        file_type: type
      })
    }
  },

  onShow: function (){
    try{
      var consignee_ = wx.getStorageSync('sle-consignee')
      var shop_ = wx.getStorageSync('sle-shop')
      if (consignee_){
        this.setData({
          consignee: consignee_
        })
      }
      if (shop_){
        this.setData({
          shop: shop_
        })
      }
    }catch(e){}
  },

  paper_size_change: function(e) {
    var settings = this.data.settings
    settings.paper_size = e.detail.value
    this.setData({
      settings: settings
    })
  },

  bind_change: function(e) {
    var settings = this.data.settings
    settings.bind = e.detail.value
    this.setData({
      settings: settings
    })
  },

  file_num_change: function(e) {
    var settings = this.data.settings
    settings.file_num = e.detail.value > 0 ? e.detail.value:1
    this.setData({
      settings: settings
    })
  },

  add_file_num: function() {
    var settings = this.data.settings
    if (settings.file_num < 999){
      settings.file_num ++
      this.setData({
        settings: settings
      })
    }
  },

  reduce_file_num: function() {
    var settings = this.data.settings
    if (settings.file_num > 1) {
      settings.file_num --
      this.setData({
        settings: settings
      })
    }
  },

  sigle_double_page_change: function(e) {
    var settings = this.data.settings
    settings.sigle_double_page = e.detail.value
    this.setData({
      settings: settings
    })
  },

  print_color_change: function(e) {
    var settings = this.data.settings
    settings.print_color = e.detail.value
    this.setData({
      settings: settings
    })
  },

  whether_delivery_change: function(e) {
    var settings = this.data.settings
    settings.whether_delivery = e.detail.value
    this.setData({
      settings: settings
    })
  },

  comment_change: function(e) {
    var settings = this.data.settings
    settings.comment = e.detail.value
    this.setData({
      settings: settings
    })
  },

  to_sle_shop_page: function() {
    wx.navigateTo({
      url: '../sle-shop/sle-shop',
    })
  },

  to_upload_file_page: function() {
    wx.navigateTo({
      url: '../upload-file/upload-file',
    })
  },

  to_sle_consignee_page: function() {
    wx.navigateTo({
      url: '../sle-consignee/sle-consignee',
    })
  },

  verify: function() {
    if (this.data.verify_text == "确定"){
      //向后台请求页数，计算价格并呈现，提示支付
      wx.showLoading({
        title: '计算页数中',
        mask: true,
      })
      this.setData({
        verify_text: "支付"
      })
      setTimeout(function () {
        wx.hideLoading()
        wx.pageScrollTo({
          scrollTop: 2500,
          duration: 500,
        })
      }, 3000)
    } else {
      //调取支付
      //...
      wx.showLoading({
        title: '支付中',
        mask: true,
      })
      //跳转订单详情页面
      setTimeout(function(){
        wx.hideLoading()
        wx.showToast({
          title: '支付成功！',
          icon: 'none',
          mask: true,
          duration: 1000,
        })
        setTimeout(function () {
          wx.navigateTo({
            url: '../order-detail/order-detail',
          })
        }, 1200)
      }, 4000)
    }
  }
})
