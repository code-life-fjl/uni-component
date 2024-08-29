"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_cl_nav_bar2 = common_vendor.resolveComponent("cl-nav-bar");
  _easycom_cl_nav_bar2();
}
const _easycom_cl_nav_bar = () => "../../../uni_modules/cl-nav-bar/components/cl-nav-bar/cl-nav-bar.js";
if (!Math) {
  _easycom_cl_nav_bar();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.o(() => {
    }),
    b: common_vendor.o(() => {
    }),
    c: common_vendor.p({
      ["left-text"]: "返回",
      ["right-text"]: "设置",
      title: "标题"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
