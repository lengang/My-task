"use strict";
var common_vendor = require("../../common/vendor.js");
var api_api = require("../../api/api.js");
require("../../utils/request.js");
if (!Array) {
  const _easycom_searchInput2 = common_vendor.resolveComponent("searchInput");
  const _easycom_u_swiper2 = common_vendor.resolveComponent("u-swiper");
  const _easycom_u_grid_item2 = common_vendor.resolveComponent("u-grid-item");
  const _easycom_u_grid2 = common_vendor.resolveComponent("u-grid");
  const _easycom_u_col2 = common_vendor.resolveComponent("u-col");
  const _easycom_u_row2 = common_vendor.resolveComponent("u-row");
  (_easycom_searchInput2 + _easycom_u_swiper2 + _easycom_u_grid_item2 + _easycom_u_grid2 + _easycom_u_col2 + _easycom_u_row2)();
}
const _easycom_searchInput = () => "../../components/searchInput/searchInput.js";
const _easycom_u_swiper = () => "../../uni_modules/vk-uview-ui/components/u-swiper/u-swiper.js";
const _easycom_u_grid_item = () => "../../uni_modules/vk-uview-ui/components/u-grid-item/u-grid-item.js";
const _easycom_u_grid = () => "../../uni_modules/vk-uview-ui/components/u-grid/u-grid.js";
const _easycom_u_col = () => "../../uni_modules/vk-uview-ui/components/u-col/u-col.js";
const _easycom_u_row = () => "../../uni_modules/vk-uview-ui/components/u-row/u-row.js";
if (!Math) {
  (_easycom_searchInput + _easycom_u_swiper + _easycom_u_grid_item + _easycom_u_grid + _easycom_u_col + _easycom_u_row)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const data = common_vendor.reactive({
      banner: [],
      navList: [],
      floorList: []
    });
    api_api.getSwiper().then((res) => {
      if (res.meta.status == 200) {
        data.banner = res.message;
      }
    });
    api_api.gerNavList().then((res) => {
      if (res.meta.status == 200) {
        data.navList = res.message;
      }
    });
    api_api.getFloorData().then((res) => {
      console.log(res);
      if (res.meta.status == 200) {
        data.floorList = res.message;
      }
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          list: data.banner,
          height: "340",
          name: "image_src"
        }),
        b: common_vendor.f(data.navList, (item, index, i0) => {
          return {
            a: item.image_src,
            b: index,
            c: "57280228-3-" + i0 + ",57280228-2"
          };
        }),
        c: common_vendor.p({
          col: 4,
          border: false
        }),
        d: common_vendor.f(data.floorList, (item, i, i0) => {
          return {
            a: item.floor_title.image_src,
            b: item.product_list[0].image_src,
            c: "57280228-7-" + i0 + "," + ("57280228-6-" + i0),
            d: "57280228-6-" + i0 + "," + ("57280228-5-" + i0),
            e: "57280228-5-" + i0 + "," + ("57280228-4-" + i0),
            f: common_vendor.f(item.product_list, (child, index, i1) => {
              return {
                a: child.image_src,
                b: index,
                c: child.image_width !== "232",
                d: "57280228-10-" + i0 + "-" + i1 + "," + ("57280228-9-" + i0)
              };
            }),
            g: "57280228-9-" + i0 + "," + ("57280228-8-" + i0),
            h: "57280228-8-" + i0 + "," + ("57280228-4-" + i0),
            i: "57280228-4-" + i0,
            j: i
          };
        }),
        e: common_vendor.p({
          col: 1,
          border: false
        }),
        f: common_vendor.p({
          span: "4"
        }),
        g: common_vendor.p({
          col: 2,
          border: false
        }),
        h: common_vendor.p({
          span: "8"
        }),
        i: common_vendor.p({
          gutter: "12"
        })
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-57280228"], ["__file", "E:/\u5B9E\u8BAD\u5B66\u4E60/\u4F5C\u4E1A\u5E93/My-task/every-uni-main/BestShop/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
