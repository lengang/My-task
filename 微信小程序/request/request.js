const baseurl = "https://www.lexuemiao.com/api/";
const request = function (url, data, methods) {
  wx.showLoading({
    title: '正在加载...',
  })
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseurl + url,
      method: methods,
      data,
      success: function (res) {
        resolve(res, data)
      },
      fail: function (err) {
        reject(err)
      },
      complete() {
        wx.hideLoading({})
      }
    })
  })
}