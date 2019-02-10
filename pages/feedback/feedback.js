// pages/feedback/feedback.js
Page({

  data: {
    tap_sle: 0,
    mark_stars: 5,
    mail: '',
    comment: '',
    
    questions: [
      {
        title: "1、您觉得趣小印是否方便？",
        options: [
          {text: "不方便", selected: false},
          {text: "一般般", selected: false},
          {text: "很方便", selected: true}
        ]
      },
      {
        title: "1、您觉得趣小印是否方便？",
        options: [
          { text: "不方便", selected: false },
          { text: "一般般", selected: false },
          { text: "很方便", selected: true }
        ]
      },
      {
        title: "1、您觉得趣小印是否方便？",
        options: [
          { text: "不方便", selected: false },
          { text: "一般般", selected: false },
          { text: "很方便", selected: true }
        ]
      },
      {
        title: "1、您觉得趣小印是否方便？",
        options: [
          { text: "不方便", selected: false },
          { text: "一般般", selected: false },
          { text: "很方便", selected: true }
        ]
      }
    ],
    bug: {
      error_page: 0,
      phone_model: 0,
      error_date: require('../../utils/util.js').format_date(),
      error_time: require('../../utils/util.js').format_time(),
      detail: ''
    },
    bug_error_page_range: [
      "页面1",
      "页面2",
      "页面3",
      "页面4"
    ],
    bug_phone_model_range: [
      "iphone",
      "华为",
      "小米",
      "魅族",
      "OPPO",
      "VIVO"
    ],
  },

  onLoad: function(options) {

  },

  change_tap: function (e) {
    this.setData({
      tap_sle: e.target.id
    })
  },

  bind_star: function(e) {
    // console.log(e.target.id)
    var id_split = e.target.id.split("-")
    var typ = id_split[0]
    var index = Number(id_split[1])
    var mark_stars = this.data.mark_stars
    if (typ == "gray"){
      this.setData({
        mark_stars: mark_stars + index,
      })
    } else {
      this.setData({
        mark_stars: index,
      })
    }
  },

  set_bug: function() {
    var bug = this.data.bug
    this.setData({
      bug: bug
    })
  },

  bug_error_page_change: function(e) {
    this.data.bug.error_page = e.detail.value
    this.set_bug()
  },

  bug_phone_model_change: function(e) {
    this.data.bug.phone_model = e.detail.value
    this.set_bug()
  },

  bug_error_date_change: function(e) {
    this.data.bug.error_date = e.detail.value
    this.set_bug()
  },

  bug_error_time_change: function(e) {
    this.data.bug.error_time = e.detail.value
    this.set_bug()
  },

  bug_detail_change: function(e) {
    this.data.bug.detail = e.detail.value
    this.set_bug()
  },

  feedback_verify: function () {
    wx.showToast({
      title: '感谢您的珍贵意见~',
      icon: 'none',
      mask: true,
      duration: 1000,
    })
    setTimeout(function () {
      wx.navigateBack({
        delta: 1
      })
    }, 2000)
  },

  bug_verify: function () {
    wx.showToast({
      title: '感谢您的反馈，我们会尽快处理BUG~',
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