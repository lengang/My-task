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
var api_api = require("../../api/api.js");
require("../../utils/request.js");
const _sfc_main = {
  setup() {
    const data = common_vendor.reactive({
      list: {
        cat_id: 0,
        pics: [],
        goods_introduce: "",
        goods_price: 0,
        goods_name: "",
        goods_big_logo: ""
      },
      options: [{
        icon: "headphones",
        text: "\u5BA2\u670D"
      }, {
        icon: "shop",
        text: "\u5E97\u94FA",
        info: 0,
        infoBackgroundColor: "#007aff",
        infoColor: "red"
      }, {
        icon: "cart",
        text: "\u8D2D\u7269\u8F66",
        info: 0
      }],
      buttonGroup: [
        {
          text: "\u52A0\u5165\u8D2D\u7269\u8F66",
          backgroundColor: "#ff0000",
          color: "#fff"
        },
        {
          text: "\u7ACB\u5373\u8D2D\u4E70",
          backgroundColor: "#ffa200",
          color: "#fff"
        }
      ],
      goods: []
    });
    const onClick = () => {
      common_vendor.index.switchTab({
        url: "/pages/carView/carView"
      });
    };
    const GetStorage = () => {
      common_vendor.index.getStorage({
        key: "goods",
        success: (res) => {
          data.goods = JSON.parse(res.data);
          let num = 0;
          data.goods.forEach((item) => {
            num += item.number;
          });
          data.options[2].info = num;
        }
      });
    };
    const buttonClick = () => {
      const obj = {
        id: data.list.cat_id,
        name: data.list.goods_name,
        price: data.list.goods_price,
        url: data.list.goods_big_logo,
        status: false,
        number: 1
      };
      const Item = data.goods.find((item) => item.id == obj.id);
      if (Item) {
        Item.number++;
        common_vendor.index.showToast({
          title: "\u5546\u54C1\u5DF2\u5B58\u5728 + 1"
        });
      } else {
        data.goods.push(obj);
        common_vendor.index.showToast({
          title: "\u52A0\u5165\u6210\u529F"
        });
      }
      common_vendor.index.setStorage({
        key: "goods",
        data: JSON.stringify(data.goods)
      });
      GetStorage();
    };
    return __spreadProps(__spreadValues({}, common_vendor.toRefs(data)), {
      onClick,
      buttonClick
    });
  },
  onLoad(options) {
    api_api.getDetails(options.id).then((res) => {
      this.list = res.message;
    });
  },
  onShow() {
    common_vendor.index.getStorage({
      key: "goods",
      success: (res) => {
        this.goods = JSON.parse(res.data);
        let num = 0;
        this.goods.forEach((item) => {
          num += item.number;
        });
        this.options[2].info = num;
      }
    });
  }
};
if (!Array) {
  const _easycom_u_swiper2 = common_vendor.resolveComponent("u-swiper");
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_u_parse2 = common_vendor.resolveComponent("u-parse");
  const _easycom_uni_goods_nav2 = common_vendor.resolveComponent("uni-goods-nav");
  (_easycom_u_swiper2 + _easycom_u_icon2 + _easycom_u_parse2 + _easycom_uni_goods_nav2)();
}
const _easycom_u_swiper = () => "../../uni_modules/vk-uview-ui/components/u-swiper/u-swiper.js";
const _easycom_u_icon = () => "../../uni_modules/vk-uview-ui/components/u-icon/u-icon.js";
const _easycom_u_parse = () => "../../uni_modules/vk-uview-ui/components/u-parse/u-parse.js";
const _easycom_uni_goods_nav = () => "../../uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.js";
if (!Math) {
  (_easycom_u_swiper + _easycom_u_icon + _easycom_u_parse + _easycom_uni_goods_nav)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      height: "400",
      list: _ctx.list.pics,
      name: "pics_mid_url"
    }),
    b: common_vendor.t(_ctx.list.goods_price),
    c: common_vendor.t(_ctx.list.goods_name),
    d: common_vendor.p({
      name: "star"
    }),
    e: common_vendor.p({
      html: _ctx.list.goods_introduce
    }),
    f: common_vendor.o($setup.onClick),
    g: common_vendor.o($setup.buttonClick),
    h: common_vendor.p({
      fill: true,
      options: _ctx.options,
      buttonGroup: _ctx.buttonGroup
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/\u5B9E\u8BAD\u5B66\u4E60/\u4F5C\u4E1A\u5E93/My-task/\u9ED1\u9A6C\u4F18\u9009/BestShop/pages/goodsDetail/goodsDetail.vue"]]);
wx.createPage(MiniProgramPage);
