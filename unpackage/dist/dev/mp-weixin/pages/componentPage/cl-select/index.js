"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_cl_select2 = common_vendor.resolveComponent("cl-select");
  _easycom_cl_select2();
}
const _easycom_cl_select = () => "../../../uni_modules/cl-select/components/cl-select/cl-select.js";
if (!Math) {
  _easycom_cl_select();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const value = common_vendor.ref();
    const options = Array.from({ length: 100 }, (_, index) => {
      return {
        label: `我是展示的值${index}`,
        value: `我是选中的值${index}`
      };
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => value.value = $event),
        b: common_vendor.p({
          options: common_vendor.unref(options),
          modelValue: value.value
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-ad7d568c"], ["__file", "E:/code/uniapp/uni-app-components/pages/componentPage/cl-select/index.vue"]]);
wx.createPage(MiniProgramPage);
