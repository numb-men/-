// pages/add-position/add-position.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //保存时的参数
    name:"",
    phone:"",
    province:"",
    city:"",
    country:"",
    detail_position:"",
    default_position:true,

    //初始化参数
    region: ["福建省", "福州市", "闽侯县"],
    init_name: "",
    init_phone: "",
    init_detail: "",

    contain_style:0,
  },
  
  //收件人
  humanName:function(e){
    this.setData({
      name: e.detail.value
    })
  },

  //手机号
  humanPhone:function(e){
    this.setData({
      phone: e.detail.value
    })
  },

  //省市区
  bindRegionChange: function (e) {
    this.setData({
      province: e.detail.value[0],
      city: e.detail.value[1],
      country: e.detail.value[2],
      region: e.detail.value
    })
  },

  //详细地址
  detail_position:function(e){
    this.setData({
      detail_position: e.detail.value
    })
  },

  checkboxChange(e) {
    if (e.detail.value.length==0){
      this.setData({
        default_position : false
      })
      
    }
    else if (e.detail.value.length == 1){
      this.setData({
        default_position : true
      })
    }
  },

  //保存
  savePosition:function(e){
    console.log(this.data.name);
    console.log(this.data.phone);
    console.log(this.data.province);
    console.log(this.data.city);
    console.log(this.data.country);
    console.log(this.data.detail_position);
    console.log(this.data.default_position);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var position_list_height = 480* app.globalData.rpx_to_px
    //console.log(order_list_height, app.globalData.screenHeight)
    if (position_list_height + 65 < app.globalData.screenHeight) {
      var contain_height = app.globalData.screenHeight - 65
      this.setData({
        contain_style: "height: " + contain_height + "px;"
      })
    }

    if (options.province!=null){
      this.setData({
        //修改显示的初始化参数
        region: [options.province, options.city, options.country],
        init_name: options.name,
        init_phone: options.phone,
        init_detail: options.detail_position,
        //修改提交值，防止没有修改直接提交保存
        name: options.name,
        phone: options.phone,
        province: options.province,
        city: options.city,
        country: options.country,
        detail_position: options.detail_position,
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