"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: ["modelValue"],
  setup(props, ctx) {
    const input = (e) => {
      console.log(e);
      ctx.emit("update:modelValue", e.detail.value);
    };
    return {
      input
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $props.modelValue,
    b: common_vendor.o((...args) => $setup.input && $setup.input(...args))
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/Lenovo/Desktop/\u4E50\u5B66\u55B5/every-uni/BestShop/components/searchInput/searchInput.vue"]]);
wx.createComponent(Component);
