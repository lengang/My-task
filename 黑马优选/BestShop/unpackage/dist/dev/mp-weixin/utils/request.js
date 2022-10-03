"use strict";
var common_vendor = require("../common/vendor.js");
const baseUrl = "https://api-hmugo-web.itheima.net/api/public/v1";
const request = function(url, methods, data) {
  common_vendor.index.showLoading({
    title: "\u52A0\u8F7D\u4E2D...",
    mask: true
  });
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url: `${baseUrl}${url}`,
      data,
      method: methods ? methods : "GET",
      success: (res) => {
        resolve(res.data);
      },
      fail: (err) => {
        reject(err);
      },
      complete: () => {
        common_vendor.index.hideLoading();
      }
    });
  });
};
exports.request = request;
