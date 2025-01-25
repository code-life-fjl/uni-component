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
  __name: "cl-date-picker",
  props: {
    dateType: {
      type: String,
      default: "YYYY-MM-DD"
    },
    modelValue: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: "请选择"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    // 隐藏border
    hideBorder: {
      type: Boolean,
      default: false
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
    }
  },
  emits: ["update:modelValue", "cancel", "submit"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
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
    const dateFormatList = common_vendor.computed(() => {
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
      if (dateFormatList.value.length === 0) {
        throw new Error("传入的时间格式无法识别到有效值，有效值包含：YYYY,MM,DD,hh,mm,ss");
      }
      dateFormatList.value.forEach((item, index) => {
        let options = [];
        if (item === "YYYY") {
          if (props.yearOptions.length === 0) {
            for (let i = 1990; i <= 2050; i++) {
              options.push(i + "");
            }
          } else {
            for (let i = 1990; i <= 2050; i++) {
              options = props.yearOptions;
            }
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
      dateFormatList.value.forEach((item, index) => {
        const curOption = dateOptionList.value.find((itm) => itm.type === item);
        const curData = curOption.options.findIndex((itm) => itm === dataValList.value[index]);
        dateVal.value.push(curData);
      });
    };
    const dateChange = ({
      detail
    }) => {
      dateVal.value = detail.value;
    };
    const cancal = () => {
      emits("cancel");
      popupRef.value.close();
    };
    const handleSubmit = () => {
      let str = props.dateType;
      dateFormatList.value.forEach((item, index) => {
        const reg = new RegExp(item);
        const curOption = dateOptionList.value.find((itm) => itm.type === item);
        const curData = curOption.options[dateVal.value[index]];
        str = str.replace(reg, curData);
      });
      console.log(str, "str");
      emits("submit", str);
      emits("update:modelValue", str);
      popupRef.value.close();
    };
    const handleOpen = () => {
      if (isEmpty(props.modelValue)) {
        if (props.isNow) {
          let nowDateIdxList = [];
          const nowDateMap = getNowDate();
          dateFormatList.value.forEach((item) => {
            const curOption = dateOptionList.value.find((itm) => itm.type === item);
            let curIdx = curOption.options.findIndex((itm) => itm === nowDateMap[item]);
            console.log(curIdx, curOption, nowDateMap[item]);
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
    common_vendor.onLoad(() => {
      createDateOptions();
    });
    const close = () => {
      popupRef.value.close();
    };
    __expose({
      close,
      open: handleOpen
    });
    const handleClear = () => {
      emits("update:modelValue", "");
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.t(__props.modelValue || __props.placeholder),
        b: common_vendor.n(`input ${!__props.modelValue && "placeholder"}`),
        c: common_vendor.o(handleOpen),
        d: __props.modelValue
      }, __props.modelValue ? {
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
        h: __props.disabled ? 1 : "",
        i: __props.hideBorder ? 1 : "",
        j: common_vendor.o(cancal),
        k: common_vendor.o(handleSubmit),
        l: common_vendor.f(dateOptionList.value, (item, index, i0) => {
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
        m: dateVal.value,
        n: common_vendor.o(dateChange),
        o: common_vendor.sr(popupRef, "0657bf93-2", {
          "k": "popupRef"
        }),
        p: common_vendor.p({
          type: "bottom"
        })
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0657bf93"]]);
wx.createComponent(Component);
