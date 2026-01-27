<template>
  <video :src="src" :poster="aotoPoster" v-bind="$attrs"></video>
  <!-- 空白属性用于触发renderjs,注意这里的属性的顺序会影响renderjs里面方法的调用顺序，所以src一定要在最后 -->
  <view
    :poster="poster"
    :change:poster="video.setRenderjsPoster"
    :posterType="posterType"
    :change:posterType="video.setRenderjsPosterType"
    :posterQuality="posterQuality"
    :change:posterQuality="video.setRenderjsPosterQuality"
    :src="src"
    :change:src="video.setPoster"
    style="display: none"
  ></view>
</template>

<script>
export default {
  props: {
    // 视频地址
    src: {
      type: String,
      default: '',
    },
    // 视频封面
    poster: {
      type: String,
      default: '',
    },
    // 只在App端有效
    // 封面格式，base64 或 path
    // b64就是将canvas转为base64字符串，注意对一些高清大图可能不是太合适
    // path就是将canvas转为图片路径存到本地，使用地址的方式使用，注意可能会有权限问题
    posterType: {
      type: String,
      default: 'base64',
    },
    // 封面质量 0~1
    posterQuality: {
      type: Number,
      default: 0.8,
    },
  },
  data() {
    return {
      // 从视频里面获取到的封面
      aotoPoster: '',
    }
  },
  methods: {
    getPoster(poster) {
      this.$emit('getPoster', poster)
      this.aotoPoster = poster
    },
    // 设置封面失败
    setPosterError(error) {
      this.$emit('setPosterError', error)
    },
  },
}
</script>

<script lang="renderjs" module="video">
export default {
    data() {
        // 为了统一数据结构，这里使用 renderjsData 来存储逻辑层的数据
        return {
            renderjsData: {
                posterType: 'base64',
                posterQuality: 0.8,
                poster: ''
            }
        }
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
            const {posterQuality, poster, posterType} = this.renderjsData
            // // 如果有封面或者没有视频地址则直接返回
            if (poster || !newV) {
                return
            }
            // 1. 创建隐藏的视频对象用于截帧
            let video = document.createElement("video");
            video.setAttribute('crossOrigin', 'anonymous');
            video.setAttribute('src', newV);
            video.setAttribute('preload', 'auto');
            video.muted = true; // 必须静音，避免占用音频焦点和自动播放限制
            video.style.display = 'none';

            // 2. 监听第一帧加载完成
            video.addEventListener('loadeddata', () => {
                let canvas = document.createElement("canvas");
                let width = video.videoWidth;
                let height = video.videoHeight;
                canvas.width = width;
                canvas.height = height;

                let ctx = canvas.getContext("2d");
                ctx.drawImage(video, 0, 0, width, height);
                let base64 = canvas.toDataURL('image/jpeg', posterQuality);
                // 3. 根据类型获取图片数据
                // #ifdef APP-PLUS
                if (posterType === 'path') {
                    const bitmap = new plus.nativeObj.Bitmap('video_poster_' + Date.now());
                    bitmap.loadBase64Data(base64, () => {
                        const url = '_doc/poster.jpg';
                        bitmap.save(url, { overwrite: true, quality: 100 }, (e) => {
                            // 关键：转换为原生组件可识别的绝对路径
                            const absolutePath = plus.io.convertLocalFileSystemURL(url);
                            ownerInstance.callMethod('getPoster', absolutePath);

                            // 4. 清理资源：Bitmap 和 Video 对象都要销毁
                            bitmap.clear();
                            this.disposeVideo(video);
                        });
                    }, (error) => {
                        ownerInstance.callMethod('setPosterError', error);
                        this.disposeVideo(video);
                    });
                } else {
                    ownerInstance.callMethod('getPoster', base64);
                    this.disposeVideo(video);
                }

                // #endif
                // #ifndef APP-PLUS
                 ownerInstance.callMethod('getPoster', base64);
                this.disposeVideo(video);
                // #endif
            });

            video.addEventListener('error', () => {
                this.disposeVideo(video);
            });

            // 尝试播放以触发加载（部分安卓机型 preload 不会自动开始缓冲）
            video.play().catch(() => {});
        },

        // 彻底销毁隐藏视频对象的方法
        disposeVideo(video) {
            if (video) {
                video.pause();
                video.src = '';
                video.load();
                video.remove();
            }
        }
    }
}
</script>

