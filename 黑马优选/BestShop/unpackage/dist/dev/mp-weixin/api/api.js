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
exports.gerNavList = gerNavList;
exports.getFloorData = getFloorData;
exports.getGoodsCateList = getGoodsCateList;
exports.getSwiper = getSwiper;
