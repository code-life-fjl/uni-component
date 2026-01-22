"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const hooks_disabledShare = require("./hooks/disabledShare.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/componentPage/cl-select-picker/index.js";
  "./pages/componentPage/cl-scroll-view/index.js";
  "./pages/componentPage/cl-select/index.js";
  "./pages/componentPage/cl-nav-bar/index.js";
  "./pages/componentPage/cl-date-picker/index.js";
  "./pages/componentPage/cl-more-select-picker/index.js";
  "./pages/componentPage/cl-autocomplete/index.js";
  "./pages/componentPage/cl-auto-page-list/index.js";
  "./pages/componentPage/cl-tabs/index.js";
  "./pages/componentPage/cl-table/index.js";
}
const _sfc_main = {
  onLaunch: function() {
    common_vendor.index.__f__("log", "at App.vue:4", "App Launch");
  },
  onShow: function() {
    common_vendor.index.__f__("log", "at App.vue:7", "App Show");
  },
  onHide: function() {
    common_vendor.index.__f__("log", "at App.vue:10", "App Hide");
  }
};
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  app.mixin(hooks_disabledShare.disabledShare);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
//# sourceMappingURL=../.sourcemap/mp-weixin/app.js.map
