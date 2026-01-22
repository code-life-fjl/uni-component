"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _easycom_cl_auto_page_list2 = common_vendor.resolveComponent("cl-auto-page-list");
  (_easycom_uni_search_bar2 + _easycom_cl_auto_page_list2)();
}
const _easycom_uni_search_bar = () => "../../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
const _easycom_cl_auto_page_list = () => "../../../uni_modules/cl-auto-page-list/components/cl-auto-page-list/cl-auto-page-list.js";
if (!Math) {
  (_easycom_uni_search_bar + _easycom_cl_auto_page_list)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const params = common_vendor.reactive({
      label: ""
    });
    const list = Array.from({
      length: 20
    }, (_, index) => {
      return {
        label: `我是展示的值${index}`,
        value: `value${index}`
      };
    });
    const clAutoPageListRef = common_vendor.ref();
    const handleSearch = () => {
      clAutoPageListRef.value.search();
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(handleSearch),
        b: common_vendor.o(($event) => params.label = $event),
        c: common_vendor.p({
          placeholder: "请输入关键字查询",
          modelValue: params.label
        }),
        d: common_vendor.w(({
          list: list2
        }, s0, i0) => {
          return {
            a: common_vendor.f(list2, (item, index, i1) => {
              return {
                a: common_vendor.t(item.label),
                b: index
              };
            }),
            b: i0,
            c: s0
          };
        }, {
          name: "list",
          path: "d",
          vueId: "9bdff03b-1"
        }),
        e: common_vendor.sr(clAutoPageListRef, "9bdff03b-1", {
          "k": "clAutoPageListRef"
        }),
        f: common_vendor.p({
          list: common_vendor.unref(list),
          params
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9bdff03b"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/componentPage/cl-auto-page-list/index.js.map
