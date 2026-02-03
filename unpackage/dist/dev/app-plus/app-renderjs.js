var __renderjsModules={};

__renderjsModules["6c5b202d"] = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // <stdin>
  var stdin_exports = {};
  __export(stdin_exports, {
    default: () => stdin_default
  });
  var stdin_default = {
    data() {
      return {
        renderjsData: {
          posterType: "base64",
          posterQuality: 0.8,
          poster: ""
        }
      };
    },
    methods: {
      setRenderjsPosterType(newV, oldV) {
        this.renderjsData.posterType = newV;
      },
      setRenderjsPosterQuality(newV, oldV) {
        this.renderjsData.posterQuality = newV;
      },
      setRenderjsPoster(newV, oldV, ownerInstance) {
        this.renderjsData.poster = newV;
      },
      setPoster(newV, oldV, ownerInstance) {
        const { posterQuality, poster, posterType } = this.renderjsData;
        if (poster || !newV) {
          return;
        }
        let video = document.createElement("video");
        video.setAttribute("crossOrigin", "anonymous");
        video.setAttribute("src", newV);
        video.setAttribute("preload", "auto");
        video.muted = true;
        video.style.display = "none";
        video.addEventListener("loadeddata", () => {
          let canvas = document.createElement("canvas");
          let width = video.videoWidth;
          let height = video.videoHeight;
          canvas.width = width;
          canvas.height = height;
          let ctx = canvas.getContext("2d");
          ctx.drawImage(video, 0, 0, width, height);
          let base64 = canvas.toDataURL("image/jpeg", posterQuality);
          if (posterType === "path") {
            const bitmap = new plus.nativeObj.Bitmap("video_poster_" + Date.now());
            bitmap.loadBase64Data(base64, () => {
              const url = "_doc/poster.jpg";
              bitmap.save(url, { overwrite: true, quality: 100 }, (e) => {
                const absolutePath = plus.io.convertLocalFileSystemURL(url);
                ownerInstance.callMethod("getPoster", absolutePath);
                bitmap.clear();
                this.disposeVideo(video);
              });
            }, (error) => {
              ownerInstance.callMethod("setPosterError", error);
              this.disposeVideo(video);
            });
          } else {
            ownerInstance.callMethod("getPoster", base64);
            this.disposeVideo(video);
          }
        });
        video.addEventListener("error", () => {
          this.disposeVideo(video);
        });
        video.play().catch(() => {
        });
      },
      // 彻底销毁隐藏视频对象的方法
      disposeVideo(video) {
        if (video) {
          video.pause();
          video.src = "";
          video.load();
          video.remove();
        }
      },
      base64ToTempUrl(base64Str, ownerInstance) {
        try {
          if (!base64Str || !base64Str.startsWith("data:image/")) {
            throw new Error("\u65E0\u6548\u7684base64\u56FE\u7247\u683C\u5F0F");
          }
          const [metaData, base64Data] = base64Str.split(",");
          const mime = metaData.match(/:(.*?);/)[1];
          const byteCharacters = atob(base64Data);
          const byteNumbers = new Array(byteCharacters.length);
          for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
          }
          const byteArray = new Uint8Array(byteNumbers);
          const blob = new Blob([byteArray], { type: mime });
          const tempUrl = URL.createObjectURL(blob);
          return tempUrl;
        } catch (error) {
          ownerInstance.callMethod("setPosterError", error);
          return "";
        }
      }
    }
  };
  return __toCommonJS(stdin_exports);
})();
