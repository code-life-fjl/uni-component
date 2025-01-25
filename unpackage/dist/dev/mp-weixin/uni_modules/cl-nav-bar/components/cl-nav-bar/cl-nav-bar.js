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
  },
  {
    path: "pages/componentPage/cl-more-select-picker/index",
    style: {
      navigationBarTitleText: "弹出多选组件"
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
const clStatusBar = () => "./cl-status-bar.js";
const getVal = (val) => typeof val === "number" ? val + "px" : val;
const _sfc_main = {
  name: "ClNavBar",
  components: {
    clStatusBar
  },
  emits: ["clickLeft", "clickRight", "clickTitle"],
  props: {
    dark: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    },
    leftText: {
      type: String,
      default: ""
    },
    rightText: {
      type: String,
      default: ""
    },
    leftIcon: {
      type: String,
      default: "left"
    },
    rightIcon: {
      type: String,
      default: ""
    },
    fixed: {
      type: [Boolean, String],
      default: true
    },
    color: {
      type: String,
      default: ""
    },
    backgroundColor: {
      type: String,
      default: ""
    },
    statusBar: {
      type: [Boolean, String],
      default: true
    },
    shadow: {
      type: [Boolean, String],
      default: false
    },
    border: {
      type: [Boolean, String],
      default: false
    },
    height: {
      type: [Number, String],
      default: 44
    },
    leftWidth: {
      type: [Number, String],
      default: 60
    },
    rightWidth: {
      type: [Number, String],
      default: 60
    },
    // 自动返回时间
    autoBack: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    console.log(this.$attrs);
  },
  computed: {
    themeBgColor() {
      if (this.dark) {
        if (this.backgroundColor) {
          return this.backgroundColor;
        } else {
          return this.dark ? "#333" : "#FFF";
        }
      }
      return this.backgroundColor || "#FFF";
    },
    themeColor() {
      if (this.dark) {
        if (this.color) {
          return this.color;
        } else {
          return this.dark ? "#fff" : "#333";
        }
      }
      return this.color || "#333";
    },
    navbarHeight() {
      return getVal(this.height);
    },
    leftIconWidth() {
      return getVal(this.leftWidth);
    },
    rightIconWidth() {
      return getVal(this.rightWidth);
    }
  },
  methods: {
    onClickLeft() {
      if (this.autoBack) {
        common_vendor.index.navigateBack();
      } else {
        this.$emit("clickLeft");
      }
    },
    onClickRight() {
      this.$emit("clickRight");
    },
    onClickTitle() {
      this.$emit("clickTitle");
    },
    // 自动获取title
    getCurrentPageTitle() {
      var _a, _b;
      if (this.title) {
        return this.title;
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
    }
  }
};
if (!Array) {
  const _component_clStatusBar = common_vendor.resolveComponent("clStatusBar");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  (_component_clStatusBar + _easycom_uni_icons2)();
}
const _easycom_uni_icons = () => "../../../uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.statusBar
  }, $props.statusBar ? {} : {}, {
    b: $props.leftIcon.length > 0
  }, $props.leftIcon.length > 0 ? {
    c: common_vendor.p({
      color: $options.themeColor,
      type: $props.leftIcon,
      size: "20"
    })
  } : {}, {
    d: $props.leftText.length
  }, $props.leftText.length ? {
    e: common_vendor.t($props.leftText),
    f: $options.themeColor,
    g: !$props.leftIcon.length > 0 ? 1 : ""
  } : {}, {
    h: common_vendor.o((...args) => $options.onClickLeft && $options.onClickLeft(...args)),
    i: $options.leftIconWidth,
    j: common_vendor.t($options.getCurrentPageTitle()),
    k: $options.themeColor,
    l: common_vendor.o((...args) => $options.onClickTitle && $options.onClickTitle(...args)),
    m: $props.rightIcon.length
  }, $props.rightIcon.length ? {
    n: common_vendor.p({
      color: $options.themeColor,
      type: $props.rightIcon,
      size: "22"
    })
  } : {}, {
    o: $props.rightText.length && !$props.rightIcon.length
  }, $props.rightText.length && !$props.rightIcon.length ? {
    p: common_vendor.t($props.rightText),
    q: $options.themeColor
  } : {}, {
    r: common_vendor.o((...args) => $options.onClickRight && $options.onClickRight(...args)),
    s: $options.rightIconWidth,
    t: $options.themeColor,
    v: $options.themeBgColor,
    w: $options.navbarHeight,
    x: $props.fixed ? 1 : "",
    y: $props.shadow ? 1 : "",
    z: $props.border ? 1 : "",
    A: $options.themeBgColor,
    B: $options.themeColor,
    C: $props.fixed
  }, $props.fixed ? common_vendor.e({
    D: $props.statusBar
  }, $props.statusBar ? {} : {}, {
    E: $options.navbarHeight
  }) : {}, {
    F: $props.dark ? 1 : "",
    G: $props.fixed ? 1 : ""
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-99e6e796"]]);
wx.createComponent(Component);
