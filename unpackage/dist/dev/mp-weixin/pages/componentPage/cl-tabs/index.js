"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  const _easycom_cl_ftabs2 = common_vendor.resolveComponent("cl-ftabs");
  (_easycom_uni_section2 + _easycom_cl_ftabs2)();
}
const _easycom_uni_section = () => "../../../uni_modules/uni-section/components/uni-section/uni-section.js";
const _easycom_cl_ftabs = () => "../../../uni_modules/cl-ftabs/components/cl-ftabs/cl-ftabs.js";
if (!Math) {
  (_easycom_uni_section + _easycom_cl_ftabs)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const option = [
      {
        value: "1",
        label: "数据1"
      },
      {
        value: "2",
        label: "数据2"
      },
      "数据3"
    ];
    const value1 = common_vendor.ref("1");
    const value2 = common_vendor.ref("2");
    const handleChange = (val, item, index) => {
      common_vendor.index.__f__("log", "at pages/componentPage/cl-tabs/index.vue:35", val, item, index);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => value1.value = $event),
        b: common_vendor.p({
          option,
          modelValue: value1.value
        }),
        c: common_vendor.o(handleChange),
        d: common_vendor.o(($event) => value2.value = $event),
        e: common_vendor.p({
          option,
          styleType: "text",
          modelValue: value2.value
        }),
        f: common_vendor.w(({
          label,
          tabItem,
          isActive
        }, s0, i0) => {
          return common_vendor.e({
            a: !isActive
          }, !isActive ? {
            b: common_vendor.t(label),
            c: common_vendor.t(tabItem.value)
          } : {
            d: common_vendor.t(label),
            e: common_vendor.t(tabItem.value)
          }, {
            f: i0,
            g: s0
          });
        }, {
          name: "label",
          path: "f",
          vueId: "c34bfe67-5"
        }),
        g: common_vendor.o(handleChange),
        h: common_vendor.o(($event) => value2.value = $event),
        i: common_vendor.p({
          option,
          styleType: "text",
          modelValue: value2.value
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c34bfe67"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/componentPage/cl-tabs/index.js.map
