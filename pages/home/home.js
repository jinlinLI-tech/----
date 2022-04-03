// pages/home/home.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    foodlist: '',
    inform: ['云南大学食堂预约1.0上线!!!', '爱国、敬业、求实、创新、责任', '欢迎各位师生使用，祝生活愉快！'],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  getpay() {
    wx.cloud.callFunction({
      name: 'pay04',
      data: {
        // ...
      },
      success: res => {
        console.log('获取支付参数成功')
        const payment = res.result.payment

        wx.requestPayment({
          ...payment,
          success(res) {
            console.log('支付成功', res)
          },
          fail(err) {
            console.error('支付失败', err)
          }
        })
      },
      fail: res => {
        console.log('获取支付失败')
      }
    })
  },
  onLoad: function (options) {
    db.collection("goods_list").get({

      success: res => {

        this.setData({
          foodlist: res.data
        })

      }
    }

    )

  },
  search() {
    console.log('现在还没有数据')
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