// pages/print-settings/print-settings.js
Page({

  data: {
    file_img: "/static/icon/file-type-doc.png",
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
      shop_img: "/static/icon/shop-head-img.png",
      shop_name: "八号楼鸿鑫打印店",
      shop_distance: "1.2",
      shop_addr: "上街镇福州大学生活一区8号楼楼下"
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
    ]
  },

  onLoad: function (options) {

  },

  file_change: function() {

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

  consignee_change: function(e) {
    
  },

  comment_change: function(e) {
    var settings = this.data.settings
    settings.comment = e.detail.value
    this.setData({
      settings: settings
    })
  },

  to_sle_shop_page: function() {

  }
})