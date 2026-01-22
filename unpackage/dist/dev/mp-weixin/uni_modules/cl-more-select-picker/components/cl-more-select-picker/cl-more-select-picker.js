"use strict";
const common_vendor = require("../../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_icons2 + _easycom_uni_easyinput2 + _easycom_uni_popup2)();
}
const _easycom_uni_icons = () => "../../../uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_easyinput = () => "../../../uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_popup = () => "../../../uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_easyinput + _easycom_uni_popup)();
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
    },
    // checkbox  点击勾选框  row  点击行数据
    selectTarget: {
      type: String,
      default: "row"
    },
    isFilter: {
      type: Boolean,
      default: true
    },
    maxLength: {
      type: Number,
      default: void 0
    }
  },
  emits: ["update:modelValue", "cancel", "submit", "clear", "change"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const isType = (type, val) => `[object ${type}]` === Object.prototype.toString.call(val);
    const emits = __emit;
    const formatList = common_vendor.ref([]);
    const filterList = common_vendor.ref([]);
    const keywords = common_vendor.ref("");
    common_vendor.watch(() => props.options, () => {
      formatList.value = props.options.map((item) => {
        if (isType("Number", item) || isType("String", item)) {
          return {
            [props.labelField]: item,
            [props.valueField]: item
          };
        } else {
          return item;
        }
      });
      filterList.value = formatList.value;
      keywords.value = "";
    }, {
      deep: true,
      immediate: true
    });
    common_vendor.watch(() => keywords.value, (newV) => {
      filterList.value = formatList.value.filter((item) => item[props.labelField].includes(keywords.value));
      common_vendor.index.__f__("log", "at uni_modules/cl-more-select-picker/components/cl-more-select-picker/cl-more-select-picker.vue:113", filterList.value);
    }, {
      deep: true,
      immediate: true
    });
    const selectList = common_vendor.ref([]);
    const showLabel = common_vendor.computed(() => {
      if (props.modelValue.length > 0) {
        return formatList.value.filter((item) => props.modelValue.includes(item[props.valueField])).map((item) => item[props.labelField]).join(props.interval);
      } else {
        return props.placeholder;
      }
    });
    const hasSelect = common_vendor.computed(() => {
      var _a;
      return ((_a = props.modelValue) == null ? void 0 : _a.length) > 0;
    });
    const handleClear = () => {
      common_vendor.index.__f__("log", "at uni_modules/cl-more-select-picker/components/cl-more-select-picker/cl-more-select-picker.vue:135", 123213);
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
    const handleToggle = (item, type) => {
      if (props.selectTarget === "checkbox" && type !== "checkbox")
        return;
      const idx = selectList.value.findIndex((itm) => itm === item[props.valueField]);
      if (idx === -1 && typeof props.maxLength === "number" && selectList.value.length === props.maxLength) {
        common_vendor.index.showToast({
          title: `最多只能选择${props.maxLength}条数据`,
          icon: "none",
          duration: 500
        });
        return;
      }
      if (idx > -1) {
        selectList.value.splice(idx, 1);
      } else {
        selectList.value.push(item[props.valueField]);
      }
      emits("change", item, idx === -1, selectList.value);
    };
    const popupRef = common_vendor.ref();
    const handleOpenPicker = () => {
      keywords.value = "";
      selectList.value = JSON.parse(JSON.stringify(props.modelValue));
      popupRef.value.open();
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.t(hasSelect.value ? showLabel.value : props.placeholder),
        b: common_vendor.o(handleOpenPicker),
        c: !hasSelect.value ? 1 : "",
        d: hasSelect.value
      }, hasSelect.value ? {
        e: common_vendor.o(handleClear),
        f: common_vendor.p({
          type: "clear",
          size: 24,
          color: "#c0c4cc"
        })
      } : {
        g: common_vendor.p({
          type: "bottom",
          size: 20,
          color: "#c0c4cc"
        })
      }, {
        h: __props.hideBorder ? 1 : "",
        i: __props.disabled ? 1 : "",
        j: common_vendor.o(handleCancel),
        k: __props.isFilter
      }, __props.isFilter ? {
        l: common_vendor.o(($event) => keywords.value = $event),
        m: common_vendor.p({
          placeholder: "请输入关键字查询",
          modelValue: keywords.value
        })
      } : {}, {
        n: common_vendor.o(handleSubmit),
        o: filterList.value.length > 0
      }, filterList.value.length > 0 ? {
        p: common_vendor.f(filterList.value, (item, index, i0) => {
          return common_vendor.e({
            a: common_vendor.t(item[__props.labelField]),
            b: selectList.value.includes(item[__props.valueField])
          }, selectList.value.includes(item[__props.valueField]) ? {} : {}, {
            c: selectList.value.includes(item[__props.valueField]) ? 1 : "",
            d: common_vendor.o(($event) => handleToggle(item, "checkbox"), index),
            e: index,
            f: common_vendor.o(($event) => handleToggle(item, "row"), index)
          });
        })
      } : {
        q: common_vendor.t(__props.emptyText)
      }, {
        r: common_vendor.sr(popupRef, "3f537ef0-2", {
          "k": "popupRef"
        }),
        s: common_vendor.p({
          type: "bottom"
        })
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-3f537ef0"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/cl-more-select-picker/components/cl-more-select-picker/cl-more-select-picker.js.map
