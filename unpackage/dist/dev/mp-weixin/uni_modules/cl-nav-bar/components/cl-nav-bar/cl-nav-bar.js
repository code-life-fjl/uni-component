"use strict";
const common_vendor = require("../../../../common/vendor.js");
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
    common_vendor.onReady(() => {
      const pageInstace = common_vendor.getCurrentInstance();
      const query = common_vendor.index.createSelectorQuery().in(pageInstace == null ? void 0 : pageInstace.proxy);
      query.select(".cl-nav-bar").boundingClientRect((data) => {
        emits("getHeight", data.height);
      }).exec();
    });
    const getCurrentPageTitle = () => {
      if (props.title) {
        return props.title;
      }
      const pageList = getCurrentPages();
      const curPage = pageList[pageList.length - 1];
      if (curPage) {
        const {
          $page
        } = curPage;
        return $page.meta.navigationBar.titleText;
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
      return {
        a: common_vendor.o(clickLeft),
        b: common_vendor.o(clickright),
        c: common_vendor.p({
          ...common_vendor.unref($attrs),
          border: __props.border,
          statusBar: __props.statusBar,
          fixed: __props.fixed,
          leftIcon: __props.leftIcon,
          title: getCurrentPageTitle()
        })
      };
    };
  }
};
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/cl-nav-bar/components/cl-nav-bar/cl-nav-bar.js.map
