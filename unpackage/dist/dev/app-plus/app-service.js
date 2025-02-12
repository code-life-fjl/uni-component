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
  const createHook = (lifecycle) => (hook, target = vue.getCurrentInstance()) => {
    !vue.isInSSRComponentSetup && vue.injectHook(lifecycle, hook, target);
  };
  const onLoad = /* @__PURE__ */ createHook(ON_LOAD);
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$n = {
    __name: "index",
    setup(__props, { expose: __expose }) {
      __expose();
      const city = vue.ref("");
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
        }
      ]);
      const pickerSubmit = (val, curData) => {
        formatAppLog("log", "at pages/index/index.vue:39", val, curData);
      };
      const toPage = (url) => {
        uni.navigateTo({
          url
        });
      };
      const __returned__ = { city, pageList, pickerSubmit, toPage, ref: vue.ref };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
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
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$m], ["__scopeId", "data-v-1cf27b2a"], ["__file", "C:/Users/29843/uni-app-components/pages/index/index.vue"]]);
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
  const _sfc_main$m = {
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
  function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
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
  const __easycom_0$a = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$l], ["__scopeId", "data-v-d31e1c47"], ["__file", "C:/Users/29843/uni-app-components/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
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
  const _sfc_main$l = {
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
  function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$a);
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
  const __easycom_0$9 = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$k], ["__scopeId", "data-v-09fd5285"], ["__file", "C:/Users/29843/uni-app-components/uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.vue"]]);
  const noDataValue = "#codeLife_noData#";
  const _sfc_main$k = {
    __name: "cl-select-picker",
    props: {
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
      // 是否隐藏暂无数据
      hideEmptyText: {
        type: Boolean,
        default: false
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
      modelValue: {
        type: [String, Number],
        default: void 0
      },
      //
      emptyText: {
        type: String,
        default: "暂无数据"
      },
      placeholderStyle: {
        type: Object,
        default: () => ({})
      }
    },
    emits: ["update:modelValue", "submit", "clear", "cancel"],
    setup(__props, { expose: __expose, emit: __emit }) {
      __expose();
      const emit = __emit;
      const props = __props;
      const dataList = vue.ref([]);
      const selectText = vue.ref(void 0);
      const selectValue = vue.ref(void 0);
      const pickerDisabled = vue.ref(false);
      const handleClear = () => {
        pickerDisabled.value = true;
        selectText.value = void 0;
        selectValue.value = void 0;
        emit("clear");
        setTimeout(() => {
          pickerDisabled.value = false;
        });
      };
      const isEmpty = (val) => {
        return val === "" || val === null || val === void 0;
      };
      const submit = (e) => {
        const idx = Number(e.detail.value);
        const item = dataList.value[idx];
        const value = item ? item[props.valueFiled] : void 0;
        const label = item ? item[props.labelFiled] : void 0;
        if (props.hideEmptyText && dataList.value.length === 0 || value === noDataValue) {
          selectText.value = void 0;
          selectValue.value = void 0;
          emit("submit", void 0);
        } else {
          selectText.value = label;
          selectValue.value = value;
          emit("submit", value, item);
        }
      };
      const cancel = () => {
        emit("cancel");
      };
      const pickValue = vue.ref(0);
      const dataShow = (list, val) => {
        const idx = list.findIndex((item) => item[props.valueFiled] === val);
        if (idx > -1) {
          pickValue.value = idx;
        }
        const curData = list[idx];
        if (curData) {
          selectText.value = curData[props.labelFiled];
          selectValue.value = curData[props.valueFiled];
        } else {
          selectText.value = void 0;
          selectValue.value = void 0;
        }
      };
      const isShowClearIcon = vue.computed(() => {
        if (!isEmpty(selectValue.value) && !props.disabled) {
          return true;
        }
      });
      vue.watch(
        () => props.options,
        (newV) => {
          if (newV.length === 0 && !props.hideEmptyText) {
            dataList.value = [{
              [props.labelFiled]: props.emptyText,
              [props.valueFiled]: noDataValue
            }];
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
            dataShow(dataList.value, props.modelValue);
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
          emit("update:modelValue", newV);
        }
      );
      vue.watch(
        () => props.modelValue,
        (newV) => {
          if (isEmpty(newV)) {
            selectText.value = void 0;
            selectValue.value = void 0;
          } else {
            dataShow(dataList.value, newV);
          }
        },
        {
          immediate: true
        }
      );
      const __returned__ = { emit, props, dataList, selectText, selectValue, noDataValue, pickerDisabled, handleClear, isEmpty, submit, cancel, pickValue, dataShow, isShowClearIcon, watch: vue.watch, ref: vue.ref, computed: vue.computed, nextTick: vue.nextTick };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_easyinput = resolveEasycom(vue.resolveDynamicComponent("uni-easyinput"), __easycom_0$9);
    return vue.openBlock(), vue.createElementBlock("picker", {
      range: $setup.dataList,
      "range-key": $props.labelFiled,
      value: $setup.pickValue,
      onChange: $setup.submit,
      onCancel: $setup.cancel,
      disabled: $props.disabled || $setup.pickerDisabled
    }, [
      vue.createVNode(_component_uni_easyinput, {
        disabled: $props.disabled,
        modelValue: $setup.selectText,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.selectText = $event),
        placeholder: $props.placeholder,
        clearable: $setup.isShowClearIcon,
        suffixIcon: !$setup.isShowClearIcon && "bottom",
        onClear: $setup.handleClear
      }, null, 8, ["disabled", "modelValue", "placeholder", "clearable", "suffixIcon"])
    ], 40, ["range", "range-key", "value", "disabled"]);
  }
  const __easycom_0$8 = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$j], ["__scopeId", "data-v-7036e199"], ["__file", "C:/Users/29843/uni-app-components/uni_modules/cl-select-picker/components/cl-select-picker/cl-select-picker.vue"]]);
  const _sfc_main$j = {
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
  function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
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
  const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$i], ["__scopeId", "data-v-462874dd"], ["__file", "C:/Users/29843/uni-app-components/uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.vue"]]);
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
  const _sfc_main$i = {
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
  function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-forms" }, [
      vue.createElementVNode("form", null, [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ])
    ]);
  }
  const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$h], ["__scopeId", "data-v-9a1e3c32"], ["__file", "C:/Users/29843/uni-app-components/uni_modules/uni-forms/components/uni-forms/uni-forms.vue"]]);
  const _sfc_main$h = {
    __name: "index",
    setup(__props, { expose: __expose }) {
      __expose();
      const formData = vue.reactive({
        picker: "value2",
        picker1: 4
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
        formatAppLog("log", "at pages/componentPage/cl-select-picker/index.vue:50", val, curData);
      };
      const clear = () => {
        formatAppLog("log", "at pages/componentPage/cl-select-picker/index.vue:53", "点击了清除按钮！");
      };
      const cancal = () => {
        formatAppLog("log", "at pages/componentPage/cl-select-picker/index.vue:56", "点击了取消按钮！");
      };
      const formRef = vue.ref();
      const formSubmit = async () => {
        formatAppLog("log", "at pages/componentPage/cl-select-picker/index.vue:60", formRef.value, "formRef");
        await formRef.value.validate();
      };
      const __returned__ = { formData, options, pickerSubmit, clear, cancal, formRef, formSubmit, ref: vue.ref, reactive: vue.reactive };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_cl_select_picker = resolveEasycom(vue.resolveDynamicComponent("cl-select-picker"), __easycom_0$8);
    const _component_uni_easyinput = resolveEasycom(vue.resolveDynamicComponent("uni-easyinput"), __easycom_0$9);
    const _component_uni_forms_item = resolveEasycom(vue.resolveDynamicComponent("uni-forms-item"), __easycom_2);
    const _component_uni_forms = resolveEasycom(vue.resolveDynamicComponent("uni-forms"), __easycom_3);
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createElementVNode("view", { class: "section_title" }, " 基础使用 "),
      vue.createVNode(_component_cl_select_picker, {
        style: { "width": "340px" },
        modelValue: $setup.formData.picker,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.formData.picker = $event),
        options: $setup.options,
        onCancal: $setup.cancal,
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
                }, null, 8, ["modelValue", "options"]),
                vue.createVNode(_component_uni_easyinput, { placeholder: "请输入" })
              ]),
              _: 1
              /* STABLE */
            }),
            vue.createTextVNode(
              " " + vue.toDisplayString($setup.formData.picker1) + " ",
              1
              /* TEXT */
            ),
            vue.createElementVNode("button", { onClick: $setup.formSubmit }, "表单提交")
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"])
      ])
    ]);
  }
  const PagesComponentPageClSelectPickerIndex = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$g], ["__scopeId", "data-v-17f399f1"], ["__file", "C:/Users/29843/uni-app-components/pages/componentPage/cl-select-picker/index.vue"]]);
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
  const en = {
    "uni-load-more.contentdown": "Pull up to show more",
    "uni-load-more.contentrefresh": "loading...",
    "uni-load-more.contentnomore": "No more data"
  };
  const zhHans = {
    "uni-load-more.contentdown": "上拉显示更多",
    "uni-load-more.contentrefresh": "正在加载...",
    "uni-load-more.contentnomore": "没有更多数据了"
  };
  const zhHant = {
    "uni-load-more.contentdown": "上拉顯示更多",
    "uni-load-more.contentrefresh": "正在加載...",
    "uni-load-more.contentnomore": "沒有更多數據了"
  };
  const messages = {
    en,
    "zh-Hans": zhHans,
    "zh-Hant": zhHant
  };
  let platform;
  setTimeout(() => {
    platform = uni.getSystemInfoSync().platform;
  }, 16);
  const {
    t
  } = initVueI18n(messages);
  const _sfc_main$g = {
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
        return this.contentText.contentdown || t("uni-load-more.contentdown");
      },
      contentrefreshText() {
        return this.contentText.contentrefresh || t("uni-load-more.contentrefresh");
      },
      contentnomoreText() {
        return this.contentText.contentnomore || t("uni-load-more.contentnomore");
      }
    },
    mounted() {
      var pages2 = getCurrentPages();
      var page = pages2[pages2.length - 1];
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
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
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
  const __easycom_0$7 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$f], ["__scopeId", "data-v-9245e42c"], ["__file", "C:/Users/29843/uni-app-components/uni_modules/uni-load-more/components/uni-load-more/uni-load-more.vue"]]);
  const listEmpty = "/assets/listEmpty.e9586bdd.png";
  const listError = "/assets/listError.f7acceb9.png";
  const _sfc_main$f = {
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
    setup(__props, { expose: __expose }) {
      const props = __props;
      const mergeEmptyConfig = vue.computed(() => {
        if (!props.emptyShowConfig) {
          return false;
        }
        return Object.assign(
          {
            text: "暂无数据",
            imgSrc: listEmpty
          },
          props.emptyShowConfig
        );
      });
      const mergeErrorConfig = vue.computed(() => {
        if (!props.errorShowConfig) {
          return false;
        }
        return Object.assign(
          {
            text: "加载失败，请重试",
            imgSrc: listError
          },
          props.errorShowConfig
        );
      });
      const mergeErrorToastConfig = vue.computed(() => {
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
      const mergeLoadToastConfig = vue.computed(() => {
        if (!props.loadToastConfig) {
          return false;
        }
        return Object.assign(
          {
            title: "加载中",
            mask: true
          },
          props.loadToastConfig
        );
      });
      const list = vue.ref([]);
      const isEnd = vue.ref(false);
      const isRefresh = vue.ref(false);
      const screenTop = vue.ref(0);
      const screenOldTop = vue.ref(0);
      const loadMoreStatus = vue.ref("loading");
      const search = async (type) => {
        if (mergeLoadToastConfig.value) {
          uni.showLoading(mergeLoadToastConfig.value);
        }
        loadMoreStatus.value = "loading";
        const searchForm = props.beforeHook ? props.beforeHook(JSON.parse(JSON.stringify(props.params))) || props.params : props.params;
        try {
          const res2 = await props.apiFun(searchForm);
          if (mergeLoadToastConfig.value) {
            uni.hideLoading();
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
              uni.showToast({
                ...mergeErrorToastConfig.value,
                title: props.messageField ? res2[props.messageField] : mergeErrorToastConfig.value.title
              });
            }
          }
        } catch (error) {
          vue.nextTick(() => {
            isRefresh.value = false;
          });
          if (list.value.length === 0) {
            loadMoreStatus.value = "noDataLoadError";
          } else {
            loadMoreStatus.value = "loadError";
          }
          uni.hideLoading();
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
      __expose({
        refresh,
        search
      });
      const __returned__ = { props, mergeEmptyConfig, mergeErrorConfig, mergeErrorToastConfig, mergeLoadToastConfig, list, isEnd, isRefresh, screenTop, screenOldTop, loadMoreStatus, search, refresherrefresh, scrollView, backTop, bootmScroll, refresh, ref: vue.ref, nextTick: vue.nextTick, computed: vue.computed, isRef: vue.isRef, get listEmpty() {
        return listEmpty;
      }, get listError() {
        return listError;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_load_more = resolveEasycom(vue.resolveDynamicComponent("uni-load-more"), __easycom_0$7);
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createCommentVNode(' <uni-load-more status="loading" /> '),
        vue.createElementVNode("scroll-view", {
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
          vue.renderSlot(_ctx.$slots, "list", { list: $setup.list }, void 0, true),
          ["loading", "noMore", "more"].includes($setup.loadMoreStatus) ? (vue.openBlock(), vue.createBlock(_component_uni_load_more, {
            key: 0,
            status: $setup.loadMoreStatus
          }, null, 8, ["status"])) : vue.createCommentVNode("v-if", true),
          $setup.loadMoreStatus === "noData" && $setup.mergeEmptyConfig ? vue.renderSlot(_ctx.$slots, "empty", { key: 1 }, () => [
            vue.createElementVNode("view", { class: "error_empty_box" }, [
              $setup.mergeEmptyConfig.imgSrc ? (vue.openBlock(), vue.createElementBlock("image", {
                key: 0,
                class: "image",
                src: $setup.mergeEmptyConfig.imgSrc,
                mode: "aspectFit"
              }, null, 8, ["src"])) : vue.createCommentVNode("v-if", true),
              $setup.mergeEmptyConfig.text ? (vue.openBlock(), vue.createElementBlock(
                "text",
                { key: 1 },
                vue.toDisplayString($setup.mergeEmptyConfig.text),
                1
                /* TEXT */
              )) : vue.createCommentVNode("v-if", true)
            ])
          ], true) : vue.createCommentVNode("v-if", true),
          ["noDataLoadError", "loadError"].includes($setup.loadMoreStatus) && $setup.mergeErrorConfig ? vue.renderSlot(_ctx.$slots, "error", { key: 2 }, () => [
            $setup.loadMoreStatus === "noDataLoadError" ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "error_empty_box"
            }, [
              $setup.mergeErrorConfig.imgSrc ? (vue.openBlock(), vue.createElementBlock("image", {
                key: 0,
                class: "image",
                src: $setup.mergeErrorConfig.imgSrc,
                mode: "widthFix"
              }, null, 8, ["src"])) : vue.createCommentVNode("v-if", true),
              $setup.mergeErrorConfig.text ? (vue.openBlock(), vue.createElementBlock("text", {
                key: 1,
                class: "reload_btn",
                onClick: $setup.search
              }, [
                vue.renderSlot(_ctx.$slots, "errorShowText", {
                  reload: $setup.search,
                  errorShowText: $setup.mergeErrorConfig.text
                }, () => [
                  vue.createElementVNode(
                    "text",
                    {
                      class: "reload_btn",
                      onClick: $setup.search
                    },
                    vue.toDisplayString($setup.mergeErrorConfig.text),
                    1
                    /* TEXT */
                  )
                ], true)
              ])) : vue.createCommentVNode("v-if", true)
            ])) : (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "error_data_box"
            }, [
              vue.renderSlot(_ctx.$slots, "errorShowText", {
                reload: $setup.search,
                errorShowText: $setup.mergeErrorConfig.text
              }, () => [
                vue.createElementVNode(
                  "text",
                  {
                    class: "reload_btn",
                    onClick: $setup.search
                  },
                  vue.toDisplayString($setup.mergeErrorConfig.text),
                  1
                  /* TEXT */
                )
              ], true)
            ]))
          ], true) : vue.createCommentVNode("v-if", true)
        ], 40, ["scroll-top", "refresher-triggered", "refresher-enabled", "lower-threshold"])
      ],
      2112
      /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
    );
  }
  const __easycom_0$6 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$e], ["__scopeId", "data-v-77892465"], ["__file", "C:/Users/29843/uni-app-components/uni_modules/cl-scroll-view/components/cl-scroll-view/cl-scroll-view.vue"]]);
  const _sfc_main$e = {
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
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_cl_scroll_view = resolveEasycom(vue.resolveDynamicComponent("cl-scroll-view"), __easycom_0$6);
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createElementVNode("view", { class: "section_title" }, " 基本使用 "),
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
      vue.createElementVNode("view", { class: "section_title" }, " 隐藏loading弹窗，并对请求参数（永远请求pageNum等于10的数据）和接口返回值进行二次处理（将结果包装为“我是处理过的返回值n”） "),
      vue.createElementVNode("view", { style: { "height": "600rpx", "border": "1px solid gainsboro" } }, [
        vue.createVNode(_component_cl_scroll_view, {
          apiFun: $setup.apiFun1,
          params: $setup.searchParams1,
          loadToastConfig: false,
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
      vue.createElementVNode("view", { class: "section_title" }, " 自定义无数据页面 "),
      vue.createElementVNode("view", { style: { "height": "800rpx", "border": "1px solid gainsboro" } }, [
        vue.createVNode(_component_cl_scroll_view, {
          apiFun: $setup.apiFun2,
          params: $setup.searchParams2,
          emptyShowConfig: { text: "好像没有拿到数据哇", imgSrc: "/static/logo.png" }
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
        }, 8, ["params", "emptyShowConfig"])
      ]),
      vue.createElementVNode("view", { class: "section_title" }, " 使用插槽控制自定义无数据页面 "),
      vue.createElementVNode("view", { style: { "height": "800rpx", "border": "1px solid gainsboro" } }, [
        vue.createVNode(_component_cl_scroll_view, {
          apiFun: $setup.apiFun2,
          params: $setup.searchParams2,
          emptyShowConfig: { text: "好像没有拿到数据哇", imgSrc: "/static/logo.png" }
        }, {
          list: vue.withCtx(({ list }) => [
            list.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "list_box"
            }, [
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
            ])) : vue.createCommentVNode("v-if", true)
          ]),
          empty: vue.withCtx(() => [
            vue.createElementVNode("view", { style: { "height": "100%", "background-color": "aquamarine" } }, "我是无数据页面，你可以任意设置")
          ]),
          _: 1
          /* STABLE */
        }, 8, ["params", "emptyShowConfig"])
      ]),
      vue.createElementVNode("view", { class: "section_title" }, " 显示第一次加载直接失败的状态 "),
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
      vue.createElementVNode("view", { class: "section_title" }, " 显示非第一次加载失败的状态，使用messageField字段控制提示信息，使用errorToastConfig隐藏弹窗图标，使用errorShowConfig配置错误时展示的文本 "),
      vue.createElementVNode("view", { style: { "height": "800rpx", "border": "1px solid gainsboro" } }, [
        vue.createVNode(_component_cl_scroll_view, {
          apiFun: $setup.apiFun4,
          params: $setup.searchParams4,
          hideLoad: "",
          messageField: "message",
          errorToastConfig: { icon: "none" },
          errorShowConfig: { text: "好像没有拿到数据哇", imgSrc: "/static/logo.png" }
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
        }, 8, ["params", "errorShowConfig"])
      ])
    ]);
  }
  const PagesComponentPageClScrollViewIndex = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$d], ["__scopeId", "data-v-a70f1c9b"], ["__file", "C:/Users/29843/uni-app-components/pages/componentPage/cl-scroll-view/index.vue"]]);
  const _sfc_main$d = {
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
      }
    },
    emits: ["update:modelValue", "focus", "blur", "selected", "clear", "input"],
    setup(__props, { expose: __expose, emit: __emit }) {
      __expose();
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
      const selected = (item) => {
        curSelect.value = item;
        visible.value = false;
        emits("update:modelValue", item[props.valueField]);
        emits("selected", item[props.valueField], item);
      };
      const clearHandle = () => {
        curSelect.value = {};
        scrollIntoView.value = void 0;
        emits("clear");
      };
      const showPlaceholder = vue.ref(props.placeholder);
      const focusHandle = () => {
        if (isSelected.value) {
          showPlaceholder.value = curSelect.value[props.labelField];
        } else {
          showPlaceholder.value = props.placeholder;
        }
        visible.value = true;
        showOptions.value = props.options.map((item) => {
          if (typeof item !== "object") {
            return {
              [props.valueField]: item,
              [props.labelField]: item
            };
          } else {
            return item;
          }
        });
        curSelectLabel.value = void 0;
        emits("focus");
      };
      const blurHandle = () => {
        if (isSelected.value) {
          curSelectLabel.value = curSelect.value[props.labelField];
        } else {
          curSelectLabel.value = void 0;
        }
        emits("blur");
      };
      const inputHandle = (e) => {
        showOptions.value = props.options.filter((item) => item[props.labelField].includes(e));
        emits("input", e);
      };
      vue.watch(() => visible.value, (val) => {
        if (val) {
          if (isSelected.value) {
            showPlaceholder.value = curSelect.value[props.labelField];
            scrollIntoView.value = curSelect.value[props.valueField];
          } else {
            showPlaceholder.value = props.placeholder;
            scrollIntoView.value = void 0;
          }
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
      });
      const setCurSelect = () => {
        if (props.options.length > 0 && !isEmpty(props.modelValue)) {
          const data = props.options.find((item) => item[props.valueField] === props.modelValue);
          if (data) {
            curSelect.value = data;
          }
        }
      };
      const isEmpty = (val) => {
        return val === "" || val === void 0 || val === null;
      };
      vue.watch(() => props.options, (newList) => {
        setCurSelect();
      }, {
        immediate: true,
        deep: true
      });
      vue.watch(() => props.modelValue, (newList) => {
        setCurSelect();
      }, {
        immediate: true,
        deep: true
      });
      const maskClick = (e) => {
        visible.value = false;
      };
      const __returned__ = { props, emits, visible, curSelect, curSelectLabel, curSelectValue, isSelected, scrollIntoView, showOptions, selected, clearHandle, showPlaceholder, focusHandle, blurHandle, inputHandle, setCurSelect, isEmpty, maskClick, ref: vue.ref, watch: vue.watch, computed: vue.computed, nextTick: vue.nextTick, onMounted: vue.onMounted };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$a);
    const _component_uni_easyinput = resolveEasycom(vue.resolveDynamicComponent("uni-easyinput"), __easycom_0$9);
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode("view", { class: "el_select" }, [
          vue.createVNode(_component_uni_easyinput, {
            modelValue: $setup.curSelectLabel,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.curSelectLabel = $event),
            clearable: false,
            placeholder: $setup.showPlaceholder,
            placeholderStyle: $props.placeholderStyle,
            disabled: $props.disabled,
            maxlength: $props.maxlength,
            trim: $props.trim,
            inputBorder: !$props.hideBorder,
            cursorSpacing: $props.cursorSpacing,
            onFocus: $setup.focusHandle,
            onInput: $setup.inputHandle,
            onBlur: $setup.blurHandle
          }, {
            right: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "icons" }, [
                !$setup.isSelected || $setup.visible ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                  key: 0,
                  type: $setup.visible ? "top" : "bottom",
                  size: "14"
                }, null, 8, ["type"])) : (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                  key: 1,
                  type: "clear",
                  size: "24",
                  onClick: $setup.clearHandle,
                  color: "#c0c4cc"
                }))
              ])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue", "placeholder", "placeholderStyle", "disabled", "maxlength", "trim", "inputBorder", "cursorSpacing"]),
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
  const __easycom_0$5 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c], ["__scopeId", "data-v-4bd33685"], ["__file", "C:/Users/29843/uni-app-components/uni_modules/cl-select/components/cl-select/cl-select.vue"]]);
  const _sfc_main$c = {
    __name: "index",
    setup(__props, { expose: __expose }) {
      __expose();
      const value = vue.ref("value50");
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
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_cl_select = resolveEasycom(vue.resolveDynamicComponent("cl-select"), __easycom_0$5);
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createElementVNode("text", null, "模仿uni-data-select做的可搜索下拉框，可直接回显数据，并定位到对应的数据项"),
      vue.createVNode(_component_cl_select, {
        options: $setup.options,
        modelValue: $setup.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.value = $event)
      }, null, 8, ["options", "modelValue"])
    ]);
  }
  const PagesComponentPageClSelectIndex = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b], ["__scopeId", "data-v-ad7d568c"], ["__file", "C:/Users/29843/uni-app-components/pages/componentPage/cl-select/index.vue"]]);
  const _sfc_main$b = {
    name: "ClStatusBar",
    data() {
      return {
        statusBarHeight: uni.getSystemInfoSync().statusBarHeight + "px"
      };
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
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
  const clStatusBar = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["__scopeId", "data-v-9f8a21c7"], ["__file", "C:/Users/29843/uni-app-components/uni_modules/cl-nav-bar/components/cl-nav-bar/cl-status-bar.vue"]]);
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
    },
    {
      path: "pages/componentPage/cl-autocomplete/index",
      style: {
        navigationBarTitleText: "输入提示"
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
  const getVal = (val) => typeof val === "number" ? val + "px" : val;
  const _sfc_main$a = {
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
      formatAppLog("log", "at uni_modules/cl-nav-bar/components/cl-nav-bar/cl-nav-bar.vue:148", this.$attrs);
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
          uni.navigateBack();
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
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_clStatusBar = vue.resolveComponent("clStatusBar");
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$a);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["cl_navbar", { "cl_dark": $props.dark, "cl_nvue-fixed": $props.fixed }])
      },
      [
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["cl_navbar__content", { "cl_navbar--fixed": $props.fixed, "cl_navbar--shadow": $props.shadow, "cl_navbar--border": $props.border }]),
            style: vue.normalizeStyle({ "background-color": $options.themeBgColor, "border-bottom-color": $options.themeColor })
          },
          [
            $props.statusBar ? (vue.openBlock(), vue.createBlock(_component_clStatusBar, { key: 0 })) : vue.createCommentVNode("v-if", true),
            vue.createElementVNode(
              "view",
              {
                style: vue.normalizeStyle({ color: $options.themeColor, backgroundColor: $options.themeBgColor, height: $options.navbarHeight }),
                class: "cl_navbar__header"
              },
              [
                vue.createElementVNode(
                  "view",
                  {
                    onClick: _cache[0] || (_cache[0] = (...args) => $options.onClickLeft && $options.onClickLeft(...args)),
                    class: "cl_navbar__header-btns cl_navbar__header-btns-left",
                    style: vue.normalizeStyle({ width: $options.leftIconWidth })
                  },
                  [
                    vue.renderSlot(_ctx.$slots, "left", {}, () => [
                      $props.leftIcon.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                        key: 0,
                        class: "cl_navbar__content_view"
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
                          class: vue.normalizeClass([{ "cl_navbar-btn-icon-left": !$props.leftIcon.length > 0 }, "cl_navbar-btn-text"])
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
                  class: "cl_navbar__header-container",
                  onClick: _cache[1] || (_cache[1] = (...args) => $options.onClickTitle && $options.onClickTitle(...args))
                }, [
                  vue.renderSlot(_ctx.$slots, "default", {}, () => [
                    vue.createElementVNode("view", { class: "cl_navbar__header-container-inner" }, [
                      vue.createElementVNode(
                        "text",
                        {
                          class: "cl_nav-bar-text cl_ellipsis-1",
                          style: vue.normalizeStyle({ color: $options.themeColor })
                        },
                        vue.toDisplayString($options.getCurrentPageTitle()),
                        5
                        /* TEXT, STYLE */
                      )
                    ])
                  ], true)
                ]),
                vue.createElementVNode(
                  "view",
                  {
                    onClick: _cache[2] || (_cache[2] = (...args) => $options.onClickRight && $options.onClickRight(...args)),
                    class: "cl_navbar__header-btns cl_navbar__header-btns-right",
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
                        class: "cl_navbar-btn-text"
                      }, [
                        vue.createElementVNode(
                          "text",
                          {
                            class: "cl_nav-bar-right-text",
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
          class: "cl_navbar__placeholder"
        }, [
          $props.statusBar ? (vue.openBlock(), vue.createBlock(_component_clStatusBar, { key: 0 })) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode(
            "view",
            {
              class: "cl_navbar__placeholder-view",
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
  const __easycom_0$4 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__scopeId", "data-v-99e6e796"], ["__file", "C:/Users/29843/uni-app-components/uni_modules/cl-nav-bar/components/cl-nav-bar/cl-nav-bar.vue"]]);
  const _sfc_main$9 = {};
  function _sfc_render$8(_ctx, _cache) {
    const _component_cl_nav_bar = resolveEasycom(vue.resolveDynamicComponent("cl-nav-bar"), __easycom_0$4);
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createVNode(_component_cl_nav_bar),
        vue.createElementVNode("view", { style: { "padding": "30rpx" } }, " cl-nav-bar组件与uni-nav-bar组件并无区别，只是设置了部分属性的常用默认值，添加了自动从page.json获取标题的方法 ")
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesComponentPageClNavBarIndex = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__file", "C:/Users/29843/uni-app-components/pages/componentPage/cl-nav-bar/index.vue"]]);
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
  const _sfc_main$8 = {
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
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
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
  const __easycom_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__file", "C:/Users/29843/uni-app-components/uni_modules/uni-transition/components/uni-transition/uni-transition.vue"]]);
  const _sfc_main$7 = {
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
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_transition = resolveEasycom(vue.resolveDynamicComponent("uni-transition"), __easycom_0$3);
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
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__scopeId", "data-v-4dd3c44b"], ["__file", "C:/Users/29843/uni-app-components/uni_modules/uni-popup/components/uni-popup/uni-popup.vue"]]);
  const _sfc_main$6 = {
    __name: "cl-date-picker",
    props: {
      dateType: {
        type: String,
        default: "YYYY-MM-DD"
      },
      modelValue: {
        type: String,
        default: ""
      },
      placeholder: {
        type: String,
        default: "请选择"
      },
      disabled: {
        type: Boolean,
        default: false
      },
      // 隐藏border
      hideBorder: {
        type: Boolean,
        default: false
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
      }
    },
    emits: ["update:modelValue", "cancel", "submit"],
    setup(__props, { expose: __expose, emit: __emit }) {
      const props = __props;
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
      const dateFormatList = vue.computed(() => {
        const regex = /(YYYY|MM|DD|hh|mm|ss)/g;
        const matches = props.dateType.match(regex);
        return matches || [];
      });
      const dataValList = vue.computed(() => {
        const regex = /(\d{4}|\d{2}|\d{2}|\d{2}|\d{2}|\d{2})/g;
        const matches = props.modelValue.match(regex);
        return matches || [];
      });
      const getDateValList = (str) => {
        const regex = /(\d{4}|\d{2}|\d{2}|\d{2}|\d{2}|\d{2})/g;
        const matches = props.modelValue.match(regex);
        return matches || [];
      };
      const createDateOptions = () => {
        dateOptionList.value = [];
        if (dateFormatList.value.length === 0) {
          throw new Error("传入的时间格式无法识别到有效值，有效值包含：YYYY,MM,DD,hh,mm,ss");
        }
        dateFormatList.value.forEach((item, index) => {
          let options = [];
          if (item === "YYYY") {
            if (props.yearOptions.length === 0) {
              for (let i = 1990; i <= 2050; i++) {
                options.push(i + "");
              }
            } else {
              for (let i = 1990; i <= 2050; i++) {
                options = props.yearOptions;
              }
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
        dateFormatList.value.forEach((item, index) => {
          const curOption = dateOptionList.value.find((itm) => itm.type === item);
          const curData = curOption.options.findIndex((itm) => itm === dataValList.value[index]);
          dateVal.value.push(curData);
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
      const handleSubmit = () => {
        let str = props.dateType;
        dateFormatList.value.forEach((item, index) => {
          const reg = new RegExp(item);
          const curOption = dateOptionList.value.find((itm) => itm.type === item);
          const curData = curOption.options[dateVal.value[index]];
          str = str.replace(reg, curData);
        });
        formatAppLog("log", "at uni_modules/cl-date-picker/components/cl-date-picker/cl-date-picker.vue:232", str, "str");
        emits("submit", str);
        emits("update:modelValue", str);
        popupRef.value.close();
      };
      const handleOpen = () => {
        if (isEmpty(props.modelValue)) {
          if (props.isNow) {
            let nowDateIdxList = [];
            const nowDateMap = getNowDate();
            dateFormatList.value.forEach((item) => {
              const curOption = dateOptionList.value.find((itm) => itm.type === item);
              let curIdx = curOption.options.findIndex((itm) => itm === nowDateMap[item]);
              formatAppLog("log", "at uni_modules/cl-date-picker/components/cl-date-picker/cl-date-picker.vue:246", curIdx, curOption, nowDateMap[item]);
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
      onLoad(() => {
        createDateOptions();
      });
      const close = () => {
        popupRef.value.close();
      };
      __expose({
        close,
        open: handleOpen
      });
      const handleClear = () => {
        emits("update:modelValue", "");
      };
      const __returned__ = { props, emits, popupRef, dateOptionList, dateVal, dateLabelMap, dateTypeMap, isEmpty, supplementZero, getNowDate, dateFormatList, dataValList, getDateValList, createDateOptions, showDate, dateChange, cancal, handleSubmit, handleOpen, close, handleClear, computed: vue.computed, nextTick: vue.nextTick, reactive: vue.reactive, ref: vue.ref, watch: vue.watch, get onLoad() {
        return onLoad;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$a);
    const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_1);
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["input_box", { disabled: $props.disabled, hideBorder: $props.hideBorder }])
          },
          [
            vue.createElementVNode(
              "view",
              {
                class: vue.normalizeClass(["input_ele", `input ${!$props.modelValue && "placeholder"}`]),
                onClick: vue.withModifiers($setup.handleOpen, ["stop"])
              },
              vue.toDisplayString($props.modelValue || $props.placeholder),
              3
              /* TEXT, CLASS */
            ),
            $props.modelValue ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
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
        ),
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
  const __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__scopeId", "data-v-0657bf93"], ["__file", "C:/Users/29843/uni-app-components/uni_modules/cl-date-picker/components/cl-date-picker/cl-date-picker.vue"]]);
  const _sfc_main$5 = {
    __name: "index",
    setup(__props, { expose: __expose }) {
      __expose();
      const value = vue.ref("");
      const datePickerRef = vue.ref();
      const show = () => {
        datePickerRef.value.open();
      };
      const __returned__ = { value, datePickerRef, show, ref: vue.ref };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_cl_date_picker = resolveEasycom(vue.resolveDynamicComponent("cl-date-picker"), __easycom_0$2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createElementVNode("view", { class: "" }, " 使用picker-view和picker-view-column封装的时间选择器，支持年月日时分秒各种形式的组合搭配。 "),
      vue.createVNode(_component_cl_date_picker, {
        modelValue: $setup.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.value = $event),
        ref: "datePickerRef",
        isNow: "",
        dateType: "hh:mm:ss"
      }, null, 8, ["modelValue"])
    ]);
  }
  const PagesComponentPageClDatePickerIndex = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__scopeId", "data-v-fc709b23"], ["__file", "C:/Users/29843/uni-app-components/pages/componentPage/cl-date-picker/index.vue"]]);
  const _sfc_main$4 = {
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
      }
    },
    emits: ["update:modelValue", "cancel", "submit", "clear", "change"],
    setup(__props, { expose: __expose, emit: __emit }) {
      __expose();
      const props = __props;
      const emits = __emit;
      const selectList = vue.ref([]);
      const formatOptions = vue.computed(() => {
        return props.options.map((item) => {
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
      const showLabel = vue.computed(() => {
        if (props.modelValue.length > 0) {
          return formatOptions.value.filter((item) => props.modelValue.includes(item[props.valueField])).map((item) => item[props.labelField]).join(props.interval);
        } else {
          return props.placeholder;
        }
      });
      const hasSelect = vue.computed(() => {
        return props.modelValue.length > 0;
      });
      const handleClear = () => {
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
      const handleToggle = (item) => {
        const idx = selectList.value.findIndex((itm) => itm === item[props.valueField]);
        if (idx > -1) {
          selectList.value.splice(idx, 1);
        } else {
          selectList.value.push(item[props.valueField]);
        }
        emits("submit", item, idx === -1, selectList.value);
      };
      const popupRef = vue.ref();
      const handleOpenPicker = () => {
        selectList.value = JSON.parse(JSON.stringify(props.modelValue));
        popupRef.value.open();
      };
      const __returned__ = { props, emits, selectList, formatOptions, showLabel, hasSelect, handleClear, handleCancel, handleSubmit, handleToggle, popupRef, handleOpenPicker, computed: vue.computed, ref: vue.ref };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$a);
    const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_1);
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode("view", { class: "cl_more_select_piker" }, [
          vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass(["input_box", { hideBorder: $props.hideBorder, disabled: $props.disabled }]),
              onClick: $setup.handleOpenPicker
            },
            [
              vue.createElementVNode(
                "view",
                {
                  class: vue.normalizeClass(["input_ele", { placeholder: !$setup.hasSelect }])
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
                onClick: vue.withModifiers($setup.handleClear, ["stop"])
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
                vue.createElementVNode("text", { onClick: $setup.handleCancel }, "取消"),
                vue.createElementVNode("text", {
                  class: "submit_btn",
                  onClick: $setup.handleSubmit
                }, "确实")
              ]),
              $props.options.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "scoll_box"
              }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($setup.formatOptions, (item, index) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      key: index,
                      class: "scoll_box_item"
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
                        onClick: ($event) => $setup.handleToggle(item)
                      }, [
                        $setup.selectList.includes(item[$props.valueField]) ? (vue.openBlock(), vue.createElementBlock("text", { key: 0 }, "√")) : vue.createCommentVNode("v-if", true)
                      ], 10, ["onClick"])
                    ]);
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
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__scopeId", "data-v-3f537ef0"], ["__file", "C:/Users/29843/uni-app-components/uni_modules/cl-more-select-picker/components/cl-more-select-picker/cl-more-select-picker.vue"]]);
  const _sfc_main$3 = {
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
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_cl_more_select_picker = resolveEasycom(vue.resolveDynamicComponent("cl-more-select-picker"), __easycom_0$1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createVNode(_component_cl_more_select_picker, {
        modelValue: $setup.val,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.val = $event),
        options: $setup.options
      }, null, 8, ["modelValue", "options"])
    ]);
  }
  const PagesComponentPageClMoreSelectPickerIndex = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__scopeId", "data-v-6318dc36"], ["__file", "C:/Users/29843/uni-app-components/pages/componentPage/cl-more-select-picker/index.vue"]]);
  const _sfc_main$2 = {
    __name: "cl-autocomplete",
    props: /* @__PURE__ */ vue.mergeModels({
      options: {
        type: Array,
        default: () => []
      },
      modelValue: {
        type: String,
        default: ""
      },
      value: {
        type: String,
        default: ""
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
      }
    }, {
      "modelValue": {},
      "modelModifiers": {}
    }),
    emits: /* @__PURE__ */ vue.mergeModels(["update:modelValue", "focus", "blur", "selected", "clear", "input"], ["update:modelValue"]),
    setup(__props, { expose: __expose, emit: __emit }) {
      __expose();
      const props = __props;
      const data = vue.useModel(__props, "modelValue");
      const emits = __emit;
      const visible = vue.ref(false);
      const curSelect = vue.ref({});
      const curSelectLabel = vue.ref();
      const curSelectValue = vue.ref();
      const showOptions = vue.computed(() => props.options.filter((item) => item.includes(props.modelValue || "")));
      const showVal = vue.computed({
        get: () => {
          formatAppLog("log", "at uni_modules/cl-autocomplete/components/cl-autocomplete/cl-autocomplete.vue:89", props.modelValue, "props.modelValue");
          return props.modelValue;
        },
        get: (newV) => {
          emits("update:modelValue", newV);
        }
      });
      const selected = (item) => {
        visible.value = false;
        showVal.value = item;
        emits("selected", item);
      };
      const clearHandle = () => {
        showVal.value = "";
        emits("clear");
      };
      const focusHandle = () => {
        if (props.options.length > 0) {
          visible.value = true;
        }
        emits("focus");
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
      const __returned__ = { props, data, emits, visible, curSelect, curSelectLabel, curSelectValue, showOptions, showVal, selected, clearHandle, focusHandle, blurHandle, inputHandle, isEmpty, maskClick, ref: vue.ref, watch: vue.watch, computed: vue.computed, nextTick: vue.nextTick, onMounted: vue.onMounted };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_easyinput = resolveEasycom(vue.resolveDynamicComponent("uni-easyinput"), __easycom_0$9);
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode("view", { class: "el_select" }, [
          vue.createTextVNode(
            vue.toDisplayString($props.value) + " ",
            1
            /* TEXT */
          ),
          vue.createVNode(_component_uni_easyinput, {
            modelValue: $setup.showVal,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.showVal = $event),
            clearable: true,
            placeholder: $props.placeholder,
            placeholderStyle: $props.placeholderStyle,
            disabled: $props.disabled,
            maxlength: $props.maxlength,
            trim: $props.trim,
            inputBorder: !$props.hideBorder,
            cursorSpacing: $props.cursorSpacing,
            onFocus: $setup.focusHandle
          }, null, 8, ["modelValue", "placeholder", "placeholderStyle", "disabled", "maxlength", "trim", "inputBorder", "cursorSpacing"]),
          $setup.visible ? (vue.openBlock(), vue.createElementBlock("view", {
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
                      class: vue.normalizeClass(["select_item", { active: item === $setup.showVal }]),
                      key: index,
                      onClick: ($event) => $setup.selected(item)
                    }, vue.toDisplayString(item), 11, ["onClick"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
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
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__scopeId", "data-v-2d848f96"], ["__file", "C:/Users/29843/uni-app-components/uni_modules/cl-autocomplete/components/cl-autocomplete/cl-autocomplete.vue"]]);
  const _sfc_main$1 = {
    __name: "index",
    setup(__props, { expose: __expose }) {
      __expose();
      const value = vue.ref("value50");
      const options = Array.from({
        length: 100
      }, (_, index) => {
        return `我是展示的值${index}`;
      });
      const __returned__ = { value, options, ref: vue.ref };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_cl_autocomplete = resolveEasycom(vue.resolveDynamicComponent("cl-autocomplete"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createElementVNode("text", null, "模仿uni-data-select做的可搜索下拉框，可直接回显数据，并定位到对应的数据项"),
      vue.createVNode(_component_cl_autocomplete, {
        options: $setup.options,
        modelValue: $setup.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.value = $event)
      }, null, 8, ["options", "modelValue"])
    ]);
  }
  const PagesComponentPageClAutocompleteIndex = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__scopeId", "data-v-80363e37"], ["__file", "C:/Users/29843/uni-app-components/pages/componentPage/cl-autocomplete/index.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/componentPage/cl-select-picker/index", PagesComponentPageClSelectPickerIndex);
  __definePage("pages/componentPage/cl-scroll-view/index", PagesComponentPageClScrollViewIndex);
  __definePage("pages/componentPage/cl-select/index", PagesComponentPageClSelectIndex);
  __definePage("pages/componentPage/cl-nav-bar/index", PagesComponentPageClNavBarIndex);
  __definePage("pages/componentPage/cl-date-picker/index", PagesComponentPageClDatePickerIndex);
  __definePage("pages/componentPage/cl-more-select-picker/index", PagesComponentPageClMoreSelectPickerIndex);
  __definePage("pages/componentPage/cl-autocomplete/index", PagesComponentPageClAutocompleteIndex);
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
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "C:/Users/29843/uni-app-components/App.vue"]]);
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
