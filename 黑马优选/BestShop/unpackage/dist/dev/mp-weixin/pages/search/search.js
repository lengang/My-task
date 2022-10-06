"use strict";
var common_vendor = require("../../common/vendor.js");
var api_api = require("../../api/api.js");
require("../../utils/request.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "search",
  setup(__props) {
    const data = common_vendor.reactive({
      searchVal: "",
      searchList: [],
      timer: null
    });
    const searchOk = () => {
      if (data.searchVal == "") {
        return data.searchList = [];
      }
      clearTimeout(data.timer);
      data.timer = setTimeout(() => {
        api_api.getSearchGoods(data.searchVal).then((res) => {
          console.log(res);
          data.searchList = res.message;
        });
      }, 500);
    };
    const reset = () => {
      data.searchVal = "";
      data.searchList = [];
    };
    const toDetails = (id) => {
      common_vendor.index.navigateTo({
        url: `/pages/goodsDetail/goodsDetail?id=${id}`
      });
      reset();
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o([($event) => data.searchVal = $event.detail.value, searchOk]),
        b: data.searchVal,
        c: data.searchList.length > 0,
        d: common_vendor.o(reset),
        e: common_vendor.f(data.searchList, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.goods_name),
            b: item.goods_id,
            c: common_vendor.o(($event) => toDetails(item.goods_id), item.goods_id)
          };
        }),
        f: data.searchList.length <= 0 && data.searchVal != ""
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/Lenovo/Desktop/\u4E50\u5B66\u55B5/every-uni/BestShop/pages/search/search.vue"]]);
wx.createPage(MiniProgramPage);
