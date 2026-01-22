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
const _sfc_main = {
  __name: "cl-autocomplete",
  props: {
    options: {
      type: Array,
      default: () => []
    },
    modelValue: {
      type: String,
      default: ""
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
      default: 300
    },
    type: {
      type: String,
      default: "text"
    }
  },
  emits: ["update:modelValue", "focus", "blur", "selected", "clear", "input"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const visible = common_vendor.ref(false);
    const showOptions = common_vendor.computed(() => props.options.filter((item) => {
      var _a, _b;
      return (_b = item.toLowerCase()) == null ? void 0 : _b.includes(((_a = props.modelValue) == null ? void 0 : _a.toLowerCase()) || "");
    }));
    const showVal = common_vendor.computed({
      get: () => {
        return props.modelValue;
      },
      set: (newV) => {
        emits("update:modelValue", newV);
      }
    });
    const selected = (item) => {
      visible.value = false;
      showVal.value = item;
      emits("selected", item);
    };
    let timeoutId = null;
    const focusHandle = () => {
      if (timeoutId)
        clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        visible.value = props.options.length > 0;
        emits("focus");
      }, 150);
    };
    const maskClick = (e) => {
      visible.value = false;
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(focusHandle),
        b: common_vendor.o(($event) => showVal.value = $event),
        c: common_vendor.p({
          type: __props.type,
          clearable: true,
          placeholder: __props.placeholder,
          placeholderStyle: __props.placeholderStyle,
          disabled: __props.disabled,
          maxlength: __props.maxlength,
          trim: __props.trim,
          inputBorder: !__props.hideBorder,
          cursorSpacing: __props.cursorSpacing,
          modelValue: showVal.value
        }),
        d: visible.value && showOptions.value.length > 0
      }, visible.value && showOptions.value.length > 0 ? {
        e: common_vendor.f(showOptions.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: item === showVal.value ? 1 : "",
            c: index,
            d: common_vendor.o(($event) => selected(item), index)
          };
        }),
        f: __props.maxHeight + "px"
      } : {}, {
        g: visible.value
      }, visible.value ? {
        h: common_vendor.o(maskClick)
      } : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2d848f96"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/cl-autocomplete/components/cl-autocomplete/cl-autocomplete.js.map
