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
    settings: {
      file_name: "",
      file_num: 1,
      sigle_double_page: "单面",
      print_color: "黑白",
      whether_delivery: "自取",
      consignee: {},
      paper_size: "A4",
      bind: "左侧装订",
      comment: ""
    }
  },

  onLoad: function (options) {

  },
})