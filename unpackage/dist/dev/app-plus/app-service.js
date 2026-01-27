if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global2 = uni.requireGlobal();
  ArrayBuffer = global2.ArrayBuffer;
  Int8Array = global2.Int8Array;
  Uint8Array = global2.Uint8Array;
  Uint8ClampedArray = global2.Uint8ClampedArray;
  Int16Array = global2.Int16Array;
  Uint16Array = global2.Uint16Array;
  Int32Array = global2.Int32Array;
  Uint32Array = global2.Uint32Array;
  Float32Array = global2.Float32Array;
  Float64Array = global2.Float64Array;
  BigInt64Array = global2.BigInt64Array;
  BigUint64Array = global2.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  const ON_LOAD = "onLoad";
  const ON_READY = "onReady";
  const ON_SHARE_APP_MESSAGE = "onShareAppMessage";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return typeof component === "string" ? easycom : component;
  }
  const createLifeCycleHook = (lifecycle, flag = 0) => (hook, target = vue.getCurrentInstance()) => {
    !vue.isInSSRComponentSetup && vue.injectHook(lifecycle, hook, target);
  };
  const onLoad = /* @__PURE__ */ createLifeCycleHook(
    ON_LOAD,
    2
    /* HookFlags.PAGE */
  );
  const onReady = /* @__PURE__ */ createLifeCycleHook(
    ON_READY,
    2
    /* HookFlags.PAGE */
  );
  const onShareAppMessage = /* @__PURE__ */ createLifeCycleHook(
    ON_SHARE_APP_MESSAGE,
    2
    /* HookFlags.PAGE */
  );
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$A = {
    __name: "index",
    setup(__props, { expose: __expose }) {
      __expose();
      const formRef = vue.ref();
      const formData = vue.ref({
        val: ""
      });
      const pageList = vue.ref([
        {
          componentName: "cl-select-picker",
          componentPath: "/pages/componentPage/cl-select-picker/index"
        },
        {
          componentName: "cl-scroll-view",
          componentPath: "/pages/componentPage/cl-scroll-view/index"
        },
        {
          componentName: "cl-select",
          componentPath: "/pages/componentPage/cl-select/index"
        },
        {
          componentName: "cl-nav-bar",
          componentPath: "/pages/componentPage/cl-nav-bar/index"
        },
        {
          componentName: "cl-date-picker",
          componentPath: "/pages/componentPage/cl-date-picker/index"
        },
        {
          componentName: "cl-autocomplete",
          componentPath: "/pages/componentPage/cl-autocomplete/index"
        },
        {
          componentName: "cl-auto-page-list",
          componentPath: "/pages/componentPage/cl-auto-page-list/index"
        },
        {
          componentName: "cl-more-select-picker",
          componentPath: "/pages/componentPage/cl-more-select-picker/index"
        },
        {
          componentName: "cl-tabs",
          componentPath: "/pages/componentPage/cl-tabs/index"
        },
        {
          componentName: "cl-table",
          componentPath: "/pages/componentPage/cl-table/index"
        },
        {
          componentName: "cl-video",
          componentPath: "/pages/componentPage/cl-video/index"
        }
      ]);
      const toPage = (url) => {
        uni.navigateTo({
          url
        });
      };
      vue.onMounted(() => {
        uni.showShareMenu({
          title: "234",
          menus: ["shareAppMessage", "shareTimeline"]
        });
      });
      onShareAppMessage((res2) => {
        formatAppLog("log", "at pages/index/index.vue:80", res2);
        return {
          title: "243"
        };
      });
      const __returned__ = { formRef, formData, pageList, toPage, ref: vue.ref, onMounted: vue.onMounted, get onShareAppMessage() {
        return onShareAppMessage;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$z(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      (vue.openBlock(true), vue.createElementBlock(
        vue.Fragment,
        null,
        vue.renderList($setup.pageList, (item, index) => {
          return vue.openBlock(), vue.createElementBlock("button", {
            class: "button",
            key: index,
            onClick: ($event) => $setup.toPage(item.componentPath)
          }, vue.toDisplayString(item.componentName), 9, ["onClick"]);
        }),
        128
        /* KEYED_FRAGMENT */
      ))
    ]);
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["render", _sfc_render$z], ["__scopeId", "data-v-1cf27b2a"], ["__file", "D:/code/code-life/uni-app-components/pages/index/index.vue"]]);
  const fontData = [
    {
      "font_class": "arrow-down",
      "unicode": ""
    },
    {
      "font_class": "arrow-left",
      "unicode": ""
    },
    {
      "font_class": "arrow-right",
      "unicode": ""
    },
    {
      "font_class": "arrow-up",
      "unicode": ""
    },
    {
      "font_class": "auth",
      "unicode": ""
    },
    {
      "font_class": "auth-filled",
      "unicode": ""
    },
    {
      "font_class": "back",
      "unicode": ""
    },
    {
      "font_class": "bars",
      "unicode": ""
    },
    {
      "font_class": "calendar",
      "unicode": ""
    },
    {
      "font_class": "calendar-filled",
      "unicode": ""
    },
    {
      "font_class": "camera",
      "unicode": ""
    },
    {
      "font_class": "camera-filled",
      "unicode": ""
    },
    {
      "font_class": "cart",
      "unicode": ""
    },
    {
      "font_class": "cart-filled",
      "unicode": ""
    },
    {
      "font_class": "chat",
      "unicode": ""
    },
    {
      "font_class": "chat-filled",
      "unicode": ""
    },
    {
      "font_class": "chatboxes",
      "unicode": ""
    },
    {
      "font_class": "chatboxes-filled",
      "unicode": ""
    },
    {
      "font_class": "chatbubble",
      "unicode": ""
    },
    {
      "font_class": "chatbubble-filled",
      "unicode": ""
    },
    {
      "font_class": "checkbox",
      "unicode": ""
    },
    {
      "font_class": "checkbox-filled",
      "unicode": ""
    },
    {
      "font_class": "checkmarkempty",
      "unicode": ""
    },
    {
      "font_class": "circle",
      "unicode": ""
    },
    {
      "font_class": "circle-filled",
      "unicode": ""
    },
    {
      "font_class": "clear",
      "unicode": ""
    },
    {
      "font_class": "close",
      "unicode": ""
    },
    {
      "font_class": "closeempty",
      "unicode": ""
    },
    {
      "font_class": "cloud-download",
      "unicode": ""
    },
    {
      "font_class": "cloud-download-filled",
      "unicode": ""
    },
    {
      "font_class": "cloud-upload",
      "unicode": ""
    },
    {
      "font_class": "cloud-upload-filled",
      "unicode": ""
    },
    {
      "font_class": "color",
      "unicode": ""
    },
    {
      "font_class": "color-filled",
      "unicode": ""
    },
    {
      "font_class": "compose",
      "unicode": ""
    },
    {
      "font_class": "contact",
      "unicode": ""
    },
    {
      "font_class": "contact-filled",
      "unicode": ""
    },
    {
      "font_class": "down",
      "unicode": ""
    },
    {
      "font_class": "bottom",
      "unicode": ""
    },
    {
      "font_class": "download",
      "unicode": ""
    },
    {
      "font_class": "download-filled",
      "unicode": ""
    },
    {
      "font_class": "email",
      "unicode": ""
    },
    {
      "font_class": "email-filled",
      "unicode": ""
    },
    {
      "font_class": "eye",
      "unicode": ""
    },
    {
      "font_class": "eye-filled",
      "unicode": ""
    },
    {
      "font_class": "eye-slash",
      "unicode": ""
    },
    {
      "font_class": "eye-slash-filled",
      "unicode": ""
    },
    {
      "font_class": "fire",
      "unicode": ""
    },
    {
      "font_class": "fire-filled",
      "unicode": ""
    },
    {
      "font_class": "flag",
      "unicode": ""
    },
    {
      "font_class": "flag-filled",
      "unicode": ""
    },
    {
      "font_class": "folder-add",
      "unicode": ""
    },
    {
      "font_class": "folder-add-filled",
      "unicode": ""
    },
    {
      "font_class": "font",
      "unicode": ""
    },
    {
      "font_class": "forward",
      "unicode": ""
    },
    {
      "font_class": "gear",
      "unicode": ""
    },
    {
      "font_class": "gear-filled",
      "unicode": ""
    },
    {
      "font_class": "gift",
      "unicode": ""
    },
    {
      "font_class": "gift-filled",
      "unicode": ""
    },
    {
      "font_class": "hand-down",
      "unicode": ""
    },
    {
      "font_class": "hand-down-filled",
      "unicode": ""
    },
    {
      "font_class": "hand-up",
      "unicode": ""
    },
    {
      "font_class": "hand-up-filled",
      "unicode": ""
    },
    {
      "font_class": "headphones",
      "unicode": ""
    },
    {
      "font_class": "heart",
      "unicode": ""
    },
    {
      "font_class": "heart-filled",
      "unicode": ""
    },
    {
      "font_class": "help",
      "unicode": ""
    },
    {
      "font_class": "help-filled",
      "unicode": ""
    },
    {
      "font_class": "home",
      "unicode": ""
    },
    {
      "font_class": "home-filled",
      "unicode": ""
    },
    {
      "font_class": "image",
      "unicode": ""
    },
    {
      "font_class": "image-filled",
      "unicode": ""
    },
    {
      "font_class": "images",
      "unicode": ""
    },
    {
      "font_class": "images-filled",
      "unicode": ""
    },
    {
      "font_class": "info",
      "unicode": ""
    },
    {
      "font_class": "info-filled",
      "unicode": ""
    },
    {
      "font_class": "left",
      "unicode": ""
    },
    {
      "font_class": "link",
      "unicode": ""
    },
    {
      "font_class": "list",
      "unicode": ""
    },
    {
      "font_class": "location",
      "unicode": ""
    },
    {
      "font_class": "location-filled",
      "unicode": ""
    },
    {
      "font_class": "locked",
      "unicode": ""
    },
    {
      "font_class": "locked-filled",
      "unicode": ""
    },
    {
      "font_class": "loop",
      "unicode": ""
    },
    {
      "font_class": "mail-open",
      "unicode": ""
    },
    {
      "font_class": "mail-open-filled",
      "unicode": ""
    },
    {
      "font_class": "map",
      "unicode": ""
    },
    {
      "font_class": "map-filled",
      "unicode": ""
    },
    {
      "font_class": "map-pin",
      "unicode": ""
    },
    {
      "font_class": "map-pin-ellipse",
      "unicode": ""
    },
    {
      "font_class": "medal",
      "unicode": ""
    },
    {
      "font_class": "medal-filled",
      "unicode": ""
    },
    {
      "font_class": "mic",
      "unicode": ""
    },
    {
      "font_class": "mic-filled",
      "unicode": ""
    },
    {
      "font_class": "micoff",
      "unicode": ""
    },
    {
      "font_class": "micoff-filled",
      "unicode": ""
    },
    {
      "font_class": "minus",
      "unicode": ""
    },
    {
      "font_class": "minus-filled",
      "unicode": ""
    },
    {
      "font_class": "more",
      "unicode": ""
    },
    {
      "font_class": "more-filled",
      "unicode": ""
    },
    {
      "font_class": "navigate",
      "unicode": ""
    },
    {
      "font_class": "navigate-filled",
      "unicode": ""
    },
    {
      "font_class": "notification",
      "unicode": ""
    },
    {
      "font_class": "notification-filled",
      "unicode": ""
    },
    {
      "font_class": "paperclip",
      "unicode": ""
    },
    {
      "font_class": "paperplane",
      "unicode": ""
    },
    {
      "font_class": "paperplane-filled",
      "unicode": ""
    },
    {
      "font_class": "person",
      "unicode": ""
    },
    {
      "font_class": "person-filled",
      "unicode": ""
    },
    {
      "font_class": "personadd",
      "unicode": ""
    },
    {
      "font_class": "personadd-filled",
      "unicode": ""
    },
    {
      "font_class": "personadd-filled-copy",
      "unicode": ""
    },
    {
      "font_class": "phone",
      "unicode": ""
    },
    {
      "font_class": "phone-filled",
      "unicode": ""
    },
    {
      "font_class": "plus",
      "unicode": ""
    },
    {
      "font_class": "plus-filled",
      "unicode": ""
    },
    {
      "font_class": "plusempty",
      "unicode": ""
    },
    {
      "font_class": "pulldown",
      "unicode": ""
    },
    {
      "font_class": "pyq",
      "unicode": ""
    },
    {
      "font_class": "qq",
      "unicode": ""
    },
    {
      "font_class": "redo",
      "unicode": ""
    },
    {
      "font_class": "redo-filled",
      "unicode": ""
    },
    {
      "font_class": "refresh",
      "unicode": ""
    },
    {
      "font_class": "refresh-filled",
      "unicode": ""
    },
    {
      "font_class": "refreshempty",
      "unicode": ""
    },
    {
      "font_class": "reload",
      "unicode": ""
    },
    {
      "font_class": "right",
      "unicode": ""
    },
    {
      "font_class": "scan",
      "unicode": ""
    },
    {
      "font_class": "search",
      "unicode": ""
    },
    {
      "font_class": "settings",
      "unicode": ""
    },
    {
      "font_class": "settings-filled",
      "unicode": ""
    },
    {
      "font_class": "shop",
      "unicode": ""
    },
    {
      "font_class": "shop-filled",
      "unicode": ""
    },
    {
      "font_class": "smallcircle",
      "unicode": ""
    },
    {
      "font_class": "smallcircle-filled",
      "unicode": ""
    },
    {
      "font_class": "sound",
      "unicode": ""
    },
    {
      "font_class": "sound-filled",
      "unicode": ""
    },
    {
      "font_class": "spinner-cycle",
      "unicode": ""
    },
    {
      "font_class": "staff",
      "unicode": ""
    },
    {
      "font_class": "staff-filled",
      "unicode": ""
    },
    {
      "font_class": "star",
      "unicode": ""
    },
    {
      "font_class": "star-filled",
      "unicode": ""
    },
    {
      "font_class": "starhalf",
      "unicode": ""
    },
    {
      "font_class": "trash",
      "unicode": ""
    },
    {
      "font_class": "trash-filled",
      "unicode": ""
    },
    {
      "font_class": "tune",
      "unicode": ""
    },
    {
      "font_class": "tune-filled",
      "unicode": ""
    },
    {
      "font_class": "undo",
      "unicode": ""
    },
    {
      "font_class": "undo-filled",
      "unicode": ""
    },
    {
      "font_class": "up",
      "unicode": ""
    },
    {
      "font_class": "top",
      "unicode": ""
    },
    {
      "font_class": "upload",
      "unicode": ""
    },
    {
      "font_class": "upload-filled",
      "unicode": ""
    },
    {
      "font_class": "videocam",
      "unicode": ""
    },
    {
      "font_class": "videocam-filled",
      "unicode": ""
    },
    {
      "font_class": "vip",
      "unicode": ""
    },
    {
      "font_class": "vip-filled",
      "unicode": ""
    },
    {
      "font_class": "wallet",
      "unicode": ""
    },
    {
      "font_class": "wallet-filled",
      "unicode": ""
    },
    {
      "font_class": "weibo",
      "unicode": ""
    },
    {
      "font_class": "weixin",
      "unicode": ""
    }
  ];
  const getVal$1 = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  const _sfc_main$z = {
    name: "UniIcons",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      customPrefix: {
        type: String,
        default: ""
      },
      fontFamily: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons: fontData
      };
    },
    computed: {
      unicode() {
        let code = this.icons.find((v) => v.font_class === this.type);
        if (code) {
          return code.unicode;
        }
        return "";
      },
      iconSize() {
        return getVal$1(this.size);
      },
      styleObj() {
        if (this.fontFamily !== "") {
          return `color: ${this.color}; font-size: ${this.iconSize}; font-family: ${this.fontFamily};`;
        }
        return `color: ${this.color}; font-size: ${this.iconSize};`;
      }
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$y(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "text",
      {
        style: vue.normalizeStyle($options.styleObj),
        class: vue.normalizeClass(["uni-icons", ["uniui-" + $props.type, $props.customPrefix, $props.customPrefix ? $props.type : ""]]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_0$d = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["render", _sfc_render$y], ["__scopeId", "data-v-d31e1c47"], ["__file", "D:/code/code-life/uni-app-components/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
  function obj2strClass$1(obj) {
    let classess = "";
    for (let key in obj) {
      const val = obj[key];
      if (val) {
        classess += `${key} `;
      }
    }
    return classess;
  }
  function obj2strStyle$1(obj) {
    let style = "";
    for (let key in obj) {
      const val = obj[key];
      style += `${key}:${val};`;
    }
    return style;
  }
  const _sfc_main$y = {
    name: "uni-easyinput",
    emits: [
      "click",
      "iconClick",
      "update:modelValue",
      "input",
      "focus",
      "blur",
      "confirm",
      "clear",
      "eyes",
      "change",
      "keyboardheightchange",
      "inputClick"
    ],
    model: {
      prop: "modelValue",
      event: "update:modelValue"
    },
    options: {
      virtualHost: true
    },
    inject: {
      form: {
        from: "uniForm",
        default: null
      },
      formItem: {
        from: "uniFormItem",
        default: null
      }
    },
    props: {
      name: String,
      value: [Number, String],
      modelValue: [Number, String],
      type: {
        type: String,
        default: "text"
      },
      clearable: {
        type: Boolean,
        default: true
      },
      autoHeight: {
        type: Boolean,
        default: false
      },
      placeholder: {
        type: String,
        default: "请输入"
      },
      placeholderStyle: String,
      focus: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      maxlength: {
        type: [Number, String],
        default: 140
      },
      showNum: {
        type: Boolean,
        default: false
      },
      confirmType: {
        type: String,
        default: "done"
      },
      clearSize: {
        type: [Number, String],
        default: 24
      },
      inputBorder: {
        type: Boolean,
        default: true
      },
      prefixIcon: {
        type: String,
        default: ""
      },
      suffixIcon: {
        type: String,
        default: ""
      },
      trim: {
        type: [Boolean, String],
        default: false
      },
      cursorSpacing: {
        type: Number,
        default: 0
      },
      passwordIcon: {
        type: Boolean,
        default: true
      },
      adjustPosition: {
        type: Boolean,
        default: true
      },
      primaryColor: {
        type: String,
        default: "#2979ff"
      },
      styles: {
        type: Object,
        default() {
          return {
            color: "#333",
            backgroundColor: "#fff",
            disableColor: "#F7F6F6",
            borderColor: "#e5e5e5"
          };
        }
      },
      errorMessage: {
        type: [String, Boolean],
        default: ""
      },
      // input的类型，默认input，falseInput则为虚假input，常用于封装其他组件时
      inputType: {
        type: String,
        default: "input"
      },
      // 是否显示下拉图标
      showSelectIcon: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        focused: false,
        val: "",
        showMsg: "",
        border: false,
        isFirstBorder: false,
        showClearIcon: false,
        showPassword: false,
        focusShow: false,
        localMsg: "",
        isEnter: false
        // 用于判断当前是否是使用回车操作
      };
    },
    computed: {
      // 输入框内是否有值
      isVal() {
        const val = this.val;
        if (val || val === 0) {
          return true;
        }
        return false;
      },
      msg() {
        return this.localMsg || this.errorMessage;
      },
      // 因为uniapp的input组件的maxlength组件必须要数值，这里转为数值，用户可以传入字符串数值
      inputMaxlength() {
        return Number(this.maxlength);
      },
      // 处理外层样式的style
      boxStyle() {
        return `color:${this.inputBorder && this.msg ? "#e43d33" : this.styles.color};`;
      },
      // input 内容的类和样式处理
      inputContentClass() {
        return obj2strClass$1({
          "is-input-border": this.inputBorder,
          "is-input-error-border": this.inputBorder && this.msg,
          "is-textarea": this.type === "textarea",
          "is-disabled": this.disabled,
          "is-focused": this.focusShow
        });
      },
      inputContentStyle() {
        const focusColor = this.focusShow ? this.primaryColor : this.styles.borderColor;
        const borderColor = this.inputBorder && this.msg ? "#dd524d" : focusColor;
        return obj2strStyle$1({
          "border-color": borderColor || "#e5e5e5",
          "background-color": this.disabled ? this.styles.disableColor : this.styles.backgroundColor
        });
      },
      // input右侧样式
      inputStyle() {
        const paddingRight = this.type === "password" || this.clearable || this.prefixIcon ? "" : "10px";
        return obj2strStyle$1({
          "padding-right": paddingRight,
          "padding-left": this.prefixIcon ? "" : "10px"
        });
      }
    },
    watch: {
      value(newVal) {
        if (newVal === null) {
          this.val = "";
          return;
        }
        this.val = newVal;
      },
      modelValue(newVal) {
        if (newVal === null) {
          this.val = "";
          return;
        }
        this.val = newVal;
      },
      focus(newVal) {
        this.$nextTick(() => {
          this.focused = this.focus;
          this.focusShow = this.focus;
        });
      }
    },
    created() {
      this.init();
      if (this.form && this.formItem) {
        this.$watch("formItem.errMsg", (newVal) => {
          this.localMsg = newVal;
        });
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.focused = this.focus;
        this.focusShow = this.focus;
      });
    },
    methods: {
      // 输入框点击事件
      _Click() {
        this.$emit("inputClick");
      },
      /**
       * 初始化变量值
       */
      init() {
        if (this.value || this.value === 0) {
          this.val = this.value;
        } else if (this.modelValue || this.modelValue === 0 || this.modelValue === "") {
          this.val = this.modelValue;
        } else {
          this.val = "";
        }
      },
      /**
       * 点击图标时触发
       * @param {Object} type
       */
      onClickIcon(type) {
        this.$emit("iconClick", type);
      },
      /**
       * 显示隐藏内容，密码框时生效
       */
      onEyes() {
        this.showPassword = !this.showPassword;
        this.$emit("eyes", this.showPassword);
      },
      /**
       * 输入时触发
       * @param {Object} event
       */
      onInput(event) {
        let value = event.detail.value;
        if (this.trim) {
          if (typeof this.trim === "boolean" && this.trim) {
            value = this.trimStr(value);
          }
          if (typeof this.trim === "string") {
            value = this.trimStr(value, this.trim);
          }
        }
        if (this.errMsg)
          this.errMsg = "";
        this.val = value;
        this.$emit("input", value);
        this.$emit("update:modelValue", value);
      },
      /**
       * 外部调用方法
       * 获取焦点时触发
       * @param {Object} event
       */
      onFocus() {
        this.$nextTick(() => {
          this.focused = true;
        });
        this.$emit("focus", null);
      },
      _Focus(event) {
        this.focusShow = true;
        this.$emit("focus", event);
      },
      /**
       * 外部调用方法
       * 失去焦点时触发
       * @param {Object} event
       */
      onBlur() {
        this.focused = false;
        this.$emit("blur", null);
      },
      _Blur(event) {
        event.detail.value;
        this.focusShow = false;
        this.$emit("blur", event);
        if (this.isEnter === false) {
          this.$emit("change", this.val);
        }
        if (this.form && this.formItem) {
          const { validateTrigger } = this.form;
          if (validateTrigger === "blur") {
            this.formItem.onFieldChange();
          }
        }
      },
      /**
       * 按下键盘的发送键
       * @param {Object} e
       */
      onConfirm(e) {
        this.$emit("confirm", this.val);
        this.isEnter = true;
        this.$emit("change", this.val);
        this.$nextTick(() => {
          this.isEnter = false;
        });
      },
      /**
       * 清理内容
       * @param {Object} event
       */
      onClear(event) {
        this.val = "";
        this.$emit("input", "");
        this.$emit("update:modelValue", "");
        this.$emit("clear");
      },
      /**
       * 键盘高度发生变化的时候触发此事件
       * 兼容性：微信小程序2.7.0+、App 3.1.0+
       * @param {Object} event
       */
      onkeyboardheightchange(event) {
        this.$emit("keyboardheightchange", event);
      },
      /**
       * 去除空格
       */
      trimStr(str, pos = "both") {
        if (pos === "both") {
          return str.trim();
        } else if (pos === "left") {
          return str.trimLeft();
        } else if (pos === "right") {
          return str.trimRight();
        } else if (pos === "start") {
          return str.trimStart();
        } else if (pos === "end") {
          return str.trimEnd();
        } else if (pos === "all") {
          return str.replace(/\s+/g, "");
        } else if (pos === "none") {
          return str;
        }
        return str;
      }
    }
  };
  function _sfc_render$x(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$d);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["uni-easyinput", { "uni-easyinput-error": $options.msg }]),
        style: vue.normalizeStyle($options.boxStyle)
      },
      [
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["uni-easyinput__content", $options.inputContentClass]),
            style: vue.normalizeStyle($options.inputContentStyle)
          },
          [
            $props.prefixIcon ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
              key: 0,
              class: "content-clear-icon",
              type: $props.prefixIcon,
              color: "#c0c4cc",
              onClick: _cache[0] || (_cache[0] = ($event) => $options.onClickIcon("prefix")),
              size: "22"
            }, null, 8, ["type"])) : vue.createCommentVNode("v-if", true),
            vue.renderSlot(_ctx.$slots, "left", {}, void 0, true),
            vue.createElementVNode("view", {
              style: { "width": "100%", "display": "flex", "align-items": "center" },
              onClick: _cache[11] || (_cache[11] = (...args) => $options._Click && $options._Click(...args))
            }, [
              $props.type === "textarea" ? (vue.openBlock(), vue.createElementBlock("textarea", {
                key: 0,
                class: vue.normalizeClass(["uni-easyinput__content-textarea", { "input-padding": $props.inputBorder, "pev-none": $props.inputType === "falseInput" }]),
                name: $props.name,
                value: $data.val,
                placeholder: $props.placeholder,
                placeholderStyle: $props.placeholderStyle,
                disabled: $props.disabled,
                "placeholder-class": "uni-easyinput__placeholder-class",
                maxlength: $options.inputMaxlength,
                focus: $data.focused,
                autoHeight: $props.autoHeight,
                "cursor-spacing": $props.cursorSpacing,
                "adjust-position": $props.adjustPosition,
                onInput: _cache[1] || (_cache[1] = (...args) => $options.onInput && $options.onInput(...args)),
                onBlur: _cache[2] || (_cache[2] = (...args) => $options._Blur && $options._Blur(...args)),
                onFocus: _cache[3] || (_cache[3] = (...args) => $options._Focus && $options._Focus(...args)),
                onConfirm: _cache[4] || (_cache[4] = (...args) => $options.onConfirm && $options.onConfirm(...args)),
                onKeyboardheightchange: _cache[5] || (_cache[5] = (...args) => $options.onkeyboardheightchange && $options.onkeyboardheightchange(...args))
              }, null, 42, ["name", "value", "placeholder", "placeholderStyle", "disabled", "maxlength", "focus", "autoHeight", "cursor-spacing", "adjust-position"])) : (vue.openBlock(), vue.createElementBlock("input", {
                key: 1,
                type: $props.type === "password" ? "text" : $props.type,
                class: vue.normalizeClass(["uni-easyinput__content-input", { "pev-none": $props.inputType === "falseInput" }]),
                style: vue.normalizeStyle($options.inputStyle),
                name: $props.name,
                value: $data.val,
                password: !$data.showPassword && $props.type === "password",
                placeholder: $props.placeholder,
                placeholderStyle: $props.placeholderStyle,
                "placeholder-class": "uni-easyinput__placeholder-class",
                disabled: $props.disabled,
                maxlength: $options.inputMaxlength,
                focus: $data.focused,
                confirmType: $props.confirmType,
                "cursor-spacing": $props.cursorSpacing,
                "adjust-position": $props.adjustPosition,
                onFocus: _cache[6] || (_cache[6] = (...args) => $options._Focus && $options._Focus(...args)),
                onBlur: _cache[7] || (_cache[7] = (...args) => $options._Blur && $options._Blur(...args)),
                onInput: _cache[8] || (_cache[8] = (...args) => $options.onInput && $options.onInput(...args)),
                onConfirm: _cache[9] || (_cache[9] = (...args) => $options.onConfirm && $options.onConfirm(...args)),
                onKeyboardheightchange: _cache[10] || (_cache[10] = (...args) => $options.onkeyboardheightchange && $options.onkeyboardheightchange(...args))
              }, null, 46, ["type", "name", "value", "password", "placeholder", "placeholderStyle", "disabled", "maxlength", "focus", "confirmType", "cursor-spacing", "adjust-position"])),
              $props.showNum && $props.maxlength && $props.type !== "textarea" ? (vue.openBlock(), vue.createElementBlock(
                "text",
                {
                  key: 2,
                  class: "text_maxlength_show"
                },
                vue.toDisplayString($data.val.length) + "/" + vue.toDisplayString($props.maxlength),
                1
                /* TEXT */
              )) : vue.createCommentVNode("v-if", true),
              $props.showNum && $props.maxlength && $props.type === "textarea" ? (vue.openBlock(), vue.createElementBlock(
                "text",
                {
                  key: 3,
                  class: "textarea_maxlength_show"
                },
                vue.toDisplayString($data.val.length) + "/" + vue.toDisplayString($props.maxlength),
                1
                /* TEXT */
              )) : vue.createCommentVNode("v-if", true),
              $props.inputType === "falseInput" && $props.showSelectIcon ? (vue.openBlock(), vue.createElementBlock(
                vue.Fragment,
                { key: 4 },
                [
                  !$data.val && !$props.disabled ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                    key: 0,
                    style: { "margin-right": "5px" },
                    type: "bottom",
                    size: 14,
                    color: "#999"
                  })) : vue.createCommentVNode("v-if", true)
                ],
                64
                /* STABLE_FRAGMENT */
              )) : vue.createCommentVNode("v-if", true)
            ]),
            $props.type === "password" && $props.passwordIcon ? (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              { key: 1 },
              [
                vue.createCommentVNode(" 开启密码时显示小眼睛 "),
                $options.isVal ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                  key: 0,
                  class: vue.normalizeClass(["content-clear-icon", { "is-textarea-icon": $props.type === "textarea" }]),
                  type: $data.showPassword ? "eye-slash-filled" : "eye-filled",
                  size: 22,
                  color: $data.focusShow ? $props.primaryColor : "#c0c4cc",
                  onClick: $options.onEyes
                }, null, 8, ["class", "type", "color", "onClick"])) : vue.createCommentVNode("v-if", true)
              ],
              64
              /* STABLE_FRAGMENT */
            )) : vue.createCommentVNode("v-if", true),
            $props.suffixIcon ? (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              { key: 2 },
              [
                $props.suffixIcon ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                  key: 0,
                  class: "content-clear-icon",
                  type: $props.suffixIcon,
                  color: "#c0c4cc",
                  onClick: _cache[12] || (_cache[12] = ($event) => $options.onClickIcon("suffix")),
                  size: "22"
                }, null, 8, ["type"])) : vue.createCommentVNode("v-if", true)
              ],
              64
              /* STABLE_FRAGMENT */
            )) : (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              { key: 3 },
              [
                $props.clearable && $options.isVal && !$props.disabled && $props.type !== "textarea" ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                  key: 0,
                  class: vue.normalizeClass(["content-clear-icon", { "is-textarea-icon": $props.type === "textarea" }]),
                  type: "clear",
                  size: $props.clearSize,
                  color: $options.msg ? "#dd524d" : $data.focusShow ? $props.primaryColor : "#c0c4cc",
                  onClick: $options.onClear
                }, null, 8, ["class", "size", "color", "onClick"])) : vue.createCommentVNode("v-if", true)
              ],
              64
              /* STABLE_FRAGMENT */
            )),
            vue.renderSlot(_ctx.$slots, "right", {}, void 0, true)
          ],
          6
          /* CLASS, STYLE */
        )
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_0$c = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["render", _sfc_render$x], ["__scopeId", "data-v-ed66538f"], ["__file", "D:/code/code-life/uni-app-components/uni_modules/cl-input/components/cl-input/cl-input.vue"]]);
  class MPAnimation {
    constructor(options, _this) {
      this.options = options;
      this.animation = uni.createAnimation({
        ...options
      });
      this.currentStepAnimates = {};
      this.next = 0;
      this.$ = _this;
    }
    _nvuePushAnimates(type, args) {
      let aniObj = this.currentStepAnimates[this.next];
      let styles = {};
      if (!aniObj) {
        styles = {
          styles: {},
          config: {}
        };
      } else {
        styles = aniObj;
      }
      if (animateTypes1.includes(type)) {
        if (!styles.styles.transform) {
          styles.styles.transform = "";
        }
        let unit = "";
        if (type === "rotate") {
          unit = "deg";
        }
        styles.styles.transform += `${type}(${args + unit}) `;
      } else {
        styles.styles[type] = `${args}`;
      }
      this.currentStepAnimates[this.next] = styles;
    }
    _animateRun(styles = {}, config = {}) {
      let ref = this.$.$refs["ani"].ref;
      if (!ref)
        return;
      return new Promise((resolve, reject) => {
        nvueAnimation.transition(ref, {
          styles,
          ...config
        }, (res2) => {
          resolve();
        });
      });
    }
    _nvueNextAnimate(animates, step = 0, fn) {
      let obj = animates[step];
      if (obj) {
        let {
          styles,
          config
        } = obj;
        this._animateRun(styles, config).then(() => {
          step += 1;
          this._nvueNextAnimate(animates, step, fn);
        });
      } else {
        this.currentStepAnimates = {};
        typeof fn === "function" && fn();
        this.isEnd = true;
      }
    }
    step(config = {}) {
      this.animation.step(config);
      return this;
    }
    run(fn) {
      this.$.animationData = this.animation.export();
      this.$.timer = setTimeout(() => {
        typeof fn === "function" && fn();
      }, this.$.durationTime);
    }
  }
  const animateTypes1 = [
    "matrix",
    "matrix3d",
    "rotate",
    "rotate3d",
    "rotateX",
    "rotateY",
    "rotateZ",
    "scale",
    "scale3d",
    "scaleX",
    "scaleY",
    "scaleZ",
    "skew",
    "skewX",
    "skewY",
    "translate",
    "translate3d",
    "translateX",
    "translateY",
    "translateZ"
  ];
  const animateTypes2 = ["opacity", "backgroundColor"];
  const animateTypes3 = ["width", "height", "left", "right", "top", "bottom"];
  animateTypes1.concat(animateTypes2, animateTypes3).forEach((type) => {
    MPAnimation.prototype[type] = function(...args) {
      this.animation[type](...args);
      return this;
    };
  });
  function createAnimation(option, _this) {
    if (!_this)
      return;
    clearTimeout(_this.timer);
    return new MPAnimation(option, _this);
  }
  const _sfc_main$x = {
    name: "uniTransition",
    emits: ["click", "change"],
    props: {
      show: {
        type: Boolean,
        default: false
      },
      modeClass: {
        type: [Array, String],
        default() {
          return "fade";
        }
      },
      duration: {
        type: Number,
        default: 300
      },
      styles: {
        type: Object,
        default() {
          return {};
        }
      },
      customClass: {
        type: String,
        default: ""
      },
      onceRender: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        isShow: false,
        transform: "",
        opacity: 1,
        animationData: {},
        durationTime: 300,
        config: {}
      };
    },
    watch: {
      show: {
        handler(newVal) {
          if (newVal) {
            this.open();
          } else {
            if (this.isShow) {
              this.close();
            }
          }
        },
        immediate: true
      }
    },
    computed: {
      // 生成样式数据
      stylesObject() {
        let styles = {
          ...this.styles,
          "transition-duration": this.duration / 1e3 + "s"
        };
        let transform = "";
        for (let i in styles) {
          let line = this.toLine(i);
          transform += line + ":" + styles[i] + ";";
        }
        return transform;
      },
      // 初始化动画条件
      transformStyles() {
        return "transform:" + this.transform + ";opacity:" + this.opacity + ";" + this.stylesObject;
      }
    },
    created() {
      this.config = {
        duration: this.duration,
        timingFunction: "ease",
        transformOrigin: "50% 50%",
        delay: 0
      };
      this.durationTime = this.duration;
    },
    methods: {
      /**
       *  ref 触发 初始化动画
       */
      init(obj = {}) {
        if (obj.duration) {
          this.durationTime = obj.duration;
        }
        this.animation = createAnimation(Object.assign(this.config, obj), this);
      },
      /**
       * 点击组件触发回调
       */
      onClick() {
        this.$emit("click", {
          detail: this.isShow
        });
      },
      /**
       * ref 触发 动画分组
       * @param {Object} obj
       */
      step(obj, config = {}) {
        if (!this.animation)
          return;
        for (let i in obj) {
          try {
            if (typeof obj[i] === "object") {
              this.animation[i](...obj[i]);
            } else {
              this.animation[i](obj[i]);
            }
          } catch (e) {
            formatAppLog("error", "at uni_modules/uni-transition/components/uni-transition/uni-transition.vue:148", `方法 ${i} 不存在`);
          }
        }
        this.animation.step(config);
        return this;
      },
      /**
       *  ref 触发 执行动画
       */
      run(fn) {
        if (!this.animation)
          return;
        this.animation.run(fn);
      },
      // 开始过度动画
      open() {
        clearTimeout(this.timer);
        this.transform = "";
        this.isShow = true;
        let { opacity, transform } = this.styleInit(false);
        if (typeof opacity !== "undefined") {
          this.opacity = opacity;
        }
        this.transform = transform;
        this.$nextTick(() => {
          this.timer = setTimeout(() => {
            this.animation = createAnimation(this.config, this);
            this.tranfromInit(false).step();
            this.animation.run();
            this.$emit("change", {
              detail: this.isShow
            });
          }, 20);
        });
      },
      // 关闭过度动画
      close(type) {
        if (!this.animation)
          return;
        this.tranfromInit(true).step().run(() => {
          this.isShow = false;
          this.animationData = null;
          this.animation = null;
          let { opacity, transform } = this.styleInit(false);
          this.opacity = opacity || 1;
          this.transform = transform;
          this.$emit("change", {
            detail: this.isShow
          });
        });
      },
      // 处理动画开始前的默认样式
      styleInit(type) {
        let styles = {
          transform: ""
        };
        let buildStyle = (type2, mode) => {
          if (mode === "fade") {
            styles.opacity = this.animationType(type2)[mode];
          } else {
            styles.transform += this.animationType(type2)[mode] + " ";
          }
        };
        if (typeof this.modeClass === "string") {
          buildStyle(type, this.modeClass);
        } else {
          this.modeClass.forEach((mode) => {
            buildStyle(type, mode);
          });
        }
        return styles;
      },
      // 处理内置组合动画
      tranfromInit(type) {
        let buildTranfrom = (type2, mode) => {
          let aniNum = null;
          if (mode === "fade") {
            aniNum = type2 ? 0 : 1;
          } else {
            aniNum = type2 ? "-100%" : "0";
            if (mode === "zoom-in") {
              aniNum = type2 ? 0.8 : 1;
            }
            if (mode === "zoom-out") {
              aniNum = type2 ? 1.2 : 1;
            }
            if (mode === "slide-right") {
              aniNum = type2 ? "100%" : "0";
            }
            if (mode === "slide-bottom") {
              aniNum = type2 ? "100%" : "0";
            }
          }
          this.animation[this.animationMode()[mode]](aniNum);
        };
        if (typeof this.modeClass === "string") {
          buildTranfrom(type, this.modeClass);
        } else {
          this.modeClass.forEach((mode) => {
            buildTranfrom(type, mode);
          });
        }
        return this.animation;
      },
      animationType(type) {
        return {
          fade: type ? 0 : 1,
          "slide-top": `translateY(${type ? "0" : "-100%"})`,
          "slide-right": `translateX(${type ? "0" : "100%"})`,
          "slide-bottom": `translateY(${type ? "0" : "100%"})`,
          "slide-left": `translateX(${type ? "0" : "-100%"})`,
          "zoom-in": `scaleX(${type ? 1 : 0.8}) scaleY(${type ? 1 : 0.8})`,
          "zoom-out": `scaleX(${type ? 1 : 1.2}) scaleY(${type ? 1 : 1.2})`
        };
      },
      // 内置动画类型与实际动画对应字典
      animationMode() {
        return {
          fade: "opacity",
          "slide-top": "translateY",
          "slide-right": "translateX",
          "slide-bottom": "translateY",
          "slide-left": "translateX",
          "zoom-in": "scale",
          "zoom-out": "scale"
        };
      },
      // 驼峰转中横线
      toLine(name) {
        return name.replace(/([A-Z])/g, "-$1").toLowerCase();
      }
    }
  };
  function _sfc_render$w(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.withDirectives((vue.openBlock(), vue.createElementBlock("view", {
      ref: "ani",
      animation: $data.animationData,
      class: vue.normalizeClass($props.customClass),
      style: vue.normalizeStyle($options.transformStyles),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
    }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 14, ["animation"])), [
      [vue.vShow, $data.isShow]
    ]);
  }
  const __easycom_0$b = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["render", _sfc_render$w], ["__file", "D:/code/code-life/uni-app-components/uni_modules/uni-transition/components/uni-transition/uni-transition.vue"]]);
  const _sfc_main$w = {
    name: "uniPopup",
    components: {},
    emits: ["change", "maskClick"],
    props: {
      // 开启动画
      animation: {
        type: Boolean,
        default: true
      },
      // 弹出层类型，可选值，top: 顶部弹出层；bottom：底部弹出层；center：全屏弹出层
      // message: 消息提示 ; dialog : 对话框
      type: {
        type: String,
        default: "center"
      },
      // maskClick
      isMaskClick: {
        type: Boolean,
        default: null
      },
      // TODO 2 个版本后废弃属性 ，使用 isMaskClick
      maskClick: {
        type: Boolean,
        default: null
      },
      backgroundColor: {
        type: String,
        default: "none"
      },
      safeArea: {
        type: Boolean,
        default: true
      },
      maskBackgroundColor: {
        type: String,
        default: "rgba(0, 0, 0, 0.4)"
      },
      borderRadius: {
        type: String
      }
    },
    watch: {
      /**
       * 监听type类型
       */
      type: {
        handler: function(type) {
          if (!this.config[type])
            return;
          this[this.config[type]](true);
        },
        immediate: true
      },
      isDesktop: {
        handler: function(newVal) {
          if (!this.config[newVal])
            return;
          this[this.config[this.type]](true);
        },
        immediate: true
      },
      /**
       * 监听遮罩是否可点击
       * @param {Object} val
       */
      maskClick: {
        handler: function(val) {
          this.mkclick = val;
        },
        immediate: true
      },
      isMaskClick: {
        handler: function(val) {
          this.mkclick = val;
        },
        immediate: true
      },
      // H5 下禁止底部滚动
      showPopup(show) {
      }
    },
    data() {
      return {
        duration: 300,
        ani: [],
        showPopup: false,
        showTrans: false,
        popupWidth: 0,
        popupHeight: 0,
        config: {
          top: "top",
          bottom: "bottom",
          center: "center",
          left: "left",
          right: "right",
          message: "top",
          dialog: "center",
          share: "bottom"
        },
        maskClass: {
          position: "fixed",
          bottom: 0,
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)"
        },
        transClass: {
          backgroundColor: "transparent",
          borderRadius: this.borderRadius || "0",
          position: "fixed",
          left: 0,
          right: 0
        },
        maskShow: true,
        mkclick: true,
        popupstyle: "top"
      };
    },
    computed: {
      getStyles() {
        let res2 = { backgroundColor: this.bg };
        if (this.borderRadius || "0") {
          res2 = Object.assign(res2, { borderRadius: this.borderRadius });
        }
        return res2;
      },
      isDesktop() {
        return this.popupWidth >= 500 && this.popupHeight >= 500;
      },
      bg() {
        if (this.backgroundColor === "" || this.backgroundColor === "none") {
          return "transparent";
        }
        return this.backgroundColor;
      }
    },
    mounted() {
      const fixSize = () => {
        const {
          windowWidth,
          windowHeight,
          windowTop,
          safeArea,
          screenHeight,
          safeAreaInsets
        } = uni.getSystemInfoSync();
        this.popupWidth = windowWidth;
        this.popupHeight = windowHeight + (windowTop || 0);
        if (safeArea && this.safeArea) {
          this.safeAreaInsets = safeAreaInsets.bottom;
        } else {
          this.safeAreaInsets = 0;
        }
      };
      fixSize();
    },
    // TODO vue3
    unmounted() {
      this.setH5Visible();
    },
    activated() {
      this.setH5Visible(!this.showPopup);
    },
    deactivated() {
      this.setH5Visible(true);
    },
    created() {
      if (this.isMaskClick === null && this.maskClick === null) {
        this.mkclick = true;
      } else {
        this.mkclick = this.isMaskClick !== null ? this.isMaskClick : this.maskClick;
      }
      if (this.animation) {
        this.duration = 300;
      } else {
        this.duration = 0;
      }
      this.messageChild = null;
      this.clearPropagation = false;
      this.maskClass.backgroundColor = this.maskBackgroundColor;
    },
    methods: {
      setH5Visible(visible = true) {
      },
      /**
       * 公用方法，不显示遮罩层
       */
      closeMask() {
        this.maskShow = false;
      },
      /**
       * 公用方法，遮罩层禁止点击
       */
      disableMask() {
        this.mkclick = false;
      },
      // TODO nvue 取消冒泡
      clear(e) {
        e.stopPropagation();
        this.clearPropagation = true;
      },
      open(direction) {
        if (this.showPopup) {
          return;
        }
        let innerType = ["top", "center", "bottom", "left", "right", "message", "dialog", "share"];
        if (!(direction && innerType.indexOf(direction) !== -1)) {
          direction = this.type;
        }
        if (!this.config[direction]) {
          formatAppLog("error", "at uni_modules/uni-popup/components/uni-popup/uni-popup.vue:310", "缺少类型：", direction);
          return;
        }
        this[this.config[direction]]();
        this.$emit("change", {
          show: true,
          type: direction
        });
      },
      close(type) {
        this.showTrans = false;
        this.$emit("change", {
          show: false,
          type: this.type
        });
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.showPopup = false;
        }, 300);
      },
      // TODO 处理冒泡事件，头条的冒泡事件有问题 ，先这样兼容
      touchstart() {
        this.clearPropagation = false;
      },
      onTap() {
        if (this.clearPropagation) {
          this.clearPropagation = false;
          return;
        }
        this.$emit("maskClick");
        if (!this.mkclick)
          return;
        this.close();
      },
      /**
       * 顶部弹出样式处理
       */
      top(type) {
        this.popupstyle = this.isDesktop ? "fixforpc-top" : "top";
        this.ani = ["slide-top"];
        this.transClass = {
          position: "fixed",
          left: 0,
          right: 0,
          backgroundColor: this.bg,
          borderRadius: this.borderRadius || "0"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
        this.$nextTick(() => {
          this.showPoptrans();
          if (this.messageChild && this.type === "message") {
            this.messageChild.timerClose();
          }
        });
      },
      /**
       * 底部弹出样式处理
       */
      bottom(type) {
        this.popupstyle = "bottom";
        this.ani = ["slide-bottom"];
        this.transClass = {
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          paddingBottom: this.safeAreaInsets + "px",
          backgroundColor: this.bg,
          borderRadius: this.borderRadius || "0"
        };
        if (type)
          return;
        this.showPoptrans();
      },
      /**
       * 中间弹出样式处理
       */
      center(type) {
        this.popupstyle = "center";
        this.ani = ["zoom-out", "fade"];
        this.transClass = {
          position: "fixed",
          display: "flex",
          flexDirection: "column",
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: this.borderRadius || "0"
        };
        if (type)
          return;
        this.showPoptrans();
      },
      left(type) {
        this.popupstyle = "left";
        this.ani = ["slide-left"];
        this.transClass = {
          position: "fixed",
          left: 0,
          bottom: 0,
          top: 0,
          backgroundColor: this.bg,
          borderRadius: this.borderRadius || "0",
          display: "flex",
          flexDirection: "column"
        };
        if (type)
          return;
        this.showPoptrans();
      },
      right(type) {
        this.popupstyle = "right";
        this.ani = ["slide-right"];
        this.transClass = {
          position: "fixed",
          bottom: 0,
          right: 0,
          top: 0,
          backgroundColor: this.bg,
          borderRadius: this.borderRadius || "0",
          display: "flex",
          flexDirection: "column"
        };
        if (type)
          return;
        this.showPoptrans();
      },
      showPoptrans() {
        this.$nextTick(() => {
          this.showPopup = true;
          this.showTrans = true;
        });
      }
    }
  };
  function _sfc_render$v(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_transition = resolveEasycom(vue.resolveDynamicComponent("uni-transition"), __easycom_0$b);
    return $data.showPopup ? (vue.openBlock(), vue.createElementBlock(
      "view",
      {
        key: 0,
        class: vue.normalizeClass(["uni-popup", [$data.popupstyle, $options.isDesktop ? "fixforpc-z-index" : ""]])
      },
      [
        vue.createElementVNode(
          "view",
          {
            onTouchstart: _cache[1] || (_cache[1] = (...args) => $options.touchstart && $options.touchstart(...args))
          },
          [
            $data.maskShow ? (vue.openBlock(), vue.createBlock(_component_uni_transition, {
              key: "1",
              name: "mask",
              "mode-class": "fade",
              styles: $data.maskClass,
              duration: $data.duration,
              show: $data.showTrans,
              onClick: $options.onTap
            }, null, 8, ["styles", "duration", "show", "onClick"])) : vue.createCommentVNode("v-if", true),
            vue.createVNode(_component_uni_transition, {
              key: "2",
              "mode-class": $data.ani,
              name: "content",
              styles: $data.transClass,
              duration: $data.duration,
              show: $data.showTrans,
              onClick: $options.onTap
            }, {
              default: vue.withCtx(() => [
                vue.createElementVNode(
                  "view",
                  {
                    class: vue.normalizeClass(["uni-popup__wrapper", [$data.popupstyle]]),
                    style: vue.normalizeStyle($options.getStyles),
                    onClick: _cache[0] || (_cache[0] = (...args) => $options.clear && $options.clear(...args))
                  },
                  [
                    vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
                  ],
                  6
                  /* CLASS, STYLE */
                )
              ]),
              _: 3
              /* FORWARDED */
            }, 8, ["mode-class", "styles", "duration", "show", "onClick"])
          ],
          32
          /* NEED_HYDRATION */
        )
      ],
      2
      /* CLASS */
    )) : vue.createCommentVNode("v-if", true);
  }
  const __easycom_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["render", _sfc_render$v], ["__scopeId", "data-v-4dd3c44b"], ["__file", "D:/code/code-life/uni-app-components/uni_modules/uni-popup/components/uni-popup/uni-popup.vue"]]);
  const noDataValue = "#codeLife_noData#";
  const _sfc_main$v = {
    __name: "cl-select-picker",
    props: /* @__PURE__ */ vue.mergeModels({
      // 数据列表
      options: {
        type: Array,
        default: () => []
      },
      // 输入框提示
      placeholder: {
        type: String,
        default: "请选择"
      },
      // 禁用
      disabled: {
        type: Boolean,
        default: false
      },
      // 隐藏边框
      hideBorder: {
        type: Boolean,
        default: false
      },
      // 选中数据对象里面用来展示的字段
      labelFiled: {
        type: String,
        default: "label"
      },
      // 选中数据对象里面用来回传的字段
      valueFiled: {
        type: String,
        default: "value"
      },
      // 是否隐藏暂无数据
      hideEmptyText: {
        type: Boolean,
        default: false
      },
      emptyText: {
        type: String,
        default: "暂无数据"
      },
      placeholderStyle: {
        type: Object,
        default: () => ({})
      }
    }, {
      "modelValue": {},
      "modelModifiers": {}
    }),
    emits: /* @__PURE__ */ vue.mergeModels(["submit", "clear", "cancel"], ["update:modelValue"]),
    setup(__props, { expose: __expose, emit: __emit }) {
      __expose();
      const atrrs = vue.useAttrs();
      const emits = __emit;
      const props = __props;
      const modelValue = vue.useModel(__props, "modelValue");
      const popupRef = vue.ref();
      const handleOpen = () => {
        if (props.disabled) {
          return;
        }
        if (!isEmpty(modelValue.value)) {
          dataShow();
        }
        popupRef.value.open();
      };
      const dataList = vue.ref([]);
      const selectText = vue.ref(void 0);
      const selectValue = vue.ref(void 0);
      const handleClear = () => {
        selectText.value = void 0;
        selectValue.value = void 0;
        pickValue.value = [0];
        emits("clear");
      };
      const isEmpty = (val) => {
        return val === "" || val === null || val === void 0;
      };
      const submit = (e) => {
        const idx = pickValue.value[0];
        const item = dataList.value[idx];
        const value = item ? item[props.valueFiled] : void 0;
        const label = item ? item[props.labelFiled] : void 0;
        if (props.hideEmptyText && dataList.value.length === 0 || value === noDataValue) {
          selectText.value = void 0;
          selectValue.value = void 0;
          emits("submit", void 0);
        } else {
          selectText.value = label;
          selectValue.value = value;
          emits("submit", value, item);
        }
        popupRef.value.close();
      };
      const cancel = () => {
        popupRef.value.close();
        emit("cancel");
      };
      const pickValue = vue.ref([0]);
      const dataShow = () => {
        const idx = dataList.value.findIndex(
          (item) => item[props.valueFiled] === modelValue.value
        );
        if (idx > -1) {
          pickValue.value = [idx];
          const curData = dataList.value[idx];
          selectText.value = curData[props.labelFiled];
          selectValue.value = curData[props.valueFiled];
        } else {
          selectText.value = void 0;
          selectValue.value = void 0;
        }
      };
      const selectChange = (e) => {
        pickValue.value = e.detail.value;
      };
      vue.watch(
        () => props.options,
        (newV) => {
          if (newV.length === 0 && !props.hideEmptyText) {
            dataList.value = [
              {
                [props.labelFiled]: props.emptyText,
                [props.valueFiled]: noDataValue
              }
            ];
          } else {
            dataList.value = props.options.map((item) => {
              if (typeof item !== "object") {
                return {
                  [props.labelFiled]: item,
                  [props.valueFiled]: item
                };
              } else {
                return item;
              }
            });
            dataShow();
          }
        },
        {
          immediate: true,
          deep: true
        }
      );
      vue.watch(
        () => selectValue.value,
        (newV) => {
          modelValue.value = newV;
        }
      );
      vue.watch(
        () => modelValue.value,
        (newV) => {
          if (isEmpty(newV)) {
            selectText.value = void 0;
            selectValue.value = void 0;
          } else {
            dataShow();
          }
        },
        {
          immediate: true
        }
      );
      const __returned__ = { atrrs, emits, props, modelValue, popupRef, handleOpen, dataList, selectText, selectValue, noDataValue, handleClear, isEmpty, submit, cancel, pickValue, dataShow, selectChange, watch: vue.watch, ref: vue.ref, useAttrs: vue.useAttrs };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$u(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_cl_input = resolveEasycom(vue.resolveDynamicComponent("cl-input"), __easycom_0$c);
    const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_2$1);
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createVNode(_component_cl_input, vue.mergeProps({
          modelValue: $setup.selectText,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.selectText = $event),
          inputType: "falseInput",
          placeholder: $props.placeholder,
          disabled: $props.disabled
        }, $setup.atrrs, {
          onInputClick: $setup.handleOpen,
          onClear: $setup.handleClear
        }), null, 16, ["modelValue", "placeholder", "disabled"]),
        vue.createVNode(
          _component_uni_popup,
          {
            type: "bottom",
            ref: "popupRef"
          },
          {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "btn_box" }, [
                vue.createElementVNode("text", {
                  onClick: $setup.cancel,
                  style: { "padding": "6px" }
                }, "取消"),
                vue.createElementVNode("text", {
                  class: "submit",
                  onClick: $setup.submit,
                  style: { "padding": "6px" }
                }, "确认")
              ]),
              vue.createElementVNode("picker-view", {
                class: "picker-view",
                value: $setup.pickValue,
                onChange: $setup.selectChange,
                "mask-class": "mask_class"
              }, [
                vue.createElementVNode("picker-view-column", null, [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList($setup.dataList, (item, index) => {
                      return vue.openBlock(), vue.createElementBlock(
                        "view",
                        {
                          class: "item",
                          key: index
                        },
                        vue.toDisplayString(item[$setup.props.labelFiled]),
                        1
                        /* TEXT */
                      );
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])
              ], 40, ["value"])
            ]),
            _: 1
            /* STABLE */
          },
          512
          /* NEED_PATCH */
        )
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const __easycom_0$a = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["render", _sfc_render$u], ["__scopeId", "data-v-7036e199"], ["__file", "D:/code/code-life/uni-app-components/uni_modules/cl-select-picker/components/cl-select-picker/cl-select-picker.vue"]]);
  const _sfc_main$u = {
    name: "uniFormsItem",
    options: {
      virtualHost: true
    },
    provide() {
      return {
        uniFormItem: this
      };
    },
    inject: {
      form: {
        from: "uniForm",
        default: null
      }
    },
    props: {
      // 表单校验规则
      rules: {
        type: Array,
        default() {
          return null;
        }
      },
      // 表单域的属性名，在使用校验规则时必填
      name: {
        type: [String, Array],
        default: ""
      },
      required: {
        type: Boolean,
        default: false
      },
      label: {
        type: String,
        default: ""
      },
      // label的宽度
      labelWidth: {
        type: [String, Number],
        default: ""
      },
      // label 居中方式，默认 left 取值 left/center/right
      labelAlign: {
        type: String,
        default: ""
      },
      // 强制显示错误信息
      errorMessage: {
        type: [String, Boolean],
        default: ""
      },
      // 1.4.0 弃用，统一使用 form 的校验时机
      // validateTrigger: {
      // 	type: String,
      // 	default: ''
      // },
      // 1.4.0 弃用，统一使用 form 的label 位置
      // labelPosition: {
      // 	type: String,
      // 	default: ''
      // },
      // 1.4.0 以下属性已经废弃，请使用  #label 插槽代替
      leftIcon: String,
      iconColor: {
        type: String,
        default: "#606266"
      }
    },
    data() {
      return {
        errMsg: "",
        userRules: null,
        localLabelAlign: "left",
        localLabelWidth: "70px",
        localLabelPos: "left",
        border: false,
        isFirstBorder: false
      };
    },
    computed: {
      // 处理错误信息
      msg() {
        return this.errorMessage || this.errMsg;
      }
    },
    watch: {
      // 规则发生变化通知子组件更新
      "form.formRules"(val) {
        this.init();
      },
      "form.labelWidth"(val) {
        this.localLabelWidth = this._labelWidthUnit(val);
      },
      "form.labelPosition"(val) {
        this.localLabelPos = this._labelPosition();
      },
      "form.labelAlign"(val) {
      }
    },
    created() {
      this.init(true);
      if (this.name && this.form) {
        this.$watch(
          () => {
            const val = this.form._getDataValue(this.name, this.form.localData);
            return val;
          },
          (value, oldVal) => {
            const isEqual2 = this.form._isEqual(value, oldVal);
            if (!isEqual2) {
              const val = this.itemSetValue(value);
              this.onFieldChange(val, false);
            }
          },
          {
            immediate: false
          }
        );
      }
    },
    unmounted() {
      this.__isUnmounted = true;
      this.unInit();
    },
    methods: {
      /**
       * 外部调用方法
       * 设置规则 ，主要用于小程序自定义检验规则
       * @param {Array} rules 规则源数据
       */
      setRules(rules = null) {
        this.userRules = rules;
        this.init(false);
      },
      // 兼容老版本表单组件
      setValue() {
      },
      /**
       * 外部调用方法
       * 校验数据
       * @param {any} value 需要校验的数据
       * @param {boolean} 是否立即校验
       * @return {Array|null} 校验内容
       */
      async onFieldChange(value, formtrigger = true) {
        const {
          formData,
          localData,
          errShowType,
          validateCheck,
          validateTrigger,
          _isRequiredField,
          _realName
        } = this.form;
        const name = _realName(this.name);
        if (!value) {
          value = this.form.formData[name];
        }
        const ruleLen = this.itemRules.rules && this.itemRules.rules.length;
        if (!this.validator || !ruleLen || ruleLen === 0)
          return;
        const isRequiredField2 = _isRequiredField(this.itemRules.rules || []);
        let result = null;
        if (validateTrigger === "bind" || formtrigger) {
          result = await this.validator.validateUpdate(
            {
              [name]: value
            },
            formData
          );
          if (!isRequiredField2 && (value === void 0 || value === "")) {
            result = null;
          }
          if (result && result.errorMessage) {
            if (errShowType === "undertext") {
              this.errMsg = !result ? "" : result.errorMessage;
            }
            if (errShowType === "toast") {
              uni.showToast({
                title: result.errorMessage || "校验错误",
                icon: "none"
              });
            }
            if (errShowType === "modal") {
              uni.showModal({
                title: "提示",
                content: result.errorMessage || "校验错误"
              });
            }
          } else {
            this.errMsg = "";
          }
          validateCheck(result ? result : null);
        } else {
          this.errMsg = "";
        }
        return result ? result : null;
      },
      /**
       * 初始组件数据
       */
      init(type = false) {
        const {
          validator,
          formRules,
          childrens,
          formData,
          localData,
          _realName,
          labelWidth,
          _getDataValue,
          _setDataValue
        } = this.form || {};
        this.localLabelAlign = this._justifyContent();
        this.localLabelWidth = this._labelWidthUnit(labelWidth);
        this.localLabelPos = this._labelPosition();
        this.form && type && childrens.push(this);
        if (!validator || !formRules)
          return;
        if (!this.form.isFirstBorder) {
          this.form.isFirstBorder = true;
          this.isFirstBorder = true;
        }
        if (this.group) {
          if (!this.group.isFirstBorder) {
            this.group.isFirstBorder = true;
            this.isFirstBorder = true;
          }
        }
        this.border = this.form.border;
        const name = _realName(this.name);
        const itemRule = this.userRules || this.rules;
        if (typeof formRules === "object" && itemRule) {
          formRules[name] = {
            rules: itemRule
          };
          validator.updateSchema(formRules);
        }
        const itemRules = formRules[name] || {};
        this.itemRules = itemRules;
        this.validator = validator;
        this.itemSetValue(_getDataValue(this.name, localData));
      },
      unInit() {
        if (this.form) {
          const {
            childrens,
            formData,
            _realName
          } = this.form;
          childrens.forEach((item, index) => {
            if (item === this) {
              this.form.childrens.splice(index, 1);
              delete formData[_realName(item.name)];
            }
          });
        }
      },
      // 设置item 的值
      itemSetValue(value) {
        const name = this.form._realName(this.name);
        const rules = this.itemRules.rules || [];
        const val = this.form._getValue(name, value, rules);
        this.form._setDataValue(name, this.form.formData, val);
        return val;
      },
      /**
       * 移除该表单项的校验结果
       */
      clearValidate() {
        this.errMsg = "";
      },
      // 是否显示星号
      _isRequired() {
        return this.required;
      },
      // 处理对齐方式
      _justifyContent() {
        if (this.form) {
          const {
            labelAlign
          } = this.form;
          let labelAli = this.labelAlign ? this.labelAlign : labelAlign;
          if (labelAli === "left")
            return "flex-start";
          if (labelAli === "center")
            return "center";
          if (labelAli === "right")
            return "flex-end";
        }
        return "flex-start";
      },
      // 处理 label宽度单位 ,继承父元素的值
      _labelWidthUnit(labelWidth) {
        return this.num2px(this.labelWidth ? this.labelWidth : labelWidth || (this.label ? 70 : "auto"));
      },
      // 处理 label 位置
      _labelPosition() {
        if (this.form)
          return this.form.labelPosition || "left";
        return "left";
      },
      /**
       * 触发时机
       * @param {Object} rule 当前规则内时机
       * @param {Object} itemRlue 当前组件时机
       * @param {Object} parentRule 父组件时机
       */
      isTrigger(rule, itemRlue, parentRule) {
        if (rule === "submit" || !rule) {
          if (rule === void 0) {
            if (itemRlue !== "bind") {
              if (!itemRlue) {
                return parentRule === "" ? "bind" : "submit";
              }
              return "submit";
            }
            return "bind";
          }
          return "submit";
        }
        return "bind";
      },
      num2px(num) {
        if (typeof num === "number") {
          return `${num}px`;
        }
        return num;
      }
    }
  };
  function _sfc_render$t(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["uni-forms-item", ["is-direction-" + $data.localLabelPos, $data.border ? "uni-forms-item--border" : "", $data.border && $data.isFirstBorder ? "is-first-border" : ""]])
      },
      [
        vue.renderSlot(_ctx.$slots, "label", {}, () => [
          vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass(["uni-forms-item__label", { "no-label": !$props.label && !$props.required }]),
              style: vue.normalizeStyle({ width: $data.localLabelWidth, justifyContent: $data.localLabelAlign })
            },
            [
              $props.required ? (vue.openBlock(), vue.createElementBlock("text", {
                key: 0,
                class: "is-required"
              }, "*")) : vue.createCommentVNode("v-if", true),
              vue.createElementVNode(
                "text",
                null,
                vue.toDisplayString($props.label),
                1
                /* TEXT */
              )
            ],
            6
            /* CLASS, STYLE */
          )
        ], true),
        vue.createElementVNode("view", { class: "uni-forms-item__content" }, [
          vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
          vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass(["uni-forms-item__error", { "msg--active": $options.msg }])
            },
            [
              vue.createElementVNode(
                "text",
                null,
                vue.toDisplayString($options.msg),
                1
                /* TEXT */
              )
            ],
            2
            /* CLASS */
          )
        ])
      ],
      2
      /* CLASS */
    );
  }
  const __easycom_1$5 = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["render", _sfc_render$t], ["__scopeId", "data-v-462874dd"], ["__file", "D:/code/code-life/uni-app-components/uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.vue"]]);
  var pattern = {
    email: /^\S+?@\S+?\.\S+?$/,
    idcard: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
    url: new RegExp(
      "^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$",
      "i"
    )
  };
  const FORMAT_MAPPING = {
    "int": "integer",
    "bool": "boolean",
    "double": "number",
    "long": "number",
    "password": "string"
    // "fileurls": 'array'
  };
  function formatMessage(args, resources = "") {
    var defaultMessage = ["label"];
    defaultMessage.forEach((item) => {
      if (args[item] === void 0) {
        args[item] = "";
      }
    });
    let str = resources;
    for (let key in args) {
      let reg = new RegExp("{" + key + "}");
      str = str.replace(reg, args[key]);
    }
    return str;
  }
  function isEmptyValue(value, type) {
    if (value === void 0 || value === null) {
      return true;
    }
    if (typeof value === "string" && !value) {
      return true;
    }
    if (Array.isArray(value) && !value.length) {
      return true;
    }
    if (type === "object" && !Object.keys(value).length) {
      return true;
    }
    return false;
  }
  const types = {
    integer(value) {
      return types.number(value) && parseInt(value, 10) === value;
    },
    string(value) {
      return typeof value === "string";
    },
    number(value) {
      if (isNaN(value)) {
        return false;
      }
      return typeof value === "number";
    },
    "boolean": function(value) {
      return typeof value === "boolean";
    },
    "float": function(value) {
      return types.number(value) && !types.integer(value);
    },
    array(value) {
      return Array.isArray(value);
    },
    object(value) {
      return typeof value === "object" && !types.array(value);
    },
    date(value) {
      return value instanceof Date;
    },
    timestamp(value) {
      if (!this.integer(value) || Math.abs(value).toString().length > 16) {
        return false;
      }
      return true;
    },
    file(value) {
      return typeof value.url === "string";
    },
    email(value) {
      return typeof value === "string" && !!value.match(pattern.email) && value.length < 255;
    },
    url(value) {
      return typeof value === "string" && !!value.match(pattern.url);
    },
    pattern(reg, value) {
      try {
        return new RegExp(reg).test(value);
      } catch (e) {
        return false;
      }
    },
    method(value) {
      return typeof value === "function";
    },
    idcard(value) {
      return typeof value === "string" && !!value.match(pattern.idcard);
    },
    "url-https"(value) {
      return this.url(value) && value.startsWith("https://");
    },
    "url-scheme"(value) {
      return value.startsWith("://");
    },
    "url-web"(value) {
      return false;
    }
  };
  class RuleValidator {
    constructor(message) {
      this._message = message;
    }
    async validateRule(fieldKey, fieldValue, value, data, allData) {
      var result = null;
      let rules = fieldValue.rules;
      let hasRequired = rules.findIndex((item) => {
        return item.required;
      });
      if (hasRequired < 0) {
        if (value === null || value === void 0) {
          return result;
        }
        if (typeof value === "string" && !value.length) {
          return result;
        }
      }
      var message = this._message;
      if (rules === void 0) {
        return message["default"];
      }
      for (var i = 0; i < rules.length; i++) {
        let rule = rules[i];
        let vt = this._getValidateType(rule);
        Object.assign(rule, {
          label: fieldValue.label || `["${fieldKey}"]`
        });
        if (RuleValidatorHelper[vt]) {
          result = RuleValidatorHelper[vt](rule, value, message);
          if (result != null) {
            break;
          }
        }
        if (rule.validateExpr) {
          let now = Date.now();
          let resultExpr = rule.validateExpr(value, allData, now);
          if (resultExpr === false) {
            result = this._getMessage(rule, rule.errorMessage || this._message["default"]);
            break;
          }
        }
        if (rule.validateFunction) {
          result = await this.validateFunction(rule, value, data, allData, vt);
          if (result !== null) {
            break;
          }
        }
      }
      if (result !== null) {
        result = message.TAG + result;
      }
      return result;
    }
    async validateFunction(rule, value, data, allData, vt) {
      let result = null;
      try {
        let callbackMessage = null;
        const res2 = await rule.validateFunction(rule, value, allData || data, (message) => {
          callbackMessage = message;
        });
        if (callbackMessage || typeof res2 === "string" && res2 || res2 === false) {
          result = this._getMessage(rule, callbackMessage || res2, vt);
        }
      } catch (e) {
        result = this._getMessage(rule, e.message, vt);
      }
      return result;
    }
    _getMessage(rule, message, vt) {
      return formatMessage(rule, message || rule.errorMessage || this._message[vt] || message["default"]);
    }
    _getValidateType(rule) {
      var result = "";
      if (rule.required) {
        result = "required";
      } else if (rule.format) {
        result = "format";
      } else if (rule.arrayType) {
        result = "arrayTypeFormat";
      } else if (rule.range) {
        result = "range";
      } else if (rule.maximum !== void 0 || rule.minimum !== void 0) {
        result = "rangeNumber";
      } else if (rule.maxLength !== void 0 || rule.minLength !== void 0) {
        result = "rangeLength";
      } else if (rule.pattern) {
        result = "pattern";
      } else if (rule.validateFunction) {
        result = "validateFunction";
      }
      return result;
    }
  }
  const RuleValidatorHelper = {
    required(rule, value, message) {
      if (rule.required && isEmptyValue(value, rule.format || typeof value)) {
        return formatMessage(rule, rule.errorMessage || message.required);
      }
      return null;
    },
    range(rule, value, message) {
      const {
        range,
        errorMessage
      } = rule;
      let list = new Array(range.length);
      for (let i = 0; i < range.length; i++) {
        const item = range[i];
        if (types.object(item) && item.value !== void 0) {
          list[i] = item.value;
        } else {
          list[i] = item;
        }
      }
      let result = false;
      if (Array.isArray(value)) {
        result = new Set(value.concat(list)).size === list.length;
      } else {
        if (list.indexOf(value) > -1) {
          result = true;
        }
      }
      if (!result) {
        return formatMessage(rule, errorMessage || message["enum"]);
      }
      return null;
    },
    rangeNumber(rule, value, message) {
      if (!types.number(value)) {
        return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);
      }
      let {
        minimum,
        maximum,
        exclusiveMinimum,
        exclusiveMaximum
      } = rule;
      let min = exclusiveMinimum ? value <= minimum : value < minimum;
      let max = exclusiveMaximum ? value >= maximum : value > maximum;
      if (minimum !== void 0 && min) {
        return formatMessage(rule, rule.errorMessage || message["number"][exclusiveMinimum ? "exclusiveMinimum" : "minimum"]);
      } else if (maximum !== void 0 && max) {
        return formatMessage(rule, rule.errorMessage || message["number"][exclusiveMaximum ? "exclusiveMaximum" : "maximum"]);
      } else if (minimum !== void 0 && maximum !== void 0 && (min || max)) {
        return formatMessage(rule, rule.errorMessage || message["number"].range);
      }
      return null;
    },
    rangeLength(rule, value, message) {
      if (!types.string(value) && !types.array(value)) {
        return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);
      }
      let min = rule.minLength;
      let max = rule.maxLength;
      let val = value.length;
      if (min !== void 0 && val < min) {
        return formatMessage(rule, rule.errorMessage || message["length"].minLength);
      } else if (max !== void 0 && val > max) {
        return formatMessage(rule, rule.errorMessage || message["length"].maxLength);
      } else if (min !== void 0 && max !== void 0 && (val < min || val > max)) {
        return formatMessage(rule, rule.errorMessage || message["length"].range);
      }
      return null;
    },
    pattern(rule, value, message) {
      if (!types["pattern"](rule.pattern, value)) {
        return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);
      }
      return null;
    },
    format(rule, value, message) {
      var customTypes = Object.keys(types);
      var format = FORMAT_MAPPING[rule.format] ? FORMAT_MAPPING[rule.format] : rule.format || rule.arrayType;
      if (customTypes.indexOf(format) > -1) {
        if (!types[format](value)) {
          return formatMessage(rule, rule.errorMessage || message.typeError);
        }
      }
      return null;
    },
    arrayTypeFormat(rule, value, message) {
      if (!Array.isArray(value)) {
        return formatMessage(rule, rule.errorMessage || message.typeError);
      }
      for (let i = 0; i < value.length; i++) {
        const element = value[i];
        let formatResult = this.format(rule, element, message);
        if (formatResult !== null) {
          return formatResult;
        }
      }
      return null;
    }
  };
  class SchemaValidator extends RuleValidator {
    constructor(schema, options) {
      super(SchemaValidator.message);
      this._schema = schema;
      this._options = options || null;
    }
    updateSchema(schema) {
      this._schema = schema;
    }
    async validate(data, allData) {
      let result = this._checkFieldInSchema(data);
      if (!result) {
        result = await this.invokeValidate(data, false, allData);
      }
      return result.length ? result[0] : null;
    }
    async validateAll(data, allData) {
      let result = this._checkFieldInSchema(data);
      if (!result) {
        result = await this.invokeValidate(data, true, allData);
      }
      return result;
    }
    async validateUpdate(data, allData) {
      let result = this._checkFieldInSchema(data);
      if (!result) {
        result = await this.invokeValidateUpdate(data, false, allData);
      }
      return result.length ? result[0] : null;
    }
    async invokeValidate(data, all, allData) {
      let result = [];
      let schema = this._schema;
      for (let key in schema) {
        let value = schema[key];
        let errorMessage = await this.validateRule(key, value, data[key], data, allData);
        if (errorMessage != null) {
          result.push({
            key,
            errorMessage
          });
          if (!all)
            break;
        }
      }
      return result;
    }
    async invokeValidateUpdate(data, all, allData) {
      let result = [];
      for (let key in data) {
        let errorMessage = await this.validateRule(key, this._schema[key], data[key], data, allData);
        if (errorMessage != null) {
          result.push({
            key,
            errorMessage
          });
          if (!all)
            break;
        }
      }
      return result;
    }
    _checkFieldInSchema(data) {
      var keys = Object.keys(data);
      var keys2 = Object.keys(this._schema);
      if (new Set(keys.concat(keys2)).size === keys2.length) {
        return "";
      }
      var noExistFields = keys.filter((key) => {
        return keys2.indexOf(key) < 0;
      });
      var errorMessage = formatMessage({
        field: JSON.stringify(noExistFields)
      }, SchemaValidator.message.TAG + SchemaValidator.message["defaultInvalid"]);
      return [{
        key: "invalid",
        errorMessage
      }];
    }
  }
  function Message() {
    return {
      TAG: "",
      default: "验证错误",
      defaultInvalid: "提交的字段{field}在数据库中并不存在",
      validateFunction: "验证无效",
      required: "{label}必填",
      "enum": "{label}超出范围",
      timestamp: "{label}格式无效",
      whitespace: "{label}不能为空",
      typeError: "{label}类型无效",
      date: {
        format: "{label}日期{value}格式无效",
        parse: "{label}日期无法解析,{value}无效",
        invalid: "{label}日期{value}无效"
      },
      length: {
        minLength: "{label}长度不能少于{minLength}",
        maxLength: "{label}长度不能超过{maxLength}",
        range: "{label}必须介于{minLength}和{maxLength}之间"
      },
      number: {
        minimum: "{label}不能小于{minimum}",
        maximum: "{label}不能大于{maximum}",
        exclusiveMinimum: "{label}不能小于等于{minimum}",
        exclusiveMaximum: "{label}不能大于等于{maximum}",
        range: "{label}必须介于{minimum}and{maximum}之间"
      },
      pattern: {
        mismatch: "{label}格式不匹配"
      }
    };
  }
  SchemaValidator.message = new Message();
  const deepCopy = (val) => {
    return JSON.parse(JSON.stringify(val));
  };
  const typeFilter = (format) => {
    return format === "int" || format === "double" || format === "number" || format === "timestamp";
  };
  const getValue = (key, value, rules) => {
    const isRuleNumType = rules.find((val) => val.format && typeFilter(val.format));
    const isRuleBoolType = rules.find((val) => val.format && val.format === "boolean" || val.format === "bool");
    if (!!isRuleNumType) {
      if (!value && value !== 0) {
        value = null;
      } else {
        value = isNumber(Number(value)) ? Number(value) : value;
      }
    }
    if (!!isRuleBoolType) {
      value = isBoolean(value) ? value : false;
    }
    return value;
  };
  const setDataValue = (field, formdata, value) => {
    formdata[field] = value;
    return value || "";
  };
  const getDataValue = (field, data) => {
    return objGet(data, field);
  };
  const realName = (name, data = {}) => {
    const base_name = _basePath(name);
    if (typeof base_name === "object" && Array.isArray(base_name) && base_name.length > 1) {
      const realname = base_name.reduce((a, b) => a += `#${b}`, "_formdata_");
      return realname;
    }
    return base_name[0] || name;
  };
  const isRealName = (name) => {
    const reg = /^_formdata_#*/;
    return reg.test(name);
  };
  const rawData = (object = {}, name) => {
    let newData = JSON.parse(JSON.stringify(object));
    let formData = {};
    for (let i in newData) {
      let path = name2arr(i);
      objSet(formData, path, newData[i]);
    }
    return formData;
  };
  const name2arr = (name) => {
    let field = name.replace("_formdata_#", "");
    field = field.split("#").map((v) => isNumber(v) ? Number(v) : v);
    return field;
  };
  const objSet = (object, path, value) => {
    if (typeof object !== "object")
      return object;
    _basePath(path).reduce((o, k, i, _) => {
      if (i === _.length - 1) {
        o[k] = value;
        return null;
      } else if (k in o) {
        return o[k];
      } else {
        o[k] = /^[0-9]{1,}$/.test(_[i + 1]) ? [] : {};
        return o[k];
      }
    }, object);
    return object;
  };
  function _basePath(path) {
    if (Array.isArray(path))
      return path;
    return path.replace(/\[/g, ".").replace(/\]/g, "").split(".");
  }
  const objGet = (object, path, defaultVal = "undefined") => {
    let newPath = _basePath(path);
    let val = newPath.reduce((o, k) => {
      return (o || {})[k];
    }, object);
    return !val || val !== void 0 ? val : defaultVal;
  };
  const isNumber = (num) => {
    return !isNaN(Number(num));
  };
  const isBoolean = (bool) => {
    return typeof bool === "boolean";
  };
  const isRequiredField = (rules) => {
    let isNoField = false;
    for (let i = 0; i < rules.length; i++) {
      const ruleData = rules[i];
      if (ruleData.required) {
        isNoField = true;
        break;
      }
    }
    return isNoField;
  };
  const isEqual = (a, b) => {
    if (a === b) {
      return a !== 0 || 1 / a === 1 / b;
    }
    if (a == null || b == null) {
      return a === b;
    }
    var classNameA = toString.call(a), classNameB = toString.call(b);
    if (classNameA !== classNameB) {
      return false;
    }
    switch (classNameA) {
      case "[object RegExp]":
      case "[object String]":
        return "" + a === "" + b;
      case "[object Number]":
        if (+a !== +a) {
          return +b !== +b;
        }
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case "[object Date]":
      case "[object Boolean]":
        return +a === +b;
    }
    if (classNameA == "[object Object]") {
      var propsA = Object.getOwnPropertyNames(a), propsB = Object.getOwnPropertyNames(b);
      if (propsA.length != propsB.length) {
        return false;
      }
      for (var i = 0; i < propsA.length; i++) {
        var propName = propsA[i];
        if (a[propName] !== b[propName]) {
          return false;
        }
      }
      return true;
    }
    if (classNameA == "[object Array]") {
      if (a.toString() == b.toString()) {
        return true;
      }
      return false;
    }
  };
  const _sfc_main$t = {
    name: "uniForms",
    emits: ["validate", "submit"],
    options: {
      virtualHost: true
    },
    props: {
      // 即将弃用
      value: {
        type: Object,
        default() {
          return null;
        }
      },
      // vue3 替换 value 属性
      modelValue: {
        type: Object,
        default() {
          return null;
        }
      },
      // 1.4.0 开始将不支持 v-model ，且废弃 value 和 modelValue
      model: {
        type: Object,
        default() {
          return null;
        }
      },
      // 表单校验规则
      rules: {
        type: Object,
        default() {
          return {};
        }
      },
      //校验错误信息提示方式 默认 undertext 取值 [undertext|toast|modal]
      errShowType: {
        type: String,
        default: "undertext"
      },
      // 校验触发器方式 默认 bind 取值 [bind|submit]
      validateTrigger: {
        type: String,
        default: "submit"
      },
      // label 位置，默认 left 取值  top/left
      labelPosition: {
        type: String,
        default: "left"
      },
      // label 宽度
      labelWidth: {
        type: [String, Number],
        default: ""
      },
      // label 居中方式，默认 left 取值 left/center/right
      labelAlign: {
        type: String,
        default: "left"
      },
      border: {
        type: Boolean,
        default: false
      }
    },
    provide() {
      return {
        uniForm: this
      };
    },
    data() {
      return {
        // 表单本地值的记录，不应该与传如的值进行关联
        formData: {},
        formRules: {}
      };
    },
    computed: {
      // 计算数据源变化的
      localData() {
        const localVal = this.model || this.modelValue || this.value;
        if (localVal) {
          return deepCopy(localVal);
        }
        return {};
      }
    },
    watch: {
      // 监听数据变化 ,暂时不使用，需要单独赋值
      // localData: {},
      // 监听规则变化
      rules: {
        handler: function(val, oldVal) {
          this.setRules(val);
        },
        deep: true,
        immediate: true
      }
    },
    created() {
      let getbinddata = getApp().$vm.$.appContext.config.globalProperties.binddata;
      if (!getbinddata) {
        getApp().$vm.$.appContext.config.globalProperties.binddata = function(name, value, formName) {
          if (formName) {
            this.$refs[formName].setValue(name, value);
          } else {
            let formVm;
            for (let i in this.$refs) {
              const vm = this.$refs[i];
              if (vm && vm.$options && vm.$options.name === "uniForms") {
                formVm = vm;
                break;
              }
            }
            if (!formVm)
              return formatAppLog("error", "at uni_modules/uni-forms/components/uni-forms/uni-forms.vue:187", "当前 uni-froms 组件缺少 ref 属性");
            if (formVm.model)
              formVm.model[name] = value;
            if (formVm.modelValue)
              formVm.modelValue[name] = value;
            if (formVm.value)
              formVm.value[name] = value;
          }
        };
      }
      this.childrens = [];
      this.inputChildrens = [];
      this.setRules(this.rules);
    },
    methods: {
      /**
       * 外部调用方法
       * 设置规则 ，主要用于小程序自定义检验规则
       * @param {Array} rules 规则源数据
       */
      setRules(rules) {
        this.formRules = Object.assign({}, this.formRules, rules);
        this.validator = new SchemaValidator(rules);
      },
      /**
       * 外部调用方法
       * 设置数据，用于设置表单数据，公开给用户使用 ， 不支持在动态表单中使用
       * @param {Object} key
       * @param {Object} value
       */
      setValue(key, value) {
        let example = this.childrens.find((child) => child.name === key);
        if (!example)
          return null;
        this.formData[key] = getValue(key, value, this.formRules[key] && this.formRules[key].rules || []);
        return example.onFieldChange(this.formData[key]);
      },
      /**
       * 外部调用方法
       * 手动提交校验表单
       * 对整个表单进行校验的方法，参数为一个回调函数。
       * @param {Array} keepitem 保留不参与校验的字段
       * @param {type} callback 方法回调
       */
      validate(keepitem, callback) {
        return this.checkAll(this.formData, keepitem, callback);
      },
      /**
       * 外部调用方法
       * 部分表单校验
       * @param {Array|String} props 需要校验的字段
       * @param {Function} 回调函数
       */
      validateField(props = [], callback) {
        props = [].concat(props);
        let invalidFields = {};
        this.childrens.forEach((item) => {
          const name = realName(item.name);
          if (props.indexOf(name) !== -1) {
            invalidFields = Object.assign({}, invalidFields, {
              [name]: this.formData[name]
            });
          }
        });
        return this.checkAll(invalidFields, [], callback);
      },
      /**
       * 外部调用方法
       * 移除表单项的校验结果。传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果
       * @param {Array|String} props 需要移除校验的字段 ，不填为所有
       */
      clearValidate(props = []) {
        props = [].concat(props);
        this.childrens.forEach((item) => {
          if (props.length === 0) {
            item.errMsg = "";
          } else {
            const name = realName(item.name);
            if (props.indexOf(name) !== -1) {
              item.errMsg = "";
            }
          }
        });
      },
      /**
       * 外部调用方法 ，即将废弃
       * 手动提交校验表单
       * 对整个表单进行校验的方法，参数为一个回调函数。
       * @param {Array} keepitem 保留不参与校验的字段
       * @param {type} callback 方法回调
       */
      submit(keepitem, callback, type) {
        for (let i in this.dataValue) {
          const itemData = this.childrens.find((v) => v.name === i);
          if (itemData) {
            if (this.formData[i] === void 0) {
              this.formData[i] = this._getValue(i, this.dataValue[i]);
            }
          }
        }
        if (!type) {
          formatAppLog("warn", "at uni_modules/uni-forms/components/uni-forms/uni-forms.vue:296", "submit 方法即将废弃，请使用validate方法代替！");
        }
        return this.checkAll(this.formData, keepitem, callback, "submit");
      },
      // 校验所有
      async checkAll(invalidFields, keepitem, callback, type) {
        if (!this.validator)
          return;
        let childrens = [];
        for (let i in invalidFields) {
          const item = this.childrens.find((v) => realName(v.name) === i);
          if (item) {
            childrens.push(item);
          }
        }
        if (!callback && typeof keepitem === "function") {
          callback = keepitem;
        }
        let promise;
        if (!callback && typeof callback !== "function" && Promise) {
          promise = new Promise((resolve, reject) => {
            callback = function(valid, invalidFields2) {
              !valid ? resolve(invalidFields2) : reject(valid);
            };
          });
        }
        let results = [];
        let tempFormData = JSON.parse(JSON.stringify(invalidFields));
        for (let i in childrens) {
          const child = childrens[i];
          let name = realName(child.name);
          const result = await child.onFieldChange(tempFormData[name]);
          if (result) {
            results.push(result);
            if (this.errShowType === "toast" || this.errShowType === "modal")
              break;
          }
        }
        if (Array.isArray(results)) {
          if (results.length === 0)
            results = null;
        }
        if (Array.isArray(keepitem)) {
          keepitem.forEach((v) => {
            let vName = realName(v);
            let value = getDataValue(v, this.localData);
            if (value !== void 0) {
              tempFormData[vName] = value;
            }
          });
        }
        if (type === "submit") {
          this.$emit("submit", {
            detail: {
              value: tempFormData,
              errors: results
            }
          });
        } else {
          this.$emit("validate", results);
        }
        let resetFormData = {};
        resetFormData = rawData(tempFormData, this.name);
        callback && typeof callback === "function" && callback(results, resetFormData);
        if (promise && callback) {
          return promise;
        } else {
          return null;
        }
      },
      /**
       * 返回validate事件
       * @param {Object} result
       */
      validateCheck(result) {
        this.$emit("validate", result);
      },
      _getValue: getValue,
      _isRequiredField: isRequiredField,
      _setDataValue: setDataValue,
      _getDataValue: getDataValue,
      _realName: realName,
      _isRealName: isRealName,
      _isEqual: isEqual
    }
  };
  function _sfc_render$s(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-forms" }, [
      vue.createElementVNode("form", null, [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ])
    ]);
  }
  const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["render", _sfc_render$s], ["__scopeId", "data-v-9a1e3c32"], ["__file", "D:/code/code-life/uni-app-components/uni_modules/uni-forms/components/uni-forms/uni-forms.vue"]]);
  const _sfc_main$s = {
    __name: "index",
    setup(__props, { expose: __expose }) {
      __expose();
      const formData = vue.reactive({
        picker: "value2",
        picker1: void 0
      });
      const options = vue.ref([
        {
          label: "我是展示的值1",
          value: "value1"
        },
        {
          label: "我是展示的值2",
          value: "value2"
        },
        {
          label: "我是展示的值3",
          value: "value3"
        },
        4
      ]);
      const pickerSubmit = (val, curData) => {
        formatAppLog("log", "at pages/componentPage/cl-select-picker/index.vue:61", val, curData);
      };
      const clear = () => {
        formatAppLog("log", "at pages/componentPage/cl-select-picker/index.vue:64", "点击了清除按钮！");
      };
      const cancel = () => {
        formatAppLog("log", "at pages/componentPage/cl-select-picker/index.vue:67", "点击了取消按钮！");
      };
      const formRef = vue.ref();
      const formSubmit = async () => {
        formatAppLog("log", "at pages/componentPage/cl-select-picker/index.vue:71", formRef.value, "formRef");
        await formRef.value.validate();
      };
      const __returned__ = { formData, options, pickerSubmit, clear, cancel, formRef, formSubmit, ref: vue.ref, reactive: vue.reactive };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$r(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_cl_select_picker = resolveEasycom(vue.resolveDynamicComponent("cl-select-picker"), __easycom_0$a);
    const _component_uni_forms_item = resolveEasycom(vue.resolveDynamicComponent("uni-forms-item"), __easycom_1$5);
    const _component_uni_forms = resolveEasycom(vue.resolveDynamicComponent("uni-forms"), __easycom_2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createElementVNode("view", { class: "section_title" }, " 基础使用 "),
      vue.createVNode(_component_cl_select_picker, {
        style: { "width": "340px" },
        modelValue: $setup.formData.picker,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.formData.picker = $event),
        options: $setup.options,
        onCancel: $setup.cancel,
        onClear: $setup.clear,
        onSubmit: $setup.pickerSubmit,
        disabled: ""
      }, null, 8, ["modelValue", "options"]),
      vue.createElementVNode("view", { style: { "margin-top": "50rpx" } }, [
        vue.createElementVNode("view", { class: "section_title" }, " 配合uni-forms使用 "),
        vue.createVNode(_component_uni_forms, {
          modelValue: $setup.formData,
          ref: "formRef",
          "label-width": "150rpx"
        }, {
          default: vue.withCtx(() => [
            vue.createVNode(_component_uni_forms_item, {
              label: "表单测试",
              name: "picker1",
              rules: [{ required: true, errorMessage: "表单测试不能为空" }],
              required: ""
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_cl_select_picker, {
                  modelValue: $setup.formData.picker1,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.formData.picker1 = $event),
                  options: $setup.options
                }, null, 8, ["modelValue", "options"])
              ]),
              _: 1
              /* STABLE */
            }),
            vue.createVNode(_component_uni_forms_item, { label: "获取的值" }, {
              default: vue.withCtx(() => [
                vue.createElementVNode(
                  "view",
                  { style: { "height": "35px", "line-height": "35px" } },
                  vue.toDisplayString($setup.formData.picker1),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            vue.createElementVNode("button", { onClick: $setup.formSubmit }, "表单提交")
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"])
      ])
    ]);
  }
  const PagesComponentPageClSelectPickerIndex = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["render", _sfc_render$r], ["__scopeId", "data-v-17f399f1"], ["__file", "D:/code/code-life/uni-app-components/pages/componentPage/cl-select-picker/index.vue"]]);
  const isObject = (val) => val !== null && typeof val === "object";
  const defaultDelimiters = ["{", "}"];
  class BaseFormatter {
    constructor() {
      this._caches = /* @__PURE__ */ Object.create(null);
    }
    interpolate(message, values, delimiters = defaultDelimiters) {
      if (!values) {
        return [message];
      }
      let tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }
  const RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
  const RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
  function parse(format, [startDelimiter, endDelimiter]) {
    const tokens = [];
    let position = 0;
    let text = "";
    while (position < format.length) {
      let char = format[position++];
      if (char === startDelimiter) {
        if (text) {
          tokens.push({ type: "text", value: text });
        }
        text = "";
        let sub = "";
        char = format[position++];
        while (char !== void 0 && char !== endDelimiter) {
          sub += char;
          char = format[position++];
        }
        const isClosed = char === endDelimiter;
        const type = RE_TOKEN_LIST_VALUE.test(sub) ? "list" : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? "named" : "unknown";
        tokens.push({ value: sub, type });
      } else {
        text += char;
      }
    }
    text && tokens.push({ type: "text", value: text });
    return tokens;
  }
  function compile(tokens, values) {
    const compiled = [];
    let index = 0;
    const mode = Array.isArray(values) ? "list" : isObject(values) ? "named" : "unknown";
    if (mode === "unknown") {
      return compiled;
    }
    while (index < tokens.length) {
      const token = tokens[index];
      switch (token.type) {
        case "text":
          compiled.push(token.value);
          break;
        case "list":
          compiled.push(values[parseInt(token.value, 10)]);
          break;
        case "named":
          if (mode === "named") {
            compiled.push(values[token.value]);
          } else {
            {
              console.warn(`Type of token '${token.type}' and format of value '${mode}' don't match!`);
            }
          }
          break;
        case "unknown":
          {
            console.warn(`Detect 'unknown' type of token!`);
          }
          break;
      }
      index++;
    }
    return compiled;
  }
  const LOCALE_ZH_HANS = "zh-Hans";
  const LOCALE_ZH_HANT = "zh-Hant";
  const LOCALE_EN = "en";
  const LOCALE_FR = "fr";
  const LOCALE_ES = "es";
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  const hasOwn = (val, key) => hasOwnProperty.call(val, key);
  const defaultFormatter = new BaseFormatter();
  function include(str, parts) {
    return !!parts.find((part) => str.indexOf(part) !== -1);
  }
  function startsWith(str, parts) {
    return parts.find((part) => str.indexOf(part) === 0);
  }
  function normalizeLocale(locale, messages2) {
    if (!locale) {
      return;
    }
    locale = locale.trim().replace(/_/g, "-");
    if (messages2 && messages2[locale]) {
      return locale;
    }
    locale = locale.toLowerCase();
    if (locale === "chinese") {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf("zh") === 0) {
      if (locale.indexOf("-hans") > -1) {
        return LOCALE_ZH_HANS;
      }
      if (locale.indexOf("-hant") > -1) {
        return LOCALE_ZH_HANT;
      }
      if (include(locale, ["-tw", "-hk", "-mo", "-cht"])) {
        return LOCALE_ZH_HANT;
      }
      return LOCALE_ZH_HANS;
    }
    let locales = [LOCALE_EN, LOCALE_FR, LOCALE_ES];
    if (messages2 && Object.keys(messages2).length > 0) {
      locales = Object.keys(messages2);
    }
    const lang = startsWith(locale, locales);
    if (lang) {
      return lang;
    }
  }
  class I18n {
    constructor({ locale, fallbackLocale, messages: messages2, watcher, formater: formater2 }) {
      this.locale = LOCALE_EN;
      this.fallbackLocale = LOCALE_EN;
      this.message = {};
      this.messages = {};
      this.watchers = [];
      if (fallbackLocale) {
        this.fallbackLocale = fallbackLocale;
      }
      this.formater = formater2 || defaultFormatter;
      this.messages = messages2 || {};
      this.setLocale(locale || LOCALE_EN);
      if (watcher) {
        this.watchLocale(watcher);
      }
    }
    setLocale(locale) {
      const oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      if (oldLocale !== this.locale) {
        this.watchers.forEach((watcher) => {
          watcher(this.locale, oldLocale);
        });
      }
    }
    getLocale() {
      return this.locale;
    }
    watchLocale(fn) {
      const index = this.watchers.push(fn) - 1;
      return () => {
        this.watchers.splice(index, 1);
      };
    }
    add(locale, message, override = true) {
      const curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach((key) => {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
    f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join("");
    }
    t(key, locale, values) {
      let message = this.message;
      if (typeof locale === "string") {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn(`Cannot translate the value of keypath ${key}. Use the value of keypath as default.`);
        return key;
      }
      return this.formater.interpolate(message[key], values).join("");
    }
  }
  function watchAppLocale(appVm, i18n) {
    if (appVm.$watchLocale) {
      appVm.$watchLocale((newLocale) => {
        i18n.setLocale(newLocale);
      });
    } else {
      appVm.$watch(() => appVm.$locale, (newLocale) => {
        i18n.setLocale(newLocale);
      });
    }
  }
  function getDefaultLocale() {
    if (typeof uni !== "undefined" && uni.getLocale) {
      return uni.getLocale();
    }
    if (typeof global !== "undefined" && global.getLocale) {
      return global.getLocale();
    }
    return LOCALE_EN;
  }
  function initVueI18n(locale, messages2 = {}, fallbackLocale, watcher) {
    if (typeof locale !== "string") {
      const options = [
        messages2,
        locale
      ];
      locale = options[0];
      messages2 = options[1];
    }
    if (typeof locale !== "string") {
      locale = getDefaultLocale();
    }
    if (typeof fallbackLocale !== "string") {
      fallbackLocale = typeof __uniConfig !== "undefined" && __uniConfig.fallbackLocale || LOCALE_EN;
    }
    const i18n = new I18n({
      locale,
      fallbackLocale,
      messages: messages2,
      watcher
    });
    let t2 = (key, values) => {
      if (typeof getApp !== "function") {
        t2 = function(key2, values2) {
          return i18n.t(key2, values2);
        };
      } else {
        let isWatchedAppLocale = false;
        t2 = function(key2, values2) {
          const appVm = getApp().$vm;
          if (appVm) {
            appVm.$locale;
            if (!isWatchedAppLocale) {
              isWatchedAppLocale = true;
              watchAppLocale(appVm, i18n);
            }
          }
          return i18n.t(key2, values2);
        };
      }
      return t2(key, values);
    };
    return {
      i18n,
      f(message, values, delimiters) {
        return i18n.f(message, values, delimiters);
      },
      t(key, values) {
        return t2(key, values);
      },
      add(locale2, message, override = true) {
        return i18n.add(locale2, message, override);
      },
      watch(fn) {
        return i18n.watchLocale(fn);
      },
      getLocale() {
        return i18n.getLocale();
      },
      setLocale(newLocale) {
        return i18n.setLocale(newLocale);
      }
    };
  }
  const en$1 = {
    "uni-load-more.contentdown": "Pull up to show more",
    "uni-load-more.contentrefresh": "loading...",
    "uni-load-more.contentnomore": "No more data"
  };
  const zhHans$1 = {
    "uni-load-more.contentdown": "上拉显示更多",
    "uni-load-more.contentrefresh": "正在加载...",
    "uni-load-more.contentnomore": "没有更多数据了"
  };
  const zhHant$1 = {
    "uni-load-more.contentdown": "上拉顯示更多",
    "uni-load-more.contentrefresh": "正在加載...",
    "uni-load-more.contentnomore": "沒有更多數據了"
  };
  const messages$1 = {
    en: en$1,
    "zh-Hans": zhHans$1,
    "zh-Hant": zhHant$1
  };
  let platform;
  setTimeout(() => {
    platform = uni.getSystemInfoSync().platform;
  }, 16);
  const {
    t: t$1
  } = initVueI18n(messages$1);
  const _sfc_main$r = {
    name: "UniLoadMore",
    emits: ["clickLoadMore"],
    props: {
      status: {
        // 上拉的状态：more-loading前；loading-loading中；noMore-没有更多了
        type: String,
        default: "more"
      },
      showIcon: {
        type: Boolean,
        default: true
      },
      iconType: {
        type: String,
        default: "auto"
      },
      iconSize: {
        type: Number,
        default: 24
      },
      color: {
        type: String,
        default: "#777777"
      },
      contentText: {
        type: Object,
        default() {
          return {
            contentdown: "",
            contentrefresh: "",
            contentnomore: ""
          };
        }
      },
      showText: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        webviewHide: false,
        platform,
        imgBase64: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzlBMzU3OTlEOUM0MTFFOUI0NTZDNERBQURBQzI4RkUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzlBMzU3OUFEOUM0MTFFOUI0NTZDNERBQURBQzI4RkUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDOUEzNTc5N0Q5QzQxMUU5QjQ1NkM0REFBREFDMjhGRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDOUEzNTc5OEQ5QzQxMUU5QjQ1NkM0REFBREFDMjhGRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pt+ALSwAAA6CSURBVHja1FsLkFZVHb98LM+F5bHL8khA1iSeiyQBCRM+YGqKUnnJTDLGI0BGZlKDIU2MMglUiDApEZvSsZnQtBRJtKwQNKQMFYeRDR10WOLd8ljYXdh+v8v5fR3Od+797t1dnOnO/Ofce77z+J//+b/P+ZqtXbs2sJ9MJhNUV1cHJ06cCJo3bx7EPc2aNcvpy7pWrVoF+/fvDyoqKoI2bdoE9fX1F7TjN8a+EXBn/fkfvw942Tf+wYMHg9mzZwfjxo0LDhw4EPa1x2MbFw/fOGfPng1qa2tzcCkILsLDydq2bRsunpOTMM7TD/W/tZDZhPdeKD+yGxHhdu3aBV27dg3OnDlzMVANMheLAO3btw8KCwuDmpoaX5OxbgUIMEq7K8IcPnw4KCsrC/r37x8cP378/4cAXAB3vqSkJMuiDhTkw+XcuXNhOWbMmKBly5YhUT8xArhyFvP0BfwRsAuwxJZJsm/nzp2DTp06he/OU+cZ64K6o0ePBkOHDg2GDx8e6gEbJ5Q/NHNuAJQ1hgBeHUDlR7nVTkY8rQAvAi4z34vR/mPs1FoRsaCgIJThI0eOBC1atEiFGGV+5MiRoS45efJkqFjJFXV1dQuA012m2WcwTw98fy6CqBdsaiIO4CScrGPHjvk4odhavPquRtFWXEC25VgkREKOCh/qDSq+vn37htzD/mZTOmOc5U7zKzBPEedygWshcDyWvs30igAbU+6oyMgJBCFhwQE0fccxN60Ay9iebbjoDh06hMowjQxT4fXq1SskArmHZpkArvixp/kWzHdMeArExSJEaiXIjjRjRJ4DaAGWpibLzXN3Fm1vA5teBgh3j1Rv3bp1YgKwPdmf2p9zcyNYYgPKMfY0T5f5nNYdw158nJ8QawW4CLKwiOBSEgO/hok2eBydR+3dYH+PLxA5J8Vv0KBBwenTp0P2JWAx6+yFEBfs8lMY+y0SWMBNI9E4ThKi58VKTg3FQZS1RQF1cz27eC0QHMu+3E0SkUowjhVt5VdaWhp07949ZHv2Qd1EjDXM2cla1M0nl3GxAs3J9yREzyTdFVKVFOaE9qRA8GM0WebRuo9JGZKA7Mv2SeS/Z8+eoQ9BArMfFrLGo6jvxbhHbJZnKX2Rzz1O7QhJJ9Cs2ZMaWIyq/zhdeqPNfIoHd58clIQD+JSXl4dKlyIAuBdVXZwFVWKspSSoxE++h8x4k3uCnEhE4I5KwRiFWGOU0QWKiCYLbdoRMRKAu2kQ9vkfLU6dOhX06NEjlH+yMRZSinnuyWnYosVcji8CEA/6Cg2JF+IIUBqnGKUTCNwtwBN4f89RiK1R96DEgO2o0NDmtEdvVFdVVYV+P3UAPUEs6GFwV3PHmXkD4vh74iDFJysVI/MlaQhwKeBNTLYX5VuA8T4/gZxA4MRGFxDB6R7OmYPfyykGRJbyie+XnGYnQIC/coH9+vULiYrxrkL9ZA9+0ykaHIfEpM7ge8TiJ2CsHYwyMfafAF1yCGBHYIbCVDjDjKt7BeB51D+LgQa6OkG7IDYEEtvQ7lnXLKLtLdLuJBpE4gPUXcW2+PkZwOex+4cGDhwYDBkyRL7/HFcEwUGPo/8uWRUpYnfxGHco8HkewLHLyYmAawAPuIFZxhOpDfJQ8gbUv41yORAptMWBNr6oqMhWird5+u+iHmBb2nhjDV7HWBNQTgK8y11l5NetWzc5ULscAtSj7nbNI0skhWeUZCc0W4nyH/jO4Vz0u1IeYhbk4AiwM6tjxIWByHsoZ9qcIBPJd/y+DwPfBESOmCa/QF3WiZHucLlEDpNxcNhmheEOPgdQNx6/VZFQzFZ5TN08AHXQt2Ii3EdyFuUsPtTcGPhW5iMiCNELvz+Gdn9huG4HUJaW/w3g0wxV0XaG7arG2WeKiUWYM4Y7GO5ezshTARbbWGw/DvXkpp/ivVvE0JVoMxN4rpGzJMhE5Pl+xlATsDIqikP9F9D2z3h9nOksEUFhK+qO4rcPkoalMQ/HqJLIyb3F3JdjrCcw1yZ8joyJLR5gCo54etlag7qIoeNh1N1BRYj3DTFJ0elotxPlVzkGuYAmL0VSJVGAJA41c4Z6A3BzTLfn0HYwYKEI6CUAMzZEWvLsIcQOo1AmmyyM72nHJCfYsogflGV6jEk9vyQZXSuq6w4c16NsGcGZbwOPr+H1RkOk2LEzjNepxQkihHSCQ4ynAYNRx2zMKV92CQMWqj8J0BRE8EShxRFN6YrfCRhC0x3r/Zm4IbQCcmJoV0kMamllccR6FjHqUC5F2R/wS2dcymOlfAKOS4KmzQb5cpNC2MC7JhVn5wjXoJ44rYhLh8n0eXOCorJxa7POjbSlCGVczr34/RsAmrcvo9s+wGp3tzVhntxiXiJ4nvEYb4FJkf0O8HocAePmLvCxnL0AORraVekJk6TYjDabRVXfRE2lCN1h6ZQRN1+InUbsCpKwoBZHh0dODN9JBCUffItXxEavTQkUtnfTVAplCWL3JISz29h4NjotnuSsQKJCk8dF+kJR6RARjrqFVmfPnj3ZbK8cIJ0msd6jgHPGtfVTQ8VLmlvh4mct9sobRmPic0DyDQQnx/NlfYUgyz59+oScsH379pAwXABD32nTpoUHIToESeI5mnbE/UqDdyLcafEBf2MCqgC7NwxIbMREJQ0g4D4sfJwnD+AmRrII05cfMWJE+L1169bQr+fip06dGp4oJ83lmYd5wj/EmMa4TaHivo4EeCguYZBnkB5g2aWA69OIEnUHOaGysjIYMGBAMGnSpODYsWPZwCpFmm4lNq+4gSLQA7jcX8DwtjEyRC8wjabnXEx9kfWnTJkSJkAo90xpJVV+FmcVNeYAF5zWngS4C4O91MBxmAv8blLEpbjI5sz9MTdAhcgkCT1RO8mZkAjfiYpTEvStAS53Uw1vAiUGgZ3GpuQEYvoiBqlIan7kSDHnTwJQFNiPu0+5VxCVYhcZIjNrdXUDdp+Eq5AZ3Gkg8QAyVZRZIk4Tl4QAbF9cXJxNYZMAtAokgs4BrNxEpCtteXg7DDTMDKYNSuQdKsnJBek7HxewvxaosWxLYXtw+cJp18217wql4aKCfBNoEu0O5VU+PhctJ0YeXD4C6JQpyrlpSLTojpGGGN5YwNziChdIZLk4lvLcFJ9jMX3QdiImY9bmGQU+TRUL5CHITTRlgF8D9ouD1MfmLoEPl5xokIumZ2cfgMpHt47IW9N64Hsh7wQYYjyIugWuF5fCqYncXRd5vPMWyizzvhi/32+nvG0dZc9vR6fZOu0md5e+uC408FvKSIOZwXlGvxPv95izA2Vtvg1xKFWARI+vMX66HUhpQQb643uW1bSjuTWyw2SBvDrBvjFic1eGGlz5esq3ko9uSIlBRqPuFcCv8F4WIcN12nVaBd0SaYwI6PDDImR11JkqgHcPmQssjxIn6bUshygDFJUTxPMpHk+jfjPgupgdnYV2R/g7xSjtpah8RJBewhwf0gGK6XI92u4wXFEU40afJ4DN4h5LcAd+40HI3JgJecuT0c062W0i2hQJUTcxan3/CMW1PF2K6bbA+Daz4xRs1D3Br1Cm0OihKCqizW78/nXAF/G5TXrEcVzaNMH6CyMswqsAHqDyDLEyou8lwOXnKF8DjI6KjV3KzMBiXkDH8ij/H214J5A596ekrZ3F0zXlWeL7+P5eUrNo3/QwC15uxthuzidy7DzKRwEDaAViiDgKbTbz7CJnzo0bN7pIfIiid8SuPwn25o3QCmpnyjlZkyxPP8EomCJzrGb7GJMx7tNsq4MT2xMUYaiErZOluTzKsnz3gwCeCZyVRZJfYplNEokEjwrPtxlxjeYAk+F1F74VAzPxQRNYYdtpOUvWs8J1sGhBJMNsb7igN8plJs1eSmLIhLKE4rvaCX27gOhLpLOsIzJ7qn/i+wZzcvSOZ23/du8TZjwV8zHIXoP4R3ifBxiFz1dcVpa3aPntPE+c6TmIWE9EtcMmAcPdWAhYhAXxcLOQi9L1WhD1Sc8p1d2oL7XGiRKp8F4A2i8K/nfI+y/gsTDJ/YC/8+AD5Uh04KHiGl+cIFPnBDDrPMjwRGkLXyxO4VGbfQWnDH2v0bVWE3C9QOXlepbgjEfIJQI6XDG3z5ahD9cw2pS78ipB85wyScNTvsVzlzzhL8/jRrnmVjfFJK/m3m4nj9vbgQTguT8XZTjsm672R5uJKEaQmBI/c58gyus8ZDagLpEVSJBIyHp4jn++xqPV71OgQgJYEWOtZ/haxRtKmWOBu8xdBLftWltsY84zE6WIEy/eIOWL+BaayMx+KHtL7EAkqdNDLiEXmEMUHniedtJqg9HmZtfvt26vNi0BdG3Ft3g8ZOf7PAu59TxtzivLNIekyi+wD1i8CuUiD9FXAa8C+/xS3JPmZnomyc7H+fb4/Se0bk41Fel621r4cgVxbq91V4jVqwB7HTe2M7jgB+QWHavZkDRPmZcASoZEmBx6i75bGjPcMdL4/VKGFAGWZkGzPG0XAbdL9A81G5LOmUnC9hHKJeO7dcUMjblSl12867ElFTtaGl20xvvLGPdVz/8TVuU7y0x1PG7vtNg24oz9Uo/Z412++VFWI7Fcog9tu9Lm6gvRmIPv9x1xmQAu6RDkXtbOtlGEmpgD5Nvnyc0dcv0EE6cfdi1HmhMf9wDF3k3gtRvEedhxjpgfqPb9PU9iEJHnyOUA7bQUXh6kq/D7l2iTjWv7XOD530BDr8jIrus+srXjt4MzumJMHuTsBa63YKE1+RR5lBjEikCCnWKWiHdzOgKO+nRIBAF88za/IFmJ3eMZov4CYxGBabcpGL8EYx+SeMXJeRwHNsV/h+vdxeuhEpN3ZyNY78Gm2fknJxVGhyjixPiQvVkNzT1elD9Py/aTAL64Hb9vcYmC9zfdXdT/C1LeGbg4rnBaAihDFJH12W5ulfNCNe/xTsP3bp8ikzJs5BF+5PNfAQYAPaseTdsEcaYAAAAASUVORK5CYII="
      };
    },
    computed: {
      iconSnowWidth() {
        return (Math.floor(this.iconSize / 24) || 1) * 2;
      },
      contentdownText() {
        return this.contentText.contentdown || t$1("uni-load-more.contentdown");
      },
      contentrefreshText() {
        return this.contentText.contentrefresh || t$1("uni-load-more.contentrefresh");
      },
      contentnomoreText() {
        return this.contentText.contentnomore || t$1("uni-load-more.contentnomore");
      }
    },
    mounted() {
      var pages = getCurrentPages();
      var page = pages[pages.length - 1];
      var currentWebview = page.$getAppWebview();
      currentWebview.addEventListener("hide", () => {
        this.webviewHide = true;
      });
      currentWebview.addEventListener("show", () => {
        this.webviewHide = false;
      });
    },
    methods: {
      onClick() {
        this.$emit("clickLoadMore", {
          detail: {
            status: this.status
          }
        });
      }
    }
  };
  function _sfc_render$q(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "uni-load-more",
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
    }, [
      !$data.webviewHide && ($props.iconType === "circle" || $props.iconType === "auto" && $data.platform === "android") && $props.status === "loading" && $props.showIcon ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 0,
          style: vue.normalizeStyle({ width: $props.iconSize + "px", height: $props.iconSize + "px" }),
          class: "uni-load-more__img uni-load-more__img--android-MP"
        },
        [
          vue.createElementVNode(
            "view",
            {
              class: "uni-load-more__img-icon",
              style: vue.normalizeStyle({ borderTopColor: $props.color, borderTopWidth: $props.iconSize / 12 })
            },
            null,
            4
            /* STYLE */
          ),
          vue.createElementVNode(
            "view",
            {
              class: "uni-load-more__img-icon",
              style: vue.normalizeStyle({ borderTopColor: $props.color, borderTopWidth: $props.iconSize / 12 })
            },
            null,
            4
            /* STYLE */
          ),
          vue.createElementVNode(
            "view",
            {
              class: "uni-load-more__img-icon",
              style: vue.normalizeStyle({ borderTopColor: $props.color, borderTopWidth: $props.iconSize / 12 })
            },
            null,
            4
            /* STYLE */
          )
        ],
        4
        /* STYLE */
      )) : !$data.webviewHide && $props.status === "loading" && $props.showIcon ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 1,
          style: vue.normalizeStyle({ width: $props.iconSize + "px", height: $props.iconSize + "px" }),
          class: "uni-load-more__img uni-load-more__img--ios-H5"
        },
        [
          vue.createElementVNode("image", {
            src: $data.imgBase64,
            mode: "widthFix"
          }, null, 8, ["src"])
        ],
        4
        /* STYLE */
      )) : vue.createCommentVNode("v-if", true),
      $props.showText ? (vue.openBlock(), vue.createElementBlock(
        "text",
        {
          key: 2,
          class: "uni-load-more__text",
          style: vue.normalizeStyle({ color: $props.color })
        },
        vue.toDisplayString($props.status === "more" ? $options.contentdownText : $props.status === "loading" ? $options.contentrefreshText : $options.contentnomoreText),
        5
        /* TEXT, STYLE */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_0$9 = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["render", _sfc_render$q], ["__scopeId", "data-v-9245e42c"], ["__file", "D:/code/code-life/uni-app-components/uni_modules/uni-load-more/components/uni-load-more/uni-load-more.vue"]]);
  const _sfc_main$q = {
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
      // 自动调用列表接口
      autoLoad: {
        type: Boolean,
        default: true
      },
      // 参数改变是否刷新列表
      autoRefreshByParamsChange: {
        type: Boolean,
        default: false
      },
      // 获取列表的方法
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
      // 一次加载条数, 用来判断是否加载完成
      loadPageNum: {
        type: Number,
        default: 10
      },
      // 接口调用之前的钩子（可以在此处理参数）
      beforeHook: {
        type: Function
      },
      // 接口调用成功之后的钩子（可以在此处理拿到的列表）
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
      // 返回的code 字段名
      codeField: {
        type: String,
        default: "code"
      },
      // 返回的消息字段名
      msgField: {
        type: String,
        default: ""
      },
      // 返回列表的字段名
      resField: {
        type: String,
        default: "data"
      }
    },
    setup(__props, { expose: __expose }) {
      const props = __props;
      const emptyIconSrc = vue.computed(() => {
        let svgStr = `<svg height="1024" node-id="1" sillyvg="true" template-height="1024" template-width="1024" version="1.1" viewBox="0 0 1024 1024" width="1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs node-id="121"><linearGradient gradientUnits="objectBoundingBox" id="SVGID_1_" node-id="4" spreadMethod="pad" x1="512.839" x2="171.1031" y1="442.2524" y2="442.2524"><stop offset="0" stop-color="#f7f7f7"/><stop offset="1" stop-color="#999999"/></linearGradient><linearGradient gradientUnits="objectBoundingBox" id="SVGID_00000116199144698685261360000015423725973091637680_" node-id="8" spreadMethod="pad" x1="173.3316" x2="515.0674" y1="516.155" y2="516.155"><stop offset="0" stop-color="#bababa"/><stop offset="1" stop-color="#141414"/></linearGradient><linearGradient gradientUnits="objectBoundingBox" id="SVGID_00000083070862614037924510000000628518362339878317_" node-id="12" spreadMethod="pad" x1="512" x2="512" y1="1014.0526" y2="676.0316"><stop offset="0" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="0.6023" stop-color="#e9e9e9" stop-opacity="0.6023"/><stop offset="0.9731" stop-color="#f1f1f1" stop-opacity="0.9731"/><stop offset="1" stop-color="#f2f2f2"/></linearGradient><linearGradient gradientUnits="objectBoundingBox" id="SVGID_00000025416269089208609580000015844339951879492742_" node-id="25" spreadMethod="pad" x1="523.6606" x2="168.9489" y1="336.8221" y2="691.5339"><stop offset="0" stop-color="#e6e6e6"/><stop offset="1" stop-color="#cccccc"/></linearGradient><linearGradient gradientUnits="objectBoundingBox" id="SVGID_00000121238018799583366590000015894962820904404612_" node-id="29" spreadMethod="pad" x1="802.4846" x2="506.8559" y1="326.9044" y2="622.5331"><stop offset="0" stop-color="#cccccc"/><stop offset="1" stop-color="#bfbfbf"/></linearGradient><linearGradient gradientUnits="objectBoundingBox" id="SVGID_00000150799950960314982350000001352291566116060074_" node-id="33" spreadMethod="pad" x1="541.9021" x2="246.2735" y1="473.2256" y2="768.8542"><stop offset="0" stop-color="#d9d9d9"/><stop offset="1" stop-color="#b3b3b3"/></linearGradient><linearGradient gradientUnits="objectBoundingBox" id="SVGID_00000047061245032336732200000004521575053988040606_" node-id="38" spreadMethod="pad" x1="879.8091" x2="525.0974" y1="404.2248" y2="758.9366"><stop offset="0" stop-color="#f2f2f2"/><stop offset="1" stop-color="#d9d9d9"/></linearGradient><linearGradient gradientUnits="objectBoundingBox" id="SVGID_00000181770729039587392860000004524561359797775024_" node-id="42" spreadMethod="pad" x1="648.5621" x2="756.3444" y1="446.9919" y2="667.9783"><stop offset="0" stop-color="#757575"/><stop offset="0.1545" stop-color="#7c7c7c" stop-opacity="0.8455"/><stop offset="0.3716" stop-color="#8e8e8e" stop-opacity="0.6284"/><stop offset="0.6258" stop-color="#acacac" stop-opacity="0.3742"/><stop offset="0.906" stop-color="#d5d5d5" stop-opacity="0.094"/><stop offset="1" stop-color="#e5e5e5" stop-opacity="0"/></linearGradient><linearGradient gradientUnits="objectBoundingBox" id="SVGID_00000085936399723253267740000018398373942341193099_" node-id="50" spreadMethod="pad" x1="233.3807" x2="198.6542" y1="721.2305" y2="755.957"><stop offset="0" stop-color="#f7f7f7"/><stop offset="1" stop-color="#cccccc"/></linearGradient><linearGradient gradientUnits="objectBoundingBox" id="SVGID_00000063624321058660435880000012652073042910805438_" node-id="54" spreadMethod="pad" x1="849.839" x2="815.6509" y1="642.5823" y2="676.7703"><stop offset="0" stop-color="#cccccc"/><stop offset="1" stop-color="#bfbfbf"/></linearGradient><linearGradient gradientUnits="objectBoundingBox" id="SVGID_00000086672863825622644460000007126693657907817093_" node-id="58" spreadMethod="pad" x1="233.3807" x2="198.6542" y1="418.7148" y2="453.4412"><stop offset="0" stop-color="#e6e6e6"/><stop offset="1" stop-color="#bfbfbf"/></linearGradient><linearGradient gradientUnits="objectBoundingBox" id="SVGID_00000027564080117729215800000010522641390542830987_" node-id="62" spreadMethod="pad" x1="832.7449" x2="798.5569" y1="357.1606" y2="391.3486"><stop offset="0" stop-color="#f7f7f7"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient gradientUnits="objectBoundingBox" id="SVGID_00000136376106347018527900000009671731726894299839_" node-id="66" spreadMethod="pad" x1="698.2882" x2="350.47" y1="222.7124" y2="570.5306"><stop offset="0" stop-color="#f7f7f7"/><stop offset="1" stop-color="#f2f2f2"/></linearGradient><linearGradient gradientUnits="objectBoundingBox" id="SVGID_00000039120847231166144740000007981438255749824175_" node-id="70" spreadMethod="pad" x1="690.8561" x2="755.6796" y1="401.9951" y2="601.5015"><stop offset="0" stop-color="#f7f7f7"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient gradientUnits="objectBoundingBox" id="SVGID_00000116208746705338207530000006130400711563131024_" node-id="75" spreadMethod="pad" x1="259.8894" x2="497.6373" y1="573.9561" y2="573.9561"><stop offset="0" stop-color="#52769e"/><stop offset="1" stop-color="#9dbbde"/></linearGradient><linearGradient gradientUnits="objectBoundingBox" id="SVGID_00000093156246402116653660000000968238260771894685_" node-id="79" spreadMethod="pad" x1="263.7892" x2="501.5371" y1="571.1332" y2="571.1332"><stop offset="0" stop-color="#a6c8ee"/><stop offset="1" stop-color="#daebff"/></linearGradient><linearGradient gradientUnits="objectBoundingBox" id="SVGID_00000024710881697788089240000010652360430109460377_" node-id="84" spreadMethod="pad" x1="259.8894" x2="417.2701" y1="662.543" y2="662.543"><stop offset="0" stop-color="#52769e"/><stop offset="1" stop-color="#9dbbde"/></linearGradient><linearGradient gradientUnits="objectBoundingBox" id="SVGID_00000115480062542186945410000000577836246689479834_" node-id="88" spreadMethod="pad" x1="263.7892" x2="421.17" y1="659.7202" y2="659.7202"><stop offset="0" stop-color="#a6c8ee"/><stop offset="1" stop-color="#daebff"/></linearGradient><linearGradient gradientUnits="objectBoundingBox" id="SVGID_00000047742451729660573560000015450728746370276025_" node-id="94" spreadMethod="pad" x1="663.6006" x2="840.6651" y1="220.4634" y2="220.4634"><stop offset="0" stop-color="#b3b3b3"/><stop offset="1" stop-color="#787878"/></linearGradient><linearGradient gradientUnits="objectBoundingBox" id="SVGID_00000101084794387251404330000009944907264968946065_" node-id="99" spreadMethod="pad" x1="802.2511" x2="719.8765" y1="126.6161" y2="269.2932"><stop offset="0" stop-color="#f7f7f7"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient gradientUnits="objectBoundingBox" id="SVGID_00000003806273140804513080000012405867157337098411_" node-id="103" spreadMethod="pad" x1="754.3362" x2="675.6898" y1="98.9524" y2="235.172"><stop offset="0" stop-color="#f7f7f7"/><stop offset="1" stop-color="#cccccc"/></linearGradient><clipPath id="SVGID_00000149357926579599006680000012238178433730012842_" node-id="110"><path d="M 663.60 292.10 L 663.60 228.20 L 840.70 148.80 Z" fill="#000000" fill-rule="nonzero" node-id="262" stroke="none" target-height="143.3" target-width="177.10004" target-x="663.6" target-y="148.8"/></clipPath></defs><path d="M 512.80 451.00 L 220.50 435.00 L 476.60 289.80 L 473.00 289.80 L 213.80 434.60 L 171.10 578.40 L 173.30 579.90 L 174.90 578.60 L 470.10 594.80 Z" fill="url(#SVGID_1_)" fill-rule="nonzero" node-id="266" stroke="none" target-height="305" target-width="341.69998" target-x="171.1" target-y="289.8"/><path d="M 216.00 436.10 L 515.10 452.40 L 472.40 596.20 L 173.30 579.90 Z" fill="url(#SVGID_00000116199144698685261360000015423725973091637680_)" fill-rule="nonzero" node-id="268" stroke="none" target-height="160.1" target-width="341.8" target-x="173.3" target-y="436.1"/><path d="M 994.00 845.00 L 993.80 850.50 L 993.00 856.00 L 991.70 861.50 L 989.90 867.00 L 987.60 872.60 L 984.70 878.20 L 980.80 884.30 L 976.20 890.60 L 970.80 896.90 L 964.50 903.30 L 957.30 909.70 L 950.20 915.50 L 942.20 921.30 L 933.40 927.10 L 923.70 932.90 L 913.00 938.80 L 891.50 949.20 L 879.50 954.40 L 852.80 964.50 L 825.10 973.50 L 810.40 977.80 L 795.00 981.90 L 774.40 986.80 L 753.00 991.40 L 730.60 995.70 L 708.20 999.40 L 685.00 1002.80 L 661.20 1005.80 L 637.20 1008.20 L 612.80 1010.30 L 587.90 1011.90 L 562.90 1013.10 L 537.60 1013.80 L 512.00 1014.10 L 486.40 1013.80 L 461.10 1013.10 L 436.10 1011.90 L 411.20 1010.30 L 386.80 1008.20 L 362.80 1005.80 L 339.00 1002.80 L 315.80 999.40 L 293.40 995.70 L 271.00 991.40 L 249.60 986.80 L 229.00 981.90 L 213.60 977.80 L 198.90 973.50 L 171.20 964.50 L 144.50 954.40 L 132.50 949.20 L 111.00 938.80 L 100.30 932.90 L 90.60 927.10 L 81.80 921.30 L 73.80 915.50 L 66.70 909.70 L 59.50 903.30 L 53.20 896.90 L 47.80 890.60 L 43.20 884.30 L 39.30 878.20 L 36.40 872.60 L 34.10 867.00 L 32.30 861.50 L 31.00 856.00 L 30.20 850.50 L 30.00 845.00 L 30.20 839.50 L 31.00 834.00 L 32.30 828.60 L 34.10 823.10 L 36.40 817.50 L 39.30 811.90 L 43.20 805.70 L 47.80 799.50 L 53.20 793.20 L 59.50 786.80 L 66.70 780.40 L 73.80 774.60 L 81.80 768.80 L 90.60 763.00 L 100.30 757.10 L 111.00 751.30 L 132.50 740.80 L 144.50 735.70 L 171.20 725.50 L 198.90 716.60 L 213.60 712.30 L 229.00 708.20 L 249.60 703.30 L 271.00 698.70 L 293.40 694.40 L 315.80 690.70 L 339.00 687.30 L 362.80 684.30 L 386.80 681.80 L 411.20 679.80 L 436.10 678.10 L 461.10 677.00 L 486.40 676.30 L 512.00 676.00 L 537.60 676.30 L 562.90 677.00 L 587.90 678.10 L 612.80 679.80 L 637.20 681.80 L 661.20 684.30 L 685.00 687.30 L 708.20 690.70 L 730.60 694.40 L 753.00 698.70 L 774.40 703.30 L 795.00 708.20 L 810.40 712.30 L 825.10 716.60 L 852.80 725.50 L 879.50 735.70 L 891.50 740.80 L 913.00 751.30 L 923.70 757.10 L 933.40 763.00 L 942.20 768.80 L 950.20 774.60 L 957.30 780.40 L 964.50 786.80 L 970.80 793.20 L 976.20 799.50 L 980.80 805.70 L 984.70 811.90 L 987.60 817.50 L 989.90 823.10 L 991.70 828.60 L 993.00 834.00 L 993.80 839.50 L 994.00 845.00 Z" fill="url(#SVGID_00000083070862614037924510000000628518362339878317_)" fill-rule="nonzero" node-id="270" stroke="none" target-height="338.09998" target-width="964" target-x="30" target-y="676"/><g node-id="361"><path d="M 382.40 896.90 L 371.10 898.20 L 370.90 896.10 L 382.40 894.90 L 382.40 890.20 L 376.20 890.20 L 373.50 890.40 L 372.50 890.80 L 371.70 888.50 L 372.80 887.90 L 374.00 886.50 L 376.90 882.20 L 370.70 882.20 L 370.70 880.30 L 378.00 880.30 L 379.90 876.60 L 382.20 877.40 L 380.60 880.30 L 392.70 880.30 L 392.70 882.20 L 379.40 882.20 L 375.20 888.20 L 382.40 888.20 L 382.40 884.80 L 384.60 884.80 L 384.60 888.20 L 392.70 888.20 L 392.70 890.20 L 384.60 890.20 L 384.60 894.70 L 392.70 893.80 L 392.70 895.70 L 384.60 896.70 L 384.60 901.90 L 382.40 901.90 L 382.40 896.90 Z M 376.80 902.80 L 407.30 902.80 L 407.30 920.20 L 405.10 920.20 L 405.10 918.50 L 379.00 918.50 L 379.00 920.30 L 376.80 920.30 L 376.80 902.80 Z M 379.00 904.80 L 379.00 909.70 L 405.10 909.70 L 405.10 904.80 L 379.00 904.80 Z M 405.10 916.50 L 405.10 911.50 L 379.00 911.50 L 379.00 916.50 L 405.10 916.50 Z M 413.40 887.80 L 413.40 889.80 L 407.30 889.80 L 407.30 901.70 L 405.10 901.70 L 405.10 889.80 L 397.30 889.80 L 396.40 895.90 L 395.30 898.90 L 393.60 901.60 L 391.80 900.40 L 393.10 898.30 L 394.60 893.90 L 395.20 887.40 L 395.20 880.10 L 405.90 878.70 L 410.00 877.70 L 411.70 879.40 L 405.00 880.80 L 397.40 881.80 L 397.40 887.80 L 413.40 887.80 Z" fill="#999999" fill-rule="nonzero" group-id="1" node-id="274" stroke="none" target-height="43.700012" target-width="42.69998" target-x="370.7" target-y="876.6"/><path d="M 456.20 917.00 L 457.40 916.90 L 458.10 916.40 L 458.70 915.70 L 459.10 914.10 L 459.40 909.00 L 461.70 910.00 L 461.10 915.70 L 460.40 917.50 L 459.50 918.50 L 458.30 919.10 L 456.30 919.20 L 446.30 919.20 L 444.20 919.10 L 441.90 918.40 L 440.90 916.50 L 440.80 914.90 L 440.80 896.90 L 439.00 896.90 L 437.80 901.60 L 435.90 906.10 L 434.30 909.00 L 432.30 911.70 L 429.90 914.20 L 427.10 916.50 L 423.80 918.50 L 419.80 920.40 L 418.30 918.50 L 422.10 916.80 L 425.20 915.00 L 427.90 912.90 L 430.20 910.50 L 433.70 905.40 L 435.50 901.20 L 436.70 896.90 L 418.80 896.90 L 418.80 894.60 L 437.10 894.60 L 437.90 888.40 L 438.20 882.40 L 421.80 882.40 L 421.80 880.20 L 458.50 880.20 L 458.50 882.40 L 440.40 882.40 L 440.10 888.40 L 439.40 894.60 L 461.30 894.60 L 461.30 896.90 L 443.10 896.90 L 443.20 916.00 L 443.70 916.60 L 444.60 916.90 L 456.20 917.00 Z" fill="#999999" fill-rule="nonzero" group-id="1" node-id="276" stroke="none" target-height="40.200012" target-width="43.400024" target-x="418.3" target-y="880.2"/><path d="M 477.30 887.30 L 484.60 887.30 L 484.60 889.50 L 477.30 889.50 L 477.30 894.70 L 484.60 902.80 L 483.00 904.80 L 477.30 897.40 L 477.30 920.20 L 475.10 920.20 L 475.10 894.80 L 471.40 903.90 L 469.20 907.90 L 467.10 911.00 L 465.70 909.00 L 467.40 906.70 L 470.90 900.40 L 473.70 893.20 L 474.80 889.50 L 466.80 889.50 L 466.80 887.30 L 475.10 887.30 L 475.10 876.80 L 477.30 876.80 L 477.30 887.30 Z M 508.00 879.80 L 508.00 919.90 L 505.70 919.90 L 505.70 917.00 L 489.20 917.00 L 489.20 920.00 L 486.90 920.00 L 486.90 879.80 L 508.00 879.80 Z M 489.20 882.00 L 489.20 891.30 L 505.70 891.30 L 505.70 882.00 L 489.20 882.00 Z M 489.20 903.00 L 505.70 903.00 L 505.70 893.40 L 489.20 893.40 L 489.20 903.00 Z M 505.70 914.80 L 505.70 905.20 L 489.20 905.20 L 489.20 914.80 L 505.70 914.80 Z" fill="#999999" fill-rule="nonzero" group-id="1" node-id="278" stroke="none" target-height="43.400024" target-width="42.299988" target-x="465.7" target-y="876.8"/><path d="M 538.10 901.70 L 541.40 907.20 L 545.70 911.80 L 551.10 915.40 L 557.50 917.90 L 555.90 920.00 L 551.60 918.30 L 547.70 916.20 L 544.20 913.50 L 541.20 910.50 L 538.50 906.90 L 536.30 903.00 L 535.20 905.90 L 533.40 909.00 L 529.80 912.90 L 527.20 914.90 L 520.90 918.50 L 516.50 920.30 L 514.90 918.30 L 522.80 914.70 L 528.20 911.10 L 531.60 907.40 L 533.20 904.50 L 534.10 901.70 L 515.60 901.70 L 515.60 899.40 L 534.60 899.40 L 534.80 889.60 L 518.20 889.60 L 518.20 887.30 L 541.00 887.30 L 544.10 882.30 L 546.70 877.10 L 549.10 878.00 L 543.50 887.30 L 554.00 887.30 L 554.00 889.60 L 537.30 889.60 L 537.10 899.40 L 556.70 899.40 L 556.70 901.70 L 538.10 901.70 Z M 528.20 886.70 L 526.20 882.70 L 523.40 878.50 L 525.30 877.50 L 528.20 881.60 L 530.20 885.50 L 528.20 886.70 Z" fill="#999999" fill-rule="nonzero" group-id="1" node-id="280" stroke="none" target-height="43.200012" target-width="42.599976" target-x="514.9" target-y="877.1"/><path d="M 603.00 916.70 L 602.80 918.00 L 602.00 919.40 L 599.80 920.10 L 592.40 920.30 L 591.50 917.80 L 599.50 917.90 L 600.10 917.80 L 600.60 917.20 L 600.70 887.40 L 585.20 887.40 L 584.20 894.20 L 594.70 904.10 L 598.70 908.50 L 596.80 910.00 L 593.30 905.90 L 583.50 896.40 L 581.10 901.20 L 579.30 903.60 L 577.20 905.90 L 574.40 908.10 L 571.00 910.30 L 569.40 908.70 L 573.00 906.40 L 575.80 904.10 L 577.90 901.80 L 580.90 896.90 L 581.80 894.50 L 582.50 890.80 L 582.80 887.40 L 567.40 887.40 L 567.40 920.40 L 565.10 920.40 L 565.10 885.20 L 582.90 885.20 L 582.90 876.90 L 585.20 876.90 L 585.20 885.20 L 603.00 885.20 L 603.00 916.70 Z" fill="#999999" fill-rule="nonzero" group-id="1" node-id="282" stroke="none" target-height="43.5" target-width="37.900024" target-x="565.1" target-y="876.9"/><path d="M 634.20 891.80 L 633.30 893.00 L 636.20 896.10 L 639.20 898.80 L 642.60 901.20 L 647.90 904.20 L 653.70 906.90 L 652.10 908.80 L 645.10 905.30 L 645.10 920.10 L 642.80 920.10 L 642.80 918.60 L 621.20 918.60 L 621.20 920.40 L 618.90 920.40 L 618.90 905.80 L 611.70 909.40 L 610.10 907.60 L 614.50 905.70 L 618.70 903.30 L 622.80 900.50 L 626.40 897.50 L 629.60 894.20 L 632.20 890.90 L 634.20 891.80 Z M 626.50 887.50 L 623.80 890.40 L 620.70 893.30 L 614.00 898.00 L 612.20 896.30 L 618.90 892.00 L 621.90 889.40 L 624.40 886.80 L 626.50 887.50 Z M 614.60 889.30 L 612.40 889.30 L 612.40 881.60 L 631.70 881.60 L 629.40 877.20 L 631.70 876.60 L 634.40 881.60 L 651.70 881.60 L 651.70 889.30 L 649.30 889.30 L 649.30 883.70 L 614.60 883.70 L 614.60 889.30 Z M 643.80 904.50 L 637.60 900.10 L 632.10 894.70 L 626.90 899.90 L 620.90 904.50 L 643.80 904.50 Z M 642.80 916.40 L 642.80 906.70 L 621.20 906.70 L 621.20 916.40 L 642.80 916.40 Z M 638.30 886.80 L 647.70 893.20 L 651.30 896.40 L 649.70 897.90 L 646.20 894.80 L 636.90 888.10 L 638.30 886.80 Z" fill="#999999" fill-rule="nonzero" group-id="1" node-id="284" stroke="none" target-height="43.80005" target-width="43.600037" target-x="610.1" target-y="876.6"/></g><path d="M 216.00 738.60 L 476.60 592.30 L 476.60 289.80 L 216.00 436.10 Z" fill="url(#SVGID_00000025416269089208609580000015844339951879492742_)" fill-rule="nonzero" node-id="287" stroke="none" target-height="448.8" target-width="260.6" target-x="216" target-y="289.8"/><path d="M 832.70 659.70 L 476.60 592.30 L 476.60 289.80 L 832.70 357.20 Z" fill="url(#SVGID_00000121238018799583366590000015894962820904404612_)" fill-rule="nonzero" node-id="289" stroke="none" target-height="369.90002" target-width="356.1" target-x="476.6" target-y="289.8"/><path d="M 572.20 806.00 L 216.00 738.60 L 216.00 436.10 L 572.20 503.50 Z" fill="url(#SVGID_00000150799950960314982350000001352291566116060074_)" fill-rule="nonzero" node-id="291" stroke="none" target-height="369.9" target-width="356.2" target-x="216" target-y="436.1"/><path d="M 560.60 794.00 L 227.50 731.00 L 227.50 448.00 L 560.60 511.10 Z" fill="#ffffff" fill-rule="nonzero" node-id="293" stroke="none" target-height="346" target-width="333.09998" target-x="227.5" target-y="448"/><path d="M 572.20 806.00 L 832.70 659.70 L 832.70 357.20 L 572.20 503.50 Z" fill="url(#SVGID_00000047061245032336732200000004521575053988040606_)" fill-rule="nonzero" node-id="295" stroke="none" target-height="448.8" target-width="260.5" target-x="572.2" target-y="357.2"/><path d="M 572.20 757.80 L 832.70 611.50 L 832.70 357.20 L 572.20 503.50 Z" fill="url(#SVGID_00000181770729039587392860000004524561359797775024_)" fill-rule="nonzero" node-id="297" stroke="none" target-height="400.59998" target-width="260.5" target-x="572.2" target-y="357.2"/><path d="M 216.00 738.60 L 216.00 738.60 L 216.00 738.60 Z" fill="url(#SVGID_00000085936399723253267740000018398373942341193099_)" fill-rule="nonzero" node-id="299" stroke="none" target-height="0" target-width="0" target-x="216" target-y="738.6"/><path d="M 216.00 436.10 L 216.00 436.10 Z" fill="url(#SVGID_00000086672863825622644460000007126693657907817093_)" fill-rule="nonzero" node-id="303" stroke="none" target-height="0" target-width="0" target-x="216" target-y="436.1"/><path d="M 477.20 293.20 L 823.20 358.70 L 571.60 500.00 L 225.60 434.50 L 477.20 293.20 M 476.60 289.80 L 216.00 436.10 L 572.20 503.50 L 832.80 357.20 L 476.60 289.80 Z" fill="url(#SVGID_00000136376106347018527900000009671731726894299839_)" fill-rule="nonzero" node-id="307" stroke="none" target-height="213.70001" target-width="616.8" target-x="216" target-y="289.8"/><path d="M 874.40 500.00 L 613.80 647.60 L 572.20 503.50 L 832.70 355.90 Z" fill="url(#SVGID_00000039120847231166144740000007981438255749824175_)" fill-rule="nonzero" node-id="309" stroke="none" target-height="291.69998" target-width="302.2" target-x="572.2" target-y="355.9"/><path d="M 572.20 503.50 L 572.20 509.00 L 610.80 644.10 L 613.80 647.60 Z" fill="#cecece" fill-rule="nonzero" node-id="311" stroke="none" target-height="144.09998" target-width="41.599976" target-x="572.2" target-y="503.5"/><path d="M 472.70 616.60 L 284.80 581.10 L 281.40 580.90 L 278.20 580.20 L 275.10 579.20 L 272.20 577.70 L 269.60 575.90 L 267.20 573.80 L 265.10 571.40 L 263.30 568.80 L 261.80 565.90 L 260.80 562.90 L 260.10 559.60 L 259.90 556.20 L 260.10 552.80 L 260.80 549.60 L 261.80 546.50 L 263.30 543.60 L 265.10 541.00 L 267.20 538.60 L 269.60 536.50 L 272.20 534.70 L 275.10 533.20 L 278.20 532.20 L 281.40 531.50 L 284.80 531.30 L 472.70 566.80 L 477.40 567.90 L 481.70 569.50 L 485.50 571.40 L 488.20 573.20 L 490.60 575.20 L 494.40 579.70 L 495.70 582.30 L 496.80 585.20 L 497.40 588.30 L 497.60 591.70 L 497.40 595.10 L 496.70 598.30 L 495.70 601.40 L 494.20 604.30 L 492.40 606.90 L 490.30 609.30 L 487.90 611.40 L 485.30 613.20 L 482.40 614.70 L 479.40 615.70 L 476.10 616.40 L 472.70 616.60 Z" fill="url(#SVGID_00000116208746705338207530000006130400711563131024_)" fill-rule="nonzero" node-id="313" stroke="none" target-height="85.29999" target-width="237.70001" target-x="259.9" target-y="531.3"/><path d="M 476.60 613.80 L 288.70 578.30 L 285.30 578.10 L 282.10 577.40 L 279.00 576.40 L 276.10 574.90 L 273.50 573.10 L 271.10 571.00 L 269.00 568.60 L 267.20 566.00 L 265.70 563.10 L 264.70 560.00 L 264.00 556.80 L 263.80 553.40 L 264.00 550.00 L 264.70 546.70 L 265.70 543.70 L 267.20 540.80 L 269.00 538.20 L 271.10 535.80 L 273.50 533.70 L 276.10 531.90 L 279.00 530.40 L 282.10 529.40 L 285.30 528.70 L 288.70 528.50 L 476.60 564.00 L 481.30 565.10 L 485.60 566.70 L 489.40 568.60 L 492.10 570.40 L 494.50 572.30 L 498.30 576.90 L 499.60 579.50 L 500.70 582.30 L 501.30 585.50 L 501.50 588.90 L 501.30 592.30 L 500.60 595.50 L 499.60 598.60 L 498.10 601.50 L 496.30 604.10 L 494.20 606.50 L 491.80 608.60 L 489.20 610.40 L 486.30 611.90 L 483.30 612.90 L 480.00 613.60 L 476.60 613.80 Z" fill="url(#SVGID_00000093156246402116653660000000968238260771894685_)" fill-rule="nonzero" node-id="315" stroke="none" target-height="85.29999" target-width="237.70001" target-x="263.8" target-y="528.5"/><g node-id="362"><path d="M 392.30 698.10 L 284.80 676.90 L 281.40 676.60 L 278.20 676.00 L 275.10 674.90 L 272.20 673.50 L 269.60 671.70 L 267.20 669.60 L 265.10 667.20 L 263.30 664.50 L 261.80 661.70 L 260.80 658.60 L 260.10 655.40 L 259.90 652.00 L 260.10 648.50 L 260.80 645.30 L 261.80 642.20 L 263.30 639.40 L 265.10 636.70 L 267.20 634.30 L 269.60 632.20 L 272.20 630.40 L 275.10 629.00 L 278.20 627.90 L 281.40 627.30 L 284.80 627.00 L 392.30 648.20 L 397.10 649.40 L 401.30 650.90 L 405.20 652.80 L 407.90 654.60 L 410.20 656.60 L 414.00 661.20 L 415.40 663.80 L 416.40 666.60 L 417.00 669.70 L 417.30 673.10 L 417.00 676.60 L 416.40 679.80 L 415.30 682.80 L 413.90 685.70 L 412.10 688.40 L 410.00 690.80 L 407.60 692.90 L 404.90 694.60 L 402.00 696.10 L 399.00 697.20 L 395.80 697.80 L 392.30 698.10 Z" fill="url(#SVGID_00000024710881697788089240000010652360430109460377_)" fill-rule="nonzero" group-id="2" node-id="319" stroke="none" target-height="71.099976" target-width="157.4" target-x="259.9" target-y="627"/><path d="M 396.20 695.20 L 288.70 674.10 L 285.30 673.80 L 282.10 673.20 L 279.00 672.10 L 276.10 670.60 L 273.50 668.90 L 271.10 666.80 L 269.00 664.40 L 267.20 661.70 L 265.70 658.80 L 264.70 655.80 L 264.00 652.60 L 263.80 649.10 L 264.00 645.70 L 264.70 642.50 L 265.70 639.40 L 267.20 636.50 L 269.00 633.90 L 271.10 631.50 L 273.50 629.40 L 276.10 627.60 L 279.00 626.20 L 282.10 625.10 L 285.30 624.40 L 288.70 624.20 L 396.20 645.40 L 401.00 646.50 L 405.20 648.10 L 409.10 650.00 L 411.80 651.80 L 414.10 653.80 L 417.90 658.30 L 419.30 660.90 L 420.30 663.80 L 420.90 666.90 L 421.20 670.30 L 420.90 673.70 L 420.30 677.00 L 419.20 680.00 L 417.80 682.90 L 416.00 685.50 L 411.50 690.00 L 408.80 691.80 L 405.90 693.30 L 402.90 694.30 L 399.70 695.00 L 396.20 695.20 Z" fill="url(#SVGID_00000115480062542186945410000000577836246689479834_)" fill-rule="nonzero" group-id="2" node-id="321" stroke="none" target-height="71" target-width="157.40002" target-x="263.8" target-y="624.2"/></g><g node-id="363"><path d="M 597.80 176.10 L 597.90 175.70 L 595.40 174.80 L 595.40 176.30 L 663.60 229.70 L 840.70 150.30 Z" fill="#aaaaaa" fill-rule="nonzero" group-id="3" node-id="326" stroke="none" target-height="79.399994" target-width="245.29999" target-x="595.4" target-y="150.3"/><path d="M 663.60 292.10 L 663.60 228.20 L 840.70 148.80 Z" fill="url(#SVGID_00000047742451729660573560000015450728746370276025_)" fill-rule="nonzero" group-id="3" node-id="328" stroke="none" target-height="143.3" target-width="177.10004" target-x="663.6" target-y="148.8"/><path d="M 685.60 241.70 L 684.70 241.50 L 684.00 242.70 L 751.40 289.10 L 839.90 149.90 Z" fill="#c4c4c4" fill-rule="nonzero" group-id="3" node-id="330" stroke="none" target-height="139.20001" target-width="155.90002" target-x="684" target-y="149.9"/><path d="M 840.70 148.80 L 684.70 241.50 L 752.10 287.90 Z" fill="url(#SVGID_00000101084794387251404330000009944907264968946065_)" fill-rule="nonzero" group-id="3" node-id="332" stroke="none" target-height="139.09999" target-width="156" target-x="684.7" target-y="148.8"/><path d="M 840.70 148.80 L 595.40 174.80 L 663.60 228.20 Z" fill="url(#SVGID_00000003806273140804513080000012405867157337098411_)" fill-rule="nonzero" group-id="3" node-id="334" stroke="none" target-height="79.399994" target-width="245.29999" target-x="595.4" target-y="148.8"/><g node-id="365"><g clip-path="url(#SVGID_00000149357926579599006680000012238178433730012842_)" group-id="3,5" node-id="338"><path d="M 703.70 268.30 L 659.40 224.90 L 652.70 311.70 L 693.40 285.50 Z" fill="#bababa" fill-rule="nonzero" group-id="3,5,9" node-id="340" stroke="none" target-height="86.80002" target-width="51" target-x="652.7" target-y="224.9"/></g></g></g><g node-id="364"><g node-id="366"><path d="M 631.20 239.10 L 630.40 238.90 L 629.80 238.30 L 629.60 237.60 L 629.90 236.50 L 634.90 233.60 L 635.60 233.50 L 636.70 233.90 L 637.30 235.10 L 636.80 236.30 L 631.20 239.10 Z" fill="#adadad" fill-rule="nonzero" group-id="4,6" node-id="349" stroke="none" target-height="5.600006" target-width="7.700012" target-x="629.6" target-y="233.5"/></g><g node-id="367"><path d="M 443.00 442.50 L 441.90 442.10 L 441.50 441.60 L 441.40 440.40 L 444.40 430.90 L 444.80 430.30 L 445.90 429.80 L 447.10 430.20 L 447.60 431.30 L 447.50 432.00 L 444.50 441.30 L 443.90 442.20 L 443.00 442.50 Z M 449.50 423.80 L 448.30 423.40 L 447.80 422.20 L 448.00 421.60 L 451.90 412.40 L 452.80 411.60 L 454.10 411.60 L 454.60 412.00 L 455.10 413.20 L 454.90 413.80 L 451.00 422.80 L 450.40 423.60 L 449.50 423.80 Z M 457.70 405.90 L 456.40 405.30 L 456.10 404.10 L 456.20 403.50 L 460.90 394.70 L 461.90 393.90 L 463.20 394.10 L 463.70 394.50 L 464.00 395.70 L 463.80 396.30 L 459.20 405.00 L 458.60 405.60 L 457.70 405.90 Z M 467.40 388.70 L 466.00 388.00 L 465.80 386.80 L 466.00 386.20 L 471.40 377.80 L 472.40 377.10 L 473.70 377.40 L 474.20 377.80 L 474.40 379.00 L 474.10 379.70 L 468.80 387.90 L 468.20 388.50 L 467.40 388.70 Z M 478.50 372.30 L 477.00 371.50 L 476.90 370.30 L 477.10 369.70 L 483.20 361.80 L 484.30 361.20 L 485.50 361.50 L 485.90 362.00 L 486.10 363.30 L 485.80 363.90 L 479.80 371.70 L 478.50 372.30 Z M 490.80 356.90 L 489.70 356.50 L 489.30 356.00 L 489.20 354.70 L 489.50 354.20 L 496.20 346.80 L 497.30 346.20 L 498.50 346.70 L 498.90 347.20 L 498.90 348.40 L 492.00 356.30 L 490.80 356.90 Z M 585.00 350.10 L 581.40 349.20 L 575.00 346.40 L 574.50 346.00 L 574.10 344.80 L 574.30 344.20 L 575.30 343.40 L 576.60 343.60 L 579.40 345.00 L 585.90 347.00 L 586.60 348.00 L 586.60 348.70 L 586.00 349.70 L 585.00 350.10 Z M 594.80 350.00 L 593.40 349.30 L 593.10 348.20 L 593.30 347.60 L 593.70 347.10 L 596.30 346.00 L 597.90 344.90 L 599.30 343.40 L 600.80 340.80 L 602.00 340.40 L 603.10 340.90 L 603.60 342.10 L 601.90 345.40 L 600.00 347.40 L 597.80 348.90 L 594.80 350.00 Z M 504.20 342.40 L 503.10 341.90 L 502.70 341.40 L 502.70 340.20 L 510.80 332.40 L 512.00 332.40 L 512.60 332.80 L 512.90 333.40 L 512.90 334.60 L 505.40 341.90 L 504.20 342.40 Z M 568.00 340.60 L 566.80 340.10 L 564.60 337.50 L 560.70 331.80 L 560.50 331.20 L 560.90 330.00 L 562.00 329.40 L 563.20 329.70 L 563.60 330.20 L 566.20 334.20 L 569.60 338.30 L 569.50 339.60 L 569.20 340.10 L 568.00 340.60 Z M 603.40 334.10 L 602.80 333.90 L 601.90 333.10 L 600.70 326.50 L 599.60 322.80 L 600.10 321.60 L 601.30 321.20 L 602.40 321.60 L 602.80 322.20 L 604.70 329.00 L 605.00 332.90 L 604.20 333.90 L 603.40 334.10 Z M 518.70 329.00 L 517.50 328.50 L 517.10 327.90 L 517.20 326.60 L 525.90 319.50 L 527.10 319.60 L 527.60 320.00 L 527.90 320.60 L 527.80 321.90 L 519.80 328.60 L 518.70 329.00 Z M 558.50 323.50 L 557.50 323.20 L 556.90 322.30 L 555.70 315.60 L 555.60 311.50 L 556.50 310.60 L 557.20 310.50 L 557.80 310.60 L 558.70 311.50 L 559.10 316.80 L 560.00 321.50 L 559.90 322.70 L 559.50 323.20 L 558.50 323.50 Z M 534.20 316.80 L 532.90 316.10 L 532.60 315.50 L 532.80 314.30 L 537.60 311.00 L 542.40 308.30 L 543.60 308.70 L 544.10 309.20 L 544.30 309.80 L 543.90 311.00 L 535.20 316.60 L 534.20 316.80 Z M 596.40 315.90 L 595.10 315.30 L 593.00 312.80 L 587.90 308.30 L 587.70 307.10 L 587.90 306.50 L 589.00 305.80 L 590.20 306.10 L 592.90 308.20 L 597.70 313.20 L 598.00 313.80 L 597.80 315.10 L 597.40 315.60 L 596.40 315.90 Z M 551.50 307.40 L 550.60 307.10 L 550.00 306.30 L 549.90 305.70 L 550.30 304.50 L 557.00 302.10 L 559.60 295.50 L 561.40 292.60 L 562.40 291.80 L 563.70 292.10 L 564.10 292.50 L 564.40 293.70 L 560.80 301.10 L 561.40 301.10 L 562.30 301.80 L 562.60 303.10 L 562.30 303.60 L 561.30 304.40 L 551.50 307.40 Z M 580.40 304.80 L 577.00 304.00 L 570.10 303.20 L 569.20 302.30 L 569.10 301.70 L 569.60 300.50 L 570.70 300.10 L 574.30 300.30 L 580.90 301.60 L 581.90 302.40 L 582.00 303.60 L 581.40 304.50 L 580.40 304.80 Z M 569.00 287.50 L 567.90 287.10 L 567.50 286.50 L 567.50 285.30 L 567.80 284.70 L 575.40 277.30 L 576.60 277.30 L 577.20 277.70 L 577.50 278.20 L 577.50 279.50 L 570.20 287.00 L 569.00 287.50 Z M 583.30 273.80 L 582.00 273.20 L 581.70 272.70 L 581.80 271.40 L 590.30 264.20 L 591.60 264.30 L 592.10 264.70 L 592.40 265.30 L 592.30 266.60 L 584.30 273.40 L 583.30 273.80 Z M 598.60 261.30 L 597.20 260.70 L 596.90 260.10 L 597.10 258.80 L 606.10 252.10 L 607.30 252.30 L 607.80 252.80 L 608.10 253.40 L 607.90 254.60 L 599.60 261.00 L 598.60 261.30 Z M 614.50 249.70 L 613.20 249.00 L 612.90 248.40 L 613.10 247.20 L 622.50 241.00 L 623.70 241.20 L 624.20 241.70 L 624.40 242.30 L 624.10 243.50 L 615.50 249.40 L 614.50 249.70 Z" fill="#adadad" fill-rule="nonzero" group-id="4,7" node-id="354" stroke="none" target-height="201.5" target-width="183.00003" target-x="441.4" target-y="241"/></g><path d="M 439.50 457.00 L 438.10 456.30 L 437.80 455.10 L 438.80 450.10 L 439.10 449.50 L 440.10 448.80 L 441.40 449.10 L 442.10 450.20 L 442.10 450.80 L 440.90 456.10 L 440.10 456.90 L 439.50 457.00 Z" fill="#adadad" fill-rule="nonzero" group-id="4,8" node-id="359" stroke="none" target-height="8.200012" target-width="4.3000183" target-x="437.8" target-y="448.8"/></g></svg>`;
        return `data:image/svg+xml,${encodeURIComponent(svgStr)}`;
      });
      const errorIconSrc = vue.computed(() => {
        let svgStr = `<svg height="1024" node-id="1" sillyvg="true" template-height="1024" template-width="1024" version="1.1" viewBox="0 0 1024 1024" width="1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs node-id="80"><linearGradient gradientUnits="objectBoundingBox" id="SVGID_1_" node-id="4" spreadMethod="pad" x1="512" x2="512" y1="1014.0526" y2="676.0316"><stop offset="0" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="0.6023" stop-color="#e9e9e9" stop-opacity="0.6023"/><stop offset="0.9731" stop-color="#f1f1f1" stop-opacity="0.9731"/><stop offset="1" stop-color="#f2f2f2"/></linearGradient><linearGradient gradientUnits="objectBoundingBox" id="SVGID_00000002370628650355008590000016647995997477150903_" node-id="15" spreadMethod="pad" x1="335.3474" x2="667.5579" y1="163.5523" y2="163.5523"><stop offset="0" stop-color="#e6e6e6"/><stop offset="1" stop-color="#f2f2f2"/></linearGradient><linearGradient gradientUnits="objectBoundingBox" id="SVGID_00000100376642791671832030000001081993246511528840_" node-id="24" spreadMethod="pad" x1="661.9839" x2="786.6568" y1="130.7626" y2="346.7023"><stop offset="0" stop-color="#f2f2f2"/><stop offset="1" stop-color="#d9d9d9"/></linearGradient><linearGradient gradientUnits="objectBoundingBox" id="SVGID_00000024717494221334300370000014884475135824460682_" node-id="33" spreadMethod="pad" x1="816.1053" x2="816.1053" y1="306.6681" y2="585.5734"><stop offset="0" stop-color="#d9d9d9"/><stop offset="1" stop-color="#bfbfbf"/></linearGradient><linearGradient gradientUnits="objectBoundingBox" id="SVGID_00000124142961439880204620000012074003606482902669_" node-id="42" spreadMethod="pad" x1="724.9053" x2="724.9053" y1="566.8787" y2="780.9839"><stop offset="0" stop-color="#bfbfbf"/><stop offset="1" stop-color="#a6a6a6"/></linearGradient><linearGradient gradientUnits="objectBoundingBox" id="SVGID_00000065786373702946824800000014667706739734211482_" node-id="46" spreadMethod="pad" x1="659.2123" x2="330.4087" y1="175.0632" y2="744.5677"><stop offset="0" stop-color="#f7f7f7"/><stop offset="1" stop-color="#dedede"/></linearGradient><linearGradient gradientUnits="objectBoundingBox" id="SVGID_00000152258586233999714150000004608305050682382213_" node-id="52" spreadMethod="pad" x1="496.9655" x2="496.9655" y1="575.4307" y2="251.707"><stop offset="0" stop-color="#52769e"/><stop offset="1" stop-color="#9dbbde"/></linearGradient><linearGradient gradientUnits="objectBoundingBox" id="SVGID_00000059992187882346747980000013329599187380766635_" node-id="56" spreadMethod="pad" x1="490.5052" x2="490.5052" y1="575.4965" y2="258.3176"><stop offset="0" stop-color="#a6c8ee"/><stop offset="1" stop-color="#daebff"/></linearGradient><linearGradient gradientUnits="objectBoundingBox" id="SVGID_00000105388076934989700070000011562133948401869698_" node-id="60" spreadMethod="pad" x1="497.9655" x2="497.9655" y1="687.0657" y2="600.8965"><stop offset="0" stop-color="#52769e"/><stop offset="1" stop-color="#9dbbde"/></linearGradient><linearGradient gradientUnits="objectBoundingBox" id="SVGID_00000103968888131291422740000001730141782121947797_" node-id="64" spreadMethod="pad" x1="490.5052" x2="490.5052" y1="687.0439" y2="603.6755"><stop offset="0" stop-color="#a6c8ee"/><stop offset="1" stop-color="#daebff"/></linearGradient><clipPath id="SVGID_00000063630464488290712940000000898682393034554496_" node-id="13"><path d="M 828.70 307.90 L 665.90 145.00 L 662.80 142.40 L 659.60 140.20 L 656.00 138.40 L 652.20 137.20 L 648.40 136.40 L 644.40 136.10 L 423.10 136.10 L 416.70 136.30 L 404.00 137.90 L 397.80 139.30 L 391.60 141.10 L 385.60 143.30 L 379.30 146.20 L 372.80 149.80 L 363.20 156.00 L 358.60 159.80 L 357.70 161.20 L 359.10 161.30 L 362.00 160.30 L 362.40 162.40 L 364.30 164.50 L 370.00 167.60 L 229.60 307.90 L 227.00 310.90 L 224.80 314.20 L 223.00 317.80 L 221.80 321.50 L 221.00 325.40 L 220.70 329.40 L 220.70 559.80 L 221.00 563.80 L 221.80 567.70 L 223.00 571.40 L 224.80 575.00 L 227.00 578.20 L 229.60 581.30 L 392.50 744.20 L 395.50 746.80 L 398.80 749.00 L 402.40 750.80 L 406.10 752.00 L 410.00 752.80 L 414.00 753.10 L 606.80 753.10 L 612.30 768.20 L 619.60 767.00 L 630.90 764.10 L 637.60 761.90 L 644.30 759.10 L 651.10 755.60 L 655.40 752.90 L 659.50 749.80 L 665.90 744.10 L 828.80 581.30 L 831.40 578.20 L 833.60 575.00 L 835.40 571.40 L 836.60 567.60 L 837.40 563.80 L 837.70 559.80 L 837.70 329.40 L 837.40 325.40 L 836.60 321.50 L 835.30 317.80 L 833.60 314.20 L 831.40 310.90 L 828.70 307.90 Z" fill="#000000" fill-rule="nonzero" node-id="147" stroke="none" target-height="632.1" target-width="617" target-x="220.7" target-y="136.1"/></clipPath><clipPath id="SVGID_00000181079892347333051480000006203325759635655331_" node-id="22"><path d="M 828.70 307.90 L 665.90 145.00 L 662.80 142.40 L 659.60 140.20 L 656.00 138.40 L 652.20 137.20 L 648.40 136.40 L 644.40 136.10 L 423.10 136.10 L 416.70 136.30 L 404.00 137.90 L 397.80 139.30 L 391.60 141.10 L 385.60 143.30 L 379.30 146.20 L 372.80 149.80 L 363.20 156.00 L 358.60 159.80 L 357.70 161.20 L 359.10 161.30 L 362.00 160.30 L 362.40 162.40 L 364.30 164.50 L 370.00 167.60 L 229.60 307.90 L 227.00 310.90 L 224.80 314.20 L 223.00 317.80 L 221.80 321.50 L 221.00 325.40 L 220.70 329.40 L 220.70 559.80 L 221.00 563.80 L 221.80 567.70 L 223.00 571.40 L 224.80 575.00 L 227.00 578.20 L 229.60 581.30 L 392.50 744.20 L 395.50 746.80 L 398.80 749.00 L 402.40 750.80 L 406.10 752.00 L 410.00 752.80 L 414.00 753.10 L 606.80 753.10 L 612.30 768.20 L 619.60 767.00 L 630.90 764.10 L 637.60 761.90 L 644.30 759.10 L 651.10 755.60 L 655.40 752.90 L 659.50 749.80 L 665.90 744.10 L 828.80 581.30 L 831.40 578.20 L 833.60 575.00 L 835.40 571.40 L 836.60 567.60 L 837.40 563.80 L 837.70 559.80 L 837.70 329.40 L 837.40 325.40 L 836.60 321.50 L 835.30 317.80 L 833.60 314.20 L 831.40 310.90 L 828.70 307.90 Z" fill="#000000" fill-rule="nonzero" node-id="151" stroke="none" target-height="632.1" target-width="617" target-x="220.7" target-y="136.1"/></clipPath><clipPath id="SVGID_00000067201853137775545680000008174338635341860250_" node-id="31"><path d="M 828.70 307.90 L 665.90 145.00 L 662.80 142.40 L 659.60 140.20 L 656.00 138.40 L 652.20 137.20 L 648.40 136.40 L 644.40 136.10 L 423.10 136.10 L 416.70 136.30 L 404.00 137.90 L 397.80 139.30 L 391.60 141.10 L 385.60 143.30 L 379.30 146.20 L 372.80 149.80 L 363.20 156.00 L 358.60 159.80 L 357.70 161.20 L 359.10 161.30 L 362.00 160.30 L 362.40 162.40 L 364.30 164.50 L 370.00 167.60 L 229.60 307.90 L 227.00 310.90 L 224.80 314.20 L 223.00 317.80 L 221.80 321.50 L 221.00 325.40 L 220.70 329.40 L 220.70 559.80 L 221.00 563.80 L 221.80 567.70 L 223.00 571.40 L 224.80 575.00 L 227.00 578.20 L 229.60 581.30 L 392.50 744.20 L 395.50 746.80 L 398.80 749.00 L 402.40 750.80 L 406.10 752.00 L 410.00 752.80 L 414.00 753.10 L 606.80 753.10 L 612.30 768.20 L 619.60 767.00 L 630.90 764.10 L 637.60 761.90 L 644.30 759.10 L 651.10 755.60 L 655.40 752.90 L 659.50 749.80 L 665.90 744.10 L 828.80 581.30 L 831.40 578.20 L 833.60 575.00 L 835.40 571.40 L 836.60 567.60 L 837.40 563.80 L 837.70 559.80 L 837.70 329.40 L 837.40 325.40 L 836.60 321.50 L 835.30 317.80 L 833.60 314.20 L 831.40 310.90 L 828.70 307.90 Z" fill="#000000" fill-rule="nonzero" node-id="155" stroke="none" target-height="632.1" target-width="617" target-x="220.7" target-y="136.1"/></clipPath><clipPath id="SVGID_00000118374120761832055500000011467030641711382203_" node-id="40"><path d="M 828.70 307.90 L 665.90 145.00 L 662.80 142.40 L 659.60 140.20 L 656.00 138.40 L 652.20 137.20 L 648.40 136.40 L 644.40 136.10 L 423.10 136.10 L 416.70 136.30 L 404.00 137.90 L 397.80 139.30 L 391.60 141.10 L 385.60 143.30 L 379.30 146.20 L 372.80 149.80 L 363.20 156.00 L 358.60 159.80 L 357.70 161.20 L 359.10 161.30 L 362.00 160.30 L 362.40 162.40 L 364.30 164.50 L 370.00 167.60 L 229.60 307.90 L 227.00 310.90 L 224.80 314.20 L 223.00 317.80 L 221.80 321.50 L 221.00 325.40 L 220.70 329.40 L 220.70 559.80 L 221.00 563.80 L 221.80 567.70 L 223.00 571.40 L 224.80 575.00 L 227.00 578.20 L 229.60 581.30 L 392.50 744.20 L 395.50 746.80 L 398.80 749.00 L 402.40 750.80 L 406.10 752.00 L 410.00 752.80 L 414.00 753.10 L 606.80 753.10 L 612.30 768.20 L 619.60 767.00 L 630.90 764.10 L 637.60 761.90 L 644.30 759.10 L 651.10 755.60 L 655.40 752.90 L 659.50 749.80 L 665.90 744.10 L 828.80 581.30 L 831.40 578.20 L 833.60 575.00 L 835.40 571.40 L 836.60 567.60 L 837.40 563.80 L 837.70 559.80 L 837.70 329.40 L 837.40 325.40 L 836.60 321.50 L 835.30 317.80 L 833.60 314.20 L 831.40 310.90 L 828.70 307.90 Z" fill="#000000" fill-rule="nonzero" node-id="159" stroke="none" target-height="632.1" target-width="617" target-x="220.7" target-y="136.1"/></clipPath></defs><path d="M 994.00 845.00 L 993.80 850.50 L 993.00 856.00 L 991.70 861.50 L 989.90 867.00 L 987.60 872.60 L 984.70 878.20 L 980.80 884.30 L 976.20 890.60 L 970.80 896.90 L 964.50 903.30 L 957.30 909.70 L 950.20 915.50 L 942.20 921.30 L 933.40 927.10 L 923.70 932.90 L 913.00 938.80 L 891.50 949.20 L 879.50 954.40 L 852.80 964.50 L 825.10 973.50 L 810.40 977.80 L 795.00 981.90 L 774.40 986.80 L 753.00 991.40 L 730.60 995.70 L 708.20 999.40 L 685.00 1002.80 L 661.20 1005.80 L 637.20 1008.20 L 612.80 1010.30 L 587.90 1011.90 L 562.90 1013.10 L 537.60 1013.80 L 512.00 1014.10 L 486.40 1013.80 L 461.10 1013.10 L 436.10 1011.90 L 411.20 1010.30 L 386.80 1008.20 L 362.80 1005.80 L 339.00 1002.80 L 315.80 999.40 L 293.40 995.70 L 271.00 991.40 L 249.60 986.80 L 229.00 981.90 L 213.60 977.80 L 198.90 973.50 L 171.20 964.50 L 144.50 954.40 L 132.50 949.20 L 111.00 938.80 L 100.30 932.90 L 90.60 927.10 L 81.80 921.30 L 73.80 915.50 L 66.70 909.70 L 59.50 903.30 L 53.20 896.90 L 47.80 890.60 L 43.20 884.30 L 39.30 878.20 L 36.40 872.60 L 34.10 867.00 L 32.30 861.50 L 31.00 856.00 L 30.20 850.50 L 30.00 845.00 L 30.20 839.50 L 31.00 834.00 L 32.30 828.60 L 34.10 823.10 L 36.40 817.50 L 39.30 811.90 L 43.20 805.70 L 47.80 799.50 L 53.20 793.20 L 59.50 786.80 L 66.70 780.40 L 73.80 774.60 L 81.80 768.80 L 90.60 763.00 L 100.30 757.10 L 111.00 751.30 L 132.50 740.80 L 144.50 735.70 L 171.20 725.50 L 198.90 716.60 L 213.60 712.30 L 229.00 708.20 L 249.60 703.30 L 271.00 698.70 L 293.40 694.40 L 315.80 690.70 L 339.00 687.30 L 362.80 684.30 L 386.80 681.80 L 411.20 679.80 L 436.10 678.10 L 461.10 677.00 L 486.40 676.30 L 512.00 676.00 L 537.60 676.30 L 562.90 677.00 L 587.90 678.10 L 612.80 679.80 L 637.20 681.80 L 661.20 684.30 L 685.00 687.30 L 708.20 690.70 L 730.60 694.40 L 753.00 698.70 L 774.40 703.30 L 795.00 708.20 L 810.40 712.30 L 825.10 716.60 L 852.80 725.50 L 879.50 735.70 L 891.50 740.80 L 913.00 751.30 L 923.70 757.10 L 933.40 763.00 L 942.20 768.80 L 950.20 774.60 L 957.30 780.40 L 964.50 786.80 L 970.80 793.20 L 976.20 799.50 L 980.80 805.70 L 984.70 811.90 L 987.60 817.50 L 989.90 823.10 L 991.70 828.60 L 993.00 834.00 L 993.80 839.50 L 994.00 845.00 Z" fill="url(#SVGID_1_)" fill-rule="nonzero" node-id="163" stroke="none" target-height="338.09998" target-width="964" target-x="30" target-y="676"/><g node-id="234"><g clip-path="url(#SVGID_00000063630464488290712940000000898682393034554496_)" group-id="1" node-id="167"><path d="M 385.40 123.80 L 335.40 171.80 L 352.50 203.30 L 608.70 167.50 L 667.60 131.60 Z" fill="url(#SVGID_00000002370628650355008590000016647995997477150903_)" fill-rule="nonzero" group-id="1,7" node-id="169" stroke="none" target-height="79.5" target-width="332.19998" target-x="335.4" target-y="123.8"/></g></g><g node-id="235"><g clip-path="url(#SVGID_00000181079892347333051480000006203325759635655331_)" group-id="2" node-id="175"><path d="M 660.90 131.40 L 601.40 166.70 L 791.20 337.20 L 847.70 311.50 Z" fill="url(#SVGID_00000100376642791671832030000001081993246511528840_)" fill-rule="nonzero" group-id="2,8" node-id="177" stroke="none" target-height="205.80002" target-width="246.29999" target-x="601.4" target-y="131.4"/></g></g><g node-id="236"><g clip-path="url(#SVGID_00000067201853137775545680000008174338635341860250_)" group-id="3" node-id="183"><path d="M 852.70 306.70 L 779.50 341.00 L 788.60 585.60 L 849.20 567.90 Z" fill="url(#SVGID_00000024717494221334300370000014884475135824460682_)" fill-rule="nonzero" group-id="3,9" node-id="185" stroke="none" target-height="278.89996" target-width="73.20001" target-x="779.5" target-y="306.7"/></g></g><g node-id="237"><g clip-path="url(#SVGID_00000118374120761832055500000011467030641711382203_)" group-id="4" node-id="191"><path d="M 854.10 566.90 L 780.60 585.10 L 595.70 773.40 L 637.80 781.00 Z" fill="url(#SVGID_00000124142961439880204620000012074003606482902669_)" fill-rule="nonzero" group-id="4,10" node-id="193" stroke="none" target-height="214.09998" target-width="258.39996" target-x="595.7" target-y="566.9"/></g></g><path d="M 610.00 151.30 L 379.70 151.30 L 375.60 151.60 L 371.70 152.40 L 368.00 153.70 L 364.40 155.40 L 361.20 157.60 L 358.10 160.30 L 195.30 323.10 L 192.60 326.20 L 190.40 329.40 L 188.70 333.00 L 187.40 336.80 L 186.60 340.60 L 186.30 344.60 L 186.30 575.00 L 186.60 579.00 L 187.40 582.90 L 188.70 586.60 L 190.40 590.20 L 192.60 593.50 L 195.30 596.50 L 358.10 759.40 L 361.20 762.00 L 364.40 764.20 L 368.00 766.00 L 371.80 767.20 L 375.60 768.00 L 379.70 768.30 L 610.00 768.30 L 614.00 768.00 L 617.90 767.20 L 621.60 766.00 L 625.20 764.20 L 628.50 762.00 L 631.50 759.40 L 794.40 596.50 L 797.00 593.50 L 799.20 590.20 L 801.00 586.60 L 802.20 582.90 L 803.00 579.00 L 803.30 575.00 L 803.30 344.70 L 803.00 340.60 L 802.20 336.80 L 801.00 333.00 L 799.20 329.50 L 797.00 326.20 L 794.40 323.10 L 631.50 160.30 L 628.50 157.60 L 625.20 155.40 L 621.60 153.70 L 617.90 152.40 L 614.00 151.60 L 610.00 151.30 Z" fill="url(#SVGID_00000065786373702946824800000014667706739734211482_)" fill-rule="nonzero" node-id="197" stroke="none" target-height="617" target-width="617" target-x="186.3" target-y="151.3"/><path d="M 596.50 183.80 L 393.10 183.80 L 389.10 184.00 L 385.20 184.80 L 381.40 186.10 L 377.90 187.80 L 374.60 190.00 L 371.60 192.70 L 227.70 336.60 L 225.00 339.60 L 222.80 342.90 L 221.10 346.40 L 219.80 350.20 L 219.00 354.10 L 218.80 358.10 L 218.80 561.50 L 219.00 565.60 L 219.80 569.40 L 221.10 573.20 L 222.80 576.70 L 225.00 580.00 L 227.70 583.10 L 371.60 726.90 L 374.60 729.60 L 377.90 731.80 L 381.40 733.50 L 385.20 734.80 L 389.10 735.60 L 393.10 735.90 L 596.50 735.90 L 600.60 735.60 L 604.40 734.80 L 608.20 733.50 L 611.70 731.80 L 615.00 729.60 L 618.10 726.90 L 761.90 583.10 L 764.60 580.00 L 766.80 576.70 L 768.50 573.20 L 769.80 569.40 L 770.60 565.60 L 770.90 561.50 L 770.90 358.10 L 770.60 354.10 L 769.80 350.20 L 768.50 346.40 L 766.80 342.90 L 764.60 339.60 L 761.90 336.60 L 618.10 192.70 L 615.00 190.00 L 611.70 187.80 L 608.20 186.10 L 604.40 184.80 L 600.60 184.00 L 596.50 183.80 Z" fill="#ffffff" fill-rule="nonzero" node-id="199" stroke="none" target-height="552.10004" target-width="552.10004" target-x="218.8" target-y="183.8"/><g node-id="238"><path d="M 555.30 280.40 L 555.00 276.50 L 554.30 272.80 L 553.00 269.20 L 551.40 265.90 L 549.30 262.90 L 546.90 260.10 L 544.10 257.70 L 541.10 255.60 L 537.80 254.00 L 534.20 252.70 L 530.50 252.00 L 526.60 251.70 L 471.60 251.70 L 468.70 251.80 L 463.30 252.80 L 456.90 255.30 L 451.50 258.60 L 445.20 263.90 L 442.00 267.50 L 438.60 271.90 L 443.70 294.80 L 456.90 540.20 L 457.20 544.10 L 458.00 547.80 L 459.20 551.30 L 460.90 554.70 L 462.90 557.70 L 465.30 560.50 L 468.10 562.90 L 471.10 564.90 L 474.50 566.60 L 478.00 567.90 L 481.70 568.60 L 485.60 568.90 L 504.50 568.90 L 505.90 575.40 L 509.90 575.00 L 516.20 573.30 L 522.60 570.10 L 528.10 566.00 L 533.40 560.40 L 537.30 554.80 L 539.60 549.90 L 541.10 543.60 L 555.30 280.40 Z" fill="url(#SVGID_00000152258586233999714150000004608305050682382213_)" fill-rule="nonzero" group-id="5" node-id="203" stroke="none" target-height="323.7" target-width="116.69998" target-x="438.6" target-y="251.7"/><path d="M 504.00 575.50 L 477.00 575.50 L 473.10 575.20 L 469.40 574.50 L 465.90 573.20 L 462.50 571.60 L 459.50 569.50 L 456.70 567.10 L 454.30 564.30 L 452.30 561.30 L 450.60 558.00 L 449.30 554.40 L 448.60 550.70 L 434.30 287.00 L 434.60 283.10 L 435.30 279.40 L 436.60 275.80 L 438.30 272.50 L 440.30 269.50 L 442.70 266.70 L 445.50 264.30 L 448.50 262.20 L 451.90 260.60 L 455.40 259.30 L 459.10 258.60 L 463.00 258.30 L 518.00 258.30 L 521.90 258.60 L 525.60 259.30 L 529.20 260.60 L 532.50 262.20 L 535.50 264.30 L 538.30 266.70 L 540.70 269.50 L 542.80 272.50 L 544.40 275.80 L 545.70 279.40 L 546.40 283.10 L 546.70 287.00 L 532.40 550.70 L 531.70 554.40 L 530.40 558.00 L 528.80 561.30 L 526.70 564.30 L 524.30 567.10 L 521.50 569.50 L 518.50 571.60 L 515.20 573.20 L 511.60 574.50 L 507.90 575.20 L 504.00 575.50 Z" fill="url(#SVGID_00000059992187882346747980000013329599187380766635_)" fill-rule="nonzero" group-id="5" node-id="205" stroke="none" target-height="317.2" target-width="112.400024" target-x="434.3" target-y="258.3"/><path d="M 539.70 642.60 L 539.40 638.30 L 538.80 634.10 L 537.80 630.20 L 534.60 622.70 L 530.10 616.10 L 524.50 610.40 L 517.90 606.00 L 510.40 602.80 L 506.40 601.80 L 502.30 601.10 L 494.90 601.00 L 490.00 601.70 L 485.40 602.70 L 479.00 604.70 L 472.20 607.90 L 472.60 609.60 L 469.40 612.30 L 466.50 615.20 L 463.90 618.50 L 461.70 622.00 L 459.80 625.80 L 458.30 629.70 L 457.20 633.80 L 456.50 638.10 L 456.30 642.60 L 456.60 647.60 L 457.40 652.30 L 458.80 656.80 L 460.70 661.20 L 463.00 665.20 L 465.70 669.00 L 468.90 672.40 L 472.30 675.40 L 476.20 678.10 L 480.30 680.30 L 484.60 682.10 L 489.30 683.30 L 490.10 687.00 L 496.80 686.60 L 502.10 685.50 L 510.00 682.90 L 518.30 679.00 L 522.40 676.40 L 525.70 673.70 L 528.70 670.70 L 531.50 667.40 L 533.90 663.80 L 535.90 659.90 L 537.50 655.90 L 538.70 651.60 L 539.40 647.20 L 539.70 642.60 Z" fill="url(#SVGID_00000105388076934989700070000011562133948401869698_)" fill-rule="nonzero" group-id="5" node-id="207" stroke="none" target-height="86" target-width="83.400024" target-x="456.3" target-y="601"/><path d="M 532.20 645.40 L 532.00 649.70 L 531.30 653.80 L 530.30 657.80 L 528.90 661.60 L 525.10 668.70 L 520.00 674.80 L 513.80 679.90 L 506.70 683.80 L 502.90 685.20 L 499.00 686.20 L 494.80 686.80 L 490.50 687.00 L 486.20 686.80 L 482.10 686.20 L 478.10 685.20 L 474.30 683.80 L 467.20 679.90 L 461.00 674.80 L 456.00 668.70 L 452.10 661.60 L 450.70 657.80 L 449.70 653.80 L 449.10 649.70 L 448.80 645.40 L 449.10 641.00 L 449.70 636.90 L 450.70 632.90 L 452.10 629.10 L 456.00 622.00 L 461.00 615.90 L 467.20 610.80 L 474.30 607.00 L 478.10 605.60 L 482.10 604.50 L 486.20 603.90 L 490.50 603.70 L 494.80 603.90 L 499.00 604.50 L 502.90 605.60 L 506.70 607.00 L 513.80 610.80 L 520.00 615.90 L 525.10 622.00 L 528.90 629.10 L 530.30 632.90 L 531.30 636.90 L 532.00 641.00 L 532.20 645.40 Z" fill="url(#SVGID_00000103968888131291422740000001730141782121947797_)" fill-rule="nonzero" group-id="5" node-id="209" stroke="none" target-height="83.29999" target-width="83.400024" target-x="448.8" target-y="603.7"/></g><g node-id="239"><path d="M 302.90 917.20 L 302.60 919.00 L 301.40 919.90 L 299.20 920.30 L 295.20 920.30 L 294.50 918.20 L 299.70 918.20 L 300.60 917.60 L 300.70 903.90 L 291.60 903.90 L 290.50 912.60 L 289.40 916.70 L 287.90 920.40 L 286.00 919.30 L 287.50 915.60 L 289.10 907.60 L 289.70 895.70 L 289.70 878.70 L 302.90 878.70 L 302.90 917.20 Z M 300.70 901.70 L 300.70 892.30 L 291.90 892.30 L 291.70 901.70 L 300.70 901.70 Z M 291.90 880.90 L 291.90 890.10 L 300.70 890.10 L 300.70 880.90 L 291.90 880.90 Z M 328.60 895.30 L 327.40 900.10 L 325.70 904.30 L 323.70 908.20 L 321.50 911.50 L 324.20 914.40 L 327.00 916.80 L 330.10 918.60 L 328.50 920.40 L 325.60 918.50 L 322.80 916.10 L 320.20 913.20 L 317.60 915.90 L 312.20 919.90 L 310.80 918.20 L 313.60 916.50 L 316.30 914.30 L 318.90 911.50 L 314.90 904.70 L 312.00 897.10 L 310.30 897.10 L 310.30 920.30 L 308.00 920.30 L 308.00 878.80 L 327.30 878.80 L 327.20 889.10 L 326.60 890.20 L 324.80 890.70 L 318.70 890.90 L 317.90 888.90 L 324.90 888.70 L 325.10 881.00 L 310.30 881.00 L 310.30 894.90 L 327.30 894.80 L 328.60 895.30 Z M 314.10 897.10 L 315.70 901.70 L 317.80 905.90 L 320.20 909.80 L 322.50 906.10 L 324.50 901.90 L 326.10 897.10 L 314.10 897.10 Z" fill="#999999" fill-rule="nonzero" group-id="6" node-id="214" stroke="none" target-height="41.700012" target-width="44.100006" target-x="286" target-y="878.7"/><path d="M 372.20 882.90 L 368.80 886.90 L 366.70 888.70 L 363.20 891.00 L 359.20 893.10 L 367.90 895.50 L 377.80 896.70 L 376.50 898.70 L 365.80 897.20 L 360.90 895.90 L 356.60 894.30 L 351.50 896.10 L 346.10 897.50 L 335.30 899.40 L 334.40 897.30 L 344.40 895.80 L 354.00 893.10 L 350.70 891.10 L 348.00 888.90 L 345.70 886.40 L 342.40 889.10 L 338.50 891.60 L 336.90 890.00 L 340.20 887.90 L 345.50 883.50 L 348.80 880.00 L 351.00 876.80 L 353.50 877.20 L 350.10 882.00 L 370.80 881.80 L 372.20 882.90 Z M 373.00 904.80 L 372.00 912.10 L 370.80 916.50 L 369.40 918.70 L 368.10 919.50 L 366.30 919.80 L 359.60 919.60 L 358.80 917.50 L 365.70 917.80 L 367.60 917.40 L 368.40 916.40 L 369.20 914.00 L 370.60 905.70 L 355.00 905.70 L 353.70 908.70 L 352.10 911.30 L 350.30 913.40 L 348.20 915.30 L 344.90 917.20 L 341.00 918.90 L 336.10 920.30 L 334.90 918.20 L 339.50 917.10 L 343.20 915.70 L 346.20 914.00 L 348.20 912.40 L 349.90 910.50 L 351.40 908.30 L 352.60 905.70 L 338.40 905.70 L 338.40 903.60 L 353.20 903.60 L 354.20 898.40 L 356.60 898.60 L 355.60 903.60 L 373.20 903.60 L 373.00 904.80 Z M 348.20 884.00 L 347.30 885.00 L 349.00 887.00 L 353.60 890.60 L 356.60 892.10 L 363.40 888.60 L 366.30 886.40 L 368.70 884.00 L 348.20 884.00 Z" fill="#999999" fill-rule="nonzero" group-id="6" node-id="216" stroke="none" target-height="43.5" target-width="43.399994" target-x="334.4" target-y="876.8"/><path d="M 387.70 885.10 L 383.70 890.70 L 382.40 888.80 L 384.40 886.40 L 386.20 883.50 L 389.00 877.00 L 391.10 877.50 L 388.90 882.90 L 399.20 882.90 L 399.20 885.10 L 387.70 885.10 Z M 392.60 900.80 L 399.50 900.80 L 399.50 903.00 L 392.60 903.00 L 392.60 914.80 L 398.40 911.50 L 399.00 913.60 L 389.60 919.50 L 388.30 917.50 L 389.60 916.20 L 390.20 915.20 L 390.50 913.70 L 390.50 903.00 L 383.30 903.00 L 383.30 900.80 L 390.50 900.80 L 390.50 893.30 L 385.20 893.30 L 385.20 891.10 L 398.40 891.10 L 398.40 893.30 L 392.60 893.30 L 392.60 900.80 Z M 425.80 893.00 L 425.80 895.20 L 400.40 895.20 L 400.40 893.00 L 406.50 893.00 L 406.50 885.70 L 401.60 885.70 L 401.60 883.60 L 406.50 883.60 L 406.50 876.80 L 408.60 876.80 L 408.60 883.60 L 416.40 883.60 L 416.40 876.80 L 418.60 876.80 L 418.60 883.60 L 424.70 883.60 L 424.70 885.70 L 418.60 885.70 L 418.60 893.00 L 425.80 893.00 Z M 403.00 899.80 L 422.20 899.80 L 422.20 920.00 L 420.00 920.00 L 420.00 918.00 L 405.20 918.00 L 405.20 920.20 L 403.00 920.20 L 403.00 899.80 Z M 405.20 901.90 L 405.20 907.80 L 420.00 907.80 L 420.00 901.90 L 405.20 901.90 Z M 420.00 916.00 L 420.00 909.80 L 405.20 909.80 L 405.20 916.00 L 420.00 916.00 Z M 408.60 893.00 L 416.40 893.00 L 416.40 885.70 L 408.60 885.70 L 408.60 893.00 Z" fill="#999999" fill-rule="nonzero" group-id="6" node-id="218" stroke="none" target-height="43.400024" target-width="43.399994" target-x="382.4" target-y="876.8"/><path d="M 446.10 909.60 L 446.90 911.50 L 437.60 918.40 L 436.40 916.20 L 437.30 915.30 L 437.80 913.20 L 437.80 894.20 L 430.50 894.20 L 430.50 892.00 L 440.00 892.00 L 440.00 913.60 L 446.10 909.60 Z M 440.50 887.30 L 437.40 883.70 L 433.40 879.90 L 435.00 878.50 L 440.80 884.00 L 442.10 885.50 L 440.50 887.30 Z M 460.60 907.10 L 461.90 909.80 L 463.60 912.20 L 465.60 914.30 L 468.00 916.10 L 470.80 917.50 L 473.90 918.50 L 472.50 920.50 L 469.40 919.30 L 466.70 917.80 L 464.30 916.00 L 462.20 913.90 L 460.50 911.50 L 459.00 908.70 L 457.90 911.40 L 456.40 913.70 L 454.60 915.80 L 452.30 917.40 L 449.40 918.90 L 445.60 920.30 L 444.20 918.40 L 448.00 917.20 L 451.00 915.70 L 453.10 914.10 L 454.90 912.10 L 456.30 909.80 L 457.20 907.10 L 445.70 907.10 L 445.70 905.00 L 457.70 905.00 L 458.40 898.70 L 447.50 898.70 L 447.50 896.50 L 471.90 896.50 L 471.90 898.70 L 460.70 898.70 L 459.90 905.00 L 473.90 905.00 L 473.90 907.10 L 460.60 907.10 Z M 470.40 891.40 L 448.90 891.40 L 448.90 879.10 L 470.40 879.10 L 470.40 891.40 Z M 468.20 881.20 L 451.10 881.20 L 451.10 889.30 L 468.20 889.30 L 468.20 881.20 Z" fill="#999999" fill-rule="nonzero" group-id="6" node-id="220" stroke="none" target-height="42" target-width="43.399994" target-x="430.5" target-y="878.5"/><path d="M 478.60 919.30 L 480.40 918.30 L 482.90 916.10 L 484.30 913.30 L 484.60 911.40 L 482.40 911.40 L 481.40 910.90 L 480.80 910.00 L 480.60 908.60 L 480.90 907.30 L 481.50 906.40 L 483.60 905.70 L 484.60 905.90 L 486.20 907.00 L 486.80 908.50 L 487.00 910.60 L 486.80 913.10 L 486.10 915.20 L 484.90 917.10 L 483.40 918.70 L 481.60 920.00 L 479.50 921.10 L 478.60 919.30 Z" fill="#999999" fill-rule="nonzero" group-id="6" node-id="222" stroke="none" target-height="15.399963" target-width="8.399994" target-x="478.6" target-y="905.7"/><path d="M 517.90 909.70 L 518.80 911.60 L 509.40 919.20 L 508.10 917.20 L 509.50 915.90 L 510.00 914.80 L 510.30 913.40 L 510.30 894.30 L 502.30 894.30 L 502.30 892.00 L 512.50 892.00 L 512.50 913.70 L 517.90 909.70 Z M 512.90 886.80 L 509.80 883.30 L 506.00 879.60 L 507.40 878.20 L 511.30 881.70 L 514.50 885.10 L 512.90 886.80 Z M 545.70 892.60 L 545.70 894.50 L 517.10 894.50 L 517.10 892.60 L 530.00 892.60 L 530.00 888.40 L 519.60 888.40 L 519.60 886.60 L 530.00 886.60 L 530.00 882.80 L 518.50 882.80 L 518.50 880.90 L 530.00 880.90 L 530.00 876.90 L 532.30 876.90 L 532.30 880.90 L 544.40 880.90 L 544.40 882.80 L 532.30 882.80 L 532.30 886.60 L 542.80 886.60 L 542.80 888.40 L 532.30 888.40 L 532.30 892.60 L 545.70 892.60 Z M 541.60 917.20 L 541.30 918.80 L 540.20 919.60 L 537.70 920.00 L 533.60 920.00 L 532.80 918.00 L 539.20 917.80 L 539.40 912.60 L 522.90 912.60 L 522.90 920.20 L 520.70 920.20 L 520.70 897.90 L 541.60 897.90 L 541.60 917.20 Z M 522.90 899.80 L 522.90 904.20 L 539.40 904.20 L 539.40 899.80 L 522.90 899.80 Z M 539.40 910.70 L 539.40 906.10 L 522.90 906.10 L 522.90 910.70 L 539.40 910.70 Z" fill="#999999" fill-rule="nonzero" group-id="6" node-id="224" stroke="none" target-height="43.299988" target-width="43.400024" target-x="502.3" target-y="876.9"/><path d="M 593.30 916.70 L 593.30 918.70 L 550.80 918.70 L 550.80 916.70 L 570.70 916.70 L 570.70 911.60 L 554.40 911.60 L 554.40 909.60 L 570.70 909.60 L 570.70 905.50 L 555.90 905.50 L 555.90 890.90 L 570.70 890.90 L 570.70 887.30 L 551.00 887.30 L 551.00 885.30 L 570.70 885.30 L 570.70 881.00 L 555.20 881.80 L 554.70 879.90 L 577.70 878.50 L 586.80 877.30 L 588.30 879.00 L 581.30 880.10 L 573.00 880.90 L 573.00 885.30 L 593.10 885.30 L 593.10 887.30 L 573.00 887.30 L 573.00 890.90 L 588.50 890.90 L 588.50 905.50 L 573.00 905.50 L 573.00 909.60 L 590.30 909.60 L 590.30 911.60 L 573.00 911.60 L 573.00 916.70 L 593.30 916.70 Z M 558.10 897.30 L 570.70 897.30 L 570.70 892.80 L 558.10 892.80 L 558.10 897.30 Z M 570.70 903.70 L 570.70 899.10 L 558.10 899.10 L 558.10 903.70 L 570.70 903.70 Z M 573.00 892.80 L 573.00 897.30 L 586.20 897.30 L 586.20 892.80 L 573.00 892.80 Z M 586.20 899.10 L 573.00 899.10 L 573.00 903.70 L 586.20 903.70 L 586.20 899.10 Z" fill="#999999" fill-rule="nonzero" group-id="6" node-id="226" stroke="none" target-height="41.400024" target-width="42.5" target-x="550.8" target-y="877.3"/><path d="M 605.30 905.70 L 603.10 910.80 L 600.30 915.00 L 598.50 913.70 L 601.20 909.80 L 603.20 905.20 L 605.30 905.70 Z M 610.90 903.10 L 610.90 916.50 L 610.60 918.00 L 609.80 918.80 L 609.00 919.00 L 605.30 919.10 L 604.50 917.00 L 608.20 917.10 L 608.60 917.00 L 608.80 916.50 L 608.80 903.10 L 598.70 903.10 L 598.70 901.00 L 608.80 901.00 L 608.80 895.20 L 598.50 895.20 L 598.50 893.10 L 612.00 893.10 L 614.90 884.60 L 617.10 885.20 L 614.20 893.10 L 620.90 893.10 L 620.90 895.20 L 610.90 895.20 L 610.90 901.00 L 620.50 901.00 L 620.50 903.10 L 610.90 903.10 Z M 620.10 884.10 L 599.20 884.10 L 599.20 882.00 L 609.50 882.00 L 607.00 877.30 L 609.00 876.70 L 611.90 882.00 L 620.10 882.00 L 620.10 884.10 Z M 604.80 892.70 L 604.10 889.00 L 602.70 885.10 L 604.60 884.70 L 606.10 888.50 L 606.90 892.10 L 604.80 892.70 Z M 615.20 905.10 L 617.50 909.20 L 619.30 913.10 L 617.50 914.00 L 615.70 910.10 L 613.40 905.90 L 615.20 905.10 Z M 641.70 895.30 L 635.90 895.30 L 635.90 920.10 L 633.70 920.10 L 633.70 895.30 L 624.90 895.30 L 624.50 905.00 L 623.00 912.80 L 622.10 915.30 L 619.60 919.90 L 617.90 918.50 L 619.80 915.30 L 621.10 911.80 L 622.40 904.60 L 622.70 881.50 L 633.60 879.20 L 637.90 877.90 L 639.90 879.60 L 632.90 881.60 L 624.90 883.00 L 624.90 893.20 L 641.70 893.20 L 641.70 895.30 Z" fill="#999999" fill-rule="nonzero" group-id="6" node-id="228" stroke="none" target-height="43.399963" target-width="43.200012" target-x="598.5" target-y="876.7"/><path d="M 667.20 887.10 L 665.70 909.90 L 664.30 916.30 L 662.90 918.30 L 660.70 919.00 L 655.50 919.00 L 654.80 916.60 L 659.90 916.80 L 660.80 916.70 L 661.60 916.10 L 662.20 915.10 L 662.90 912.40 L 663.90 903.50 L 664.90 888.00 L 656.90 888.00 L 655.80 900.00 L 654.70 905.80 L 653.20 911.10 L 651.80 914.50 L 648.40 920.00 L 646.40 918.60 L 648.20 916.20 L 649.80 913.40 L 651.10 910.20 L 652.60 905.20 L 653.60 899.60 L 654.70 888.00 L 647.40 888.00 L 647.40 885.70 L 654.70 885.70 L 654.80 876.90 L 657.10 876.90 L 657.00 885.70 L 667.20 885.70 L 667.20 887.10 Z M 687.40 883.10 L 687.40 919.40 L 685.00 919.40 L 685.00 916.10 L 673.90 916.10 L 673.90 919.70 L 671.70 919.70 L 671.70 883.10 L 687.40 883.10 Z M 685.00 913.90 L 685.00 885.40 L 673.90 885.40 L 673.90 913.90 L 685.00 913.90 Z" fill="#999999" fill-rule="nonzero" group-id="6" node-id="230" stroke="none" target-height="43.099976" target-width="41" target-x="646.4" target-y="876.9"/><path d="M 734.80 893.30 L 731.70 901.90 L 727.50 909.90 L 728.90 913.40 L 730.30 915.70 L 731.40 916.80 L 732.60 917.50 L 733.80 917.70 L 734.80 917.00 L 735.30 915.80 L 736.00 909.50 L 737.90 910.60 L 737.40 915.40 L 736.70 917.90 L 735.90 919.10 L 734.90 919.70 L 733.60 919.90 L 732.00 919.70 L 730.60 919.00 L 728.10 916.50 L 725.90 912.20 L 723.50 915.30 L 718.30 920.30 L 716.50 918.80 L 719.60 916.10 L 722.50 913.10 L 725.10 909.60 L 723.20 900.80 L 722.10 890.00 L 694.90 890.00 L 694.90 888.00 L 707.20 888.00 L 707.20 883.10 L 697.40 883.10 L 697.40 881.00 L 707.20 881.00 L 707.20 876.80 L 709.40 876.80 L 709.40 881.00 L 718.30 881.00 L 718.30 883.10 L 709.40 883.10 L 709.40 888.00 L 722.10 888.00 L 721.70 876.90 L 724.00 876.90 L 724.20 888.00 L 737.40 888.00 L 737.40 890.00 L 724.30 890.00 L 724.90 896.80 L 726.60 907.10 L 730.10 900.10 L 732.70 892.70 L 734.80 893.30 Z M 720.40 912.40 L 711.00 913.40 L 711.00 920.20 L 708.70 920.20 L 708.70 913.70 L 695.70 915.10 L 695.50 912.90 L 708.70 911.60 L 708.70 905.80 L 702.10 905.80 L 699.30 906.10 L 698.30 906.50 L 697.60 904.20 L 698.60 903.40 L 701.80 897.40 L 695.60 897.40 L 695.60 895.40 L 702.70 895.40 L 704.50 890.40 L 706.90 891.00 L 705.10 895.40 L 720.40 895.40 L 720.40 897.40 L 704.20 897.40 L 700.90 903.70 L 708.70 903.70 L 708.70 899.20 L 711.00 899.20 L 711.00 903.70 L 719.10 903.70 L 719.10 905.80 L 711.00 905.80 L 711.00 911.40 L 720.40 910.50 L 720.40 912.40 Z M 733.50 885.20 L 730.80 882.30 L 727.30 879.30 L 728.90 878.20 L 732.40 881.00 L 735.10 884.00 L 733.50 885.20 Z" fill="#999999" fill-rule="nonzero" group-id="6" node-id="232" stroke="none" target-height="43.5" target-width="43" target-x="694.9" target-y="876.8"/></g></svg>`;
        return `data:image/svg+xml,${encodeURIComponent(svgStr)}`;
      });
      const list = vue.ref([]);
      const isEnd = vue.ref(false);
      const isRefresh = vue.ref(false);
      const screenTop = vue.ref(0);
      const screenOldTop = vue.ref(0);
      const loadMoreStatus = vue.ref("loading");
      const search = async (type) => {
        loadMoreStatus.value = "loading";
        const searchForm = props.beforeHook ? props.beforeHook(JSON.parse(JSON.stringify(props.params))) || props.params : props.params;
        try {
          const res2 = await props.apiFun(searchForm);
          const code = res2[props.codeField];
          const data = res2[props.resField];
          const message = res2[props.msgField];
          isRefresh.value = false;
          if (code === props.successCodeNum) {
            let newList = props.afterHook ? props.afterHook(data) || data : data;
            if (type === "refresh") {
              list.value = newList;
            } else {
              list.value = list.value.concat(newList);
            }
            if (newList.length < props.loadPageNum) {
              isEnd.value = true;
              loadMoreStatus.value = "noMore";
            } else {
              loadMoreStatus.value = "more";
            }
            if (list.value.length === 0) {
              loadMoreStatus.value = "noData";
            }
          } else {
            props.errorHook && errorHook(res2);
            isRefresh.value = false;
            loadMoreStatus.value = "loadError";
          }
        } catch (error) {
          vue.nextTick(() => {
            isRefresh.value = false;
          });
          loadMoreStatus.value = "loadError";
          props.errorHook && errorHook(res);
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
        vue.nextTick(() => {
          screenTop.value = 0;
        });
      };
      const bootmScroll = () => {
        if (!isEnd.value) {
          props.params[props.pageNumField]++;
          search();
        }
      };
      const refresh = () => {
        isEnd.value = false;
        props.params[props.pageNumField] = 1;
        backTop();
        list.value = [];
        search("refresh");
      };
      if (props.autoLoad) {
        refresh();
      }
      if (props.autoRefreshByParamsChange) {
        vue.watch(() => props.params, refresh, {
          deep: true
        });
      }
      __expose({
        refresh,
        search
      });
      const __returned__ = { props, emptyIconSrc, errorIconSrc, list, isEnd, isRefresh, screenTop, screenOldTop, loadMoreStatus, search, refresherrefresh, scrollView, backTop, bootmScroll, refresh, ref: vue.ref, nextTick: vue.nextTick, computed: vue.computed, isRef: vue.isRef, watch: vue.watch };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$p(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_load_more = resolveEasycom(vue.resolveDynamicComponent("uni-load-more"), __easycom_0$9);
    return vue.openBlock(), vue.createElementBlock("scroll-view", {
      style: { "height": "100%" },
      "scroll-y": true,
      "refresher-enabled": "",
      "scroll-top": $setup.screenTop,
      "refresher-triggered": $setup.isRefresh,
      "lower-threshold": $props.lowerThreshold,
      onScroll: $setup.scrollView,
      onScrolltolower: $setup.bootmScroll,
      onRefresherrefresh: $setup.refresherrefresh
    }, [
      vue.renderSlot(_ctx.$slots, "list", { list: $setup.list }, () => [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($setup.list, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "list_item",
              key: index
            }, [
              vue.renderSlot(_ctx.$slots, "list-item", { item }, void 0, true)
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ], true),
      ["loading", "noMore", "more"].includes($setup.loadMoreStatus) ? (vue.openBlock(), vue.createBlock(_component_uni_load_more, {
        key: 0,
        status: $setup.loadMoreStatus
      }, null, 8, ["status"])) : vue.createCommentVNode("v-if", true),
      $setup.loadMoreStatus === "noData" ? vue.renderSlot(_ctx.$slots, "empty", { key: 1 }, () => [
        vue.createElementVNode("view", { class: "icon_box" }, [
          vue.createElementVNode("image", {
            class: "image",
            src: $setup.emptyIconSrc,
            mode: "aspectFit"
          }, null, 8, ["src"])
        ])
      ], true) : vue.createCommentVNode("v-if", true),
      $setup.loadMoreStatus === "loadError" ? vue.renderSlot(_ctx.$slots, "error", { key: 2 }, () => [
        vue.createElementVNode("view", { class: "icon_box" }, [
          vue.createElementVNode("image", {
            class: "image",
            onClick: $setup.search,
            src: $setup.errorIconSrc,
            mode: "widthFix"
          }, null, 8, ["src"])
        ])
      ], true) : vue.createCommentVNode("v-if", true)
    ], 40, ["scroll-top", "refresher-triggered", "refresher-enabled", "lower-threshold"]);
  }
  const __easycom_0$8 = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["render", _sfc_render$p], ["__scopeId", "data-v-77892465"], ["__file", "D:/code/code-life/uni-app-components/uni_modules/cl-scroll-view/components/cl-scroll-view/cl-scroll-view.vue"]]);
  const _sfc_main$p = {
    __name: "index",
    setup(__props, { expose: __expose }) {
      __expose();
      const searchParams = vue.reactive({
        pageSize: 10,
        pageNum: 1
      });
      const searchParams1 = vue.reactive({
        pageSize: 10,
        pageNum: 1
      });
      const searchParams2 = vue.reactive({
        pageSize: 10,
        pageNum: 1
      });
      const searchParams3 = vue.reactive({
        pageSize: 10,
        pageNum: 1
      });
      const searchParams4 = vue.reactive({
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
      const apiFun4 = (params) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({
              code: params.pageNum === 1 ? 200 : 500,
              data: params.pageNum === 1 ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] : [],
              message: params.pageNum === 1 ? "查询成功！" : "这是一次测试信息提示！"
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
      const __returned__ = { searchParams, searchParams1, searchParams2, searchParams3, searchParams4, apiFun, apiFun1, apiFun2, apiFun3, apiFun4, beforeHook, afterHook, reactive: vue.reactive, ref: vue.ref };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$o(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_cl_scroll_view = resolveEasycom(vue.resolveDynamicComponent("cl-scroll-view"), __easycom_0$8);
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createElementVNode("view", { class: "section_title" }, " 基本使用（使用list插槽） "),
      vue.createElementVNode("view", { style: { "height": "600rpx", "border": "1px solid gainsboro" } }, [
        vue.createVNode(_component_cl_scroll_view, {
          apiFun: $setup.apiFun,
          params: $setup.searchParams
        }, {
          list: vue.withCtx(({ list }) => [
            vue.createElementVNode("view", { class: "list_box" }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(list, (item) => {
                  return vue.openBlock(), vue.createElementBlock(
                    "view",
                    {
                      key: item,
                      class: "item"
                    },
                    vue.toDisplayString(item),
                    1
                    /* TEXT */
                  );
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ]),
          _: 1
          /* STABLE */
        }, 8, ["params"])
      ]),
      vue.createElementVNode("view", { class: "section_title" }, " 基本使用（使用list-item插槽） "),
      vue.createElementVNode("view", { style: { "height": "600rpx", "border": "1px solid gainsboro" } }, [
        vue.createVNode(_component_cl_scroll_view, {
          apiFun: $setup.apiFun,
          params: $setup.searchParams
        }, {
          "list-item": vue.withCtx(({ item }) => [
            vue.createElementVNode(
              "view",
              { class: "item" },
              vue.toDisplayString(item),
              1
              /* TEXT */
            )
          ]),
          _: 1
          /* STABLE */
        }, 8, ["params"])
      ]),
      vue.createElementVNode("view", { class: "section_title" }, " 对请求参数（永远请求pageNum等于10的数据）和接口返回值进行二次处理（将结果包装为“我是处理过的返回值n”） "),
      vue.createElementVNode("view", { style: { "height": "600rpx", "border": "1px solid gainsboro" } }, [
        vue.createVNode(_component_cl_scroll_view, {
          apiFun: $setup.apiFun1,
          params: $setup.searchParams1,
          beforeHook: $setup.beforeHook,
          afterHook: $setup.afterHook
        }, {
          list: vue.withCtx(({ list }) => [
            vue.createElementVNode("view", { class: "list_box" }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(list, (item) => {
                  return vue.openBlock(), vue.createElementBlock(
                    "view",
                    {
                      key: item,
                      class: "item"
                    },
                    vue.toDisplayString(item),
                    1
                    /* TEXT */
                  );
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ]),
          _: 1
          /* STABLE */
        }, 8, ["params"])
      ]),
      vue.createElementVNode("view", { class: "section_title" }, " 无数据页面 "),
      vue.createElementVNode("view", { style: { "height": "800rpx", "border": "1px solid gainsboro" } }, [
        vue.createVNode(_component_cl_scroll_view, {
          apiFun: $setup.apiFun2,
          params: $setup.searchParams2
        }, {
          list: vue.withCtx(({ list }) => [
            vue.createElementVNode("view", { class: "list_box" }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(list, (item) => {
                  return vue.openBlock(), vue.createElementBlock(
                    "view",
                    {
                      key: item,
                      class: "item"
                    },
                    vue.toDisplayString(item),
                    1
                    /* TEXT */
                  );
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ]),
          _: 1
          /* STABLE */
        }, 8, ["params"])
      ]),
      vue.createElementVNode("view", { class: "section_title" }, " 无数据页面（使用插槽） "),
      vue.createElementVNode("view", { style: { "height": "800rpx", "border": "1px solid gainsboro" } }, [
        vue.createVNode(_component_cl_scroll_view, {
          apiFun: $setup.apiFun2,
          params: $setup.searchParams2
        }, {
          empty: vue.withCtx(() => [
            vue.createElementVNode("view", { style: { "height": "100%", "background-color": "aquamarine" } }, "我是无数据页面，你可以任意设置")
          ]),
          _: 1
          /* STABLE */
        }, 8, ["params"])
      ]),
      vue.createElementVNode("view", { class: "section_title" }, " 显示加载失败 "),
      vue.createElementVNode("view", { style: { "height": "800rpx", "border": "1px solid gainsboro" } }, [
        vue.createVNode(_component_cl_scroll_view, {
          apiFun: $setup.apiFun3,
          params: $setup.searchParams3
        }, {
          list: vue.withCtx(({ list }) => [
            vue.createElementVNode("view", { class: "list_box" }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(list, (item) => {
                  return vue.openBlock(), vue.createElementBlock(
                    "view",
                    {
                      key: item,
                      class: "item"
                    },
                    vue.toDisplayString(item),
                    1
                    /* TEXT */
                  );
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ]),
          _: 1
          /* STABLE */
        }, 8, ["params"])
      ]),
      vue.createElementVNode("view", { class: "section_title" }, " 显示加载失败（使用插槽） "),
      vue.createElementVNode("view", { style: { "height": "800rpx", "border": "1px solid gainsboro" } }, [
        vue.createVNode(_component_cl_scroll_view, {
          apiFun: $setup.apiFun3,
          params: $setup.searchParams3
        }, {
          error: vue.withCtx(() => [
            vue.createElementVNode("view", { style: { "height": "100%", "background-color": "aquamarine" } }, "我是错误页面，你可以任意设置")
          ]),
          _: 1
          /* STABLE */
        }, 8, ["params"])
      ])
    ]);
  }
  const PagesComponentPageClScrollViewIndex = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render$o], ["__scopeId", "data-v-a70f1c9b"], ["__file", "D:/code/code-life/uni-app-components/pages/componentPage/cl-scroll-view/index.vue"]]);
  const _sfc_main$o = {
    name: "UniSection",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      title: {
        type: String,
        required: true,
        default: ""
      },
      titleFontSize: {
        type: String,
        default: "14px"
      },
      titleColor: {
        type: String,
        default: "#333"
      },
      subTitle: {
        type: String,
        default: ""
      },
      subTitleFontSize: {
        type: String,
        default: "12px"
      },
      subTitleColor: {
        type: String,
        default: "#999"
      },
      padding: {
        type: [Boolean, String],
        default: false
      }
    },
    computed: {
      _padding() {
        if (typeof this.padding === "string") {
          return this.padding;
        }
        return this.padding ? "10px" : "";
      }
    },
    watch: {
      title(newVal) {
        if (uni.report && newVal !== "") {
          uni.report("title", newVal);
        }
      }
    },
    methods: {
      onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-section" }, [
      vue.createElementVNode("view", {
        class: "uni-section-header",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
      }, [
        $props.type ? (vue.openBlock(), vue.createElementBlock(
          "view",
          {
            key: 0,
            class: vue.normalizeClass(["uni-section-header__decoration", $props.type])
          },
          null,
          2
          /* CLASS */
        )) : vue.renderSlot(_ctx.$slots, "decoration", { key: 1 }, void 0, true),
        vue.createElementVNode("view", { class: "uni-section-header__content" }, [
          vue.createElementVNode(
            "text",
            {
              style: vue.normalizeStyle({ "font-size": $props.titleFontSize, "color": $props.titleColor }),
              class: vue.normalizeClass(["uni-section__content-title", { "distraction": !$props.subTitle }])
            },
            vue.toDisplayString($props.title),
            7
            /* TEXT, CLASS, STYLE */
          ),
          $props.subTitle ? (vue.openBlock(), vue.createElementBlock(
            "text",
            {
              key: 0,
              style: vue.normalizeStyle({ "font-size": $props.subTitleFontSize, "color": $props.subTitleColor }),
              class: "uni-section-header__content-sub"
            },
            vue.toDisplayString($props.subTitle),
            5
            /* TEXT, STYLE */
          )) : vue.createCommentVNode("v-if", true)
        ]),
        vue.createElementVNode("view", { class: "uni-section-header__slot-right" }, [
          vue.renderSlot(_ctx.$slots, "right", {}, void 0, true)
        ])
      ]),
      vue.createElementVNode(
        "view",
        {
          class: "uni-section-content",
          style: vue.normalizeStyle({ padding: $options._padding })
        },
        [
          vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ],
        4
        /* STYLE */
      )
    ]);
  }
  const __easycom_0$7 = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$n], ["__scopeId", "data-v-637fd36b"], ["__file", "D:/code/code-life/uni-app-components/uni_modules/uni-section/components/uni-section/uni-section.vue"]]);
  const _sfc_main$n = {
    __name: "cl-select",
    props: {
      options: {
        type: Array,
        default: () => []
      },
      labelField: {
        type: String,
        default: "label"
      },
      valueField: {
        type: String,
        default: "value"
      },
      modelValue: {
        type: [String, Number],
        default: void 0
      },
      placeholder: {
        type: String,
        default: "请选择"
      },
      maxHeight: {
        type: [String, Number],
        default: 300
      },
      placeholderStyle: {
        type: String,
        default: ""
      },
      disabled: {
        type: Boolean,
        default: false
      },
      maxlength: {
        type: Number,
        default: 20
      },
      trim: {
        type: String,
        default: "both"
      },
      hideBorder: {
        type: Boolean,
        default: false
      },
      cursorSpacing: {
        type: Number,
        default: 0
      },
      emptyText: {
        type: String,
        default: "暂无数据"
      },
      filterable: {
        type: Boolean,
        default: true
      }
    },
    emits: ["update:modelValue", "focus", "blur", "selected", "clear", "input"],
    setup(__props, { expose: __expose, emit: __emit }) {
      __expose();
      const curInstance = vue.getCurrentInstance();
      const props = __props;
      const emits = __emit;
      const visible = vue.ref(false);
      const curSelect = vue.ref({});
      const curSelectLabel = vue.ref();
      const curSelectValue = vue.ref();
      const isSelected = vue.computed(() => {
        if (Object.keys(curSelect.value).length === 0) {
          return false;
        } else {
          return true;
        }
      });
      const scrollIntoView = vue.ref();
      const showOptions = vue.ref([]);
      const formatOptions = vue.computed(() => {
        return props.options.map((item) => {
          if (typeof item !== "object") {
            return {
              [props.valueField]: item,
              [props.labelField]: item
            };
          } else {
            return item;
          }
        });
      });
      const selected = (item) => {
        curSelect.value = item;
        visible.value = false;
        emits("selected", item[props.valueField], item);
      };
      const clearHandle = () => {
        curSelect.value = {};
        formatAppLog("log", "at uni_modules/cl-select/components/cl-select/cl-select.vue:144", props.options[0][props.valueField]);
        emits("clear");
      };
      const showPlaceholder = vue.ref(props.placeholder);
      const inputClick = () => {
        if (props.disabled) {
          return;
        }
        if (isSelected.value) {
          showPlaceholder.value = curSelect.value[props.labelField];
        } else {
          showPlaceholder.value = props.placeholder;
        }
        visible.value = true;
        showOptions.value = formatOptions.value;
        curSelectLabel.value = void 0;
      };
      const focusHandle = (inputVal) => {
        if (isSelected.value) {
          showPlaceholder.value = curSelect.value[props.labelField];
        } else {
          showPlaceholder.value = props.placeholder;
        }
        visible.value = true;
        showOptions.value = formatOptions.value;
        curSelectLabel.value = void 0;
        emits("focus", inputVal);
      };
      const blurHandle = () => {
        if (isSelected.value) {
          curSelectLabel.value = curSelect.value[props.labelField];
        } else {
          curSelectLabel.value = void 0;
        }
        emits("blur");
      };
      let searchTimer = null;
      const inputHandle = (e) => {
        clearTimeout(searchTimer);
        searchTimer = setTimeout(() => {
          showOptions.value = formatOptions.value.filter((item) => item[props.labelField].includes(e));
          emits("input", e);
        }, 200);
      };
      vue.watch(() => visible.value, (val) => {
        if (val) {
          vue.nextTick(() => {
            if (isSelected.value) {
              showPlaceholder.value = curSelect.value[props.labelField];
              scrollIntoView.value = curSelect.value[props.valueField];
            } else {
              showPlaceholder.value = props.placeholder;
              if (formatOptions.value.length > 0) {
                scrollIntoView.value = formatOptions.value[0][props.valueField];
              }
            }
          });
        }
      });
      vue.watch(() => curSelect.value, (val) => {
        if (Object.keys(val).length === 0) {
          curSelectLabel.value = void 0;
          curSelectValue.value = void 0;
          showPlaceholder.value = props.placeholder;
        } else {
          curSelectLabel.value = val[props.labelField];
          curSelectValue.value = val[props.valueField];
        }
        emits("update:modelValue", curSelectValue.value);
      });
      const setCurSelect = () => {
        if (formatOptions.value.length > 0 && !isEmpty(props.modelValue)) {
          const data = formatOptions.value.find((item) => item[props.valueField] === props.modelValue);
          if (data) {
            curSelect.value = data;
          }
        }
      };
      const isEmpty = (val) => {
        return val === "" || val === void 0 || val === null;
      };
      vue.watch([() => props.options, () => props.modelValue], () => {
        setCurSelect();
      }, {
        deep: true,
        immediate: true
      });
      const maskClick = (e) => {
        visible.value = false;
      };
      const __returned__ = { curInstance, props, emits, visible, curSelect, curSelectLabel, curSelectValue, isSelected, scrollIntoView, showOptions, formatOptions, selected, clearHandle, showPlaceholder, inputClick, focusHandle, blurHandle, get searchTimer() {
        return searchTimer;
      }, set searchTimer(v) {
        searchTimer = v;
      }, inputHandle, setCurSelect, isEmpty, maskClick, ref: vue.ref, watch: vue.watch, computed: vue.computed, nextTick: vue.nextTick, onMounted: vue.onMounted, getCurrentInstance: vue.getCurrentInstance };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$d);
    const _component_cl_input = resolveEasycom(vue.resolveDynamicComponent("cl-input"), __easycom_0$c);
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode("view", { class: "el_select" }, [
          vue.createVNode(_component_cl_input, {
            class: "cl_input",
            modelValue: $setup.curSelectLabel,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.curSelectLabel = $event),
            placeholder: $setup.showPlaceholder,
            inputType: $props.filterable ? "input" : "falseInput",
            placeholderStyle: $props.placeholderStyle,
            disabled: $props.disabled,
            maxlength: $props.maxlength,
            trim: $props.trim,
            inputBorder: !$props.hideBorder,
            cursorSpacing: $props.cursorSpacing,
            onFocus: $setup.focusHandle,
            onInput: $setup.inputHandle,
            onBlur: $setup.blurHandle,
            onInputClick: $setup.inputClick,
            onClear: $setup.clearHandle
          }, vue.createSlots({
            _: 2
            /* DYNAMIC */
          }, [
            $props.filterable ? {
              name: "right",
              fn: vue.withCtx(() => [
                !$props.disabled ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 0,
                  class: "icons"
                }, [
                  !$setup.isSelected || $setup.visible ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                    key: 0,
                    type: $setup.visible ? "top" : "bottom",
                    size: "14",
                    color: "#999"
                  }, null, 8, ["type"])) : vue.createCommentVNode("v-if", true)
                ])) : vue.createCommentVNode("v-if", true)
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["modelValue", "placeholder", "inputType", "placeholderStyle", "disabled", "maxlength", "trim", "inputBorder", "cursorSpacing"]),
          vue.withDirectives(vue.createElementVNode(
            "view",
            { class: "scroll_list" },
            [
              vue.createElementVNode("view", { class: "triangle_icon" }),
              vue.createElementVNode("scroll-view", {
                "scroll-y": "",
                "scroll-into-view": $setup.scrollIntoView,
                style: vue.normalizeStyle({ maxHeight: $props.maxHeight + "px" })
              }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($setup.showOptions, (item, index) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: vue.normalizeClass(["select_item", { active: item[$props.valueField] === $setup.curSelect[$props.valueField] }]),
                      key: index,
                      onClick: ($event) => $setup.selected(item),
                      id: item[$props.valueField]
                    }, vue.toDisplayString(item[$props.labelField]), 11, ["onClick", "id"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                )),
                $setup.showOptions.length === 0 ? vue.renderSlot(_ctx.$slots, "empty", { key: 0 }, () => [
                  vue.createElementVNode(
                    "view",
                    { class: "empty_text" },
                    vue.toDisplayString($props.emptyText),
                    1
                    /* TEXT */
                  )
                ], true) : vue.createCommentVNode("v-if", true)
              ], 12, ["scroll-into-view"])
            ],
            512
            /* NEED_PATCH */
          ), [
            [vue.vShow, $setup.visible]
          ])
        ]),
        $setup.visible ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "mask",
          onClick: $setup.maskClick
        })) : vue.createCommentVNode("v-if", true)
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const __easycom_1$4 = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$m], ["__scopeId", "data-v-4bd33685"], ["__file", "D:/code/code-life/uni-app-components/uni_modules/cl-select/components/cl-select/cl-select.vue"]]);
  const _sfc_main$m = {
    __name: "index",
    setup(__props, { expose: __expose }) {
      __expose();
      const value = vue.ref();
      const options = Array.from({
        length: 100
      }, (_, index) => {
        return {
          label: `我是展示的值${index}`,
          value: `value${index}`
        };
      });
      const __returned__ = { value, options, ref: vue.ref };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_section = resolveEasycom(vue.resolveDynamicComponent("uni-section"), __easycom_0$7);
    const _component_cl_select = resolveEasycom(vue.resolveDynamicComponent("cl-select"), __easycom_1$4);
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createVNode(_component_uni_section, null, {
        default: vue.withCtx(() => [
          vue.createTextVNode("模仿uni-data-select做的可搜索下拉框，可直接回显数据，并定位到对应的数据项")
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createVNode(_component_cl_select, {
        options: $setup.options,
        modelValue: $setup.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.value = $event)
      }, null, 8, ["options", "modelValue"]),
      vue.createTextVNode(
        " " + vue.toDisplayString($setup.value),
        1
        /* TEXT */
      )
    ]);
  }
  const PagesComponentPageClSelectIndex = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$l], ["__scopeId", "data-v-ad7d568c"], ["__file", "D:/code/code-life/uni-app-components/pages/componentPage/cl-select/index.vue"]]);
  const _sfc_main$l = {
    name: "UniStatusBar",
    data() {
      return {
        statusBarHeight: uni.getSystemInfoSync().statusBarHeight + "px"
      };
    }
  };
  function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        style: vue.normalizeStyle({ height: $data.statusBarHeight }),
        class: "uni-status-bar"
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ],
      4
      /* STYLE */
    );
  }
  const statusBar = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$k], ["__scopeId", "data-v-7920e3e0"], ["__file", "D:/code/code-life/uni-app-components/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-status-bar.vue"]]);
  const getVal = (val) => typeof val === "number" ? val + "px" : val;
  const _sfc_main$k = {
    name: "UniNavBar",
    components: {
      statusBar
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
        default: ""
      },
      rightIcon: {
        type: String,
        default: ""
      },
      fixed: {
        type: [Boolean, String],
        default: false
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
        default: false
      },
      shadow: {
        type: [Boolean, String],
        default: false
      },
      border: {
        type: [Boolean, String],
        default: true
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
      stat: {
        type: [Boolean, String],
        default: ""
      }
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
    mounted() {
      if (uni.report && this.stat && this.title !== "") {
        uni.report("title", this.title);
      }
    },
    methods: {
      onClickLeft() {
        this.$emit("clickLeft");
      },
      onClickRight() {
        this.$emit("clickRight");
      },
      onClickTitle() {
        this.$emit("clickTitle");
      }
    }
  };
  function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_status_bar = vue.resolveComponent("status-bar");
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$d);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["uni-navbar", { "uni-dark": $props.dark, "uni-nvue-fixed": $props.fixed }])
      },
      [
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["uni-navbar__content", { "uni-navbar--fixed": $props.fixed, "uni-navbar--shadow": $props.shadow, "uni-navbar--border": $props.border }]),
            style: vue.normalizeStyle({ "background-color": $options.themeBgColor, "border-bottom-color": $options.themeColor })
          },
          [
            $props.statusBar ? (vue.openBlock(), vue.createBlock(_component_status_bar, { key: 0 })) : vue.createCommentVNode("v-if", true),
            vue.createElementVNode(
              "view",
              {
                style: vue.normalizeStyle({ color: $options.themeColor, backgroundColor: $options.themeBgColor, height: $options.navbarHeight }),
                class: "uni-navbar__header"
              },
              [
                vue.createElementVNode(
                  "view",
                  {
                    onClick: _cache[0] || (_cache[0] = (...args) => $options.onClickLeft && $options.onClickLeft(...args)),
                    class: "uni-navbar__header-btns uni-navbar__header-btns-left",
                    style: vue.normalizeStyle({ width: $options.leftIconWidth })
                  },
                  [
                    vue.renderSlot(_ctx.$slots, "left", {}, () => [
                      $props.leftIcon.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                        key: 0,
                        class: "uni-navbar__content_view"
                      }, [
                        vue.createVNode(_component_uni_icons, {
                          color: $options.themeColor,
                          type: $props.leftIcon,
                          size: "20"
                        }, null, 8, ["color", "type"])
                      ])) : vue.createCommentVNode("v-if", true),
                      $props.leftText.length ? (vue.openBlock(), vue.createElementBlock(
                        "view",
                        {
                          key: 1,
                          class: vue.normalizeClass([{ "uni-navbar-btn-icon-left": !$props.leftIcon.length > 0 }, "uni-navbar-btn-text"])
                        },
                        [
                          vue.createElementVNode(
                            "text",
                            {
                              style: vue.normalizeStyle({ color: $options.themeColor, fontSize: "12px" })
                            },
                            vue.toDisplayString($props.leftText),
                            5
                            /* TEXT, STYLE */
                          )
                        ],
                        2
                        /* CLASS */
                      )) : vue.createCommentVNode("v-if", true)
                    ], true)
                  ],
                  4
                  /* STYLE */
                ),
                vue.createElementVNode("view", {
                  class: "uni-navbar__header-container",
                  onClick: _cache[1] || (_cache[1] = (...args) => $options.onClickTitle && $options.onClickTitle(...args))
                }, [
                  vue.renderSlot(_ctx.$slots, "default", {}, () => [
                    $props.title.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 0,
                      class: "uni-navbar__header-container-inner"
                    }, [
                      vue.createElementVNode(
                        "text",
                        {
                          class: "uni-nav-bar-text uni-ellipsis-1",
                          style: vue.normalizeStyle({ color: $options.themeColor })
                        },
                        vue.toDisplayString($props.title),
                        5
                        /* TEXT, STYLE */
                      )
                    ])) : vue.createCommentVNode("v-if", true)
                  ], true)
                ]),
                vue.createElementVNode(
                  "view",
                  {
                    onClick: _cache[2] || (_cache[2] = (...args) => $options.onClickRight && $options.onClickRight(...args)),
                    class: "uni-navbar__header-btns uni-navbar__header-btns-right",
                    style: vue.normalizeStyle({ width: $options.rightIconWidth })
                  },
                  [
                    vue.renderSlot(_ctx.$slots, "right", {}, () => [
                      $props.rightIcon.length ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, [
                        vue.createVNode(_component_uni_icons, {
                          color: $options.themeColor,
                          type: $props.rightIcon,
                          size: "22"
                        }, null, 8, ["color", "type"])
                      ])) : vue.createCommentVNode("v-if", true),
                      $props.rightText.length && !$props.rightIcon.length ? (vue.openBlock(), vue.createElementBlock("view", {
                        key: 1,
                        class: "uni-navbar-btn-text"
                      }, [
                        vue.createElementVNode(
                          "text",
                          {
                            class: "uni-nav-bar-right-text",
                            style: vue.normalizeStyle({ color: $options.themeColor })
                          },
                          vue.toDisplayString($props.rightText),
                          5
                          /* TEXT, STYLE */
                        )
                      ])) : vue.createCommentVNode("v-if", true)
                    ], true)
                  ],
                  4
                  /* STYLE */
                )
              ],
              4
              /* STYLE */
            )
          ],
          6
          /* CLASS, STYLE */
        ),
        $props.fixed ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "uni-navbar__placeholder"
        }, [
          $props.statusBar ? (vue.openBlock(), vue.createBlock(_component_status_bar, { key: 0 })) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode(
            "view",
            {
              class: "uni-navbar__placeholder-view",
              style: vue.normalizeStyle({ height: $options.navbarHeight })
            },
            null,
            4
            /* STYLE */
          )
        ])) : vue.createCommentVNode("v-if", true)
      ],
      2
      /* CLASS */
    );
  }
  const __easycom_0$6 = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$j], ["__scopeId", "data-v-26544265"], ["__file", "D:/code/code-life/uni-app-components/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue"]]);
  const _sfc_main$j = {
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
    setup(__props, { expose: __expose, emit: __emit }) {
      __expose();
      const props = __props;
      const $attrs = vue.useAttrs();
      const emits = __emit;
      onReady(() => {
        const pageInstace = vue.getCurrentInstance();
        const query = uni.createSelectorQuery().in(pageInstace == null ? void 0 : pageInstace.proxy);
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
          uni.navigateBack();
        }
      };
      const clickright = () => {
        if (typeof props.clickright === "function") {
          props.clickright();
        }
      };
      const __returned__ = { props, $attrs, emits, getCurrentPageTitle, clickLeft, clickright, onMounted: vue.onMounted, getCurrentInstance: vue.getCurrentInstance, useAttrs: vue.useAttrs, useSlots: vue.useSlots, get onReady() {
        return onReady;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_nav_bar = resolveEasycom(vue.resolveDynamicComponent("uni-nav-bar"), __easycom_0$6);
    return vue.openBlock(), vue.createBlock(_component_uni_nav_bar, vue.mergeProps({ class: "cl-nav-bar" }, $setup.$attrs, {
      border: $props.border,
      statusBar: $props.statusBar,
      fixed: $props.fixed,
      leftIcon: $props.leftIcon,
      title: $setup.getCurrentPageTitle(),
      onClickLeft: $setup.clickLeft,
      onClickright: $setup.clickright
    }), null, 16, ["border", "statusBar", "fixed", "leftIcon", "title"]);
  }
  const __easycom_0$5 = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$i], ["__file", "D:/code/code-life/uni-app-components/uni_modules/cl-nav-bar/components/cl-nav-bar/cl-nav-bar.vue"]]);
  const _sfc_main$i = {};
  function _sfc_render$h(_ctx, _cache) {
    const _component_cl_nav_bar = resolveEasycom(vue.resolveDynamicComponent("cl-nav-bar"), __easycom_0$5);
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createVNode(_component_cl_nav_bar),
        vue.createElementVNode("view", { style: { "padding": "30rpx" } }, " cl-nav-bar组件与uni-nav-bar组件并无区别，只是设置了部分属性的常用默认值，添加了自动从page.json获取标题的方法 "),
        vue.createElementVNode("view", { style: { "height": "1000px" } })
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesComponentPageClNavBarIndex = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$h], ["__file", "D:/code/code-life/uni-app-components/pages/componentPage/cl-nav-bar/index.vue"]]);
  const _sfc_main$h = {
    __name: "cl-date-picker",
    props: /* @__PURE__ */ vue.mergeModels({
      dateType: {
        type: String,
        default: "YYYY-MM-DD"
      },
      placeholder: {
        type: String,
        default: "请选择"
      },
      clearable: {
        type: Boolean,
        default: true
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
      },
      disabled: {
        type: Boolean,
        default: false
      }
    }, {
      "modelValue": {},
      "modelModifiers": {}
    }),
    emits: /* @__PURE__ */ vue.mergeModels(["cancel", "submit"], ["update:modelValue"]),
    setup(__props, { expose: __expose, emit: __emit }) {
      const props = __props;
      const atrrs = vue.useAttrs();
      const modelValue = vue.useModel(__props, "modelValue");
      const emits = __emit;
      const popupRef = vue.ref();
      const dateOptionList = vue.ref([]);
      const dateVal = vue.ref([]);
      const dateLabelMap = {
        YYYY: "年",
        MM: "月",
        DD: "日",
        hh: "时",
        mm: "分",
        ss: "秒"
      };
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
          type: "YYYY-MM-DD HH",
          regExp: /^\d{4}-\d{2}-\d{2} \d{2}$/
        },
        {
          type: "YYYY-MM-DD HH:mm",
          regExp: /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/
        },
        {
          type: "YYYY-MM-DD HH:mm:ss",
          regExp: /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/
        }
      ];
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
      const dateTypetList = vue.computed(() => {
        const regex = /(YYYY|MM|DD|hh|mm|ss)/g;
        const matches = props.dateType.match(regex);
        return matches || [];
      });
      const dataValList = vue.computed(() => {
        const regex = /(\d{4}|\d{2}|\d{2}|\d{2}|\d{2}|\d{2})/g;
        const matches = props.modelValue.match(regex);
        return matches || [];
      });
      const createDateOptions = () => {
        dateOptionList.value = [];
        if (dateTypetList.value.length === 0) {
          throw new Error("传入的时间格式无法识别到有效值，有效值包含：YYYY,MM,DD,hh,mm,ss");
        }
        dateTypetList.value.forEach((item, index) => {
          let options = [];
          if (item === "YYYY") {
            if (props.yearOptions.length === 0) {
              for (let i = 1990; i <= 2050; i++) {
                options.push(i + "");
              }
            } else {
              options = props.yearOptions;
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
        dateTypetList.value.forEach((item, index) => {
          const curOption = dateOptionList.value.find((itm) => itm.type === item);
          const curData = curOption.options.findIndex((itm) => itm === dataValList.value[index]);
          dateVal.value.push(curData);
        });
      };
      const dateChange = (e) => {
        const {
          value
        } = e.detail;
        formatAppLog("log", "at uni_modules/cl-date-picker/components/cl-date-picker/cl-date-picker.vue:206", e, "detail");
        formatAppLog("log", "at uni_modules/cl-date-picker/components/cl-date-picker/cl-date-picker.vue:207", dateTypetList.value, "dateTypetList");
        const yearIdx = dateTypetList.value.findIndex((item) => item === "YYYY");
        const monthIdx = dateTypetList.value.findIndex((item) => item === "MM");
        const dayIdx = dateTypetList.value.findIndex((item) => item === "DD");
        if (monthIdx > -1 && dayIdx > -1) {
          let year = Date.now().getFullYear();
          if (yearIdx > -1) {
            year = value[yearIdx];
            const days = new Date(year, month, 0).getDate();
            formatAppLog("log", "at uni_modules/cl-date-picker/components/cl-date-picker/cl-date-picker.vue:218", days, "days");
          }
          dateVal.value = value;
        } else {
          dateVal.value = value;
        }
      };
      const cancal = () => {
        emits("cancel");
        popupRef.value.close();
      };
      const handleSubmit = () => {
        let str = props.dateType;
        dateTypetList.value.forEach((item, index) => {
          const reg = new RegExp(item);
          const curOption = dateOptionList.value.find((itm) => itm.type === item);
          formatAppLog("log", "at uni_modules/cl-date-picker/components/cl-date-picker/cl-date-picker.vue:240", curOption, "curOption");
          const curData = curOption.options[dateVal.value[index]];
          str = str.replace(reg, curData);
        });
        emits("submit", str);
        modelValue.value = str;
        popupRef.value.close();
      };
      const handleOpen = () => {
        if (props.disabled) {
          return;
        }
        createDateOptions();
        if (isEmpty(props.modelValue)) {
          if (props.isNow) {
            let nowDateIdxList = [];
            const nowDateMap = getNowDate();
            dateTypetList.value.forEach((item) => {
              const curOption = dateOptionList.value.find((itm) => itm.type === item);
              let curIdx = curOption.options.findIndex((itm) => itm === nowDateMap[item]);
              nowDateIdxList.push(curIdx);
            });
            dateVal.value = nowDateIdxList;
          } else {
            dateVal.value = [];
          }
        } else {
          vue.nextTick(() => showDate());
        }
        popupRef.value.open();
      };
      const close = () => {
        popupRef.value.close();
      };
      __expose({
        close,
        open: handleOpen
      });
      const handleClear = () => {
        modelValue.value = "";
      };
      const __returned__ = { props, atrrs, modelValue, emits, popupRef, dateOptionList, dateVal, dateLabelMap, dateTypeMap, isEmpty, supplementZero, getNowDate, dateTypetList, dataValList, createDateOptions, showDate, dateChange, cancal, handleSubmit, handleOpen, close, handleClear, computed: vue.computed, nextTick: vue.nextTick, reactive: vue.reactive, ref: vue.ref, useAttrs: vue.useAttrs, watch: vue.watch, get onLoad() {
        return onLoad;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_cl_input = resolveEasycom(vue.resolveDynamicComponent("cl-input"), __easycom_0$c);
    const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_2$1);
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createVNode(_component_cl_input, vue.mergeProps({
          modelValue: $setup.modelValue,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.modelValue = $event),
          inputType: "falseInput",
          placeholder: $props.placeholder,
          disabled: $props.disabled
        }, $setup.atrrs, { onInputClick: $setup.handleOpen }), {
          default: vue.withCtx(() => [
            vue.createCommentVNode(' <template #right>\r\n			<uni-icons v-if="!modelValue && !disabled" type="bottom" :size="14" color="#999"></uni-icons>\r\n		</template> ')
          ]),
          _: 1
          /* STABLE */
        }, 16, ["modelValue", "placeholder", "disabled"]),
        vue.createVNode(
          _component_uni_popup,
          {
            type: "bottom",
            ref: "popupRef"
          },
          {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "btn_box" }, [
                vue.createElementVNode("text", { onClick: $setup.cancal }, "取消"),
                vue.createElementVNode("text", {
                  class: "submit",
                  onClick: $setup.handleSubmit
                }, "确认")
              ]),
              vue.createElementVNode("picker-view", {
                class: "picker-view",
                value: $setup.dateVal,
                onChange: $setup.dateChange,
                "mask-class": "mask_class"
              }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($setup.dateOptionList, (item, index) => {
                    return vue.openBlock(), vue.createElementBlock("picker-view-column", { key: index }, [
                      (vue.openBlock(true), vue.createElementBlock(
                        vue.Fragment,
                        null,
                        vue.renderList(item.options, (itm, idx) => {
                          return vue.openBlock(), vue.createElementBlock(
                            "view",
                            {
                              class: "item",
                              key: idx
                            },
                            vue.toDisplayString(itm) + " " + vue.toDisplayString($setup.dateLabelMap[item.type]),
                            1
                            /* TEXT */
                          );
                        }),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ], 40, ["value"])
            ]),
            _: 1
            /* STABLE */
          },
          512
          /* NEED_PATCH */
        )
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const __easycom_1$3 = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$g], ["__scopeId", "data-v-0657bf93"], ["__file", "D:/code/code-life/uni-app-components/uni_modules/cl-date-picker/components/cl-date-picker/cl-date-picker.vue"]]);
  const _sfc_main$g = {
    __name: "index",
    setup(__props, { expose: __expose }) {
      __expose();
      const value1 = vue.ref();
      const value2 = vue.ref("12:12:12");
      const value3 = vue.ref();
      const datePickerRef = vue.ref();
      const show = () => {
        datePickerRef.value.open();
      };
      const __returned__ = { value1, value2, value3, datePickerRef, show, ref: vue.ref };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_section = resolveEasycom(vue.resolveDynamicComponent("uni-section"), __easycom_0$7);
    const _component_cl_date_picker = resolveEasycom(vue.resolveDynamicComponent("cl-date-picker"), __easycom_1$3);
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createElementVNode("view", { class: "" }, " 使用picker-view和picker-view-column封装的时间选择器，支持年月日时分秒各种形式的组合搭配。 "),
      vue.createVNode(_component_uni_section, null, {
        default: vue.withCtx(() => [
          vue.createTextVNode("基础使用")
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createVNode(_component_cl_date_picker, {
        modelValue: $setup.value1,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.value1 = $event),
        ref: "datePickerRef"
      }, null, 8, ["modelValue"]),
      vue.createVNode(_component_uni_section, null, {
        default: vue.withCtx(() => [
          vue.createTextVNode("切换时间格式")
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createVNode(_component_cl_date_picker, {
        modelValue: $setup.value2,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.value2 = $event),
        ref: "datePickerRef",
        dateType: "hh:mm:ss"
      }, null, 8, ["modelValue"]),
      vue.createVNode(_component_uni_section, null, {
        default: vue.withCtx(() => [
          vue.createTextVNode("禁用状态")
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createVNode(_component_cl_date_picker, {
        modelValue: $setup.value3,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.value3 = $event),
        ref: "datePickerRef",
        disabled: ""
      }, null, 8, ["modelValue"])
    ]);
  }
  const PagesComponentPageClDatePickerIndex = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$f], ["__scopeId", "data-v-fc709b23"], ["__file", "D:/code/code-life/uni-app-components/pages/componentPage/cl-date-picker/index.vue"]]);
  function obj2strClass(obj) {
    let classess = "";
    for (let key in obj) {
      const val = obj[key];
      if (val) {
        classess += `${key} `;
      }
    }
    return classess;
  }
  function obj2strStyle(obj) {
    let style = "";
    for (let key in obj) {
      const val = obj[key];
      style += `${key}:${val};`;
    }
    return style;
  }
  const _sfc_main$f = {
    name: "uni-easyinput",
    emits: [
      "click",
      "iconClick",
      "update:modelValue",
      "input",
      "focus",
      "blur",
      "confirm",
      "clear",
      "eyes",
      "change",
      "keyboardheightchange"
    ],
    model: {
      prop: "modelValue",
      event: "update:modelValue"
    },
    options: {
      virtualHost: true
    },
    inject: {
      form: {
        from: "uniForm",
        default: null
      },
      formItem: {
        from: "uniFormItem",
        default: null
      }
    },
    props: {
      name: String,
      value: [Number, String],
      modelValue: [Number, String],
      type: {
        type: String,
        default: "text"
      },
      clearable: {
        type: Boolean,
        default: true
      },
      autoHeight: {
        type: Boolean,
        default: false
      },
      placeholder: {
        type: String,
        default: " "
      },
      placeholderStyle: String,
      focus: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      maxlength: {
        type: [Number, String],
        default: 140
      },
      confirmType: {
        type: String,
        default: "done"
      },
      clearSize: {
        type: [Number, String],
        default: 24
      },
      inputBorder: {
        type: Boolean,
        default: true
      },
      prefixIcon: {
        type: String,
        default: ""
      },
      suffixIcon: {
        type: String,
        default: ""
      },
      trim: {
        type: [Boolean, String],
        default: false
      },
      cursorSpacing: {
        type: Number,
        default: 0
      },
      passwordIcon: {
        type: Boolean,
        default: true
      },
      adjustPosition: {
        type: Boolean,
        default: true
      },
      primaryColor: {
        type: String,
        default: "#2979ff"
      },
      styles: {
        type: Object,
        default() {
          return {
            color: "#333",
            backgroundColor: "#fff",
            disableColor: "#F7F6F6",
            borderColor: "#e5e5e5"
          };
        }
      },
      errorMessage: {
        type: [String, Boolean],
        default: ""
      }
    },
    data() {
      return {
        focused: false,
        val: "",
        showMsg: "",
        border: false,
        isFirstBorder: false,
        showClearIcon: false,
        showPassword: false,
        focusShow: false,
        localMsg: "",
        isEnter: false
        // 用于判断当前是否是使用回车操作
      };
    },
    computed: {
      // 输入框内是否有值
      isVal() {
        const val = this.val;
        if (val || val === 0) {
          return true;
        }
        return false;
      },
      msg() {
        return this.localMsg || this.errorMessage;
      },
      // 因为uniapp的input组件的maxlength组件必须要数值，这里转为数值，用户可以传入字符串数值
      inputMaxlength() {
        return Number(this.maxlength);
      },
      // 处理外层样式的style
      boxStyle() {
        return `color:${this.inputBorder && this.msg ? "#e43d33" : this.styles.color};`;
      },
      // input 内容的类和样式处理
      inputContentClass() {
        return obj2strClass({
          "is-input-border": this.inputBorder,
          "is-input-error-border": this.inputBorder && this.msg,
          "is-textarea": this.type === "textarea",
          "is-disabled": this.disabled,
          "is-focused": this.focusShow
        });
      },
      inputContentStyle() {
        const focusColor = this.focusShow ? this.primaryColor : this.styles.borderColor;
        const borderColor = this.inputBorder && this.msg ? "#dd524d" : focusColor;
        return obj2strStyle({
          "border-color": borderColor || "#e5e5e5",
          "background-color": this.disabled ? this.styles.disableColor : this.styles.backgroundColor
        });
      },
      // input右侧样式
      inputStyle() {
        const paddingRight = this.type === "password" || this.clearable || this.prefixIcon ? "" : "10px";
        return obj2strStyle({
          "padding-right": paddingRight,
          "padding-left": this.prefixIcon ? "" : "10px"
        });
      }
    },
    watch: {
      value(newVal) {
        if (newVal === null) {
          this.val = "";
          return;
        }
        this.val = newVal;
      },
      modelValue(newVal) {
        if (newVal === null) {
          this.val = "";
          return;
        }
        this.val = newVal;
      },
      focus(newVal) {
        this.$nextTick(() => {
          this.focused = this.focus;
          this.focusShow = this.focus;
        });
      }
    },
    created() {
      this.init();
      if (this.form && this.formItem) {
        this.$watch("formItem.errMsg", (newVal) => {
          this.localMsg = newVal;
        });
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.focused = this.focus;
        this.focusShow = this.focus;
      });
    },
    methods: {
      /**
       * 初始化变量值
       */
      init() {
        if (this.value || this.value === 0) {
          this.val = this.value;
        } else if (this.modelValue || this.modelValue === 0 || this.modelValue === "") {
          this.val = this.modelValue;
        } else {
          this.val = "";
        }
      },
      /**
       * 点击图标时触发
       * @param {Object} type
       */
      onClickIcon(type) {
        this.$emit("iconClick", type);
      },
      /**
       * 显示隐藏内容，密码框时生效
       */
      onEyes() {
        this.showPassword = !this.showPassword;
        this.$emit("eyes", this.showPassword);
      },
      /**
       * 输入时触发
       * @param {Object} event
       */
      onInput(event) {
        let value = event.detail.value;
        if (this.trim) {
          if (typeof this.trim === "boolean" && this.trim) {
            value = this.trimStr(value);
          }
          if (typeof this.trim === "string") {
            value = this.trimStr(value, this.trim);
          }
        }
        if (this.errMsg)
          this.errMsg = "";
        this.val = value;
        this.$emit("input", value);
        this.$emit("update:modelValue", value);
      },
      /**
       * 外部调用方法
       * 获取焦点时触发
       * @param {Object} event
       */
      onFocus() {
        this.$nextTick(() => {
          this.focused = true;
        });
        this.$emit("focus", null);
      },
      _Focus(event) {
        this.focusShow = true;
        this.$emit("focus", event);
      },
      /**
       * 外部调用方法
       * 失去焦点时触发
       * @param {Object} event
       */
      onBlur() {
        this.focused = false;
        this.$emit("blur", null);
      },
      _Blur(event) {
        event.detail.value;
        this.focusShow = false;
        this.$emit("blur", event);
        if (this.isEnter === false) {
          this.$emit("change", this.val);
        }
        if (this.form && this.formItem) {
          const { validateTrigger } = this.form;
          if (validateTrigger === "blur") {
            this.formItem.onFieldChange();
          }
        }
      },
      /**
       * 按下键盘的发送键
       * @param {Object} e
       */
      onConfirm(e) {
        this.$emit("confirm", this.val);
        this.isEnter = true;
        this.$emit("change", this.val);
        this.$nextTick(() => {
          this.isEnter = false;
        });
      },
      /**
       * 清理内容
       * @param {Object} event
       */
      onClear(event) {
        this.val = "";
        this.$emit("input", "");
        this.$emit("update:modelValue", "");
        this.$emit("clear");
      },
      /**
       * 键盘高度发生变化的时候触发此事件
       * 兼容性：微信小程序2.7.0+、App 3.1.0+
       * @param {Object} event
       */
      onkeyboardheightchange(event) {
        this.$emit("keyboardheightchange", event);
      },
      /**
       * 去除空格
       */
      trimStr(str, pos = "both") {
        if (pos === "both") {
          return str.trim();
        } else if (pos === "left") {
          return str.trimLeft();
        } else if (pos === "right") {
          return str.trimRight();
        } else if (pos === "start") {
          return str.trimStart();
        } else if (pos === "end") {
          return str.trimEnd();
        } else if (pos === "all") {
          return str.replace(/\s+/g, "");
        } else if (pos === "none") {
          return str;
        }
        return str;
      }
    }
  };
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$d);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["uni-easyinput", { "uni-easyinput-error": $options.msg }]),
        style: vue.normalizeStyle($options.boxStyle)
      },
      [
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["uni-easyinput__content", $options.inputContentClass]),
            style: vue.normalizeStyle($options.inputContentStyle)
          },
          [
            $props.prefixIcon ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
              key: 0,
              class: "content-clear-icon",
              type: $props.prefixIcon,
              color: "#c0c4cc",
              onClick: _cache[0] || (_cache[0] = ($event) => $options.onClickIcon("prefix")),
              size: "22"
            }, null, 8, ["type"])) : vue.createCommentVNode("v-if", true),
            vue.renderSlot(_ctx.$slots, "left", {}, void 0, true),
            $props.type === "textarea" ? (vue.openBlock(), vue.createElementBlock("textarea", {
              key: 1,
              class: vue.normalizeClass(["uni-easyinput__content-textarea", { "input-padding": $props.inputBorder }]),
              name: $props.name,
              value: $data.val,
              placeholder: $props.placeholder,
              placeholderStyle: $props.placeholderStyle,
              disabled: $props.disabled,
              "placeholder-class": "uni-easyinput__placeholder-class",
              maxlength: $options.inputMaxlength,
              focus: $data.focused,
              autoHeight: $props.autoHeight,
              "cursor-spacing": $props.cursorSpacing,
              "adjust-position": $props.adjustPosition,
              onInput: _cache[1] || (_cache[1] = (...args) => $options.onInput && $options.onInput(...args)),
              onBlur: _cache[2] || (_cache[2] = (...args) => $options._Blur && $options._Blur(...args)),
              onFocus: _cache[3] || (_cache[3] = (...args) => $options._Focus && $options._Focus(...args)),
              onConfirm: _cache[4] || (_cache[4] = (...args) => $options.onConfirm && $options.onConfirm(...args)),
              onKeyboardheightchange: _cache[5] || (_cache[5] = (...args) => $options.onkeyboardheightchange && $options.onkeyboardheightchange(...args))
            }, null, 42, ["name", "value", "placeholder", "placeholderStyle", "disabled", "maxlength", "focus", "autoHeight", "cursor-spacing", "adjust-position"])) : (vue.openBlock(), vue.createElementBlock("input", {
              key: 2,
              type: $props.type === "password" ? "text" : $props.type,
              class: "uni-easyinput__content-input",
              style: vue.normalizeStyle($options.inputStyle),
              name: $props.name,
              value: $data.val,
              password: !$data.showPassword && $props.type === "password",
              placeholder: $props.placeholder,
              placeholderStyle: $props.placeholderStyle,
              "placeholder-class": "uni-easyinput__placeholder-class",
              disabled: $props.disabled,
              maxlength: $options.inputMaxlength,
              focus: $data.focused,
              confirmType: $props.confirmType,
              "cursor-spacing": $props.cursorSpacing,
              "adjust-position": $props.adjustPosition,
              onFocus: _cache[6] || (_cache[6] = (...args) => $options._Focus && $options._Focus(...args)),
              onBlur: _cache[7] || (_cache[7] = (...args) => $options._Blur && $options._Blur(...args)),
              onInput: _cache[8] || (_cache[8] = (...args) => $options.onInput && $options.onInput(...args)),
              onConfirm: _cache[9] || (_cache[9] = (...args) => $options.onConfirm && $options.onConfirm(...args)),
              onKeyboardheightchange: _cache[10] || (_cache[10] = (...args) => $options.onkeyboardheightchange && $options.onkeyboardheightchange(...args))
            }, null, 44, ["type", "name", "value", "password", "placeholder", "placeholderStyle", "disabled", "maxlength", "focus", "confirmType", "cursor-spacing", "adjust-position"])),
            $props.type === "password" && $props.passwordIcon ? (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              { key: 3 },
              [
                vue.createCommentVNode(" 开启密码时显示小眼睛 "),
                $options.isVal ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                  key: 0,
                  class: vue.normalizeClass(["content-clear-icon", { "is-textarea-icon": $props.type === "textarea" }]),
                  type: $data.showPassword ? "eye-slash-filled" : "eye-filled",
                  size: 22,
                  color: $data.focusShow ? $props.primaryColor : "#c0c4cc",
                  onClick: $options.onEyes
                }, null, 8, ["class", "type", "color", "onClick"])) : vue.createCommentVNode("v-if", true)
              ],
              64
              /* STABLE_FRAGMENT */
            )) : vue.createCommentVNode("v-if", true),
            $props.suffixIcon ? (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              { key: 4 },
              [
                $props.suffixIcon ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                  key: 0,
                  class: "content-clear-icon",
                  type: $props.suffixIcon,
                  color: "#c0c4cc",
                  onClick: _cache[11] || (_cache[11] = ($event) => $options.onClickIcon("suffix")),
                  size: "22"
                }, null, 8, ["type"])) : vue.createCommentVNode("v-if", true)
              ],
              64
              /* STABLE_FRAGMENT */
            )) : (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              { key: 5 },
              [
                $props.clearable && $options.isVal && !$props.disabled && $props.type !== "textarea" ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                  key: 0,
                  class: vue.normalizeClass(["content-clear-icon", { "is-textarea-icon": $props.type === "textarea" }]),
                  type: "clear",
                  size: $props.clearSize,
                  color: $options.msg ? "#dd524d" : $data.focusShow ? $props.primaryColor : "#c0c4cc",
                  onClick: $options.onClear
                }, null, 8, ["class", "size", "color", "onClick"])) : vue.createCommentVNode("v-if", true)
              ],
              64
              /* STABLE_FRAGMENT */
            )),
            vue.renderSlot(_ctx.$slots, "right", {}, void 0, true)
          ],
          6
          /* CLASS, STYLE */
        )
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_0$4 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$e], ["__scopeId", "data-v-09fd5285"], ["__file", "D:/code/code-life/uni-app-components/uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.vue"]]);
  const _sfc_main$e = {
    __name: "cl-more-select-picker",
    props: {
      options: {
        type: Array,
        default: () => []
      },
      modelValue: {
        type: Array,
        default: () => []
      },
      placeholder: {
        type: String,
        default: "请选择"
      },
      labelField: {
        type: String,
        default: "label"
      },
      valueField: {
        type: String,
        default: "value"
      },
      interval: {
        type: String,
        default: "、"
      },
      hideBorder: {
        type: Boolean,
        default: false
      },
      emptyText: {
        type: String,
        default: "暂无数据"
      },
      disabled: {
        type: Boolean,
        default: false
      },
      // checkbox  点击勾选框  row  点击行数据
      selectTarget: {
        type: String,
        default: "row"
      },
      isFilter: {
        type: Boolean,
        default: true
      },
      maxLength: {
        type: Number,
        default: void 0
      }
    },
    emits: ["update:modelValue", "cancel", "submit", "clear", "change"],
    setup(__props, { expose: __expose, emit: __emit }) {
      __expose();
      const props = __props;
      const isType = (type, val) => `[object ${type}]` === Object.prototype.toString.call(val);
      const emits = __emit;
      const formatList = vue.ref([]);
      const filterList = vue.ref([]);
      const keywords = vue.ref("");
      vue.watch(() => props.options, () => {
        formatList.value = props.options.map((item) => {
          if (isType("Number", item) || isType("String", item)) {
            return {
              [props.labelField]: item,
              [props.valueField]: item
            };
          } else {
            return item;
          }
        });
        filterList.value = formatList.value;
        keywords.value = "";
      }, {
        deep: true,
        immediate: true
      });
      vue.watch(() => keywords.value, (newV) => {
        filterList.value = formatList.value.filter((item) => item[props.labelField].includes(keywords.value));
        formatAppLog("log", "at uni_modules/cl-more-select-picker/components/cl-more-select-picker/cl-more-select-picker.vue:113", filterList.value);
      }, {
        deep: true,
        immediate: true
      });
      const selectList = vue.ref([]);
      const showLabel = vue.computed(() => {
        if (props.modelValue.length > 0) {
          return formatList.value.filter((item) => props.modelValue.includes(item[props.valueField])).map((item) => item[props.labelField]).join(props.interval);
        } else {
          return props.placeholder;
        }
      });
      const hasSelect = vue.computed(() => {
        var _a;
        return ((_a = props.modelValue) == null ? void 0 : _a.length) > 0;
      });
      const handleClear = () => {
        formatAppLog("log", "at uni_modules/cl-more-select-picker/components/cl-more-select-picker/cl-more-select-picker.vue:135", 123213);
        emits("update:modelValue", []);
      };
      const handleCancel = () => {
        selectList.value = [];
        popupRef.value.close();
        emits("cancel");
      };
      const handleSubmit = () => {
        emits("update:modelValue", selectList.value);
        popupRef.value.close();
        selectList.value = [];
        emits("submit", selectList.value);
      };
      const handleToggle = (item, type) => {
        if (props.selectTarget === "checkbox" && type !== "checkbox")
          return;
        const idx = selectList.value.findIndex((itm) => itm === item[props.valueField]);
        if (idx === -1 && typeof props.maxLength === "number" && selectList.value.length === props.maxLength) {
          uni.showToast({
            title: `最多只能选择${props.maxLength}条数据`,
            icon: "none",
            duration: 500
          });
          return;
        }
        if (idx > -1) {
          selectList.value.splice(idx, 1);
        } else {
          selectList.value.push(item[props.valueField]);
        }
        emits("change", item, idx === -1, selectList.value);
      };
      const popupRef = vue.ref();
      const handleOpenPicker = () => {
        keywords.value = "";
        selectList.value = JSON.parse(JSON.stringify(props.modelValue));
        popupRef.value.open();
      };
      const __returned__ = { props, isType, emits, formatList, filterList, keywords, selectList, showLabel, hasSelect, handleClear, handleCancel, handleSubmit, handleToggle, popupRef, handleOpenPicker, computed: vue.computed, ref: vue.ref, watch: vue.watch };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$d);
    const _component_uni_easyinput = resolveEasycom(vue.resolveDynamicComponent("uni-easyinput"), __easycom_0$4);
    const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_2$1);
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode("view", { class: "cl_more_select_piker" }, [
          vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass(["input_box", { hideBorder: $props.hideBorder, disabled: $props.disabled }])
            },
            [
              vue.createElementVNode(
                "view",
                {
                  class: vue.normalizeClass(["input_ele", { placeholder: !$setup.hasSelect }]),
                  onClick: $setup.handleOpenPicker
                },
                vue.toDisplayString($setup.hasSelect ? $setup.showLabel : $setup.props.placeholder),
                3
                /* TEXT, CLASS */
              ),
              $setup.hasSelect ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                key: 0,
                class: "clear_icon",
                type: "clear",
                size: 24,
                color: "#c0c4cc",
                onClick: $setup.handleClear
              })) : (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                key: 1,
                class: "clear_icon",
                type: "bottom",
                size: 20,
                color: "#c0c4cc"
              }))
            ],
            2
            /* CLASS */
          )
        ]),
        vue.createVNode(
          _component_uni_popup,
          {
            ref: "popupRef",
            type: "bottom"
          },
          {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "btn_box" }, [
                vue.createElementVNode("text", {
                  class: "cancel_btn",
                  onClick: $setup.handleCancel
                }, "取消"),
                $props.isFilter ? (vue.openBlock(), vue.createBlock(_component_uni_easyinput, {
                  key: 0,
                  style: { "margin": "0 20rpx" },
                  modelValue: $setup.keywords,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.keywords = $event),
                  placeholder: "请输入关键字查询"
                }, null, 8, ["modelValue"])) : vue.createCommentVNode("v-if", true),
                vue.createElementVNode("text", {
                  class: "submit_btn",
                  onClick: $setup.handleSubmit
                }, "确定")
              ]),
              $setup.filterList.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "scoll_box"
              }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($setup.filterList, (item, index) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      key: index,
                      class: "scoll_box_item",
                      onClick: ($event) => $setup.handleToggle(item, "row")
                    }, [
                      vue.createElementVNode(
                        "text",
                        null,
                        vue.toDisplayString(item[$props.labelField]),
                        1
                        /* TEXT */
                      ),
                      vue.createElementVNode("view", {
                        class: vue.normalizeClass(["select_icon", { active: $setup.selectList.includes(item[$props.valueField]) }]),
                        onClick: vue.withModifiers(($event) => $setup.handleToggle(item, "checkbox"), ["stop"])
                      }, [
                        $setup.selectList.includes(item[$props.valueField]) ? (vue.openBlock(), vue.createElementBlock("text", { key: 0 }, "√")) : vue.createCommentVNode("v-if", true)
                      ], 10, ["onClick"])
                    ], 8, ["onClick"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])) : (vue.openBlock(), vue.createElementBlock(
                "view",
                {
                  key: 1,
                  class: "empty_box"
                },
                vue.toDisplayString($props.emptyText),
                1
                /* TEXT */
              ))
            ]),
            _: 1
            /* STABLE */
          },
          512
          /* NEED_PATCH */
        )
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const __easycom_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$d], ["__scopeId", "data-v-3f537ef0"], ["__file", "D:/code/code-life/uni-app-components/uni_modules/cl-more-select-picker/components/cl-more-select-picker/cl-more-select-picker.vue"]]);
  const _sfc_main$d = {
    __name: "index",
    setup(__props, { expose: __expose }) {
      __expose();
      const val = vue.ref([]);
      const options = vue.ref([]);
      onLoad(() => {
        options.value = Array.from({ length: 100 }, (_, i) => {
          return {
            label: "我是label" + (i + 1),
            value: i + 1
          };
        });
      });
      const __returned__ = { val, options, ref: vue.ref, get onLoad() {
        return onLoad;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_cl_more_select_picker = resolveEasycom(vue.resolveDynamicComponent("cl-more-select-picker"), __easycom_0$3);
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createVNode(_component_cl_more_select_picker, {
        modelValue: $setup.val,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.val = $event),
        options: $setup.options
      }, null, 8, ["modelValue", "options"])
    ]);
  }
  const PagesComponentPageClMoreSelectPickerIndex = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c], ["__scopeId", "data-v-6318dc36"], ["__file", "D:/code/code-life/uni-app-components/pages/componentPage/cl-more-select-picker/index.vue"]]);
  const _sfc_main$c = {
    __name: "cl-autocomplete",
    props: /* @__PURE__ */ vue.mergeModels({
      options: {
        type: Array,
        default: () => []
      },
      placeholder: {
        type: String,
        default: "请选择"
      },
      maxHeight: {
        type: [String, Number],
        default: 300
      },
      placeholderStyle: {
        type: String,
        default: ""
      },
      disabled: {
        type: Boolean,
        default: false
      },
      maxlength: {
        type: Number,
        default: 20
      },
      trim: {
        type: String,
        default: "both"
      },
      hideBorder: {
        type: Boolean,
        default: false
      },
      cursorSpacing: {
        type: Number,
        default: 300
      },
      type: {
        type: String,
        default: "text"
      },
      // 是否启用严格模式。会区分大小写
      isStrict: {
        type: Boolean,
        default: false
      },
      // 是否高亮
      isHighlight: {
        type: Boolean,
        default: false
      },
      // 高亮颜色
      highlightColor: {
        type: String,
        default: "#007aff"
      },
      // 自定义过滤方法
      customFilter: {
        type: Function
      }
    }, {
      "modelValue": { default: "" },
      "modelModifiers": {}
    }),
    emits: /* @__PURE__ */ vue.mergeModels(["focus", "blur", "selected", "clear", "input"], ["update:modelValue"]),
    setup(__props, { expose: __expose, emit: __emit }) {
      __expose();
      const props = __props;
      const modelValue = vue.useModel(__props, "modelValue");
      const emits = __emit;
      const visible = vue.ref(false);
      const showOptions = vue.computed(() => {
        return props.options.filter((item) => {
          var _a, _b;
          if (props.customFilter) {
            return props.customFilter(item);
          }
          if (props.isStrict) {
            return item.includes(modelValue.value || "");
          } else {
            return (_b = item.toLowerCase()) == null ? void 0 : _b.includes(((_a = modelValue.value) == null ? void 0 : _a.toLowerCase()) || "");
          }
        });
      });
      const setHighlight = (item) => {
        if (typeof item !== "string") {
          return "";
        }
        if (!props.isHighlight) {
          return item;
        }
        const regxp = props.isStrict ? new RegExp(modelValue.value, "g") : new RegExp(modelValue.value, "gi");
        return item.replace(regxp, (word) => `<span style="color: ${props.highlightColor};">${word}</span>`);
      };
      const selected = (item) => {
        visible.value = false;
        modelValue.value = item;
        emits("selected", item);
      };
      const clearHandle = () => {
        modelValue.value = "";
        emits("clear");
      };
      let timeoutId = null;
      const focusHandle = () => {
        if (timeoutId)
          clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          visible.value = props.options.length > 0;
          emits("focus");
        }, 150);
      };
      const blurHandle = () => {
        emits("blur");
      };
      const inputHandle = (e) => {
        emits("input", e);
      };
      const isEmpty = (val) => {
        return val === "" || val === void 0 || val === null;
      };
      const maskClick = (e) => {
        visible.value = false;
      };
      const __returned__ = { props, modelValue, emits, visible, showOptions, setHighlight, selected, clearHandle, get timeoutId() {
        return timeoutId;
      }, set timeoutId(v) {
        timeoutId = v;
      }, focusHandle, blurHandle, inputHandle, isEmpty, maskClick, ref: vue.ref, watch: vue.watch, computed: vue.computed, nextTick: vue.nextTick, onMounted: vue.onMounted };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_easyinput = resolveEasycom(vue.resolveDynamicComponent("uni-easyinput"), __easycom_0$4);
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode("view", { class: "el_select" }, [
          vue.createVNode(_component_uni_easyinput, {
            modelValue: $setup.modelValue,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.modelValue = $event),
            type: $props.type,
            clearable: true,
            placeholder: $props.placeholder,
            placeholderStyle: $props.placeholderStyle,
            disabled: $props.disabled,
            maxlength: $props.maxlength,
            trim: $props.trim,
            inputBorder: !$props.hideBorder,
            cursorSpacing: $props.cursorSpacing,
            onFocus: $setup.focusHandle
          }, null, 8, ["modelValue", "type", "placeholder", "placeholderStyle", "disabled", "maxlength", "trim", "inputBorder", "cursorSpacing"]),
          $setup.visible && $setup.showOptions.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "scroll_list"
          }, [
            vue.createElementVNode("view", { class: "triangle_icon" }),
            vue.createElementVNode(
              "scroll-view",
              {
                "scroll-y": "",
                style: vue.normalizeStyle({ maxHeight: $props.maxHeight + "px" })
              },
              [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($setup.showOptions, (item, index) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: vue.normalizeClass(["select_item", { active: item === $setup.modelValue }]),
                      key: index,
                      onClick: ($event) => $setup.selected(item)
                    }, [
                      vue.createElementVNode("text", {
                        innerHTML: $setup.setHighlight(item)
                      }, null, 8, ["innerHTML"])
                    ], 10, ["onClick"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                )),
                $setup.showOptions.length === 0 ? vue.renderSlot(_ctx.$slots, "empty", { key: 0 }, () => [
                  vue.createElementVNode(
                    "view",
                    { class: "empty_text" },
                    vue.toDisplayString(_ctx.emptyText),
                    1
                    /* TEXT */
                  )
                ], true) : vue.createCommentVNode("v-if", true)
              ],
              4
              /* STYLE */
            )
          ])) : vue.createCommentVNode("v-if", true)
        ]),
        $setup.visible ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "mask",
          onClick: $setup.maskClick
        })) : vue.createCommentVNode("v-if", true)
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b], ["__scopeId", "data-v-2d848f96"], ["__file", "D:/code/code-life/uni-app-components/uni_modules/cl-autocomplete/components/cl-autocomplete/cl-autocomplete.vue"]]);
  const _sfc_main$b = {
    __name: "index",
    setup(__props, { expose: __expose }) {
      __expose();
      const fruitList = ["Apple", "Banana", "Orange", "Mango", "Strawberry"];
      const searchText = vue.ref("");
      const __returned__ = { fruitList, searchText, ref: vue.ref };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_cl_autocomplete = resolveEasycom(vue.resolveDynamicComponent("cl-autocomplete"), __easycom_0$2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createElementVNode("text", null, "模仿uni-data-select做的提示输入框，并可以根据输入内容进行过滤"),
      vue.createVNode(_component_cl_autocomplete, {
        modelValue: $setup.searchText,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.searchText = $event),
        options: $setup.fruitList,
        placeholder: "搜索水果",
        "max-height": "400",
        "is-highlight": ""
      }, null, 8, ["modelValue"])
    ]);
  }
  const PagesComponentPageClAutocompleteIndex = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["__scopeId", "data-v-80363e37"], ["__file", "D:/code/code-life/uni-app-components/pages/componentPage/cl-autocomplete/index.vue"]]);
  const en = {
    "uni-search-bar.cancel": "cancel",
    "uni-search-bar.placeholder": "Search enter content"
  };
  const zhHans = {
    "uni-search-bar.cancel": "取消",
    "uni-search-bar.placeholder": "请输入搜索内容"
  };
  const zhHant = {
    "uni-search-bar.cancel": "取消",
    "uni-search-bar.placeholder": "請輸入搜索內容"
  };
  const messages = {
    en,
    "zh-Hans": zhHans,
    "zh-Hant": zhHant
  };
  const {
    t
  } = initVueI18n(messages);
  const _sfc_main$a = {
    name: "UniSearchBar",
    emits: ["input", "update:modelValue", "clear", "cancel", "confirm", "blur", "focus"],
    props: {
      placeholder: {
        type: String,
        default: ""
      },
      radius: {
        type: [Number, String],
        default: 5
      },
      clearButton: {
        type: String,
        default: "auto"
      },
      cancelButton: {
        type: String,
        default: "auto"
      },
      cancelText: {
        type: String,
        default: ""
      },
      bgColor: {
        type: String,
        default: "#F8F8F8"
      },
      textColor: {
        type: String,
        default: "#000000"
      },
      maxlength: {
        type: [Number, String],
        default: 100
      },
      value: {
        type: [Number, String],
        default: ""
      },
      modelValue: {
        type: [Number, String],
        default: ""
      },
      focus: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        show: false,
        showSync: false,
        searchVal: ""
      };
    },
    computed: {
      cancelTextI18n() {
        return this.cancelText || t("uni-search-bar.cancel");
      },
      placeholderText() {
        return this.placeholder || t("uni-search-bar.placeholder");
      }
    },
    watch: {
      modelValue: {
        immediate: true,
        handler(newVal) {
          this.searchVal = newVal;
          if (newVal) {
            this.show = true;
          }
        }
      },
      focus: {
        immediate: true,
        handler(newVal) {
          if (newVal) {
            if (this.readonly)
              return;
            this.show = true;
            this.$nextTick(() => {
              this.showSync = true;
            });
          }
        }
      },
      searchVal(newVal, oldVal) {
        this.$emit("input", newVal);
        this.$emit("update:modelValue", newVal);
      }
    },
    methods: {
      searchClick() {
        if (this.readonly)
          return;
        if (this.show) {
          return;
        }
        this.show = true;
        this.$nextTick(() => {
          this.showSync = true;
        });
      },
      clear() {
        this.searchVal = "";
        this.$nextTick(() => {
          this.$emit("clear", { value: "" });
        });
      },
      cancel() {
        if (this.readonly)
          return;
        this.$emit("cancel", {
          value: this.searchVal
        });
        this.searchVal = "";
        this.show = false;
        this.showSync = false;
        plus.key.hideSoftKeybord();
      },
      confirm() {
        plus.key.hideSoftKeybord();
        this.$emit("confirm", {
          value: this.searchVal
        });
      },
      blur() {
        plus.key.hideSoftKeybord();
        this.$emit("blur", {
          value: this.searchVal
        });
      },
      emitFocus(e) {
        this.$emit("focus", e.detail);
      }
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$d);
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-searchbar" }, [
      vue.createElementVNode(
        "view",
        {
          style: vue.normalizeStyle({ borderRadius: $props.radius + "px", backgroundColor: $props.bgColor }),
          class: "uni-searchbar__box",
          onClick: _cache[5] || (_cache[5] = (...args) => $options.searchClick && $options.searchClick(...args))
        },
        [
          vue.createElementVNode("view", { class: "uni-searchbar__box-icon-search" }, [
            vue.renderSlot(_ctx.$slots, "searchIcon", {}, () => [
              vue.createVNode(_component_uni_icons, {
                color: "#c0c4cc",
                size: "18",
                type: "search"
              })
            ], true)
          ]),
          $data.show || $data.searchVal ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
            key: 0,
            focus: $data.showSync,
            disabled: $props.readonly,
            placeholder: $options.placeholderText,
            maxlength: $props.maxlength,
            class: "uni-searchbar__box-search-input",
            "confirm-type": "search",
            type: "text",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.searchVal = $event),
            style: vue.normalizeStyle({ color: $props.textColor }),
            onConfirm: _cache[1] || (_cache[1] = (...args) => $options.confirm && $options.confirm(...args)),
            onBlur: _cache[2] || (_cache[2] = (...args) => $options.blur && $options.blur(...args)),
            onFocus: _cache[3] || (_cache[3] = (...args) => $options.emitFocus && $options.emitFocus(...args))
          }, null, 44, ["focus", "disabled", "placeholder", "maxlength"])), [
            [vue.vModelText, $data.searchVal]
          ]) : (vue.openBlock(), vue.createElementBlock(
            "text",
            {
              key: 1,
              class: "uni-searchbar__text-placeholder"
            },
            vue.toDisplayString($props.placeholder),
            1
            /* TEXT */
          )),
          $data.show && ($props.clearButton === "always" || $props.clearButton === "auto" && $data.searchVal !== "") && !$props.readonly ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 2,
            class: "uni-searchbar__box-icon-clear",
            onClick: _cache[4] || (_cache[4] = (...args) => $options.clear && $options.clear(...args))
          }, [
            vue.renderSlot(_ctx.$slots, "clearIcon", {}, () => [
              vue.createVNode(_component_uni_icons, {
                color: "#c0c4cc",
                size: "20",
                type: "clear"
              })
            ], true)
          ])) : vue.createCommentVNode("v-if", true)
        ],
        4
        /* STYLE */
      ),
      $props.cancelButton === "always" || $data.show && $props.cancelButton === "auto" ? (vue.openBlock(), vue.createElementBlock(
        "text",
        {
          key: 0,
          onClick: _cache[6] || (_cache[6] = (...args) => $options.cancel && $options.cancel(...args)),
          class: "uni-searchbar__cancel"
        },
        vue.toDisplayString($options.cancelTextI18n),
        1
        /* TEXT */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__scopeId", "data-v-f07ef577"], ["__file", "D:/code/code-life/uni-app-components/uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.vue"]]);
  const _sfc_main$9 = {
    __name: "cl-auto-page-list",
    props: {
      // 距底部/右边多远时（单位px），触发 scrolltolower 事件
      lowerThreshold: {
        type: [Number, String],
        default: 50
      },
      pageSize: {
        type: Number,
        default: 20
      },
      // 查询参数，默认会根据传入的属性进行直接过滤。
      params: {
        type: Object,
        default: () => ({})
      },
      fillterFun: Function,
      list: {
        type: Array,
        default: () => []
      },
      // 延迟数
      delay: {
        type: Number,
        default: 500
      },
      emptyIconColor: {
        type: String,
        default: "#4c98f0"
      },
      emptyText: {
        type: String,
        default: "暂无数据"
      }
    },
    setup(__props, { expose: __expose }) {
      const props = __props;
      const filterList = vue.ref([]);
      vue.watch(
        () => props.list,
        (newV) => {
          filterList.value = newV;
        },
        {
          immediate: true,
          deep: true
        }
      );
      const emptyIconSrc = vue.computed(() => {
        let svgStr = `<svg t="1745376550584" class="icon" viewBox="0 0 1575 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
			p-id="2958" id="mx_n_1745376550586" width="100%" height="100%">
			<path
				d="M157.479601 699.632818h21.200994a10.474488 10.474488 0 0 1 10.285475 10.442986 10.316977 10.316977 0 0 1-10.285475 10.442986H157.479601v21.106488a10.474488 10.474488 0 0 1-10.505991 10.22247 10.364231 10.364231 0 0 1-10.490239-10.238221v-21.090737H115.266625a10.474488 10.474488 0 0 1-10.285475-10.442986c0-5.764906 4.520569-10.442986 10.285475-10.442986h21.216746V678.557832a10.474488 10.474488 0 0 1 10.490239-10.238222c5.796409 0 10.505991 4.489066 10.505991 10.238222v21.106488z m1385.751182-83.528138v-21.106488a10.238222 10.238222 0 0 0-10.490239-10.238222 10.474488 10.474488 0 0 0-10.505991 10.238222v21.106488h-21.200994a10.364231 10.364231 0 0 0-10.285475 10.442986c0 5.591644 4.615075 10.427235 10.285475 10.427235h21.200994v21.106488c0 5.733404 4.709582 10.238222 10.505991 10.238221 5.717653 0 10.395733-4.567822 10.490239-10.238221v-21.106488h21.216746a10.316977 10.316977 0 0 0 10.285475-10.427235 10.474488 10.474488 0 0 0-10.285475-10.442986h-21.216746zM780.483267 960.69172H251.891756c-5.560142 0-10.899768-2.205155-14.821795-6.111431a20.744212 20.744212 0 0 1-6.111431-14.774541c0-11.529813 9.513671-20.885972 20.948977-20.885973h95.199711a82.661827 82.661827 0 0 1-11.167537-41.661686V271.391631c0-22.146061 8.883626-43.394309 24.650487-59.050913a84.158182 84.158182 0 0 1 59.428939-24.382719h62.894184v-20.980479c0.015751-22.161812 8.883626-43.41006 24.650488-59.066663a84.158182 84.158182 0 0 1 59.428939-24.366968h503.736258a84.110929 84.110929 0 0 1 59.444691 24.366968 83.213116 83.213116 0 0 1 24.634736 59.066663v605.866458a82.693329 82.693329 0 0 1-11.183288 41.661687h116.132936a20.901723 20.901723 0 1 1 0.031502 41.771945H1007.834793v20.980479a82.693329 82.693329 0 0 1-11.183288 41.661686h11.246292a20.870221 20.870221 0 1 1 0 41.771945h-110.462536a41.488425 41.488425 0 0 1-6.457955 50.860335 42.008211 42.008211 0 0 1-59.381686 0l-51.112353-50.860335z m76.75516-41.771945h66.784708a41.740442 41.740442 0 0 0 41.819198-41.866451V270.415062a40.543358 40.543358 0 0 0-40.527607-40.685118h-506.87073a40.606362 40.606362 0 0 0-40.511855 40.685118v606.638262c0 23.12263 18.901332 41.866451 41.803446 41.866451h318.723718l-10.789511-10.742257a41.535678 41.535678 0 0 1-10.915519-40.370096l-19.814897-19.736141c-61.760104 45.725473-148.53297 36.306309-198.936523-21.579021a145.666268 145.666268 0 0 1 6.96199-198.905021c54.483091-54.388584 141.980508-57.586059 200.338372-7.324266a145.650517 145.650517 0 0 1 21.327004 198.274976l19.846399 19.736142a41.99246 41.99246 0 0 1 40.57486 10.836763l70.186947 69.808921z m150.580615-104.429861h63.193454a41.897953 41.897953 0 0 0 41.803447-41.756193V167.072027a41.740442 41.740442 0 0 0-41.803447-41.756193H566.693447a41.897953 41.897953 0 0 0-41.787696 41.756193v20.885972h398.849615a84.110929 84.110929 0 0 1 59.44469 24.382719 83.213116 83.213116 0 0 1 24.634737 59.066664v543.098283zM267.721622 47.001313h31.281705c8.820622 0 15.955875 6.961991 15.955875 15.672355 0 8.64736-7.135253 15.656604-15.955875 15.656604h-31.281705v31.124194c0 8.773368-6.993493 15.877119-15.75111 15.877119a15.908621 15.908621 0 0 1-11.183289-4.693831 15.719608 15.719608 0 0 1-4.567822-11.183288V78.31452H204.921945a15.861368 15.861368 0 0 1-11.246293-4.536319 15.688106 15.688106 0 0 1-4.709582-11.120284c0-8.663111 7.135253-15.672355 15.955875-15.672355h31.281705V15.877119c0-8.773368 6.993493-15.877119 15.75111-15.877119 8.694613 0 15.75111 7.088 15.751111 15.877119v31.108443zM20.99623 939.805748c0-11.529813 9.513671-20.885972 20.933226-20.885973h126.103389a20.870221 20.870221 0 1 1 0 41.771945H41.929456c-5.560142 0-10.899768-2.205155-14.837546-6.111431a20.744212 20.744212 0 0 1-6.09568-14.774541z m662.145175-134.987016a104.051835 104.051835 0 0 0 27.170665-100.885861 104.713381 104.713381 0 0 0-74.234982-73.841205 105.374928 105.374928 0 0 0-101.437151 27.028905 104.051835 104.051835 0 0 0 0 147.698161 105.390679 105.390679 0 0 0 148.501468 0zM461.917061 313.273833a20.948977 20.948977 0 0 1 20.980479-20.885972h230.974281a20.948977 20.948977 0 0 1 20.99623 20.885972 20.948977 20.948977 0 0 1-20.99623 20.885972H482.929042a20.99623 20.99623 0 0 1-14.853297-6.09568 20.759963 20.759963 0 0 1-6.142933-14.806043z m0 104.429861c0-11.545564 9.340408-20.901723 20.85447-20.901723h336.238952a20.870221 20.870221 0 1 1 0 41.771944H482.771531c-5.560142 0-10.868266-2.205155-14.790293-6.127182a20.696959 20.696959 0 0 1-6.064177-14.75879z m0 104.41411c0-11.529813 9.371911-20.885972 20.948977-20.885972h147.068117a20.870221 20.870221 0 1 1 0 41.771945h-147.052366c-5.575893 0-10.915519-2.189404-14.853297-6.111431a20.744212 20.744212 0 0 1-6.111431-14.774542zM63.004441 396.801971a63.051695 63.051695 0 0 1-54.546095-31.313207 62.374397 62.374397 0 0 1 0-62.657917 63.051695 63.051695 0 0 1 54.546095-31.34471c34.794203 0 63.004441 28.068479 63.004441 62.673668s-28.210239 62.642166-63.004441 62.642166z m0-31.313207c11.246293 0 21.657777-5.985422 27.280923-15.672355a31.187198 31.187198 0 0 0 0-31.328959 31.533723 31.533723 0 0 0-27.280923-15.656603c-17.389226 0-31.502221 14.018488-31.50222 31.328958 0 17.294719 14.112995 31.313207 31.50222 31.328959z m1301.782014-93.986876c-34.794203 0-63.004441-28.052727-63.004441-62.657916s28.210239-62.657917 63.004441-62.657917c34.778452 0 62.98869 28.052727 62.98869 62.657917s-28.194487 62.657917-63.004441 62.657916z m0-31.328958c11.246293 0 21.642026-5.969671 27.280923-15.656604a31.187198 31.187198 0 0 0 0-31.344709 31.533723 31.533723 0 0 0-27.280923-15.656604c-17.389226 0-31.502221 14.018488-31.502221 31.34471 0 17.278968 14.112995 31.313207 31.502221 31.313207z"
				fill="${props.emptyIconColor}" p-id="2959"></path>
		</svg>`;
        return `data:image/svg+xml,${encodeURIComponent(svgStr)}`;
      });
      const showList = vue.ref([]);
      const isEnd = vue.ref(false);
      const refreshLoading = vue.ref(false);
      const screenTop = vue.ref(0);
      const screenOldTop = vue.ref(0);
      const loadMoreStatus = vue.ref("loading");
      const curPage = vue.ref(1);
      const load = async (type) => {
        type !== "refresh" && (loadMoreStatus.value = "loading");
        await delay(props.delay);
        if (filterList.value.length === 0) {
          loadMoreStatus.value = "noData";
        } else {
          let startIdx = (curPage.value - 1) * props.pageSize;
          let endIdx = startIdx + props.pageSize;
          let newList = filterList.value.slice(startIdx, endIdx);
          formatAppLog("log", "at uni_modules/cl-auto-page-list/components/cl-auto-page-list/cl-auto-page-list.vue:114", filterList, startIdx, endIdx);
          showList.value = showList.value.concat(newList);
          if (showList.value.length === filterList.value.length) {
            loadMoreStatus.value = "noMore";
            isEnd.value = true;
          } else {
            loadMoreStatus.value = "more";
          }
        }
        refreshLoading.value = false;
      };
      const search = () => {
        filterList.value = props.list.filter(
          (item) => props.fillterFun ? props.fillterFun(item) : handleFilter(item)
        );
        formatAppLog("log", "at uni_modules/cl-auto-page-list/components/cl-auto-page-list/cl-auto-page-list.vue:131", filterList.value, "filterList.value");
        curPage.value = 1;
        isEnd.value = false;
        showList.value = [];
        load();
      };
      const refresherrefresh = () => {
        refreshLoading.value = true;
        isEnd.value = false;
        curPage.value = 1;
        showList.value = [];
        loadMoreStatus.value = "none";
        load("refresh");
      };
      const scrollView = (e) => {
        screenOldTop.value = e.detail.scrollTop;
      };
      const backTop = () => {
        screenTop.value = screenOldTop.value;
        vue.nextTick(() => {
          screenTop.value = 0;
        });
      };
      const bootmScroll = () => {
        formatAppLog("log", "at uni_modules/cl-auto-page-list/components/cl-auto-page-list/cl-auto-page-list.vue:163", 123);
        if (!isEnd.value) {
          curPage.value++;
          loadMoreStatus.value = "loading";
          load();
        }
      };
      const reset = () => {
        isEnd.value = false;
        curPage.value = 1;
        backTop();
        filterList.value = props.list;
        load();
      };
      vue.onMounted(() => {
        load();
      });
      __expose({
        reset,
        search
      });
      const delay = (ms = 500) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, ms);
        });
      };
      const handleFilter = (item) => {
        for (let key in props.params) {
          let val = props.params[key];
          if (typeof val !== "string") {
            val = val.toString();
          }
          let listVal = item[key];
          if (typeof listVal !== "string") {
            listVal = listVal.toString();
          }
          if (!listVal.includes(val)) {
            return false;
          }
        }
        return true;
      };
      const __returned__ = { props, filterList, emptyIconSrc, showList, isEnd, refreshLoading, screenTop, screenOldTop, loadMoreStatus, curPage, load, search, refresherrefresh, scrollView, backTop, bootmScroll, reset, delay, handleFilter, ref: vue.ref, nextTick: vue.nextTick, computed: vue.computed, isRef: vue.isRef, onMounted: vue.onMounted, watch: vue.watch };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_load_more = resolveEasycom(vue.resolveDynamicComponent("uni-load-more"), __easycom_0$9);
    return vue.openBlock(), vue.createElementBlock("scroll-view", {
      style: { "height": "100%" },
      "scroll-y": true,
      "scroll-top": $setup.screenTop,
      "refresher-triggered": $setup.refreshLoading,
      "refresher-enabled": true,
      "lower-threshold": $props.lowerThreshold,
      onScroll: $setup.scrollView,
      onScrolltolower: $setup.bootmScroll,
      onRefresherrefresh: $setup.refresherrefresh
    }, [
      vue.renderSlot(_ctx.$slots, "list", { list: $setup.showList }, void 0, true),
      ["loading", "noMore", "more"].includes($setup.loadMoreStatus) ? (vue.openBlock(), vue.createBlock(_component_uni_load_more, {
        key: 0,
        status: $setup.loadMoreStatus
      }, null, 8, ["status"])) : vue.createCommentVNode("v-if", true),
      $setup.loadMoreStatus === "noData" ? vue.renderSlot(_ctx.$slots, "empty", { key: 1 }, () => [
        vue.createElementVNode("view", { class: "empty_box" }, [
          vue.createElementVNode("image", {
            class: "empty_box_image",
            src: $setup.emptyIconSrc,
            mode: "aspectFit"
          }, null, 8, ["src"]),
          vue.createElementVNode(
            "text",
            { class: "empty_box_text" },
            vue.toDisplayString($props.emptyText),
            1
            /* TEXT */
          )
        ])
      ], true) : vue.createCommentVNode("v-if", true)
    ], 40, ["scroll-top", "refresher-triggered", "lower-threshold"]);
  }
  const __easycom_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__scopeId", "data-v-40e80ac4"], ["__file", "D:/code/code-life/uni-app-components/uni_modules/cl-auto-page-list/components/cl-auto-page-list/cl-auto-page-list.vue"]]);
  const _sfc_main$8 = {
    __name: "index",
    setup(__props, { expose: __expose }) {
      __expose();
      const params = vue.reactive({
        label: ""
      });
      const list = Array.from(
        {
          length: 60
        },
        (_, index) => {
          return {
            label: `我是展示的值${index}`,
            value: `value${index}`
          };
        }
      );
      const clAutoPageListRef = vue.ref();
      const handleSearch = () => {
        clAutoPageListRef.value.search();
      };
      const __returned__ = { params, list, clAutoPageListRef, handleSearch, reactive: vue.reactive, ref: vue.ref };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_search_bar = resolveEasycom(vue.resolveDynamicComponent("uni-search-bar"), __easycom_0$1);
    const _component_cl_auto_page_list = resolveEasycom(vue.resolveDynamicComponent("cl-auto-page-list"), __easycom_1$2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "cl_flex_page" }, [
      vue.createVNode(_component_uni_search_bar, {
        modelValue: $setup.params.label,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.params.label = $event),
        style: { "background-color": "#fff" },
        placeholder: "请输入关键字查询",
        onConfirm: $setup.handleSearch
      }, null, 8, ["modelValue"]),
      vue.createVNode(_component_cl_auto_page_list, {
        class: "list_box",
        list: $setup.list,
        ref: "clAutoPageListRef",
        params: $setup.params
      }, {
        list: vue.withCtx(({ list }) => [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(list, (item, index) => {
              return vue.openBlock(), vue.createElementBlock(
                "view",
                {
                  class: "list_box_item",
                  key: index
                },
                vue.toDisplayString(item.label),
                1
                /* TEXT */
              );
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        _: 1
        /* STABLE */
      }, 8, ["list", "params"])
    ]);
  }
  const PagesComponentPageClAutoPageListIndex = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__scopeId", "data-v-9bdff03b"], ["__file", "D:/code/code-life/uni-app-components/pages/componentPage/cl-auto-page-list/index.vue"]]);
  const _sfc_main$7 = {
    __name: "cl-ftabs",
    props: /* @__PURE__ */ vue.mergeModels({
      option: {
        type: Array,
        default: () => []
      },
      labelField: {
        type: String,
        default: "label"
      },
      valueField: {
        type: String,
        default: "value"
      },
      // 组件风格 button、text
      styleType: {
        type: String,
        default: "button"
      }
    }, {
      "modelValue": {},
      "modelModifiers": {}
    }),
    emits: /* @__PURE__ */ vue.mergeModels(["change"], ["update:modelValue"]),
    setup(__props, { expose: __expose, emit: __emit }) {
      __expose();
      const props = __props;
      const formatOption = vue.computed(() => {
        return props.option.map((item) => {
          if (typeof item !== "object") {
            return {
              [props.labelField]: item,
              [props.valueField]: item
            };
          } else {
            return item;
          }
        });
      });
      const emits = __emit;
      const modelVal = vue.useModel(__props, "modelValue");
      const handleToggle = (item, index) => {
        let newVal = item[props.valueField];
        if (newVal === modelVal.value) {
          return;
        }
        modelVal.value = newVal;
        emits("change", newVal, item, index);
      };
      const __returned__ = { props, formatOption, emits, modelVal, handleToggle, computed: vue.computed };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["tabs", $props.styleType])
      },
      [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($setup.formatOption, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: index,
              class: vue.normalizeClass(["tabs_item", $setup.modelVal === item[$props.valueField] && "tabs_item_active"]),
              onClick: ($event) => $setup.handleToggle(item, index)
            }, [
              vue.renderSlot(_ctx.$slots, "label", {
                label: item[$props.labelField],
                tabItem: item,
                isActive: $setup.modelVal === item[$props.valueField]
              }, () => [
                vue.createElementVNode(
                  "view",
                  { class: "tabs_item_text" },
                  vue.toDisplayString(item[$props.labelField]),
                  1
                  /* TEXT */
                )
              ], true)
            ], 10, ["onClick"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ],
      2
      /* CLASS */
    );
  }
  const __easycom_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__scopeId", "data-v-f3f60d72"], ["__file", "D:/code/code-life/uni-app-components/uni_modules/cl-ftabs/components/cl-ftabs/cl-ftabs.vue"]]);
  const _sfc_main$6 = {
    __name: "index",
    setup(__props, { expose: __expose }) {
      __expose();
      const option = [
        {
          value: "1",
          label: "数据1"
        },
        {
          value: "2",
          label: "数据2"
        },
        "数据3"
      ];
      const value1 = vue.ref("1");
      const value2 = vue.ref("2");
      const handleChange = (val, item, index) => {
        formatAppLog("log", "at pages/componentPage/cl-tabs/index.vue:35", val, item, index);
      };
      const __returned__ = { option, value1, value2, handleChange, ref: vue.ref };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_section = resolveEasycom(vue.resolveDynamicComponent("uni-section"), __easycom_0$7);
    const _component_cl_ftabs = resolveEasycom(vue.resolveDynamicComponent("cl-ftabs"), __easycom_1$1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createVNode(_component_uni_section, null, {
        default: vue.withCtx(() => [
          vue.createTextVNode("按钮样式")
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createVNode(_component_cl_ftabs, {
        modelValue: $setup.value1,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.value1 = $event),
        option: $setup.option
      }, null, 8, ["modelValue"]),
      vue.createVNode(_component_uni_section, null, {
        default: vue.withCtx(() => [
          vue.createTextVNode("文本样式")
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createVNode(_component_cl_ftabs, {
        modelValue: $setup.value2,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.value2 = $event),
        option: $setup.option,
        styleType: "text",
        onChange: $setup.handleChange
      }, null, 8, ["modelValue"]),
      vue.createVNode(_component_uni_section, null, {
        default: vue.withCtx(() => [
          vue.createTextVNode("插槽")
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createVNode(_component_cl_ftabs, {
        modelValue: $setup.value2,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.value2 = $event),
        option: $setup.option,
        styleType: "text",
        onChange: $setup.handleChange
      }, {
        label: vue.withCtx(({ label, tabItem, isActive }) => [
          !isActive ? (vue.openBlock(), vue.createElementBlock(
            "text",
            {
              key: 0,
              style: { "color": "blueviolet" }
            },
            vue.toDisplayString(label) + "~" + vue.toDisplayString(tabItem.value),
            1
            /* TEXT */
          )) : (vue.openBlock(), vue.createElementBlock(
            "text",
            {
              key: 1,
              style: { "color": "red" }
            },
            vue.toDisplayString(label) + "~" + vue.toDisplayString(tabItem.value),
            1
            /* TEXT */
          ))
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"])
    ]);
  }
  const PagesComponentPageClTabsIndex = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__scopeId", "data-v-c34bfe67"], ["__file", "D:/code/code-life/uni-app-components/pages/componentPage/cl-tabs/index.vue"]]);
  const __default__ = {
    name: "ClTableRow"
  };
  const _sfc_main$5 = /* @__PURE__ */ Object.assign(__default__, {
    props: /* @__PURE__ */ vue.mergeModels({
      columns: {
        type: Array,
        default: () => []
      },
      curRow: {
        type: Object,
        default: () => ({})
      },
      border: {
        type: Boolean,
        default: true
      },
      // 是否启用树
      isTableTree: {
        type: Boolean,
        default: false
      },
      childrenField: {
        type: String,
        default: "children"
      },
      // 子级层级
      level: Number,
      offsetWidth: {
        type: Number,
        default: 20
      },
      defaultExpandAll: {
        type: Boolean,
        default: false
      },
      rowKey: {
        type: String,
        default: "id"
      },
      overHidden: {
        type: Boolean,
        default: false
      }
    }, {
      "expandKeys": {
        type: Array,
        default: () => []
      },
      "expandKeysModifiers": {}
    }),
    emits: ["update:expandKeys"],
    setup(__props, { expose: __expose }) {
      __expose();
      const props = __props;
      const slotList = vue.useSlots();
      const expandKeys = vue.useModel(__props, "expandKeys");
      const curRowKey = vue.computed(() => {
        return props.curRow[props.rowKey];
      });
      const isExpand = vue.ref(false);
      vue.watch(() => expandKeys.value, (newV1) => {
        if (newV1.includes(curRowKey.value)) {
          isExpand.value = true;
        }
      }, {
        deep: true,
        immediate: true
      });
      const isShowExpandIcon = vue.computed(() => {
        if (props.isTableTree && Array.isArray(props.curRow[props.childrenField]) && props.curRow[props.childrenField].length > 0) {
          return true;
        }
      });
      const isShowChildren = vue.computed(() => {
        return props.isTableTree && isExpand.value;
      });
      const handleToggleExpand = () => {
        if (isExpand.value === false) {
          expandKeys.value.push(curRowKey.value);
        } else {
          expandKeys.value = expandKeys.value.filter((item) => item !== curRowKey.value);
        }
        isExpand.value = !isExpand.value;
      };
      const __returned__ = { props, slotList, expandKeys, curRowKey, isExpand, isShowExpandIcon, isShowChildren, handleToggleExpand, computed: vue.computed, ref: vue.ref, watch: vue.watch, useSlots: vue.useSlots };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  });
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$d);
    const _component_ClTableRow = vue.resolveComponent("ClTableRow", true);
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode("view", { class: "row" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($props.columns, (item, index) => {
              return vue.openBlock(), vue.createElementBlock(
                "view",
                {
                  key: item.prop,
                  class: vue.normalizeClass([$props.border && "border", "row_cell", $props.overHidden && "exceed_omit_1"]),
                  style: vue.normalizeStyle({ ...item.style })
                },
                [
                  index === 0 ? vue.renderSlot(_ctx.$slots, item.prop, {
                    key: 0,
                    row: $props.curRow,
                    column: item,
                    text: $props.curRow[item.prop]
                  }, () => [
                    vue.createElementVNode(
                      "view",
                      {
                        class: vue.normalizeClass([$props.overHidden && "exceed_omit_1"]),
                        style: vue.normalizeStyle({ paddingLeft: ($setup.isShowExpandIcon ? 0 : $props.level * $setup.props.offsetWidth) + "rpx" })
                      },
                      [
                        $setup.isShowExpandIcon ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                          key: 0,
                          type: $setup.isExpand ? "bottom" : "right",
                          class: "expand_icon",
                          onClick: $setup.handleToggleExpand,
                          style: vue.normalizeStyle({ paddingLeft: $props.level * $setup.props.offsetWidth + "rpx" })
                        }, null, 8, ["type", "style"])) : vue.createCommentVNode("v-if", true),
                        vue.createElementVNode(
                          "text",
                          null,
                          vue.toDisplayString($props.curRow[item.prop]),
                          1
                          /* TEXT */
                        )
                      ],
                      6
                      /* CLASS, STYLE */
                    )
                  ], true) : vue.renderSlot(_ctx.$slots, item.prop, {
                    key: 1,
                    row: $props.curRow,
                    column: item,
                    text: $props.curRow[item.prop]
                  }, () => [
                    vue.createElementVNode(
                      "text",
                      {
                        class: vue.normalizeClass([$props.overHidden && "exceed_omit_1"])
                      },
                      vue.toDisplayString($props.curRow[item.prop]),
                      3
                      /* TEXT, CLASS */
                    )
                  ], true)
                ],
                6
                /* CLASS, STYLE */
              );
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        vue.createVNode(vue.Transition, { name: "slide" }, {
          default: vue.withCtx(() => [
            $setup.isShowChildren ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($props.curRow[$props.childrenField], (item) => {
                  return vue.openBlock(), vue.createBlock(_component_ClTableRow, {
                    key: item[$setup.props.rowKey],
                    columns: $props.columns,
                    curRow: item,
                    border: $props.border,
                    defaultExpandAll: $props.defaultExpandAll,
                    isTableTree: $props.isTableTree,
                    childrenField: $props.childrenField,
                    level: $props.level + 1,
                    expandKeys: $setup.expandKeys,
                    "onUpdate:expandKeys": _cache[0] || (_cache[0] = ($event) => $setup.expandKeys = $event),
                    offsetWidth: $props.offsetWidth,
                    overHidden: $props.overHidden
                  }, vue.createSlots({
                    _: 2
                    /* DYNAMIC */
                  }, [
                    vue.renderList($setup.slotList, (itm, slotName) => {
                      return {
                        name: slotName,
                        fn: vue.withCtx((data) => [
                          vue.renderSlot(_ctx.$slots, slotName, vue.normalizeProps(vue.guardReactiveProps(data)), void 0, true)
                        ])
                      };
                    })
                  ]), 1032, ["columns", "curRow", "border", "defaultExpandAll", "isTableTree", "childrenField", "level", "expandKeys", "offsetWidth", "overHidden"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])) : vue.createCommentVNode("v-if", true)
          ]),
          _: 3
          /* FORWARDED */
        })
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const ClTableRow = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__scopeId", "data-v-8ce7a118"], ["__file", "D:/code/code-life/uni-app-components/uni_modules/cl-table/components/cl-table/cl-table-row.vue"]]);
  const _sfc_main$4 = {
    __name: "cl-table",
    props: /* @__PURE__ */ vue.mergeModels({
      // 表格数据
      data: {
        type: Array,
        default: () => []
      },
      // 表格列
      columns: {
        type: Array,
        default: () => []
      },
      // 表格header的样式（可用于修改背景色以及文字样式）
      headerStyle: {
        type: Object,
        default: () => ({})
      },
      // 行key
      rowKey: {
        type: String,
        default: "id"
      },
      // 边框
      border: {
        type: Boolean,
        default: true
      },
      // 是否启用树
      isTableTree: {
        type: Boolean,
        default: false
      },
      // 树表的子字段
      childrenField: {
        type: String,
        default: "children"
      },
      // 树结构向右偏移量
      offsetWidth: {
        type: Number,
        default: 20
      },
      // 是否默认展开所有
      defaultExpandAll: {
        type: Boolean,
        default: false
      },
      // 超出行隐藏
      overHidden: {
        type: Boolean,
        default: false
      }
    }, {
      "expandKeys": {
        type: Array,
        default: () => []
      },
      "expandKeysModifiers": {}
    }),
    emits: ["update:expandKeys"],
    setup(__props, { expose: __expose }) {
      __expose();
      const slotList = vue.useSlots();
      const props = __props;
      const expandKeys = vue.useModel(__props, "expandKeys");
      const getChildrenKeys = (tree, childrenKey = "children") => {
        const result = [];
        function traverse(nodeList) {
          if (!Array.isArray(nodeList) || nodeList.length === 0) {
            return;
          }
          for (const node of nodeList) {
            const children = node[childrenKey];
            if (Array.isArray(children) && children.length > 0) {
              if (node.id !== void 0) {
                result.push(node.id);
              }
              traverse(children);
            }
          }
        }
        traverse(tree);
        return result;
      };
      vue.watch(() => props.defaultExpandAll, (newV) => {
        if (newV) {
          expandKeys.value = getChildrenKeys(props.data);
        }
      }, {
        immediate: true,
        deep: true
      });
      const __returned__ = { slotList, props, expandKeys, getChildrenKeys, useSlots: vue.useSlots, watch: vue.watch, ClTableRow };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["table", $props.border && "border"])
      },
      [
        vue.createElementVNode(
          "view",
          {
            class: "table_header",
            style: vue.normalizeStyle($props.headerStyle)
          },
          [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($props.columns, (item) => {
                return vue.openBlock(), vue.createElementBlock(
                  "view",
                  {
                    key: item.prop,
                    class: "table_header_cell",
                    style: vue.normalizeStyle(item.style || {})
                  },
                  [
                    vue.renderSlot(_ctx.$slots, item.prop + "-header", { column: item }, () => [
                      vue.createElementVNode(
                        "text",
                        {
                          class: vue.normalizeClass([$props.overHidden && "exceed_omit_1"])
                        },
                        vue.toDisplayString(item.label),
                        3
                        /* TEXT, CLASS */
                      )
                    ], true)
                  ],
                  4
                  /* STYLE */
                );
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ],
          4
          /* STYLE */
        ),
        vue.createElementVNode("view", { class: "table_body" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($props.data, (item) => {
              return vue.openBlock(), vue.createBlock($setup["ClTableRow"], {
                expandKeys: $setup.expandKeys,
                "onUpdate:expandKeys": _cache[0] || (_cache[0] = ($event) => $setup.expandKeys = $event),
                key: item[$props.rowKey],
                columns: $props.columns,
                curRow: item,
                border: $props.border,
                isTableTree: $props.isTableTree,
                childrenField: $props.childrenField,
                level: 0,
                offsetWidth: $props.offsetWidth,
                defaultExpandAll: $props.defaultExpandAll,
                overHidden: $props.overHidden,
                rowKey: $props.rowKey
              }, vue.createSlots({
                _: 2
                /* DYNAMIC */
              }, [
                vue.renderList($setup.slotList, (itm, slotName) => {
                  return {
                    name: slotName,
                    fn: vue.withCtx((data) => [
                      vue.renderSlot(_ctx.$slots, slotName, vue.normalizeProps(vue.guardReactiveProps(data)), void 0, true)
                    ])
                  };
                })
              ]), 1032, ["expandKeys", "columns", "curRow", "border", "isTableTree", "childrenField", "offsetWidth", "defaultExpandAll", "overHidden", "rowKey"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ],
      2
      /* CLASS */
    );
  }
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__scopeId", "data-v-330af27e"], ["__file", "D:/code/code-life/uni-app-components/uni_modules/cl-table/components/cl-table/cl-table.vue"]]);
  const _sfc_main$3 = {
    __name: "index",
    setup(__props, { expose: __expose }) {
      __expose();
      const expandKeys1 = vue.ref([]);
      const expandKeys2 = vue.ref([]);
      const treeData = [
        {
          id: "1",
          name: "电子产品",
          children: [
            {
              id: 2,
              name: "手机",
              children: [
                {
                  id: 3,
                  name: "智能手机",
                  children: []
                },
                {
                  id: 4,
                  name: "功能手机",
                  children: []
                }
              ]
            },
            {
              id: 5,
              name: "电脑",
              children: [
                {
                  id: 6,
                  name: "笔记本",
                  children: []
                },
                {
                  id: 7,
                  name: "台式机",
                  children: []
                }
              ]
            }
          ]
        },
        {
          id: 8,
          name: "家居用品",
          children: [
            {
              id: 9,
              name: "家具",
              children: [
                {
                  id: 10,
                  name: "沙发",
                  children: []
                },
                {
                  id: 11,
                  name: "桌椅",
                  children: []
                }
              ]
            },
            {
              id: 12,
              name: "家电",
              children: [
                {
                  id: 13,
                  name: "冰箱",
                  children: []
                },
                {
                  id: 14,
                  name: "电视",
                  children: []
                }
              ]
            }
          ]
        },
        {
          id: 15,
          name: "图书音像",
          children: []
        }
      ];
      const columns = [
        {
          prop: "id",
          label: "id",
          style: {
            flex: "0 0 140rpx",
            textAlign: "left"
          }
        },
        {
          prop: "name",
          label: "名称"
        }
      ];
      const __returned__ = { expandKeys1, expandKeys2, treeData, columns, ref: vue.ref };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_section = resolveEasycom(vue.resolveDynamicComponent("uni-section"), __easycom_0$7);
    const _component_cl_table = resolveEasycom(vue.resolveDynamicComponent("cl-table"), __easycom_1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createVNode(_component_uni_section, null, {
        default: vue.withCtx(() => [
          vue.createTextVNode("普通用法")
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createVNode(_component_cl_table, {
        style: { "max-height": "300px" },
        columns: $setup.columns,
        data: $setup.treeData,
        overHidden: ""
      }),
      vue.createVNode(_component_uni_section, null, {
        default: vue.withCtx(() => [
          vue.createElementVNode("text", null, "表格树")
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createVNode(_component_cl_table, {
        style: { "max-height": "300px" },
        expandKeys: $setup.expandKeys1,
        "onUpdate:expandKeys": _cache[0] || (_cache[0] = ($event) => $setup.expandKeys1 = $event),
        columns: $setup.columns,
        data: $setup.treeData,
        isTableTree: "",
        overHidden: ""
      }, null, 8, ["expandKeys"]),
      vue.createElementVNode(
        "view",
        null,
        "展开数据" + vue.toDisplayString($setup.expandKeys1),
        1
        /* TEXT */
      ),
      vue.createVNode(_component_uni_section, null, {
        default: vue.withCtx(() => [
          vue.createElementVNode("text", null, "表格树（默认展开数据）")
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createVNode(_component_cl_table, {
        style: { "max-height": "300px" },
        expandKeys: $setup.expandKeys2,
        "onUpdate:expandKeys": _cache[1] || (_cache[1] = ($event) => $setup.expandKeys2 = $event),
        columns: $setup.columns,
        data: $setup.treeData,
        isTableTree: "",
        overHidden: "",
        defaultExpandAll: ""
      }, null, 8, ["expandKeys"]),
      vue.createElementVNode(
        "view",
        null,
        "展开数据" + vue.toDisplayString($setup.expandKeys2),
        1
        /* TEXT */
      ),
      vue.createVNode(_component_uni_section, null, {
        default: vue.withCtx(() => [
          vue.createElementVNode("text", null, "表格树（表头和内容插槽）")
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createVNode(_component_cl_table, {
        style: { "max-height": "300px" },
        columns: $setup.columns,
        data: $setup.treeData,
        isTableTree: "",
        overHidden: "",
        defaultExpandAll: ""
      }, {
        "id-header": vue.withCtx(({ column }) => [
          vue.createElementVNode(
            "text",
            { style: { "color": "red" } },
            "我是" + vue.toDisplayString(column.label),
            1
            /* TEXT */
          )
        ]),
        name: vue.withCtx(({ text }) => [
          vue.createElementVNode(
            "text",
            { style: { "color": "green" } },
            "我使用了插槽：" + vue.toDisplayString(text),
            1
            /* TEXT */
          )
        ]),
        _: 1
        /* STABLE */
      })
    ]);
  }
  const PagesComponentPageClTableIndex = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__scopeId", "data-v-314957e2"], ["__file", "D:/code/code-life/uni-app-components/pages/componentPage/cl-table/index.vue"]]);
  const block0 = (Comp) => {
    (Comp.$renderjs || (Comp.$renderjs = [])).push("video");
    (Comp.$renderjsModules || (Comp.$renderjsModules = {}))["video"] = "6c5b202d";
  };
  const _sfc_main$2 = {
    props: {
      // 视频地址
      src: {
        type: String,
        default: ""
      },
      // 视频封面
      poster: {
        type: String,
        default: ""
      },
      // 只在App端有效
      // 封面格式，base64 或 path
      // b64就是将canvas转为base64字符串，注意对一些高清大图可能不是太合适
      // path就是将canvas转为图片路径存到本地，使用地址的方式使用，注意可能会有权限问题
      posterType: {
        type: String,
        default: "base64"
      },
      // 封面质量 0~1
      posterQuality: {
        type: Number,
        default: 0.8
      }
    },
    data() {
      return {
        // 从视频里面获取到的封面
        aotoPoster: ""
      };
    },
    methods: {
      getPoster(poster) {
        this.$emit("getPoster", poster);
        this.aotoPoster = poster;
      },
      // 设置封面失败
      setPosterError(error) {
        this.$emit("setPosterError", error);
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode("video", vue.mergeProps({
          src: $props.src,
          poster: $data.aotoPoster
        }, _ctx.$attrs), null, 16, ["src", "poster"]),
        vue.createCommentVNode(" 空白属性用于触发renderjs,注意这里的属性的顺序会影响renderjs里面方法的调用顺序，所以src一定要在最后 "),
        vue.createElementVNode("view", {
          poster: vue.wp($props.poster),
          "change:poster": _ctx.video.setRenderjsPoster,
          posterType: vue.wp($props.posterType),
          "change:posterType": _ctx.video.setRenderjsPosterType,
          posterQuality: vue.wp($props.posterQuality),
          "change:posterQuality": _ctx.video.setRenderjsPosterQuality,
          src: vue.wp($props.src),
          "change:src": _ctx.video.setPoster,
          style: { "display": "none" }
        }, null, 8, ["poster", "change:poster", "posterType", "change:posterType", "posterQuality", "change:posterQuality", "src", "change:src"])
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  if (typeof block0 === "function")
    block0(_sfc_main$2);
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "D:/code/code-life/uni-app-components/uni_modules/cl-video/components/cl-video/cl-video.vue"]]);
  const src = "https://code-life-1302946402.cos.ap-chongqing.myqcloud.com/other/video/strawberry.mp4";
  const _sfc_main$1 = {
    __name: "index",
    setup(__props, { expose: __expose }) {
      __expose();
      const __returned__ = { src };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_cl_video = resolveEasycom(vue.resolveDynamicComponent("cl-video"), __easycom_0);
    return vue.openBlock(), vue.createBlock(_component_cl_video, {
      src: $setup.src,
      posterQuality: 1,
      posterType: "path",
      "object-fit": "contain",
      style: { "width": "400px", "height": "300px" }
    });
  }
  const PagesComponentPageClVideoIndex = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "D:/code/code-life/uni-app-components/pages/componentPage/cl-video/index.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/componentPage/cl-select-picker/index", PagesComponentPageClSelectPickerIndex);
  __definePage("pages/componentPage/cl-scroll-view/index", PagesComponentPageClScrollViewIndex);
  __definePage("pages/componentPage/cl-select/index", PagesComponentPageClSelectIndex);
  __definePage("pages/componentPage/cl-nav-bar/index", PagesComponentPageClNavBarIndex);
  __definePage("pages/componentPage/cl-date-picker/index", PagesComponentPageClDatePickerIndex);
  __definePage("pages/componentPage/cl-more-select-picker/index", PagesComponentPageClMoreSelectPickerIndex);
  __definePage("pages/componentPage/cl-autocomplete/index", PagesComponentPageClAutocompleteIndex);
  __definePage("pages/componentPage/cl-auto-page-list/index", PagesComponentPageClAutoPageListIndex);
  __definePage("pages/componentPage/cl-tabs/index", PagesComponentPageClTabsIndex);
  __definePage("pages/componentPage/cl-table/index", PagesComponentPageClTableIndex);
  __definePage("pages/componentPage/cl-video/index", PagesComponentPageClVideoIndex);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "D:/code/code-life/uni-app-components/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
