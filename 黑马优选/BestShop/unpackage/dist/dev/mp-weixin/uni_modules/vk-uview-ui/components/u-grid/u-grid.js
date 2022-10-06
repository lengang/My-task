"use strict";
var common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "u-grid",
  emits: ["click"],
  props: {
    col: {
      type: [Number, String],
      default: 3
    },
    border: {
      type: Boolean,
      default: true
    },
    align: {
      type: String,
      default: "left"
    },
    hoverClass: {
      type: String,
      default: "u-hover-class"
    }
  },
  data() {
    return {
      index: 0
    };
  },
  watch: {
    parentData() {
      if (this.children.length) {
        this.children.map((child) => {
          typeof child.updateParentData == "function" && child.updateParentData();
        });
      }
    }
  },
  created() {
    this.children = [];
  },
  computed: {
    parentData() {
      return [this.hoverClass, this.col, this.size, this.border];
    },
    gridStyle() {
      let style = {};
      switch (this.align) {
        case "left":
          style.justifyContent = "flex-start";
          break;
        case "center":
          style.justifyContent = "center";
          break;
        case "right":
          style.justifyContent = "flex-end";
          break;
        default:
          style.justifyContent = "flex-start";
      }
      return style;
    }
  },
  methods: {
    click(index) {
      this.$emit("click", index);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $props.border ? 1 : "",
    b: common_vendor.s($options.gridStyle)
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-300710cb"], ["__file", "C:/Users/Lenovo/Desktop/\u4E50\u5B66\u55B5/every-uni/BestShop/uni_modules/vk-uview-ui/components/u-grid/u-grid.vue"]]);
wx.createComponent(Component);
