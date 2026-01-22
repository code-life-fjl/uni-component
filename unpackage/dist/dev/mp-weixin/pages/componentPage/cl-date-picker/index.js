"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  const _easycom_cl_date_picker2 = common_vendor.resolveComponent("cl-date-picker");
  const _easycom_uni_data_select2 = common_vendor.resolveComponent("uni-data-select");
  (_easycom_uni_section2 + _easycom_cl_date_picker2 + _easycom_uni_data_select2)();
}
const _easycom_uni_section = () => "../../../uni_modules/uni-section/components/uni-section/uni-section.js";
const _easycom_cl_date_picker = () => "../../../uni_modules/cl-date-picker/components/cl-date-picker/cl-date-picker.js";
const _easycom_uni_data_select = () => "../../../uni_modules/uni-data-select/components/uni-data-select/uni-data-select.js";
if (!Math) {
  (_easycom_uni_section + _easycom_cl_date_picker + _easycom_uni_data_select)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const value1 = common_vendor.ref();
    const value2 = common_vendor.ref("12:12:12");
    const value3 = common_vendor.ref();
    const datePickerRef = common_vendor.ref();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.sr(datePickerRef, "fc709b23-1", {
          "k": "datePickerRef"
        }),
        b: common_vendor.o(($event) => value1.value = $event),
        c: common_vendor.p({
          modelValue: value1.value
        }),
        d: common_vendor.sr(datePickerRef, "fc709b23-3", {
          "k": "datePickerRef"
        }),
        e: common_vendor.o(($event) => value2.value = $event),
        f: common_vendor.p({
          dateType: "hh:mm:ss",
          modelValue: value2.value
        }),
        g: common_vendor.sr(datePickerRef, "fc709b23-5", {
          "k": "datePickerRef"
        }),
        h: common_vendor.o(($event) => value3.value = $event),
        i: common_vendor.p({
          disabled: true,
          modelValue: value3.value
        }),
        j: common_vendor.o(_ctx.change),
        k: common_vendor.o(($event) => _ctx.value = $event),
        l: common_vendor.p({
          localdata: _ctx.range,
          modelValue: _ctx.value
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-fc709b23"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/componentPage/cl-date-picker/index.js.map
