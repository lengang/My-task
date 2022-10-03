//封装请求

let host = 'https://www.lexuemiao.com/api/'

/**
 * POST 请求
 * model:{
 * url:接口
 * postData:参数 {}
 * doSuccess:成功的回调
 *  doFail:失败回调
 * }
 */
function postRequest(url,data) {
    wx.showLoading({
      title: '加载中...',
    })
    return new Promise((resolve, reject) => {
        wx.request({
            url: `${host}${url}`,
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            data: data,
            success: (res) => {
                resolve(res.data)
            },
            fail: (res) => {
                reject(res.data)
            },
            complete: () => {
                wx.hideLoading()
            }
        })
    })
}

/**
 * GET 请求
 * model:{
 *  url:接口
 *  getData:参数 {}
 *  doSuccess:成功的回调
 *  doFail:失败回调
 * }
 */
function getRequest(url,data) {
    wx.showLoading({
        title: '加载中...',
      })
    return new Promise((resolve, reject) => {
        wx.request({
            url: `${host}${url}`,
            data: data,
            method: "GET",
            success: (res) => {
                resolve(res.data)
            },
            fail: (res) => {
                reject(res.data)
            },
            complete: () => {
                wx.hideLoading()
            }
        })
    })
}

/**
 * module.exports用来导出代码
 * js中通过 let call = require("../util/request.js") 加载
 */
export {
    postRequest,
    getRequest
}