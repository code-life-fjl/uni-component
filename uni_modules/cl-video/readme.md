# cl-video 自动获取封面的视频组件

一个基于 uni-app 的跨端视频组件，支持自动提取视频首帧作为封面。

## 功能特性

- ✅ 自动提取视频首帧作为封面
- ✅ 支持跨端使用（H5、App）
- ✅ 支持自定义封面
- ✅ 支持设置封面质量
- ✅ App 端支持封面保存为本地文件或 base64
- ✅ 自动处理跨域问题

## 基础用法

```vue
<template>
  <cl-video src="https://example.com/video.mp4" @getPoster="handleGetPoster" />
</template>

<script>
export default {
  methods: {
    handleGetPoster(poster) {
      console.log('获取到的封面:', poster)
    },
  },
}
</script>
```

## Props 属性

| 参数          | 类型   | 默认值   | 说明                                                                                                                        |
| ------------- | ------ | -------- | --------------------------------------------------------------------------------------------------------------------------- |
| src           | String | ''       | 视频地址（必填）                                                                                                            |
| poster        | String | ''       | 自定义封面地址，如果设置则不会自动提取                                                                                      |
| posterType    | String | 'base64' | 封面格式，可选值：`base64`、`path`<br>**仅 App 端有效**<br>`base64`: 返回 base64 字符串<br>`path`: 保存为本地文件并返回路径 |
| posterQuality | Number | 0.8      | 封面质量，取值范围：0~1<br>值越大质量越高，文件也越大                                                                       |

> **注意**：组件支持 `v-bind="$attrs"` 透传，可以传入 uni-app video 组件的所有原生属性（如 `controls`、`autoplay`、`muted` 等）

## Events 事件

### @getPoster

视频封面提取成功时触发

**参数**：

- `poster` (String): 封面数据
  - H5 端：返回 base64 字符串
  - App 端：
    - `posterType='base64'` 时返回 base64 字符串
    - `posterType='path'` 时返回本地文件绝对路径

**示例**：

```vue
<cl-video src="https://example.com/video.mp4" @getPoster="onGetPoster" />

<script>
export default {
  methods: {
    onGetPoster(poster) {
      console.log('封面数据:', poster)
      // H5: data:image/jpeg;base64,/9j/4AAQSkZJRg...
      // App (base64): data:image/jpeg;base64,/9j/4AAQSkZJRg...
      // App (path): file:///storage/emulated/0/Android/data/.../poster.jpg
    },
  },
}
</script>
```

### @setPosterError

封面提取失败时触发

**参数**：

- `error` (Object): 错误信息对象

**示例**：

```vue
<cl-video src="https://example.com/video.mp4" @setPosterError="onError" />

<script>
export default {
  methods: {
    onError(error) {
      console.error('封面提取失败:', error)
      uni.showToast({
        title: '封面加载失败',
        icon: 'none',
      })
    },
  },
}
</script>
```

## 完整示例

### 基础示例

```vue
<template>
  <view class="video-container">
    <cl-video
      :src="videoUrl"
      controls
      show-center-play-btn
      @getPoster="handleGetPoster"
      @setPosterError="handleError"
    />
  </view>
</template>

<script>
export default {
  data() {
    return {
      videoUrl:
        'https://code-life-1302946402.cos.ap-chongqing.myqcloud.com/other/video/strawberry.mp4',
    }
  },
  methods: {
    handleGetPoster(poster) {
      console.log('获取到封面:', poster)
    },
    handleError(error) {
      console.error('封面提取失败:', error)
    },
  },
}
</script>

<style scoped>
.video-container {
  width: 100%;
  height: 400rpx;
}
</style>
```

### 自定义封面

```vue
<template>
  <cl-video
    :src="videoUrl"
    poster="https://example.com/custom-poster.jpg"
    controls
  />
</template>

<script>
export default {
  data() {
    return {
      videoUrl: 'https://example.com/video.mp4',
    }
  },
}
</script>
```

### App 端保存封面为本地文件

```vue
<template>
  <view>
    <cl-video
      :src="videoUrl"
      posterType="path"
      :posterQuality="0.9"
      controls
      @getPoster="handleGetPoster"
    />

    <button @click="uploadPoster" v-if="posterPath">上传封面</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      videoUrl: 'https://example.com/video.mp4',
      posterPath: '',
    }
  },
  methods: {
    handleGetPoster(poster) {
      this.posterPath = poster
      console.log('封面本地路径:', poster)
      // file:///storage/emulated/0/Android/data/.../poster.jpg
    },
    uploadPoster() {
      // 使用本地路径上传文件
      uni.uploadFile({
        url: 'https://api.example.com/upload',
        filePath: this.posterPath,
        name: 'file',
        success: (res) => {
          console.log('上传成功', res)
        },
      })
    },
  },
}
</script>
```

### 调整封面质量

```vue
<template>
  <view>
    <!-- 高质量封面（文件较大） -->
    <cl-video src="https://example.com/video.mp4" :posterQuality="1" controls />

    <!-- 低质量封面（文件较小） -->
    <cl-video
      src="https://example.com/video2.mp4"
      :posterQuality="0.3"
      controls
    />
  </view>
</template>
```

## 注意事项

### 1. 跨域问题

组件内部已设置 `crossOrigin='anonymous'` 处理跨域，但需要视频服务器支持 CORS。如果视频服务器不支持跨域，封面提取可能失败。

**解决方案**：

- 确保视频服务器响应头包含：`Access-Control-Allow-Origin: *`
- 或使用同域视频资源

### 2. posterType 选择建议

| 场景         | 推荐配置              | 原因                   |
| ------------ | --------------------- | ---------------------- |
| 仅展示封面   | `posterType="base64"` | 无需文件操作，性能更好 |
| 需要上传封面 | `posterType="path"`   | 可直接使用文件路径上传 |
| 高清大视频   | `posterType="path"`   | base64 字符串可能过大  |
| H5 环境      | 无需设置              | H5 端始终返回 base64   |

### 3. 封面质量设置

- `posterQuality` 值越大，封面越清晰，但文件也越大
- 建议值：
  - 普通场景：`0.7 ~ 0.8`
  - 高清场景：`0.9 ~ 1`
  - 缩略图场景：`0.3 ~ 0.5`

### 4. 性能优化

- 组件会在提取封面后自动清理临时视频对象，避免内存泄漏
- 如果已设置 `poster` 属性，则不会执行封面提取逻辑
- 视频对象设置了 `muted=true` 以确保正常加载

### 5. 平台差异

| 特性                | H5        | App |
| ------------------- | --------- | --- |
| 自动提取封面        | ✅        | ✅  |
| posterType='base64' | ✅ (默认) | ✅  |
| posterType='path'   | ❌        | ✅  |
| 跨域处理            | ✅        | ✅  |

## 常见问题

### Q1: 封面一直不显示？

**可能原因**：

1. 视频地址跨域未配置
2. 视频格式不支持
3. 网络问题导致视频加载失败

**解决方法**：

- 检查视频 URL 是否可访问
- 监听 `@setPosterError` 事件查看错误信息
- 确认视频服务器支持 CORS

### Q2: App 端 posterType='path' 无法读取图片？

**可能原因**：

- 路径权限问题

**解决方法**：

- 组件已使用 `plus.io.convertLocalFileSystemURL` 转换为绝对路径
- 如仍有问题，可切换为 `posterType='base64'`

### Q3: 如何手动触发封面更新？

组件会在 `src` 变化时自动重新提取封面。如需手动触发，可以修改 `src` 的值：

```javascript
// 方法1: 重新赋值
this.videoUrl = 'https://example.com/new-video.mp4'

// 方法2: 添加时间戳强制刷新
this.videoUrl = this.videoUrl + '?t=' + Date.now()
```

## 更新日志

### v1.0.0

- 初始版本发布
- 支持自动提取视频首帧作为封面
- 支持 H5 和 App 端
- 支持自定义封面质量和格式
