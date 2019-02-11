// pages/order-evaluation/order-evaluation.js
Page({
  data: {
    mark_stars: 5,
    shop_head_img: "/static/icon/shop-head-img.png",
    file_type: "pdf",
    shop_name: "超人文印",
    file_name: "福州大学软件工程试验1.pdf",
    evaluation: ""
  },

  onLoad: function (options) {

  },

  bind_star: function (e) {
    // console.log(e.target.id)
    var id_split = e.target.id.split("-")
    var typ = id_split[0]
    var index = Number(id_split[1])
    var mark_stars = this.data.mark_stars
    if (typ == "gray") {
      this.setData({
        mark_stars: mark_stars + index,
      })
    } else {
      this.setData({
        mark_stars: index,
      })
    }
  },

  verify: function() {
    wx.showToast({
      title: '收件成功~',
      icon: 'none',
      mask: true,
      duration: 1000,
    })
    setTimeout(function() {
      wx.navigateBack({
        delta: 1
      })
    }, 2000)
  }
})