//Page Object
Page({
  data: {
    swiperList: []
  },
  // 当页面刚开始加载时就发送网络请求
  onLoad(){
    wx.request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
      success: (result) => {
        this.setData({
          swiperList: result.data.message
        })
      }
    });
      
  }
});
  