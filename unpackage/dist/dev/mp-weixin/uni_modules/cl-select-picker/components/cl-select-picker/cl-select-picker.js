"use strict";
const common_vendor = require("../../../../common/vendor.js");
if (!Array) {
  const _easycom_cl_input2 = common_vendor.resolveComponent("cl-input");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_cl_input2 + _easycom_uni_popup2)();
}
const _easycom_cl_input = () => "../../../cl-input/components/cl-input/cl-input.js";
const _easycom_uni_popup = () => "../../../uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_cl_input + _easycom_uni_popup)();
}
const noDataValue = "#codeLife_noData#";
const _sfc_main = {
  __name: "cl-select-picker",
  props: /* @__PURE__ */ common_vendor.mergeModels({
    // 数据列表
    options: {
      type: Array,
      default: () => []
    },
    // 输入框提示
    placeholder: {
      type: String,
      default: "请选择"
    },
    // 禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 隐藏边框
    hideBorder: {
      type: Boolean,
      default: false
    },
    // 选中数据对象里面用来展示的字段
    labelFiled: {
      type: String,
      default: "label"
    },
    // 选中数据对象里面用来回传的字段
    valueFiled: {
      type: String,
      default: "value"
    },
    // 是否隐藏暂无数据
    hideEmptyText: {
      type: Boolean,
      default: false
    },
    emptyText: {
      type: String,
      default: "暂无数据"
    },
    placeholderStyle: {
      type: Object,
      default: () => ({})
    }
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ common_vendor.mergeModels(["submit", "clear", "cancel"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const atrrs = common_vendor.useAttrs();
    const emits = __emit;
    const props = __props;
    const modelValue = common_vendor.useModel(__props, "modelValue");
    const popupRef = common_vendor.ref();
    const handleOpen = () => {
      if (!isEmpty(modelValue.value)) {
        dataShow();
      }
      popupRef.value.open();
    };
    const dataList = common_vendor.ref([]);
    const selectText = common_vendor.ref(void 0);
    const selectValue = common_vendor.ref(void 0);
    const isEmpty = (val) => {
      return val === "" || val === null || val === void 0;
    };
    const submit = (e) => {
      const idx = pickValue.value[0];
      const item = dataList.value[idx];
      const value = item ? item[props.valueFiled] : void 0;
      const label = item ? item[props.labelFiled] : void 0;
      if (props.hideEmptyText && dataList.value.length === 0 || value === noDataValue) {
        selectText.value = void 0;
        selectValue.value = void 0;
        emits("submit", void 0);
      } else {
        selectText.value = label;
        selectValue.value = value;
        emits("submit", value, item);
      }
      popupRef.value.close();
    };
    const cancel = () => {
      popupRef.value.close();
      emit("cancel");
    };
    const pickValue = common_vendor.ref([0]);
    const dataShow = () => {
      const idx = dataList.value.findIndex((item) => item[props.valueFiled] === modelValue.value);
      if (idx > -1) {
        pickValue.value = [idx];
        const curData = dataList.value[idx];
        selectText.value = curData[props.labelFiled];
        selectValue.value = curData[props.valueFiled];
      } else {
        selectText.value = void 0;
        selectValue.value = void 0;
      }
    };
    const selectChange = (e) => {
      pickValue.value = e.detail.value;
    };
    common_vendor.watch(
      () => props.options,
      (newV) => {
        if (newV.length === 0 && !props.hideEmptyText) {
          dataList.value = [{
            [props.labelFiled]: props.emptyText,
            [props.valueFiled]: noDataValue
          }];
        } else {
          dataList.value = props.options.map((item) => {
            if (typeof item !== "object") {
              return {
                [props.labelFiled]: item,
                [props.valueFiled]: item
              };
            } else {
              return item;
            }
          });
          dataShow();
        }
      },
      {
        immediate: true,
        deep: true
      }
    );
    common_vendor.watch(
      () => selectValue.value,
      (newV) => {
        modelValue.value = newV;
      }
    );
    common_vendor.watch(
      () => modelValue.value,
      (newV) => {
        if (isEmpty(newV)) {
          selectText.value = void 0;
          selectValue.value = void 0;
        } else {
          dataShow();
        }
      },
      {
        immediate: true
      }
    );
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(handleOpen),
        b: common_vendor.o(($event) => modelValue.value = $event),
        c: common_vendor.p({
          inputType: "falseInput",
          placeholder: __props.placeholder,
          disabled: __props.disabled,
          ...common_vendor.unref(atrrs),
          modelValue: modelValue.value
        }),
        d: common_vendor.o(cancel),
        e: common_vendor.o(submit),
        f: common_vendor.f(dataList.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item[props.labelFiled]),
            b: index
          };
        }),
        g: pickValue.value,
        h: common_vendor.o(selectChange),
        i: common_vendor.sr(popupRef, "7036e199-1", {
          "k": "popupRef"
        }),
        j: common_vendor.p({
          type: "bottom"
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7036e199"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/cl-select-picker/components/cl-select-picker/cl-select-picker.js.map
