"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  __name: "cl-ftabs",
  props: /* @__PURE__ */ common_vendor.mergeModels({
    option: {
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
    // 组件风格 button、text
    styleType: {
      type: String,
      default: "button"
    }
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ common_vendor.mergeModels(["change"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const props = __props;
    const formatOption = common_vendor.computed(() => {
      return props.option.map((item) => {
        if (typeof item !== "object") {
          return {
            [props.labelField]: item,
            [props.valueField]: item
          };
        } else {
          return item;
        }
      });
    });
    const emits = __emit;
    const modelVal = common_vendor.useModel(__props, "modelValue");
    const handleToggle = (item, index) => {
      let newVal = item[props.valueField];
      if (newVal === modelVal.value) {
        return;
      }
      modelVal.value = newVal;
      emits("change", newVal, item, index);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(formatOption.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item[__props.labelField]),
            b: "label-" + i0,
            c: common_vendor.r("label", {
              label: item[__props.labelField],
              tabItem: item,
              isActive: modelVal.value === item[__props.valueField]
            }, i0),
            d: index,
            e: common_vendor.n(modelVal.value === item[__props.valueField] && "tabs_item_active"),
            f: common_vendor.o(($event) => handleToggle(item, index), index)
          };
        }),
        b: common_vendor.n(__props.styleType)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f3f60d72"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/cl-ftabs/components/cl-ftabs/cl-ftabs.js.map
