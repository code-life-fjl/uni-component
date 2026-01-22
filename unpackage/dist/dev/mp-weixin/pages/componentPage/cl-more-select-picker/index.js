"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_cl_more_select_picker2 = common_vendor.resolveComponent("cl-more-select-picker");
  _easycom_cl_more_select_picker2();
}
const _easycom_cl_more_select_picker = () => "../../../uni_modules/cl-more-select-picker/components/cl-more-select-picker/cl-more-select-picker.js";
if (!Math) {
  _easycom_cl_more_select_picker();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const val = common_vendor.ref([]);
    const options = common_vendor.ref([]);
    common_vendor.onLoad(() => {
      options.value = Array.from({ length: 100 }, (_, i) => {
        return {
          label: "我是label" + (i + 1),
          value: i + 1
        };
      });
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => val.value = $event),
        b: common_vendor.p({
          options: options.value,
          modelValue: val.value
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6318dc36"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/componentPage/cl-more-select-picker/index.js.map
