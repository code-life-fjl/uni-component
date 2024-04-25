"use strict";
const common_vendor = require("../../../../common/vendor.js");
const common_assets = require("../../../../common/assets.js");
if (!Array) {
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  _easycom_uni_load_more2();
}
const _easycom_uni_load_more = () => "../../../uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  _easycom_uni_load_more();
}
const _sfc_main = {
  __name: "cl-scroll-view",
  props: {
    // 距底部/右边多远时（单位px），触发 scrolltolower 事件
    lowerThreshold: {
      type: [Number, String],
      default: 50
    },
    // 开启自定义下拉刷新
    refresherEnabled: {
      type: Boolean,
      default: true
    },
    // 自动调用接口
    autoLoad: {
      type: Boolean,
      default: true
    },
    // 接口api
    apiFun: {
      type: Function
    },
    // 请求参数
    params: {
      type: Object,
      default: () => ({})
    },
    // 分页字段
    pageNumField: {
      type: String,
      default: "pageNum"
    },
    // 一次加载条数
    loadPageNum: {
      type: Number,
      default: 10
    },
    // 接口调用之前的钩子
    beforeHook: {
      type: Function
    },
    // 接口调用成功之后的钩子
    afterHook: {
      type: Function
    },
    // 接口调用失败的钩子
    errorHook: {
      type: Function
    },
    // 调用成功后的状态码
    successCodeNum: {
      type: Number,
      default: 200
    },
    successCodeField: {
      type: String,
      default: "code"
    },
    messageField: {
      type: String,
      default: ""
    },
    successDataField: {
      type: String,
      default: "data"
    },
    errorToastConfig: {
      type: [Object, Boolean],
      default: () => ({})
    },
    loadToastConfig: {
      type: [Object, Boolean],
      default: () => ({})
    },
    emptyShowConfig: {
      type: [Object, Boolean],
      default: () => ({})
    },
    errorShowConfig: {
      type: [Object, Boolean],
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    const mergeEmptyConfig = common_vendor.computed(() => {
      if (!props.emptyShowConfig) {
        return false;
      }
      return Object.assign(
        {
          text: "暂无数据",
          imgSrc: common_assets.listEmpty
        },
        props.emptyShowConfig
      );
    });
    const mergeErrorConfig = common_vendor.computed(() => {
      if (!props.errorShowConfig) {
        return false;
      }
      return Object.assign(
        {
          text: "加载失败，请重试",
          imgSrc: common_assets.listError
        },
        props.errorShowConfig
      );
    });
    const mergeErrorToastConfig = common_vendor.computed(() => {
      if (!props.errorToastConfig) {
        return false;
      }
      return Object.assign(
        {
          duration: 1e3,
          icon: "error",
          title: "加载失败！",
          mask: true
        },
        props.errorToastConfig
      );
    });
    const mergeLoadToastConfig = common_vendor.computed(() => {
      if (!props.loadToastConfig) {
        return false;
      }
      return Object.assign({
        title: "加载中",
        mask: true
      }, props.loadToastConfig);
    });
    const list = common_vendor.ref([]);
    const isEnd = common_vendor.ref(false);
    const isRefresh = common_vendor.ref(false);
    const screenTop = common_vendor.ref(0);
    const screenOldTop = common_vendor.ref(0);
    const loadMoreStatus = common_vendor.ref("loading");
    const getList = async (type) => {
      if (mergeLoadToastConfig.value) {
        common_vendor.index.showLoading(mergeLoadToastConfig.value);
      }
      loadMoreStatus.value = "loading";
      const searchForm = props.beforeHook ? props.beforeHook(JSON.parse(JSON.stringify(props.params))) || props.params : props.params;
      try {
        const res2 = await props.apiFun(searchForm);
        if (mergeLoadToastConfig.value) {
          common_vendor.index.hideLoading();
        }
        const code = res2[props.successCodeField];
        const data = res2[props.successDataField];
        isRefresh.value = false;
        if (code === props.successCodeNum) {
          let formatData = props.afterHook ? props.afterHook(data) || data : data;
          if (type === "refresh") {
            list.value = formatData;
          } else {
            list.value = list.value.concat(formatData);
          }
          if (formatData.length < props.loadPageNum) {
            isEnd.value = true;
            loadMoreStatus.value = "noMore";
          } else {
            loadMoreStatus.value = "more";
          }
          if (list.value.length === 0) {
            loadMoreStatus.value = "noData";
          }
        } else {
          props.errorHook && errorHook(res2, "project");
          isRefresh.value = false;
          if (list.value.length === 0) {
            loadMoreStatus.value = "noDataLoadError";
          } else {
            loadMoreStatus.value = "loadError";
          }
          if (mergeErrorToastConfig.value) {
            common_vendor.index.showToast({
              ...mergeErrorToastConfig.value,
              title: props.messageField ? res2[props.messageField] : mergeErrorToastConfig.value.title
            });
          }
        }
      } catch (error) {
        isRefresh.value = false;
        if (list.length === 0) {
          loadMoreStatus.value = "noDataLoadError";
        } else {
          loadMoreStatus.value = "loadError";
        }
        common_vendor.index.hideLoading();
        props.errorHook && errorHook(res, "network");
      }
    };
    const refresherrefresh = () => {
      isRefresh.value = true;
      refresh();
    };
    const scrollView = (e) => {
      screenOldTop.value = e.detail.scrollTop;
    };
    const backTop = () => {
      screenTop.value = screenOldTop.value;
      common_vendor.nextTick$1(() => {
        screenTop.value = 0;
      });
    };
    const bootmScroll = () => {
      if (!isEnd.value) {
        props.params[props.pageNumField]++;
        getList();
      }
    };
    const refresh = () => {
      isEnd.value = false;
      props.params[props.pageNumField] = 1;
      backTop();
      list.value = [];
      getList("refresh");
    };
    if (props.autoLoad) {
      console.log(123);
      refresh();
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.r("list", {
          list: list.value
        }),
        b: ["loading", "noMore", "more"].includes(loadMoreStatus.value)
      }, ["loading", "noMore", "more"].includes(loadMoreStatus.value) ? {
        c: common_vendor.p({
          status: loadMoreStatus.value
        })
      } : {}, {
        d: loadMoreStatus.value === "noData" && mergeEmptyConfig.value
      }, loadMoreStatus.value === "noData" && mergeEmptyConfig.value ? common_vendor.e({
        e: mergeEmptyConfig.value.imgSrc
      }, mergeEmptyConfig.value.imgSrc ? {
        f: mergeEmptyConfig.value.imgSrc
      } : {}, {
        g: mergeEmptyConfig.value.text
      }, mergeEmptyConfig.value.text ? {
        h: common_vendor.t(mergeEmptyConfig.value.text)
      } : {}) : {}, {
        i: ["noDataLoadError", "loadError"].includes(loadMoreStatus.value) && mergeErrorConfig.value
      }, ["noDataLoadError", "loadError"].includes(loadMoreStatus.value) && mergeErrorConfig.value ? common_vendor.e({
        j: loadMoreStatus.value === "noDataLoadError"
      }, loadMoreStatus.value === "noDataLoadError" ? common_vendor.e({
        k: mergeErrorConfig.value.imgSrc
      }, mergeErrorConfig.value.imgSrc ? {
        l: mergeErrorConfig.value.imgSrc
      } : {}, {
        m: mergeErrorConfig.value.text
      }, mergeErrorConfig.value.text ? {
        n: common_vendor.t(mergeErrorConfig.value.text),
        o: common_vendor.o(getList),
        p: common_vendor.r("errorShowText", {
          reload: getList,
          errorShowText: mergeErrorConfig.value.text
        }),
        q: common_vendor.o(getList)
      } : {}) : {
        r: common_vendor.t(mergeErrorConfig.value.text),
        s: common_vendor.o(getList),
        t: common_vendor.r("errorShowText", {
          reload: getList,
          errorShowText: mergeErrorConfig.value.text
        })
      }) : {}, {
        v: screenTop.value,
        w: isRefresh.value,
        x: __props.refresherEnabled,
        y: __props.lowerThreshold,
        z: common_vendor.o(scrollView),
        A: common_vendor.o(bootmScroll),
        B: common_vendor.o(refresherrefresh)
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-77892465"], ["__file", "E:/code/uniapp/uni-app-components/uni_modules/cl-scroll-view/components/cl-scroll-view/cl-scroll-view.vue"]]);
wx.createComponent(Component);
