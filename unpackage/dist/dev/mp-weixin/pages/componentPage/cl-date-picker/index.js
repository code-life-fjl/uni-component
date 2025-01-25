"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_cl_date_picker2 = common_vendor.resolveComponent("cl-date-picker");
  _easycom_cl_date_picker2();
}
const _easycom_cl_date_picker = () => "../../../uni_modules/cl-date-picker/components/cl-date-picker/cl-date-picker.js";
if (!Math) {
  _easycom_cl_date_picker();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const value = common_vendor.ref("");
    const datePickerRef = common_vendor.ref();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.sr(datePickerRef, "fc709b23-0", {
          "k": "datePickerRef"
        }),
        b: common_vendor.o(($event) => value.value = $event),
        c: common_vendor.p({
          isNow: true,
          dateType: "hh:mm:ss",
          modelValue: value.value
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-fc709b23"]]);
wx.createPage(MiniProgramPage);
