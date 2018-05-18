Page({

  data: {
    array: ["国内", "国际", "财经", "娱乐", "军事", "体育", "其他"],
    num:0,
    news:[]    
   },

  onLoad: function (option) {
    wx.request({
      url: 'https://test-miniprogram.com/api/news/list', // 这里写请求的url
      data: {
        type: 'gn' // 此处为请求时候的数据
      },
      success: res => {
        // 数据请求成功时候的处理代码
        // console.log(res.data)
        let result = res.data.result
        this.setData({
          news:result
        })
      },
     
      complete: () => {
        // 数据请求完成时候的处理代码
      }
    })
  },
  tabClick(e) {
    var num = e.currentTarget.dataset.index
    this.setData({ num })
  },
  onTapdetail() {
    wx.navigateTo({
      url: '../detail/detail'
    })
  }
})
  