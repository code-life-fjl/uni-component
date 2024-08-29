"use strict";
const common_vendor = require("../../../../common/vendor.js");
const pages = [
  {
    path: "pages/index/index",
    style: {
      navigationBarTitleText: "uni-app"
    }
  },
  {
    path: "pages/componentPage/cl-select-picker/index",
    style: {
      navigationBarTitleText: "cl-select-picker"
    }
  },
  {
    path: "pages/componentPage/cl-scroll-view/index",
    style: {
      navigationBarTitleText: "cl-scroll-view"
    }
  },
  {
    path: "pages/componentPage/cl-select/index",
    style: {
      navigationBarTitleText: "cl-select"
    }
  },
  {
    path: "pages/componentPage/cl-nav-bar/index",
    style: {
      navigationBarTitleText: "我是自定义标题",
      navigationStyle: "custom"
    }
  },
  {
    path: "pages/componentPage/cl-date-picker/index",
    style: {
      navigationBarTitleText: "时间选择器"
    }
  }
];
const globalStyle = {
  navigationBarTextStyle: "black",
  navigationBarTitleText: "uni-app",
  navigationBarBackgroundColor: "#F8F8F8",
  backgroundColor: "#F8F8F8"
};
const uniIdRouter = {};
const pageData = {
  pages,
  globalStyle,
  uniIdRouter
};
if (!Array) {
  const _easycom_uni_nav_bar2 = common_vendor.resolveComponent("uni-nav-bar");
  _easycom_uni_nav_bar2();
}
const _easycom_uni_nav_bar = () => "../../../uni-nav-bar/components/uni-nav-bar/uni-nav-bar.js";
if (!Math) {
  _easycom_uni_nav_bar();
}
const _sfc_main = {
  __name: "cl-nav-bar",
  props: {
    title: {
      type: String,
      default: ""
    },
    statusBar: {
      type: Boolean,
      default: true
    },
    fixed: {
      type: Boolean,
      default: true
    },
    leftIcon: {
      type: String,
      default: "left"
    },
    border: {
      type: Boolean,
      default: false
    },
    clickLeft: {
      type: Function
    },
    clickright: {
      type: Function
    }
  },
  emits: ["getHeight"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const $attrs = common_vendor.useAttrs();
    const emits = __emit;
    const leftSoltVisible = common_vendor.computed(() => {
      return common_vendor.useSlots().left;
    });
    const rightSoltVisible = common_vendor.computed(() => {
      return common_vendor.useSlots().right;
    });
    common_vendor.computed(() => {
      return common_vendor.useSlots().default;
    });
    common_vendor.onReady(() => {
      const pageInstace = common_vendor.getCurrentInstance();
      const query = common_vendor.index.createSelectorQuery().in(pageInstace == null ? void 0 : pageInstace.proxy);
      query.select(".cl-nav-bar").boundingClientRect((data) => {
        emits("getHeight", data.height);
      }).exec();
    });
    const getCurrentPageTitle = () => {
      var _a, _b;
      if (props.title) {
        return props.title;
      }
      const pageList = getCurrentPages();
      const curPage = pageList[pageList.length - 1];
      if (curPage) {
        const {
          route
        } = curPage;
        const {
          subPackages,
          pages: pages2
        } = pageData;
        for (let page of pages2) {
          if (page.path === route) {
            return (_a = page.style) == null ? void 0 : _a.navigationBarTitleText;
          }
        }
        for (let subPackage of subPackages) {
          if (route.includes(subPackage.root)) {
            const page = subPackage.pages.find((item) => `${subPackage.root}/${item.path}` === route);
            if (page) {
              return (_b = page.style) == null ? void 0 : _b.navigationBarTitleText;
            }
          }
        }
      }
    };
    const clickLeft = () => {
      if (typeof props.clickLeft === "function") {
        props.clickLeft();
      } else {
        common_vendor.index.navigateBack();
      }
    };
    const clickright = () => {
      if (typeof props.clickright === "function") {
        props.clickright();
      }
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: leftSoltVisible.value
      }, leftSoltVisible.value ? {} : {}, {
        b: rightSoltVisible.value
      }, rightSoltVisible.value ? {} : {}, {
        c: common_vendor.o(clickLeft),
        d: common_vendor.o(clickright),
        e: common_vendor.p({
          ...common_vendor.unref($attrs),
          border: __props.border,
          statusBar: __props.statusBar,
          fixed: __props.fixed,
          leftIcon: __props.leftIcon,
          title: getCurrentPageTitle()
        })
      });
    };
  }
};
wx.createComponent(_sfc_main);
