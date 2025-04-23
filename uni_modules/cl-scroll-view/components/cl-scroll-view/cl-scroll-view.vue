<template>
  <scroll-view
    style="height: 100%"
    :scroll-y="true"
    refresher-enabled
    :scroll-top="screenTop"
    :refresher-triggered="isRefresh"
    :refresher-enabled="refresherEnabled"
    :lower-threshold="lowerThreshold"
    @scroll="scrollView"
    @scrolltolower="bootmScroll"
    @refresherrefresh="refresherrefresh"
  >
    <slot name="list" :list="list"></slot>
    <uni-load-more
      :status="loadMoreStatus"
      v-if="['loading', 'noMore', 'more'].includes(loadMoreStatus)"
    />
    <slot name="empty" v-if="loadMoreStatus === 'noData' && mergeEmptyConfig">
      <view class="error_empty_box">
        <image
          class="image"
          v-if="mergeEmptyConfig.imgSrc"
          :src="mergeEmptyConfig.imgSrc"
          mode="aspectFit"
        />
        <text v-if="mergeEmptyConfig.text">{{ mergeEmptyConfig.text }}</text>
      </view>
    </slot>
    <slot
      name="error"
      v-if="
        ['noDataLoadError', 'loadError'].includes(loadMoreStatus) &&
        mergeErrorConfig
      "
    >
      <view class="error_empty_box" v-if="loadMoreStatus === 'noDataLoadError'">
        <image
          class="image"
          v-if="mergeErrorConfig.imgSrc"
          :src="mergeErrorConfig.imgSrc"
          mode="widthFix"
        />
        <text class="reload_btn" v-if="mergeErrorConfig.text" @click="search">
          <slot
            name="errorShowText"
            :reload="search"
            :errorShowText="mergeErrorConfig.text"
          >
            <text class="reload_btn" @click="search">
              {{ mergeErrorConfig.text }}
            </text>
          </slot>
        </text>
      </view>
      <view v-else class="error_data_box">
        <slot
          name="errorShowText"
          :reload="search"
          :errorShowText="mergeErrorConfig.text"
        >
          <text class="reload_btn" @click="search">
            {{ mergeErrorConfig.text }}
          </text>
        </slot>
      </view>
    </slot>
  </scroll-view>
</template>

<script setup>
import { ref, nextTick, computed, isRef } from 'vue'
import listEmpty from '../img/listEmpty.png'
import listError from '../img/listError.png'
const props = defineProps({
  // 距底部/右边多远时（单位px），触发 scrolltolower 事件
  lowerThreshold: {
    type: [Number, String],
    default: 50,
  },
  // 开启自定义下拉刷新
  refresherEnabled: {
    type: Boolean,
    default: true,
  },
  // 自动调用接口
  autoLoad: {
    type: Boolean,
    default: true,
  },
  // 接口api
  apiFun: {
    type: Function,
  },
  // 请求参数
  params: {
    type: Object,
    default: () => ({}),
  },
  // 分页字段
  pageNumField: {
    type: String,
    default: 'pageNum',
  },
  // 一次加载条数
  loadPageNum: {
    type: Number,
    default: 10,
  },
  // 接口调用之前的钩子
  beforeHook: {
    type: Function,
  },
  // 接口调用成功之后的钩子
  afterHook: {
    type: Function,
  },
  // 接口调用失败的钩子
  errorHook: {
    type: Function,
  },
  // 调用成功后的状态码
  successCodeNum: {
    type: Number,
    default: 200,
  },
  successCodeField: {
    type: String,
    default: 'code',
  },
  messageField: {
    type: String,
    default: '',
  },
  successDataField: {
    type: String,
    default: 'data',
  },
  errorToastConfig: {
    type: [Object, Boolean],
    default: () => ({}),
  },
  loadToastConfig: {
    type: [Object, Boolean],
    default: () => ({}),
  },
  emptyShowConfig: {
    type: [Object, Boolean],
    default: () => ({}),
  },
  errorShowConfig: {
    type: [Object, Boolean],
    default: () => ({}),
  },
})

const mergeEmptyConfig = computed(() => {
  if (!props.emptyShowConfig) {
    return false
  }
  return Object.assign(
    {
      text: '暂无数据',
      imgSrc: listEmpty,
    },
    props.emptyShowConfig
  )
})

const mergeErrorConfig = computed(() => {
  if (!props.errorShowConfig) {
    return false
  }
  return Object.assign(
    {
      text: '加载失败，请重试',
      imgSrc: listError,
    },
    props.errorShowConfig
  )
})

const mergeErrorToastConfig = computed(() => {
  if (!props.errorToastConfig) {
    return false
  }
  return Object.assign(
    {
      duration: 1000,
      icon: 'error',
      title: '加载失败！',
      mask: true,
    },
    props.errorToastConfig
  )
})

const mergeLoadToastConfig = computed(() => {
  if (!props.loadToastConfig) {
    return false
  }
  return Object.assign(
    {
      title: '加载中',
      mask: true,
    },
    props.loadToastConfig
  )
})

const list = ref([])
const isEnd = ref(false) //数据是否拿完
const isRefresh = ref(false) //是否刷新
const screenTop = ref(0)
const screenOldTop = ref(0)
const loadMoreStatus = ref('loading')

const search = async (type) => {
  // 显示loading窗口
  if (mergeLoadToastConfig.value) {
    uni.showLoading(mergeLoadToastConfig.value)
  }
  // 显示底部加载状态
  loadMoreStatus.value = 'loading'
  // 是否提前对参数进行处理
  const searchForm = props.beforeHook
    ? props.beforeHook(JSON.parse(JSON.stringify(props.params))) || props.params
    : props.params
  try {
    const res = await props.apiFun(searchForm)
    if (mergeLoadToastConfig.value) {
      uni.hideLoading()
    }
    const code = res[props.successCodeField]
    const data = res[props.successDataField]
    // const message = res[props.messageField]
    isRefresh.value = false
    // 判断接口状态
    if (code === props.successCodeNum) {
      // 对接口数据进行二次处理
      let formatData = props.afterHook ? props.afterHook(data) || data : data
      if (type === 'refresh') {
        list.value = formatData
      } else {
        list.value = list.value.concat(formatData)
      }
      if (formatData.length < props.loadPageNum) {
        isEnd.value = true
        loadMoreStatus.value = 'noMore'
      } else {
        loadMoreStatus.value = 'more'
      }
      if (list.value.length === 0) {
        loadMoreStatus.value = 'noData'
      }
    } else {
      props.errorHook && errorHook(res, 'project')
      isRefresh.value = false
      if (list.value.length === 0) {
        loadMoreStatus.value = 'noDataLoadError'
      } else {
        loadMoreStatus.value = 'loadError'
      }
      if (mergeErrorToastConfig.value) {
        uni.showToast({
          ...mergeErrorToastConfig.value,
          title: props.messageField
            ? res[props.messageField]
            : mergeErrorToastConfig.value.title,
        })
      }
    }
  } catch (error) {
    nextTick(() => {
      isRefresh.value = false
    })
    if (list.value.length === 0) {
      loadMoreStatus.value = 'noDataLoadError'
    } else {
      loadMoreStatus.value = 'loadError'
    }
    uni.hideLoading()
    props.errorHook && errorHook(res, 'network')
  }
}

// 下拉刷新
const refresherrefresh = () => {
  isRefresh.value = true
  refresh()
}
// 获取滚动的位置
const scrollView = (e) => {
  screenOldTop.value = e.detail.scrollTop
}
// 滚动条返回顶部
const backTop = () => {
  screenTop.value = screenOldTop.value
  nextTick(() => {
    screenTop.value = 0
  })
}
// 触底加载
const bootmScroll = () => {
  // 判断所有数据是否加载完成
  if (!isEnd.value) {
    props.params[props.pageNumField]++
    search()
  }
}
// 刷新方法
const refresh = () => {
  // 清空所有数据加载完成标识
  isEnd.value = false
  // 页码设置为1
  props.params[props.pageNumField] = 1
  // 返回到顶部
  backTop()
  // 清空列表
  list.value = []
  search('refresh')
}

if (props.autoLoad) {
  refresh()
}
defineExpose({
  refresh,
  search,
})
</script>

<style scoped>
.error_empty_box {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100rpx 50rpx;
  font-size: 30rpx;
}

.error_data_box {
  /* padding: 30rpx 0; */
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #777777;
  font-size: 14px;
}

.reload_btn {
  text-decoration: underline;
  color: blue;
  color: #777777;
  font-size: 14px;
}
</style>
