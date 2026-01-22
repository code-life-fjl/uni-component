"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    common_vendor.ref();
    common_vendor.ref({
      val: ""
    });
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
      },
      {
        componentName: "cl-autocomplete",
        componentPath: "/pages/componentPage/cl-autocomplete/index"
      },
      {
        componentName: "cl-auto-page-list",
        componentPath: "/pages/componentPage/cl-auto-page-list/index"
      },
      {
        componentName: "cl-more-select-picker",
        componentPath: "/pages/componentPage/cl-more-select-picker/index"
      },
      {
        componentName: "cl-tabs",
        componentPath: "/pages/componentPage/cl-tabs/index"
      },
      {
        componentName: "cl-table",
        componentPath: "/pages/componentPage/cl-table/index"
      }
    ]);
    const toPage = (url) => {
      common_vendor.index.navigateTo({
        url
      });
    };
    common_vendor.onMounted(() => {
      common_vendor.index.showShareMenu({
        title: "234",
        menus: ["shareAppMessage", "shareTimeline"]
      });
    });
    common_vendor.onShareAppMessage((res) => {
      common_vendor.index.__f__("log", "at pages/index/index.vue:71", res);
      return {
        title: "243"
      };
    });
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
_sfc_main.__runtimeHooks = 2;
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
