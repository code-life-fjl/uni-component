"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_cl_scroll_view2 = common_vendor.resolveComponent("cl-scroll-view");
  _easycom_cl_scroll_view2();
}
const _easycom_cl_scroll_view = () => "../../../uni_modules/cl-scroll-view/components/cl-scroll-view/cl-scroll-view.js";
if (!Math) {
  _easycom_cl_scroll_view();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const searchParams = common_vendor.reactive({
      pageSize: 10,
      pageNum: 1
    });
    const searchParams1 = common_vendor.reactive({
      pageSize: 10,
      pageNum: 1
    });
    const searchParams2 = common_vendor.reactive({
      pageSize: 10,
      pageNum: 1
    });
    const searchParams3 = common_vendor.reactive({
      pageSize: 10,
      pageNum: 1
    });
    common_vendor.reactive({
      pageSize: 10,
      pageNum: 1
    });
    const apiFun = (params) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const data = Array.from({
            length: params.pageSize
          }, (_, i) => i + 1 + (params.pageNum - 1) * params.pageSize);
          resolve({
            code: 200,
            data,
            message: "查询成功！"
          });
        }, 1e3);
      });
    };
    const apiFun1 = (params) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const data = Array.from({
            length: params.pageSize
          }, (_, i) => i + 1 + (params.pageNum - 1) * params.pageSize);
          resolve({
            code: 200,
            data,
            message: "查询成功！"
          });
        }, 1e3);
      });
    };
    const apiFun2 = (params) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            code: 200,
            data: [],
            message: "查询成功！"
          });
        }, 1e3);
      });
    };
    const apiFun3 = (params) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            code: 500,
            data: [],
            message: "查询失败！"
          });
        }, 1e3);
      });
    };
    const beforeHook = (params) => {
      params.pageNum = 10;
      return params;
    };
    const afterHook = (list) => {
      return list.map((item) => `我是处理过的返回值${item}`);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.w(({
          list
        }, s0, i0) => {
          return {
            a: common_vendor.f(list, (item, k1, i1) => {
              return {
                a: common_vendor.t(item),
                b: item
              };
            }),
            b: i0,
            c: s0
          };
        }, {
          name: "list",
          path: "a",
          vueId: "a70f1c9b-0"
        }),
        b: common_vendor.p({
          apiFun,
          params: searchParams
        }),
        c: common_vendor.w(({
          item
        }, s0, i0) => {
          return {
            a: common_vendor.t(item),
            b: i0,
            c: s0
          };
        }, {
          name: "list-item",
          path: "c",
          vueId: "a70f1c9b-1"
        }),
        d: common_vendor.p({
          apiFun,
          params: searchParams
        }),
        e: common_vendor.w(({
          list
        }, s0, i0) => {
          return {
            a: common_vendor.f(list, (item, k1, i1) => {
              return {
                a: common_vendor.t(item),
                b: item
              };
            }),
            b: i0,
            c: s0
          };
        }, {
          name: "list",
          path: "e",
          vueId: "a70f1c9b-2"
        }),
        f: common_vendor.p({
          apiFun: apiFun1,
          params: searchParams1,
          beforeHook,
          afterHook
        }),
        g: common_vendor.w(({
          list
        }, s0, i0) => {
          return {
            a: common_vendor.f(list, (item, k1, i1) => {
              return {
                a: common_vendor.t(item),
                b: item
              };
            }),
            b: i0,
            c: s0
          };
        }, {
          name: "list",
          path: "g",
          vueId: "a70f1c9b-3"
        }),
        h: common_vendor.p({
          apiFun: apiFun2,
          params: searchParams2
        }),
        i: common_vendor.p({
          apiFun: apiFun2,
          params: searchParams2
        }),
        j: common_vendor.w(({
          list
        }, s0, i0) => {
          return {
            a: common_vendor.f(list, (item, k1, i1) => {
              return {
                a: common_vendor.t(item),
                b: item
              };
            }),
            b: i0,
            c: s0
          };
        }, {
          name: "list",
          path: "j",
          vueId: "a70f1c9b-5"
        }),
        k: common_vendor.p({
          apiFun: apiFun3,
          params: searchParams3
        }),
        l: common_vendor.p({
          apiFun: apiFun3,
          params: searchParams3
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a70f1c9b"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/componentPage/cl-scroll-view/index.js.map
