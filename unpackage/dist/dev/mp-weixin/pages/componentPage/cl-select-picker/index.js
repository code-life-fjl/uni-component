"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_cl_select_picker2 = common_vendor.resolveComponent("cl-select-picker");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_cl_select_picker2 + _easycom_uni_forms_item2 + _easycom_uni_forms2)();
}
const _easycom_cl_select_picker = () => "../../../uni_modules/cl-select-picker/components/cl-select-picker/cl-select-picker.js";
const _easycom_uni_forms_item = () => "../../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_forms = () => "../../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_cl_select_picker + _easycom_uni_forms_item + _easycom_uni_forms)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const formData = common_vendor.reactive({
      picker: "value3",
      picker1: ""
    });
    const options = common_vendor.ref([
      {
        text: "我是展示的值1",
        value: "value1"
      },
      {
        text: "我是展示的值2",
        value: "value2"
      },
      {
        text: "我是展示的值3",
        value: "value3"
      },
      4
    ]);
    const pickerSubmit = (val, curData) => {
      console.log(val, curData);
    };
    const clear = () => {
      console.log("点击了清除按钮！");
    };
    const cancal = () => {
      console.log("点击了取消按钮！");
    };
    const formRef = common_vendor.ref();
    const formSubmit = async () => {
      console.log(formRef.value, "formRef");
      await formRef.value.validate();
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(cancal),
        b: common_vendor.o(clear),
        c: common_vendor.o(pickerSubmit),
        d: common_vendor.o(($event) => formData.picker = $event),
        e: common_vendor.p({
          options: options.value,
          modelValue: formData.picker
        }),
        f: common_vendor.o(($event) => formData.picker1 = $event),
        g: common_vendor.p({
          options: options.value,
          modelValue: formData.picker1
        }),
        h: common_vendor.p({
          label: "表单测试",
          name: "picker1",
          rules: [{
            required: true,
            errorMessage: "表单测试不能为空"
          }],
          required: true
        }),
        i: common_vendor.o(formSubmit),
        j: common_vendor.sr(formRef, "17f399f1-1", {
          "k": "formRef"
        }),
        k: common_vendor.p({
          modelValue: formData,
          ["label-width"]: "150rpx"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-17f399f1"], ["__file", "E:/code/uniapp/uni-app-components/pages/componentPage/cl-select-picker/index.vue"]]);
wx.createPage(MiniProgramPage);
