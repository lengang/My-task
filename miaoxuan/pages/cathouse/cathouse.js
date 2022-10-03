import { getRequest } from "../../utils/util";

// pages/miaowu/miaowu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabdata: [{
      name: '广场'
    },
    {
      name: '图书勘误',
      id: 52
    },
    {
      name: '关注'
    }

    ],
    currentIndex: 0,
    askList: [],  //话题榜单数据
    contentList: [],  //广场内容
    bookList:[],  //图书勘误
    focusList:[]  //关注
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // tab栏切换
    getRequest('app/news/classify').then(res => {
      console.log(res);
    })
    // 获取话题榜单
    getRequest('app/square/themeList').then(res => {
      console.log(res);
      this.setData({
        askList: res.data
      })
    })

    // 获取内容数据
    getRequest('app/square/squareList?page=1&limit=15').then(res => {
      console.log(res);
      this.setData({
        contentList: res.data
      })
    })

    // 广场数据
    getRequest('app/square/squareList?page=1&limit=15&total=26276').then(res =>{
      this.setData({
        contentList:res.data
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  // 切换tab栏
  changeIndex(e) {
    this.data.currentIndex = e.currentTarget.dataset.index
    console.log(this.data.currentIndex);
    // 图书勘误
    if(this.data.currentIndex==1){
      getRequest('app/news/list/52?page=1&limit=15&classifyId=52').then(res => {
      console.log(res);
        this.setData({
          bookList: res.data
        })
      })
    }
    // 关注
    if(this.data.currentIndex==2){
      getRequest('app/focus/dyna?page=1&limit=15').then(res =>{
        console.log(res);
        this.setData({

        })
      })
    }
    this.setData({
      currentIndex: this.data.currentIndex,
      bookList:this.data.bookList
    })
    console.log(this.data.focusList);
  },

  // 去图书详情页
  toBookDetail(e){
    const {val}=e.currentTarget.dataset
    console.log(val);
    const deval=JSON.stringify(val)
    wx.navigateTo({
      url: `/pages/bookdetail/bookdetail?deval=${deval}`,
    })
  }

  // 获取话题榜单
})