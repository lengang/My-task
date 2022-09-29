"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_u_swiper2 = common_vendor.resolveComponent("u-swiper");
  _easycom_u_swiper2();
}
const _easycom_u_swiper = () => "../../uni_modules/vk-uview-ui/components/u-swiper/u-swiper.js";
if (!Math) {
  _easycom_u_swiper();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const list = [
      {
        image: "https://cdn.uviewui.com/uview/swiper/1.jpg",
        title: "\u6628\u591C\u661F\u8FB0\u6628\u591C\u98CE\uFF0C\u753B\u697C\u897F\u7554\u6842\u5802\u4E1C"
      },
      {
        image: "https://cdn.uviewui.com/uview/swiper/2.jpg",
        title: "\u8EAB\u65E0\u5F69\u51E4\u53CC\u98DE\u7FFC\uFF0C\u5FC3\u6709\u7075\u7280\u4E00\u70B9\u901A"
      },
      {
        image: "https://cdn.uviewui.com/uview/swiper/3.jpg",
        title: "\u8C01\u5FF5\u897F\u98CE\u72EC\u81EA\u51C9\uFF0C\u8427\u8427\u9EC4\u53F6\u95ED\u758F\u7A97\uFF0C\u6C89\u601D\u5F80\u4E8B\u7ACB\u6B8B\u9633"
      }
    ];
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          list
        })
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/\u5B9E\u8BAD\u5B66\u4E60/\u4F5C\u4E1A\u5E93/My-task/heimayouxuan/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
