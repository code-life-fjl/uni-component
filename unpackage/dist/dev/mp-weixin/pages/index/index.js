"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  comboxObj();
}
const comboxObj = () => "./uni-comboxObj.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const candidates = common_vendor.ref([
      {
        label: 1,
        value: 111
      },
      {
        label: 2,
        value: 2222
      }
    ]);
    const city = common_vendor.ref("");
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
        }),
        b: common_vendor.o(($event) => city.value = $event),
        c: common_vendor.p({
          label: "label",
          value: "value",
          candidates: candidates.value,
          modelValue: city.value
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "E:/code/uniapp/uni-app-components/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
