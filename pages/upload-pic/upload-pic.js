// pages/upload-pic/upload-pic.js
var app = getApp()
var time = 0;
var interval = "";
Page({
  data: {
    pic_list: [],
    contain_style: ""
  },

  onLoad: function (options) {
  },

  add_pic: function(){
    var that = this
    var pic_list = this.data.pic_list
    wx.chooseImage({
      //设置最多选择五张
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        for(var i = 0; i < res.tempFilePaths.length; i++){
          pic_list[pic_list.length] = res.tempFilePaths[i]
        }
        console.log(pic_list)
        that.setData({
          pic_list: pic_list
        })
      }
    })
  },

  //删除图片 
  deletePic: function (e) {
    if (time > 5) {
      var index = e.currentTarget.dataset.view
      var new_pic_list = []
      var pic_list = this.data.pic_list
      for (var i = 0, j = 0; i < pic_list.length; i++) {
        if (i != index) {
          new_pic_list[j++] = pic_list[i]
        }
      }
      // console.log('delete_after:', new_pic_list)
      this.setData({
        pic_list: new_pic_list
      })
    }
    time = 0;
  },

  touchStart: function (e) {  
    interval = setInterval(function () {
      time++;
    }, 100);
  },

  touchEnd: function (e) {
    clearInterval(interval);
  },
})