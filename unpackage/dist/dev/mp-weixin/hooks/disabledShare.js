"use strict";
const common_vendor = require("../common/vendor.js");
const allowSharePageList = ["pages/course/detail"];
const disabledShare = {
  onLoad: () => {
    const pages = getCurrentPages();
    let nowPage = pages[pages.length - 1];
    common_vendor.index.__f__("log", "at hooks/disabledShare.js:9", nowPage, "nowPage");
    if (!allowSharePageList.includes(nowPage.route || "")) {
      common_vendor.index.hideShareMenu({ hideShareItems: [] });
    }
  },
  onShareAppMessage: () => {
  },
  onShareTimeline: () => {
  }
};
exports.disabledShare = disabledShare;
//# sourceMappingURL=../../.sourcemap/mp-weixin/hooks/disabledShare.js.map
