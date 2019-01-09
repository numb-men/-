// pages/receive-manage/receive-manage.js
var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    //判断是否删除（显示对话框）
    isdelete:false,

    contain_style:0,

    order_list: [
      {
        id:0,
        position_type: "default",
        human_name: "陈迎仁",
        human_phone: "13107609505",
        province: "福建省",
        city: "福州市",
        country: "闽侯县",
        detail_position: "福州大学6号楼409",
        is_default: true,
      },
      {
        id: 1,
        position_type: "normal",
        human_name: "陈宇",
        human_phone: "15759706576",
        province: "安徽省",
        city: "合肥市",
        country: "瑶海区",
        detail_position: "合肥工业大学",
        is_default: false,
      },
      {
        id: 2,
        position_type: "default",
        human_name: "张三",
        human_phone: "12345678901",
        province: "江西省",
        city:"南昌市",
        country: "东湖区",
        detail_position: "江西小学",
        is_default: true,
      },
    ]
  },

  //编辑地址
  edit_position:function(e){
    var index = e.currentTarget.dataset.text;
    wx.navigateTo({
      url: '../add-position/add-position?name=' + this.data.order_list[index].human_name + "&phone=" + this.data.order_list[index].human_phone + "&province=" + this.data.order_list[index].province + "&city=" + this.data.order_list[index].city + "&country=" + this.data.order_list[index].country + "&detail_position=" + this.data.order_list[index].detail_position,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  //删除地址
  delete_position:function(e){
    //对应子项的ID
    var index = e.currentTarget.dataset.text;
    this.setData({
      isdelete:true
    })
  },
  //确认删除
  modalBindaconfirm:function(){
    //调用接口删除
    this.setData({
      isdelete: false
    })

  },
  //取消删除
  modalBindcancel:function(){
    this.setData({
      isdelete: false
    })
  },

  //悬浮球点击事件
  adddetial: function () {
    wx.navigateTo({
      url: '../add-position/add-position',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var position_list_height = this.data.order_list.length * 220 * app.globalData.rpx_to_px
    //console.log(order_list_height, app.globalData.screenHeight)
    if (position_list_height + 75 < app.globalData.screenHeight) {
      var contain_height = app.globalData.screenHeight - 75
      this.setData({
        contain_style: "height: " + contain_height + "px;"
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})