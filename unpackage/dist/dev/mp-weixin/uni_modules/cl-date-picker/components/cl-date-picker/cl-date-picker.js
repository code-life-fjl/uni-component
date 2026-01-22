"use strict";
const common_vendor = require("../../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_cl_input2 = common_vendor.resolveComponent("cl-input");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_icons2 + _easycom_cl_input2 + _easycom_uni_popup2)();
}
const _easycom_uni_icons = () => "../../../uni-icons/components/uni-icons/uni-icons.js";
const _easycom_cl_input = () => "../../../cl-input/components/cl-input/cl-input.js";
const _easycom_uni_popup = () => "../../../uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_cl_input + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "cl-date-picker",
  props: /* @__PURE__ */ common_vendor.mergeModels({
    dateType: {
      type: String,
      default: "YYYY-MM-DD"
    },
    placeholder: {
      type: String,
      default: "请选择"
    },
    clearable: {
      type: Boolean,
      default: true
    },
    // 年份下拉选项
    yearOptions: {
      type: Array,
      default: () => []
    },
    // 打开弹窗默认选中当前时间
    isNow: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ common_vendor.mergeModels(["cancel", "submit"], ["update:modelValue"]),
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const atrrs = common_vendor.useAttrs();
    common_vendor.index.__f__("log", "at uni_modules/cl-date-picker/components/cl-date-picker/cl-date-picker.vue:65", atrrs);
    const modelValue = common_vendor.useModel(__props, "modelValue");
    const emits = __emit;
    const popupRef = common_vendor.ref();
    const dateOptionList = common_vendor.ref([]);
    const dateVal = common_vendor.ref([]);
    const dateLabelMap = {
      YYYY: "年",
      MM: "月",
      DD: "日",
      hh: "时",
      mm: "分",
      ss: "秒"
    };
    const isEmpty = (val) => {
      return val === null || val === "" || val === void 0;
    };
    const supplementZero = (num) => {
      return num >= 10 ? num + "" : "0" + num;
    };
    const getNowDate = () => {
      const now = /* @__PURE__ */ new Date();
      const YYYY = now.getFullYear() + "";
      const MM = supplementZero(now.getMonth() + 1);
      const DD = supplementZero(now.getDate());
      const hh = supplementZero(now.getHours());
      const mm = supplementZero(now.getMinutes());
      const ss = supplementZero(now.getSeconds());
      return {
        YYYY,
        MM,
        DD,
        hh,
        mm,
        ss
      };
    };
    const dateTypetList = common_vendor.computed(() => {
      const regex = /(YYYY|MM|DD|hh|mm|ss)/g;
      const matches = props.dateType.match(regex);
      return matches || [];
    });
    const dataValList = common_vendor.computed(() => {
      const regex = /(\d{4}|\d{2}|\d{2}|\d{2}|\d{2}|\d{2})/g;
      const matches = props.modelValue.match(regex);
      return matches || [];
    });
    const createDateOptions = () => {
      dateOptionList.value = [];
      if (dateTypetList.value.length === 0) {
        throw new Error("传入的时间格式无法识别到有效值，有效值包含：YYYY,MM,DD,hh,mm,ss");
      }
      dateTypetList.value.forEach((item, index) => {
        let options = [];
        if (item === "YYYY") {
          if (props.yearOptions.length === 0) {
            for (let i = 1990; i <= 2050; i++) {
              options.push(i + "");
            }
          } else {
            options = props.yearOptions;
          }
        }
        if (item === "MM") {
          for (let i = 1; i <= 12; i++) {
            options.push(supplementZero(i));
          }
        }
        if (item === "DD") {
          for (let i = 1; i <= 31; i++) {
            options.push(supplementZero(i));
          }
        }
        if (item === "hh") {
          for (let i = 0; i <= 23; i++) {
            options.push(supplementZero(i));
          }
        }
        if (item === "mm" || item === "ss") {
          for (let i = 0; i <= 59; i++) {
            options.push(supplementZero(i));
          }
        }
        dateOptionList.value.push({
          type: item,
          options
        });
      });
    };
    const showDate = () => {
      dateVal.value = [];
      dateTypetList.value.forEach((item, index) => {
        const curOption = dateOptionList.value.find((itm) => itm.type === item);
        const curData = curOption.options.findIndex((itm) => itm === dataValList.value[index]);
        dateVal.value.push(curData);
      });
    };
    const dateChange = ({
      detail
    }) => {
      common_vendor.index.__f__("log", "at uni_modules/cl-date-picker/components/cl-date-picker/cl-date-picker.vue:206", detail, "detail");
      dateVal.value = detail.value;
    };
    const cancal = () => {
      emits("cancel");
      popupRef.value.close();
    };
    const handleSubmit = () => {
      let str = props.dateType;
      dateTypetList.value.forEach((item, index) => {
        const reg = new RegExp(item);
        const curOption = dateOptionList.value.find((itm) => itm.type === item);
        common_vendor.index.__f__("log", "at uni_modules/cl-date-picker/components/cl-date-picker/cl-date-picker.vue:220", curOption, "curOption");
        const curData = curOption.options[dateVal.value[index]];
        str = str.replace(reg, curData);
      });
      emits("submit", str);
      modelValue.value = str;
      popupRef.value.close();
    };
    const handleOpen = () => {
      createDateOptions();
      if (isEmpty(props.modelValue)) {
        if (props.isNow) {
          let nowDateIdxList = [];
          const nowDateMap = getNowDate();
          dateTypetList.value.forEach((item) => {
            const curOption = dateOptionList.value.find((itm) => itm.type === item);
            let curIdx = curOption.options.findIndex((itm) => itm === nowDateMap[item]);
            nowDateIdxList.push(curIdx);
          });
          dateVal.value = nowDateIdxList;
        } else {
          dateVal.value = [];
        }
      } else {
        common_vendor.nextTick$1(() => showDate());
      }
      popupRef.value.open();
    };
    const close = () => {
      popupRef.value.close();
    };
    __expose({
      close,
      open: handleOpen
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: !modelValue.value && !__props.disabled
      }, !modelValue.value && !__props.disabled ? {
        b: common_vendor.p({
          type: "bottom",
          size: 14,
          color: "#999"
        })
      } : {}, {
        c: common_vendor.o(handleOpen),
        d: common_vendor.o(($event) => modelValue.value = $event),
        e: common_vendor.p({
          inputType: "falseInput",
          placeholder: __props.placeholder,
          disabled: __props.disabled,
          ...common_vendor.unref(atrrs),
          modelValue: modelValue.value
        }),
        f: common_vendor.o(cancal),
        g: common_vendor.o(handleSubmit),
        h: common_vendor.f(dateOptionList.value, (item, index, i0) => {
          return {
            a: common_vendor.f(item.options, (itm, idx, i1) => {
              return {
                a: common_vendor.t(itm),
                b: idx
              };
            }),
            b: common_vendor.t(dateLabelMap[item.type]),
            c: index
          };
        }),
        i: dateVal.value,
        j: common_vendor.o(dateChange),
        k: common_vendor.sr(popupRef, "0657bf93-2", {
          "k": "popupRef"
        }),
        l: common_vendor.p({
          type: "bottom"
        })
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0657bf93"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/cl-date-picker/components/cl-date-picker/cl-date-picker.js.map
