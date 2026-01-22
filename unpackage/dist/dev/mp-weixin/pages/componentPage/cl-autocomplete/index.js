"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_cl_autocomplete2 = common_vendor.resolveComponent("cl-autocomplete");
  _easycom_cl_autocomplete2();
}
const _easycom_cl_autocomplete = () => "../../../uni_modules/cl-autocomplete/components/cl-autocomplete/cl-autocomplete.js";
if (!Math) {
  _easycom_cl_autocomplete();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const fruitList = ["Apple", "Banana", "Orange", "Mango", "Strawberry"];
    const searchText = common_vendor.ref("");
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => searchText.value = $event),
        b: common_vendor.p({
          options: fruitList,
          placeholder: "搜索水果",
          ["max-height"]: "400",
          modelValue: searchText.value
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-80363e37"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/componentPage/cl-autocomplete/index.js.map
