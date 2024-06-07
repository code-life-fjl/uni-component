"use strict";
const common_vendor = require("../../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  (_easycom_uni_icons2 + _easycom_uni_easyinput2)();
}
const _easycom_uni_icons = () => "../../../uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_easyinput = () => "../../../uni-easyinput/components/uni-easyinput/uni-easyinput.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_easyinput)();
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
    const selected = (item) => {
      curSelect.value = item;
      visible.value = false;
      emits("update:modelValue", item[props.valueField]);
      emits("selected", item[props.valueField], item);
    };
    const clearHandle = () => {
      curSelect.value = {};
      scrollIntoView.value = void 0;
      emits("clear");
    };
    const showPlaceholder = common_vendor.ref(props.placeholder);
    const focusHandle = () => {
      if (isSelected.value) {
        showPlaceholder.value = curSelect.value[props.labelField];
      } else {
        showPlaceholder.value = props.placeholder;
      }
      visible.value = true;
      showOptions.value = props.options.map((item) => {
        if (typeof item !== "object") {
          return {
            [props.valueField]: item,
            [props.labelField]: item
          };
        } else {
          return item;
        }
      });
      curSelectLabel.value = void 0;
      emits("focus");
    };
    const blurHandle = () => {
      if (isSelected.value) {
        curSelectLabel.value = curSelect.value[props.labelField];
      }
      emits("blur");
    };
    const inputHandle = (e) => {
      showOptions.value = props.options.filter((item) => item[props.labelField].includes(e));
      emits("input", e);
    };
    common_vendor.watch(() => visible.value, (val) => {
      if (val) {
        if (isSelected.value) {
          showPlaceholder.value = curSelect.value[props.labelField];
          scrollIntoView.value = curSelect.value[props.valueField];
        } else {
          showPlaceholder.value = props.placeholder;
          scrollIntoView.value = void 0;
        }
      } else {
        if (isSelected.value) {
          showPlaceholder.value = props.placeholder;
        } else {
          curSelectLabel.value = curSelect.value[props.labelField];
        }
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
    });
    const isEmpty = (val) => {
      return val === "" || val === void 0 || val === null;
    };
    common_vendor.watch(() => props.options, (newList) => {
      if (newList.length > 0 && !isEmpty(props.modelValue)) {
        console.log(newList, props.modelValue);
        const data = newList.find((item) => item[props.valueField] === props.modelValue);
        if (data) {
          curSelect.value = data;
        }
      }
    }, {
      immediate: true,
      deep: true
    });
    const maskClick = (e) => {
      visible.value = false;
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: !isSelected.value
      }, !isSelected.value ? {
        b: common_vendor.p({
          type: visible.value ? "top" : "bottom",
          size: "14"
        })
      } : {
        c: common_vendor.o(clearHandle),
        d: common_vendor.p({
          type: "clear",
          size: "20"
        })
      }, {
        e: common_vendor.o(focusHandle),
        f: common_vendor.o(inputHandle),
        g: common_vendor.o(blurHandle),
        h: common_vendor.o(($event) => curSelectLabel.value = $event),
        i: common_vendor.p({
          clearable: false,
          placeholder: showPlaceholder.value,
          placeholderStyle: __props.placeholderStyle,
          disabled: __props.disabled,
          maxlength: __props.maxlength,
          trim: __props.trim,
          inputBorder: !__props.hideBorder,
          cursorSpacing: __props.cursorSpacing,
          modelValue: curSelectLabel.value
        }),
        j: common_vendor.f(showOptions.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item[__props.labelField]),
            b: item[__props.valueField] === curSelect.value[__props.valueField] ? 1 : "",
            c: index,
            d: common_vendor.o(($event) => selected(item), index),
            e: item[__props.valueField]
          };
        }),
        k: showOptions.value.length === 0
      }, showOptions.value.length === 0 ? {
        l: common_vendor.t(__props.emptyText)
      } : {}, {
        m: scrollIntoView.value,
        n: __props.maxHeight + "px",
        o: visible.value,
        p: visible.value
      }, visible.value ? {
        q: common_vendor.o(maskClick)
      } : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4bd33685"], ["__file", "E:/code/uniapp/uni-app-components/uni_modules/cl-select/components/cl-select/cl-select.vue"]]);
wx.createComponent(Component);
