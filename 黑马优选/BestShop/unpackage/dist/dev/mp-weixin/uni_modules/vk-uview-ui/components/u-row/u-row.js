"use strict";
var common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "u-row",
  props: {
    gutter: {
      type: [String, Number],
      default: 20
    },
    justify: {
      type: String,
      default: "start"
    },
    align: {
      type: String,
      default: "center"
    },
    stop: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    uJustify() {
      if (this.justify == "end" || this.justify == "start")
        return "flex-" + this.justify;
      else if (this.justify == "around" || this.justify == "between")
        return "space-" + this.justify;
      else
        return this.justify;
    },
    uAlignItem() {
      if (this.align == "top")
        return "flex-start";
      if (this.align == "bottom")
        return "flex-end";
      else
        return this.align;
    }
  },
  methods: {
    click(e) {
      this.$emit("click");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $options.uAlignItem,
    b: $options.uJustify,
    c: common_vendor.o((...args) => $options.click && $options.click(...args))
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/Lenovo/Desktop/\u4E50\u5B66\u55B5/every-uni/BestShop/uni_modules/vk-uview-ui/components/u-row/u-row.vue"]]);
wx.createComponent(Component);
