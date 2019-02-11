// pages/consignee-manage/consignee-manage.js
var app = getApp()
Page({

  data: {
    //判断是否删除（显示对话框）
    isdelete:false,
    //控制body样式
    contain_style:0,
    //地址信息
    address_list: [
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
    ],

    //操作的数组子项下标
    index:'',
  },
  //编辑地址
  edit_position:function(e){
    var index = e.currentTarget.dataset.text;
    wx.navigateTo({
      url: '../edit-consignee/edit-consignee?name=' + this.data.address_list[index].human_name + "&phone=" + this.data.address_list[index].human_phone + "&province=" + this.data.address_list[index].province + "&city=" + this.data.address_list[index].city + "&country=" + this.data.address_list[index].country + "&detail_position=" + this.data.address_list[index].detail_position,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  //删除地址
  delete_position:function(e){
    //获取对应子项的下标，并设置
    var i = e.currentTarget.dataset.index;
    this.setData({
      isdelete:true,
      index:i,
    })
  },
  //确认删除
  modal_bind_confirm:function(){
    //调用接口删除
    //............

    //删除数组对应的下标项，并更新数组
    this.data.address_list.splice(this.data.index, 1);
    this.setData({
      address_list: this.data.address_list
    })
    //隐藏对话框
    this.setData({
      isdelete: false
    })
  },
  //取消删除
  modal_bind_cancel:function(){
    //隐藏对话框
    this.setData({
      isdelete: false
    })
  },

  //悬浮球点击事件
  add_detial: function () {
    wx.navigateTo({
      url: '../edit-consignee/edit-consignee',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var position_list_height = this.data.address_list.length * 220 * app.globalData.rpx_to_px
    //console.log(order_list_height, app.globalData.screenHeight)
    if (position_list_height + 75 < app.globalData.screenHeight) {
      var contain_height = app.globalData.screenHeight - 75
      this.setData({
        contain_style: "height: " + contain_height + "px;"
      })
    }
  },
})