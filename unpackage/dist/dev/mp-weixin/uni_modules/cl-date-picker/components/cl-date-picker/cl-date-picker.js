"use strict";
const common_vendor = require("../../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  _easycom_uni_popup2();
}
const _easycom_uni_popup = () => "../../../uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  _easycom_uni_popup();
}
const _sfc_main = {
  __name: "cl-date-picker",
  props: {
    dateType: {
      type: String,
      default: "YYYY-MM-DD hh-mm-ss"
    },
    modelValue: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue", "cancel", "submit"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const popupRef = common_vendor.ref();
    common_vendor.ref([]);
    common_vendor.ref(true);
    const dateListMap = common_vendor.reactive({
      YYYY: [],
      MM: [],
      DD: [],
      hh: [],
      mm: [],
      ss: []
    });
    common_vendor.ref([]);
    common_vendor.ref([]);
    common_vendor.ref([]);
    common_vendor.ref([]);
    common_vendor.ref([]);
    common_vendor.ref([]);
    const dateVal = common_vendor.ref([]);
    const dateTypeMap = [
      {
        type: "YYYY",
        regExp: /^\d{4}$/
      },
      {
        type: "YYYY-MM",
        regExp: /^\d{4}-\d{2}$/
      },
      {
        type: "YYYY-MM-DD",
        regExp: /^\d{4}-\d{2}-\d{2}/
      },
      {
        type: "YYYY-MM-DD hh",
        regExp: /^\d{4}-\d{2}-\d{2} \d{2}$/
      },
      {
        type: "YYYY-MM-DD hh:mm",
        regExp: /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/
      },
      {
        type: "YYYY-MM-DD hh:mm:ss",
        regExp: /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/
      }
    ];
    const createDateList = () => {
      if (props.dateType.includes("YYYY")) {
        for (let i = 1990; i <= 2050; i++) {
          dateListMap.YYYY.push(i + "");
        }
      }
      if (props.dateType.includes("MM")) {
        for (let i = 1; i <= 12; i++) {
          if (i <= 9) {
            dateListMap.MM.push("0" + i);
          } else {
            dateListMap.MM.push(i + "");
          }
        }
      }
      if (props.dateType.includes("DD")) {
        for (let i = 1; i <= 31; i++) {
          if (i <= 9) {
            dateListMap.DD.push("0" + i);
          } else {
            dateListMap.DD.push(i + "");
          }
        }
      }
      if (props.dateType.includes("hh")) {
        for (let i = 0; i <= 11; i++) {
          if (i <= 9) {
            dateListMap.hh.push("0" + i);
          } else {
            dateListMap.hh.push(i + "");
          }
        }
      }
      if (props.dateType.includes("mm")) {
        for (let i = 0; i <= 59; i++) {
          if (i <= 9) {
            dateListMap.mm.push("0" + i);
          } else {
            dateListMap.mm.push(i + "");
          }
        }
      }
      if (props.dateType.includes("ss")) {
        for (let i = 0; i <= 59; i++) {
          if (i <= 9) {
            dateListMap.ss.push("0" + i);
          } else {
            dateListMap.ss.push(i + "");
          }
        }
      }
    };
    const showDate = (dateList) => {
      dateVal.value = [];
      const dateTypeList = props.dateType.split(/[-,:, ]/);
      console.log(dateTypeList, "dateTypeList");
      dateTypeList.forEach((item, index) => {
        if (item === "YYYY") {
          const curYearIdx = dateListMap[item].findIndex((item2) => item2 == dateList[index]);
          dateVal.value[index] = curYearIdx;
        }
        if (item === "MM") {
          const curMonthIdx = dateListMap[item].findIndex((item2) => item2 === dateList[index]);
          dateVal.value[index] = curMonthIdx;
        }
        if (item === "DD") {
          const curDayIdx = dateListMap[item].findIndex((item2) => item2 === dateList[index]);
          dateVal.value[index] = curDayIdx;
        }
        if (item === "hh") {
          const curHourIdx = dateListMap[item].findIndex((item2) => item2 === dateList[index]);
          console.log(curHourIdx, "curHourIdx");
          dateVal.value[index] = curHourIdx;
        }
        if (item === "mm") {
          const curMinuteIdx = dateListMap[item].findIndex((item2) => item2 === dateList[index]);
          dateVal.value[index] = curMinuteIdx;
        }
        if (item === "ss") {
          const curSecondIdx = dateListMap[item].findIndex((item2) => item2 === dateList[index]);
          dateVal.value[index] = curSecondIdx;
        }
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
    const submit = () => {
      const resDate = props.dateType.replace(/YYYY/g, dateListMap.YYYY[dateVal.value[0]]).replace(/MM/g, dateListMap.MM[dateVal.value[1]]).replace(/DD/g, dateListMap.DD[dateVal.value[2]]).replace(/hh/g, dateListMap.hh[dateVal.value[3]]).replace(/mm/g, dateListMap.mm[dateVal.value[4]]).replace(/ss/g, dateListMap.ss[dateVal.value[5]]);
      console.log(resDate, "resDate");
      emits("submit", resDate);
      emits("update:modelValue", resDate);
      popupRef.value.close();
    };
    const open = () => {
      const idx = dateTypeMap.findIndex((item) => item.type === props.dateType);
      if (idx < 0) {
        console.error("传入时间格式有误，支持：" + dateTypeMap.map((item) => item.type));
        return;
      }
      createDateList();
      dateTypeMap[idx]["type"];
      const curRegExp = dateTypeMap[idx]["regExp"];
      if (!props.modelValue) {
        dateVal.value = [];
      } else {
        if (curRegExp.test(props.modelValue)) {
          const valList = props.modelValue.split(/[-,:, ]/);
          common_vendor.nextTick$1(() => showDate(valList));
        } else {
          console.error("传入的时间值与定义的时间格式不匹配");
          return;
        }
      }
      popupRef.value.open();
    };
    const close = () => {
      popupRef.value.close();
    };
    __expose({
      close,
      open
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(cancal),
        b: common_vendor.t(dateVal.value),
        c: common_vendor.o(submit),
        d: __props.dateType.includes("YYYY")
      }, __props.dateType.includes("YYYY") ? {
        e: common_vendor.f(dateListMap["YYYY"], (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: index
          };
        })
      } : {}, {
        f: __props.dateType.includes("MM")
      }, __props.dateType.includes("MM") ? {
        g: common_vendor.f(dateListMap["MM"], (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: index
          };
        })
      } : {}, {
        h: __props.dateType.includes("DD")
      }, __props.dateType.includes("DD") ? {
        i: common_vendor.f(dateListMap["DD"], (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: index
          };
        })
      } : {}, {
        j: __props.dateType.includes("hh")
      }, __props.dateType.includes("hh") ? {
        k: common_vendor.f(dateListMap["hh"], (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: index
          };
        })
      } : {}, {
        l: __props.dateType.includes("mm")
      }, __props.dateType.includes("mm") ? {
        m: common_vendor.f(dateListMap["mm"], (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: index
          };
        })
      } : {}, {
        n: __props.dateType.includes("ss")
      }, __props.dateType.includes("ss") ? {
        o: common_vendor.f(dateListMap["ss"], (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: index
          };
        })
      } : {}, {
        p: dateVal.value,
        q: common_vendor.o(dateChange),
        r: common_vendor.sr(popupRef, "0657bf93-0", {
          "k": "popupRef"
        }),
        s: common_vendor.p({
          type: "bottom"
        })
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0657bf93"]]);
wx.createComponent(Component);
