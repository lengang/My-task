"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  setup() {
    const data = common_vendor.reactive({
      goods: []
    });
    const valChange = (index) => {
      data.goods[index].number++;
      common_vendor.index.setStorage({
        key: "goods",
        data: JSON.stringify(data.goods)
      });
    };
    return __spreadProps(__spreadValues({}, common_vendor.toRefs(data)), {
      valChange
    });
  },
  onShow() {
    common_vendor.index.getStorage({
      key: "goods",
      success: (res) => {
        this.goods = JSON.parse(res.data);
      }
    });
  }
};
if (!Array) {
  const _easycom_u_number_box2 = common_vendor.resolveComponent("u-number-box");
  _easycom_u_number_box2();
}
const _easycom_u_number_box = () => "../../uni_modules/vk-uview-ui/components/u-number-box/u-number-box.js";
if (!Math) {
  _easycom_u_number_box();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f(_ctx.goods, (item, index, i0) => {
      return {
        a: item.status,
        b: item.url,
        c: common_vendor.t(item.name),
        d: common_vendor.t(item.price),
        e: common_vendor.o(($event) => $setup.valChange(index)),
        f: "31b01ce2-0-" + i0,
        g: common_vendor.o(($event) => item.number = $event),
        h: common_vendor.p({
          min: 1,
          modelValue: item.number
        }),
        i: index
      };
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/Lenovo/Desktop/\u4E50\u5B66\u55B5/every-uni/BestShop/pages/carView/carView.vue"]]);
wx.createPage(MiniProgramPage);
