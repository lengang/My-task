"use strict";
var common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "u-grid-item",
  emits: ["click"],
  props: {
    bgColor: {
      type: String,
      default: "#ffffff"
    },
    index: {
      type: [Number, String],
      default: ""
    },
    customStyle: {
      type: Object,
      default() {
        return {
          padding: "30rpx 0"
        };
      }
    }
  },
  data() {
    return {
      parentData: {
        hoverClass: "",
        col: 3,
        border: true
      }
    };
  },
  created() {
    this.updateParentData();
    this.parent.children.push(this);
  },
  computed: {
    width() {
      return 100 / Number(this.parentData.col) + "%";
    }
  },
  methods: {
    updateParentData() {
      this.getParentData("u-grid");
    },
    click() {
      this.$emit("click", this.index);
      this.parent && this.parent.click(this.index);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.s($props.customStyle),
    b: common_vendor.n($data.parentData.border ? "u-border-right u-border-bottom" : ""),
    c: $data.parentData.hoverClass,
    d: common_vendor.o((...args) => $options.click && $options.click(...args)),
    e: $props.bgColor,
    f: $options.width
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-691f72d1"], ["__file", "E:/\u5B9E\u8BAD\u5B66\u4E60/\u4F5C\u4E1A\u5E93/My-task/every-uni-main/BestShop/uni_modules/vk-uview-ui/components/u-grid-item/u-grid-item.vue"]]);
wx.createComponent(Component);
