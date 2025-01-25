"use strict";
const common_vendor = require("../../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_icons2 + _easycom_uni_popup2)();
}
const _easycom_uni_icons = () => "../../../uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_popup = () => "../../../uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "cl-more-select-picker",
  props: {
    options: {
      type: Array,
      default: () => []
    },
    modelValue: {
      type: Array,
      default: () => []
    },
    placeholder: {
      type: String,
      default: "请选择"
    },
    labelField: {
      type: String,
      default: "label"
    },
    valueField: {
      type: String,
      default: "value"
    },
    interval: {
      type: String,
      default: "、"
    },
    hideBorder: {
      type: Boolean,
      default: false
    },
    emptyText: {
      type: String,
      default: "暂无数据"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue", "cancel", "submit", "clear", "change"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const selectList = common_vendor.ref([]);
    const formatOptions = common_vendor.computed(() => {
      return props.options.map((item) => {
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
    const showLabel = common_vendor.computed(() => {
      if (props.modelValue.length > 0) {
        return formatOptions.value.filter((item) => props.modelValue.includes(item[props.valueField])).map((item) => item[props.labelField]).join(props.interval);
      } else {
        return props.placeholder;
      }
    });
    const hasSelect = common_vendor.computed(() => {
      return props.modelValue.length > 0;
    });
    const handleClear = () => {
      emits("update:modelValue", []);
    };
    const handleCancel = () => {
      selectList.value = [];
      popupRef.value.close();
      emits("cancel");
    };
    const handleSubmit = () => {
      emits("update:modelValue", selectList.value);
      popupRef.value.close();
      selectList.value = [];
      emits("submit", selectList.value);
    };
    const handleToggle = (item) => {
      const idx = selectList.value.findIndex((itm) => itm === item[props.valueField]);
      if (idx > -1) {
        selectList.value.splice(idx, 1);
      } else {
        selectList.value.push(item[props.valueField]);
      }
      emits("submit", item, idx === -1, selectList.value);
    };
    const popupRef = common_vendor.ref();
    const handleOpenPicker = () => {
      selectList.value = JSON.parse(JSON.stringify(props.modelValue));
      popupRef.value.open();
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.t(hasSelect.value ? showLabel.value : props.placeholder),
        b: !hasSelect.value ? 1 : "",
        c: hasSelect.value
      }, hasSelect.value ? {
        d: common_vendor.o(handleClear),
        e: common_vendor.p({
          type: "clear",
          size: 24,
          color: "#c0c4cc"
        })
      } : {
        f: common_vendor.p({
          type: "bottom",
          size: 20,
          color: "#c0c4cc"
        })
      }, {
        g: common_vendor.o(handleOpenPicker),
        h: __props.hideBorder ? 1 : "",
        i: __props.disabled ? 1 : "",
        j: common_vendor.o(handleCancel),
        k: common_vendor.o(handleSubmit),
        l: __props.options.length > 0
      }, __props.options.length > 0 ? {
        m: common_vendor.f(formatOptions.value, (item, index, i0) => {
          return common_vendor.e({
            a: common_vendor.t(item[__props.labelField]),
            b: selectList.value.includes(item[__props.valueField])
          }, selectList.value.includes(item[__props.valueField]) ? {} : {}, {
            c: selectList.value.includes(item[__props.valueField]) ? 1 : "",
            d: common_vendor.o(($event) => handleToggle(item), index),
            e: index
          });
        })
      } : {
        n: common_vendor.t(__props.emptyText)
      }, {
        o: common_vendor.sr(popupRef, "3f537ef0-2", {
          "k": "popupRef"
        }),
        p: common_vendor.p({
          type: "bottom"
        })
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-3f537ef0"]]);
wx.createComponent(Component);
