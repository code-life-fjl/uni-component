"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  const _easycom_cl_select2 = common_vendor.resolveComponent("cl-select");
  (_easycom_uni_section2 + _easycom_cl_select2)();
}
const _easycom_uni_section = () => "../../../uni_modules/uni-section/components/uni-section/uni-section.js";
const _easycom_cl_select = () => "../../../uni_modules/cl-select/components/cl-select/cl-select.js";
if (!Math) {
  (_easycom_uni_section + _easycom_cl_select)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const value = common_vendor.ref();
    const options = Array.from({
      length: 100
    }, (_, index) => {
      return {
        label: `我是展示的值${index}`,
        value: `value${index}`
      };
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => value.value = $event),
        b: common_vendor.p({
          options: common_vendor.unref(options),
          modelValue: value.value
        }),
        c: common_vendor.t(value.value)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-ad7d568c"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/componentPage/cl-select/index.js.map
