"use strict";
var common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "u-col",
  props: {
    span: {
      type: [Number, String],
      default: 12
    },
    offset: {
      type: [Number, String],
      default: 0
    },
    justify: {
      type: String,
      default: "start"
    },
    align: {
      type: String,
      default: "center"
    },
    textAlign: {
      type: String,
      default: "left"
    },
    stop: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      gutter: 20
    };
  },
  created() {
    this.parent = false;
  },
  mounted() {
    this.parent = this.$u.$parent.call(this, "u-row");
    if (this.parent) {
      this.gutter = this.parent.gutter;
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
    a: common_vendor.n("u-col-" + $props.span),
    b: `0 ${Number($data.gutter) / 2 + "rpx"}`,
    c: 100 / 12 * $props.offset + "%",
    d: `0 0 ${100 / 12 * $props.span}%`,
    e: $options.uAlignItem,
    f: $options.uJustify,
    g: $props.textAlign,
    h: common_vendor.o((...args) => $options.click && $options.click(...args))
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/\u5B9E\u8BAD\u5B66\u4E60/\u4F5C\u4E1A\u5E93/My-task/every-uni-main/BestShop/uni_modules/vk-uview-ui/components/u-col/u-col.vue"]]);
wx.createComponent(Component);
