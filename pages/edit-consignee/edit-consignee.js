// pages/add-position/add-position.js
var app = getApp()
Page({

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

    //显示警告图标
    warn_show:'none',
    warn_text:'',
    is_save:true,
  },
  
  //收件人
  human_name:function(e){
    this.setData({
      name: e.detail.value
    })
  },

  //手机号
  human_phone:function(e){
    this.setData({
      phone: e.detail.value
    })
  },

  //检验手机号是否合法
  check_phone:function(e){
    var value = e.detail.value;
    var length = parseInt(value.length);

    if (length != 11) {
      this.setData({
        warn_show: "inline",
        warn_text:"长度应为11",
        is_save:false,
      })
      return;
    }
    else{
      for(var i=0;i<length;i++){
        if (value[i] < '0' || value[i] > '9'){
          this.setData({
            warn_show: "inline",
            warn_text: "手机号有误",
            is_save: false,
          })
          return;
        }
      }
    }
    this.setData({
      warn_show: "none",
      is_save: true,
    })
  },

  //省市区
  bind_region_change: function (e) {
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

  //设置默认地址
  checkbox_change(e) {
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
  save_position:function(e){
    if(this.data.is_save){
      //保存
    }
    else{
      wx.showModal({
        title: '提示',
        content: '信息有误！',
        showCancel:false,
        success: function (res) {
          if (res.confirm) {
            
          } 
        }
      })
    }
    console.log(this.data.name);
    console.log(this.data.phone);
    console.log(this.data.province);
    console.log(this.data.city);
    console.log(this.data.country);
    console.log(this.data.detail_position);
    console.log(this.data.default_position);
  },

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
})