"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "uniCombox",
  emits: ["input", "update:modelValue"],
  props: {
    border: {
      type: Boolean,
      default: true
    },
    label: {
      type: String,
      default: ""
    },
    labelWidth: {
      type: String,
      default: "auto"
    },
    placeholder: {
      type: String,
      default: ""
    },
    candidates: {
      type: Array,
      default() {
        return [];
      }
    },
    emptyTips: {
      type: String,
      default: "无匹配项"
    },
    modelValue: {
      type: [String, Number],
      default: ""
    }
  },
  data() {
    return {
      showSelector: false,
      inputVal: ""
    };
  },
  computed: {
    labelStyle() {
      if (this.labelWidth === "auto") {
        return "";
      }
      return `width: ${this.labelWidth}`;
    },
    filterCandidates() {
      return this.candidates.filter((item) => {
        return item.toString().indexOf(this.inputVal) > -1;
      });
    },
    filterCandidatesLength() {
      return this.filterCandidates.length;
    }
  },
  watch: {
    modelValue: {
      handler(newVal) {
        this.inputVal = newVal;
      },
      immediate: true
    }
  },
  methods: {
    toggleSelector() {
      this.showSelector = !this.showSelector;
    },
    onFocus() {
      this.showSelector = true;
    },
    onBlur() {
      setTimeout(() => {
        this.showSelector = false;
      }, 153);
    },
    onSelectorClick(item) {
      this.inputVal = item[this.label];
      this.showSelector = false;
      this.$emit("input", this.inputVal);
      this.$emit("update:modelValue", item);
    },
    onInput() {
      setTimeout(() => {
        this.$emit("input", this.inputVal);
        this.$emit("update:modelValue", this.inputVal);
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../../uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.placeholder,
    b: common_vendor.o([($event) => $data.inputVal = $event.detail.value, (...args) => $options.onInput && $options.onInput(...args)]),
    c: common_vendor.o((...args) => $options.onFocus && $options.onFocus(...args)),
    d: common_vendor.o((...args) => $options.onBlur && $options.onBlur(...args)),
    e: $data.inputVal,
    f: common_vendor.o($options.toggleSelector),
    g: common_vendor.p({
      type: $data.showSelector ? "top" : "bottom",
      size: "14",
      color: "#999"
    }),
    h: $data.showSelector
  }, $data.showSelector ? common_vendor.e({
    i: $options.filterCandidatesLength === 0
  }, $options.filterCandidatesLength === 0 ? {
    j: common_vendor.t($props.emptyTips)
  } : {}, {
    k: common_vendor.f($options.filterCandidates, (item, index, i0) => {
      return {
        a: common_vendor.t(item[$props.label]),
        b: index,
        c: common_vendor.o(($event) => $options.onSelectorClick(item), index)
      };
    })
  }) : {}, {
    l: common_vendor.n($props.border ? "" : "uni-combox__no-border")
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-b8820634"], ["__file", "E:/code/uniapp/uni-app-components/uni_modules/uni-comboxObj/components/uni-comboxObj/uni-comboxObj.vue"]]);
wx.createComponent(Component);
