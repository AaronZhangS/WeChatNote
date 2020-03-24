// miniprogram/pages/home/home.js
var app = getApp();
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 判断小程序的API，回调，参数，组件等是否在当前版本可用
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    message: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 查看是否授权
    var that = this
    wx.getSetting({
      success: function(res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function(res) {
              // console.log(res.userInfo)
              //用户已经授权过
              // console.log('用户已经授权过', wx.canIUse('button.open-type.getUserInfo'))
              app.globalData.authorized = true;
            },
            fail: function() {
              // 重新授权

            }
          })
        }
      }
    })
    db.collection('message').where({
      userid: '5d015d9e-db93-47e2-8699-62184befb130'
    }).get({
      success: function(res) {
        console.log(res.data)
        that.setData({
          message: res.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  /**
   *  用户点击事件
   */
  getUserInfo(e) {
    console.log(e)
  },

  /**
   *  用户授权操作
   */
  bindGetUserInfo: function(e) {
    console.log('option', e.detail.userInfo)
    if (e.detail.userInfo) {
      //用户按了允许授权按钮
      app.globalData.authorized = true
    } else {
      //用户按了拒绝按钮
      app.globalData.authorized = false
    }
  }
})