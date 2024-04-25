<!-- 
  该组件为自定义下拉查询组件
  组件主要根据isLazy属性分为两种类型
  isLazy为false则为自动模式，开启自动分页与自动查询
  isLazy为true则为懒加载，关闭组件自带的分页与查询，分页与关键字查询皆由接口实现
 -->
<template>
	<view class="search_select" :style="{ zIndex: zIndex }">
		<uni-easyinput v-model.trim="keywords" v-bind="$attrs" :trim="trim" :placeholder="placeholder" @input="inputHandler"
			@focus="focusHandler" @blur="blurHandler" @clear="clearHanlder"></uni-easyinput>
		<view v-if="visible" class="select_box" :style="{ zIndex: zIndex }">
			<slot name="empty">
				<view class="empty_text" v-if="filterList.length === 0 && load === false">{{
          emptyText
        }}</view>
			</slot>
			<scroll-view scroll-y :scroll-top="scrollData.newY" :style="{ maxHeight: selectMaxHeight }"
				@scrolltolower="scrolltolower" @scroll="scrollData.scroll">
				<view class="select_box_item" :class="{
            select_box_active: currentSelect[valueField] === item[valueField],
          }" v-for="item in filterList" :key="item[valueField]" @click="selectHandler(item)">
					<slot :data="item"><text class="text">{{ item[labelField] }}</text></slot>
				</view>
				<view class="select_box_item" style="text-align: center" v-if="load">
					<uni-icons class="load_icon" type="spinner-cycle" size="26"></uni-icons>
					<view class="">
						数据加载中...
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
	<view class="mask" @click="maskClick" v-if="visible"></view>
	<!-- 利用遮罩进行下拉隐藏时机的控制 -->
</template>

<script lang="ts" setup>
	import { ref, reactive, watch, useAttrs, nextTick } from 'vue'

	interface SearchSelectProp {
		labelField : string //显示值的字段
		valueField : string //选中值的字段
		optionList : any[] //下拉数据
		placeholder : string //提示
		selectMaxHeight : string //下拉框最大高度
		modelValue : string | number | undefined //v-model绑定值
		pageSize : number //默认一次加载多少数据
		trim ?: string | boolean //去空格
		isLazy : boolean //是否懒加载？开启懒加载后分页与关键字查询都需要接口控制，组件内部会自动关闭这些功能，且noKeywordNoOption属性不可用
		isFilter : boolean //是否开启关键词查询
		isPage : boolean //是否分页
		emptyText ?: string
		load ?: boolean
		noKeywordNoOption ?: boolean
		zIndex ?: number
	}

	const isEmpty = (value : any) => {
		return value === null || value === undefined || value === "";
	};

	const props = withDefaults(defineProps<SearchSelectProp>(), {
		labelField: 'label',
		valueField: 'value',
		optionList: () => [],
		placeholder: '请输入关键字进行搜索',
		selectMaxHeight: '300px',
		pageSize: 50,
		trim: 'both',
		isLazy: false,
		isFilter: true,
		isPage: true,
		emptyText: '暂无数据',
		load: false,
		noKeywordNoOption: false,
		zIndex: 9,
	})
	const $attrs = useAttrs()

	const emit = defineEmits([
		'change', //下拉改变
		'visibleChange',
		'input',
		'bottom',
		'blur',
		'focus',
		'update:modelValue', //修改v-model数据
	])

	// 显示下拉
	const visible = ref(false)
	// 当前选中的数据
	const currentSelect = ref<any>({})
	//过滤后的数据列表
	const filterList = ref<any[]>([])
	// 搜索查询关键字
	const keywords = ref<string>('')
	// 分页数据
	const pageNum = ref<number>(1)

	// 聚焦后展示下拉
	const focusHandler = () => {
		visible.value = true
		emit('focus')
	}
	const blurHandler = () => {
		// visible.value = false
		emit('blur')
	}
	// 清空选中数据
	const clearHanlder = () => {
		currentSelect.value = {}
	}
	// 下拉选中
	const selectHandler = (item : any) => {
		currentSelect.value = item
		visible.value = false
	}
	// 监听输入内容进行搜索
	const inputHandler = (val : string = '') => {
		// 输入框改变后选中的值应该删除
		emit('update:modelValue', undefined)
		// 抛出input事件
		emit('input', val)
		currentSelect.value = {}
		pageNum.value = 1
		filterList.value = getCurrentPageList(val)
		scrollData.backTop()
	}

	// 滑倒底部
	const scrolltolower = () => {
		if (!props.isLazy) {
			pageNum.value++
			if (!isEmpty(currentSelect.value[props.valueField])) {
				filterList.value = filterList.value.concat(getCurrentPageList())
			} else {
				filterList.value = filterList.value.concat(
					getCurrentPageList(keywords.value)
				)
			}
		}
		emit('bottom')
	}

	// 点击遮罩进行隐藏
	const maskClick = () => {
		if (isEmpty(currentSelect.value[props.valueField])) {
			keywords.value = ''
		}
		pageNum.value = 1
		visible.value = false
	}

	// 获取当前数据
	const getCurrentPageList = (val : string = '') => {
		if (props.isLazy) {
			return props.optionList
		} else {
			if (props.noKeywordNoOption && isEmpty(val)) {
				return []
			}
			// 获取关键词查询的数据
			const resList = props.optionList.filter((item) => {
				return item[props.labelField].includes(props.isFilter ? val : '')
			})
			// 获取分页的数据
			if (props.isPage) {
				return resList.slice(
					(pageNum.value - 1) * props.pageSize,
					pageNum.value * props.pageSize
				)
				// 不分页直接返回
			} else {
				return resList
			}
		}
	}

	const scrollData = reactive({
		oldY: 0,
		newY: 0,
		scroll(e : any) {
			scrollData.oldY = e.detail.scrollTop
		},
		backTop() {
			scrollData.newY = scrollData.oldY
			nextTick(() => {
				scrollData.newY = 0
			})
		},
	})

	// 监听传入的下拉数据做初始操作
	watch(
		() => props.optionList,
		(newV) => {
			pageNum.value = 1
			filterList.value = getCurrentPageList()
			currentSelect.value =
				props.optionList.filter(
					(item) => item[props.valueField] === props.modelValue
				)[0] || {}
		},
		{ immediate: true, deep: true }
	)
	// 监听选中的数据
	watch(
		() => currentSelect.value,
		(newV : any) => {
			if (!isEmpty(newV[props.valueField])) {
				keywords.value = newV[props.labelField]
				emit('update:modelValue', newV[props.valueField])
			}
			emit('change', newV)
		},
		{ deep: true, immediate: true }
	)
	// 下拉隐藏后恢复所有数据
	watch(visible, (newV) => {
		emit('visibleChange', newV)
		if (!newV) {
			scrollData.backTop()
			pageNum.value = 1
			filterList.value = getCurrentPageList()
		} else {
			filterList.value = getCurrentPageList(currentSelect.value[props.labelField])
		}
	})
</script>

<style lang="scss" scoped>
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.search_select {
  position: relative;
  .select_box {
    box-sizing: border-box;
    position: absolute;
    right: 10rpx;
    top: 90rpx;
    width: calc(100% - 20rpx);
    border: 2rpx solid rgb(200, 200, 200);
    background-color: #fff;

    .empty_text {
      padding: 12rpx;
      text-align: center;
      color: rgb(200, 200, 200);
    }
    .load_icon {
      animation: rotate 2s linear infinite;
    }

    &_item {
      padding: 20rpx;
      box-sizing: border-box;
      width: 100%;
      background-color: #fff;
      font-size: 26rpx;
      border-bottom: 1px solid rgb(238, 238, 238);
      .text {
        color: rgb(57, 57, 57);
        white-space: normal;
      }
    }
    &_active {
      background-color: rgb(226, 226, 226);
    }
  }
  .select_box::after {
    content: '';
    position: absolute;
    z-index: 3;
    left: 40rpx;
    top: -30rpx;
    width: 0px;
    height: 0px;
    border: 15rpx solid transparent;
    border-bottom: 15rpx solid rgb(200, 200, 200);
  }

  .select_box::before {
    content: '';
    position: absolute;
    z-index: 4;
    left: 40rpx;
    top: -28rpx;
    width: 0px;
    height: 0px;
    border: 15rpx solid transparent;
    border-bottom: 15rpx solid #fff;
  }
}
.mask {
  position: fixed;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba($color: #000000, $alpha: 0);
}
</style>