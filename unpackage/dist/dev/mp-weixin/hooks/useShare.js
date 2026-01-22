"use strict";
const common_vendor = require("../common/vendor.js");
function useShare(customConfig, showmenuConfig) {
  common_vendor.onMounted(() => {
    common_vendor.index.showShareMenu({
      menus: ["shareAppMessage", "shareTimeline"]
    });
  });
  const instance = common_vendor.getCurrentInstance();
  if (!instance)
    return;
  const pageList = getCurrentPages();
  const nowPage = pageList[pageList.length - 1];
  const defaultShareConfig = {
    title: "默认分享标题",
    path: "/" + nowPage.route,
    // 默认分享路径
    // imageUrl: '/static/share-default.png', // 默认分享图片
    // 可根据来源自定义不同分享内容
    getShareInfo: (res) => {
      return {
        ...defaultShareConfig
      };
    }
  };
  ({
    ...defaultShareConfig,
    ...customConfig
  });
  common_vendor.onShareAppMessage((res) => {
    common_vendor.index.__f__("log", "at hooks/useShare.js:41", res);
    return {
      title: "243"
    };
  });
  common_vendor.onShareTimeline((res) => {
    common_vendor.index.__f__("log", "at hooks/useShare.js:47", "onShareTimeline", res);
  });
}
exports.useShare = useShare;
//# sourceMappingURL=../../.sourcemap/mp-weixin/hooks/useShare.js.map
