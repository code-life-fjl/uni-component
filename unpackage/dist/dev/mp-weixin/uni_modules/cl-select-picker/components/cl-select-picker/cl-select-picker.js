"use strict";
const common_vendor = require("../../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  _easycom_uni_easyinput2();
}
const _easycom_uni_easyinput = () => "../../../uni-easyinput/components/uni-easyinput/uni-easyinput.js";
if (!Math) {
  _easycom_uni_easyinput();
}
const noDataValue = "#codeLife_noData#";
const _sfc_main = {
  __name: "cl-select-picker",
  props: {
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
    // 是否隐藏暂无数据
    hideEmptyText: {
      type: Boolean,
      default: false
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
    modelValue: {
      type: [String, Number],
      default: void 0
    },
    //
    emptyText: {
      type: String,
      default: "暂无数据"
    },
    placeholderStyle: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "submit", "clear", "cancel"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const dataList = common_vendor.ref([]);
    const selectText = common_vendor.ref(void 0);
    const selectValue = common_vendor.ref(void 0);
    const pickerDisabled = common_vendor.ref(false);
    const handleClear = () => {
      pickerDisabled.value = true;
      selectText.value = void 0;
      selectValue.value = void 0;
      emit("clear");
      setTimeout(() => {
        pickerDisabled.value = false;
      });
    };
    const isEmpty = (val) => {
      return val === "" || val === null || val === void 0;
    };
    const submit = (e) => {
      const idx = Number(e.detail.value);
      const item = dataList.value[idx];
      const value = item ? item[props.valueFiled] : void 0;
      const label = item ? item[props.labelFiled] : void 0;
      if (props.hideEmptyText && dataList.value.length === 0 || value === noDataValue) {
        selectText.value = void 0;
        selectValue.value = void 0;
        emit("submit", void 0);
      } else {
        selectText.value = label;
        selectValue.value = value;
        emit("submit", value, item);
      }
    };
    const cancel = () => {
      emit("cancel");
    };
    const pickValue = common_vendor.ref(0);
    const dataShow = (list, val) => {
      const idx = list.findIndex((item) => item[props.valueFiled] === val);
      if (idx > -1) {
        pickValue.value = idx;
      }
      const curData = list[idx];
      if (curData) {
        selectText.value = curData[props.labelFiled];
        selectValue.value = curData[props.valueFiled];
      } else {
        selectText.value = void 0;
        selectValue.value = void 0;
      }
    };
    const isShowClearIcon = common_vendor.computed(() => {
      if (!isEmpty(selectValue.value) && !props.disabled) {
        return true;
      }
    });
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
          dataShow(dataList.value, props.modelValue);
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
        emit("update:modelValue", newV);
      }
    );
    common_vendor.watch(
      () => props.modelValue,
      (newV) => {
        if (isEmpty(newV)) {
          selectText.value = void 0;
          selectValue.value = void 0;
        } else {
          dataShow(dataList.value, newV);
        }
      },
      {
        immediate: true
      }
    );
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(handleClear),
        b: common_vendor.o(($event) => selectText.value = $event),
        c: common_vendor.p({
          disabled: __props.disabled,
          placeholder: __props.placeholder,
          clearable: isShowClearIcon.value,
          suffixIcon: !isShowClearIcon.value && "bottom",
          modelValue: selectText.value
        }),
        d: dataList.value,
        e: __props.labelFiled,
        f: pickValue.value,
        g: common_vendor.o(submit),
        h: common_vendor.o(cancel),
        i: __props.disabled || pickerDisabled.value
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7036e199"]]);
wx.createComponent(Component);
