"use strict";
var utils_request = require("../utils/request.js");
const getSwiper = () => {
  return utils_request.request("/home/swiperdata").then((res) => res, (err) => err);
};
const gerNavList = () => {
  return utils_request.request("/home/catitems").then((res) => res, (err) => err);
};
const getFloorData = () => {
  return utils_request.request("/home/floordata").then((res) => res, (err) => err);
};
const getGoodsCateList = () => {
  return utils_request.request("/categories").then((res) => res, (err) => err);
};
const getSearchGoods = (val) => {
  return utils_request.request(`/goods/qsearch?query=${val}`).then((res) => res, (err) => err);
};
const getDetails = (id) => {
  return utils_request.request(`/goods/detail?goods_id=${id}`).then((res) => res, (err) => err);
};
exports.gerNavList = gerNavList;
exports.getDetails = getDetails;
exports.getFloorData = getFloorData;
exports.getGoodsCateList = getGoodsCateList;
exports.getSearchGoods = getSearchGoods;
exports.getSwiper = getSwiper;
