"use strict";
const common_vendor = require("../../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_cl_input2 = common_vendor.resolveComponent("cl-input");
  (_easycom_uni_icons2 + _easycom_cl_input2)();
}
const _easycom_uni_icons = () => "../../../uni-icons/components/uni-icons/uni-icons.js";
const _easycom_cl_input = () => "../../../cl-input/components/cl-input/cl-input.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_cl_input)();
}
const _sfc_main = {
  __name: "cl-select",
  props: {
    options: {
      type: Array,
      default: () => []
    },
    labelField: {
      type: String,
      default: "label"
    },
    valueField: {
      type: String,
      default: "value"
    },
    modelValue: {
      type: [String, Number],
      default: void 0
    },
    placeholder: {
      type: String,
      default: "请选择"
    },
    maxHeight: {
      type: [String, Number],
      default: 300
    },
    placeholderStyle: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    maxlength: {
      type: Number,
      default: 20
    },
    trim: {
      type: String,
      default: "both"
    },
    hideBorder: {
      type: Boolean,
      default: false
    },
    cursorSpacing: {
      type: Number,
      default: 0
    },
    emptyText: {
      type: String,
      default: "暂无数据"
    },
    filterable: {
      type: Boolean,
      default: true
    }
  },
  emits: ["update:modelValue", "focus", "blur", "selected", "clear", "input"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const visible = common_vendor.ref(false);
    const curSelect = common_vendor.ref({});
    const curSelectLabel = common_vendor.ref();
    const curSelectValue = common_vendor.ref();
    const isSelected = common_vendor.computed(() => {
      if (Object.keys(curSelect.value).length === 0) {
        return false;
      } else {
        return true;
      }
    });
    const scrollIntoView = common_vendor.ref();
    const showOptions = common_vendor.ref([]);
    const formatOptions = common_vendor.computed(() => {
      return props.options.map((item) => {
        if (typeof item !== "object") {
          return {
            [props.valueField]: item,
            [props.labelField]: item
          };
        } else {
          return item;
        }
      });
    });
    const selected = (item) => {
      curSelect.value = item;
      visible.value = false;
      emits("selected", item[props.valueField], item);
    };
    const clearHandle = () => {
      curSelect.value = {};
      common_vendor.index.__f__("log", "at uni_modules/cl-select/components/cl-select/cl-select.vue:144", props.options[0][props.valueField]);
      emits("clear");
    };
    const showPlaceholder = common_vendor.ref(props.placeholder);
    const inputClick = () => {
      if (isSelected.value) {
        showPlaceholder.value = curSelect.value[props.labelField];
      } else {
        showPlaceholder.value = props.placeholder;
      }
      visible.value = true;
      showOptions.value = formatOptions.value;
      curSelectLabel.value = void 0;
    };
    const focusHandle = (inputVal) => {
      if (isSelected.value) {
        showPlaceholder.value = curSelect.value[props.labelField];
      } else {
        showPlaceholder.value = props.placeholder;
      }
      visible.value = true;
      showOptions.value = formatOptions.value;
      curSelectLabel.value = void 0;
      emits("focus", inputVal);
    };
    const blurHandle = () => {
      if (isSelected.value) {
        curSelectLabel.value = curSelect.value[props.labelField];
      } else {
        curSelectLabel.value = void 0;
      }
      emits("blur");
    };
    let searchTimer = null;
    const inputHandle = (e) => {
      clearTimeout(searchTimer);
      searchTimer = setTimeout(() => {
        showOptions.value = formatOptions.value.filter((item) => item[props.labelField].includes(e));
        emits("input", e);
      }, 200);
    };
    common_vendor.watch(() => visible.value, (val) => {
      if (val) {
        common_vendor.nextTick$1(() => {
          if (isSelected.value) {
            showPlaceholder.value = curSelect.value[props.labelField];
            scrollIntoView.value = curSelect.value[props.valueField];
          } else {
            showPlaceholder.value = props.placeholder;
            if (formatOptions.value.length > 0) {
              scrollIntoView.value = formatOptions.value[0][props.valueField];
            }
          }
        });
      }
    });
    common_vendor.watch(() => curSelect.value, (val) => {
      if (Object.keys(val).length === 0) {
        curSelectLabel.value = void 0;
        curSelectValue.value = void 0;
        showPlaceholder.value = props.placeholder;
      } else {
        curSelectLabel.value = val[props.labelField];
        curSelectValue.value = val[props.valueField];
      }
      emits("update:modelValue", curSelectValue.value);
    });
    const setCurSelect = () => {
      if (formatOptions.value.length > 0 && !isEmpty(props.modelValue)) {
        const data = formatOptions.value.find((item) => item[props.valueField] === props.modelValue);
        if (data) {
          curSelect.value = data;
        }
      }
    };
    const isEmpty = (val) => {
      return val === "" || val === void 0 || val === null;
    };
    common_vendor.watch([() => props.options, () => props.modelValue], () => {
      setCurSelect();
    }, {
      deep: true,
      immediate: true
    });
    const maskClick = (e) => {
      visible.value = false;
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: __props.filterable
      }, __props.filterable ? common_vendor.e({
        b: !__props.disabled
      }, !__props.disabled ? common_vendor.e({
        c: !isSelected.value || visible.value
      }, !isSelected.value || visible.value ? {
        d: common_vendor.p({
          type: visible.value ? "top" : "bottom",
          size: "14",
          color: "#999"
        })
      } : {}) : {}) : {}, {
        e: common_vendor.o(focusHandle),
        f: common_vendor.o(inputHandle),
        g: common_vendor.o(blurHandle),
        h: common_vendor.o(inputClick),
        i: common_vendor.o(clearHandle),
        j: common_vendor.o(($event) => curSelectLabel.value = $event),
        k: common_vendor.p({
          placeholder: showPlaceholder.value,
          inputType: __props.filterable ? "input" : "falseInput",
          placeholderStyle: __props.placeholderStyle,
          disabled: __props.disabled,
          maxlength: __props.maxlength,
          trim: __props.trim,
          inputBorder: !__props.hideBorder,
          cursorSpacing: __props.cursorSpacing,
          modelValue: curSelectLabel.value
        }),
        l: common_vendor.f(showOptions.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item[__props.labelField]),
            b: item[__props.valueField] === curSelect.value[__props.valueField] ? 1 : "",
            c: index,
            d: common_vendor.o(($event) => selected(item), index),
            e: item[__props.valueField]
          };
        }),
        m: showOptions.value.length === 0
      }, showOptions.value.length === 0 ? {
        n: common_vendor.t(__props.emptyText)
      } : {}, {
        o: scrollIntoView.value,
        p: __props.maxHeight + "px",
        q: visible.value,
        r: visible.value
      }, visible.value ? {
        s: common_vendor.o(maskClick)
      } : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4bd33685"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/cl-select/components/cl-select/cl-select.js.map
