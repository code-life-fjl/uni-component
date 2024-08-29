"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    common_vendor.ref("");
    const pageList = common_vendor.ref([
      {
        componentName: "cl-select-picker",
        componentPath: "/pages/componentPage/cl-select-picker/index"
      },
      {
        componentName: "cl-scroll-view",
        componentPath: "/pages/componentPage/cl-scroll-view/index"
      },
      {
        componentName: "cl-select",
        componentPath: "/pages/componentPage/cl-select/index"
      },
      {
        componentName: "cl-nav-bar",
        componentPath: "/pages/componentPage/cl-nav-bar/index"
      },
      {
        componentName: "cl-date-picker",
        componentPath: "/pages/componentPage/cl-date-picker/index"
      }
    ]);
    const toPage = (url) => {
      common_vendor.index.navigateTo({
        url
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(pageList.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.componentName),
            b: index,
            c: common_vendor.o(($event) => toPage(item.componentPath), index)
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
