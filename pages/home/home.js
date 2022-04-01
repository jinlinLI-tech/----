// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodss:{
      price:50
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.cloud.database().collection('test').add(
     {data:{
      _id:5,
      name:"小李",
      number:"2545",
     
    

    },
    success(res){
      console.log(res),
      wx.showToast({
        title: '添加成功',
      })

    }}
    
    )

  },
  search(){
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