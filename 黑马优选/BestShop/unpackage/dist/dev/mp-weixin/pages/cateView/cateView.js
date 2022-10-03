"use strict";
var common_vendor = require("../../common/vendor.js");
var api_api = require("../../api/api.js");
require("../../utils/request.js");
if (!Array) {
  const _easycom_searchInput2 = common_vendor.resolveComponent("searchInput");
  _easycom_searchInput2();
}
const _easycom_searchInput = () => "../../components/searchInput/searchInput.js";
if (!Math) {
  _easycom_searchInput();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "cateView",
  setup(__props) {
    const data = common_vendor.reactive({
      currentIndex: 0,
      cateList: []
    });
    const changeId = (index) => {
      data.currentIndex = index;
    };
    api_api.getGoodsCateList().then((res) => {
      console.log(res);
      if (res.meta.status == 200) {
        data.cateList = res.message;
      }
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(data.cateList, (item, index, i0) => {
          return {
            a: common_vendor.t(item.cat_name),
            b: data.currentIndex == index ? 1 : "",
            c: index,
            d: common_vendor.o(($event) => changeId(index), index)
          };
        }),
        b: common_vendor.f(data.cateList[data.currentIndex].children, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.cat_name),
            b: common_vendor.f(item.children, (child, index, i1) => {
              return {
                a: child.cat_icon,
                b: common_vendor.t(child.cat_name),
                c: index
              };
            }),
            c: item.cat_id
          };
        })
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-cc9985f4"], ["__file", "E:/\u5B9E\u8BAD\u5B66\u4E60/\u4F5C\u4E1A\u5E93/My-task/every-uni-main/BestShop/pages/cateView/cateView.vue"]]);
wx.createPage(MiniProgramPage);
