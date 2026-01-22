<template>
	<view class="el_select">
		<uni-easyinput v-model="modelValue" :type="type" :clearable="true" :placeholder="placeholder"
			:placeholderStyle="placeholderStyle" :disabled="disabled" :maxlength="maxlength" :trim="trim"
			:inputBorder="!hideBorder" :cursorSpacing="cursorSpacing" @focus="focusHandle">
		</uni-easyinput>
		<view class="scroll_list" v-if="visible && showOptions.length > 0">
			<view class="triangle_icon"></view>
			<scroll-view scroll-y :style="{maxHeight: maxHeight + 'px'}">
				<view class="select_item" :class="{active: item === modelValue}" v-for="(item, index) in showOptions"
					:key="index" @click="selected(item)">
					<text v-html="setHighlight(item)"></text>
				</view>
				<slot name="empty" v-if="showOptions.length === 0">
					<view class="empty_text">
						{{emptyText}}
					</view>
				</slot>
			</scroll-view>
		</view>
	</view>
	<view class="mask" @click="maskClick" v-if="visible"></view>
</template>
<script setup>
	import {
		ref,
		watch,
		computed,
		nextTick,
		onMounted
	} from 'vue'
	const props = defineProps({
		options: {
			type: Array,
			default: () => []
		},
		placeholder: {
			type: String,
			default: '请选择'
		},
		maxHeight: {
			type: [String, Number],
			default: 300
		},
		placeholderStyle: {
			type: String,
			default: ''
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
			default: 'both'
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
			default: 'text'
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
			default: '#007aff'
		},
		// 自定义过滤方法
		customFilter: {
			type: Function
		}
	})
	const modelValue = defineModel({default: ''})
	const emits = defineEmits(['focus', 'blur', 'selected', 'clear', 'input'])

	// 控制下拉框
	const visible = ref(false)
	const showOptions = computed(() => {
		return props.options.filter(item => {
			if (props.customFilter) {
				return props.customFilter(item)
			}
			if (props.isStrict) {
				return item.includes(modelValue.value || '')
			} else {
				return item.toLowerCase()?.includes(modelValue.value?.toLowerCase() || '')
			}

		})
	})
	
	// 设置高亮
	const setHighlight = (item) => {
		if (typeof item !== 'string') {
			return ''
		}
		if(!props.isHighlight) {
			return item
		}
		const regxp = props.isStrict ? new RegExp(modelValue.value, 'g') : new RegExp(modelValue.value, 'gi')
		return item.replace(regxp, (word) => `<span style="color: ${props.highlightColor};">${word}</span>`)
	}

	// 选中数据
	const selected = (item) => {
		visible.value = false
		modelValue.value = item
		emits('selected', item)
	}
	// 清除
	const clearHandle = () => {
		// 清除所选项跟定位元素
		modelValue.value = ''
		emits('clear')
	}
	let timeoutId = null // 防抖ID
	// 聚焦函数
	const focusHandle = () => {
		if (timeoutId) clearTimeout(timeoutId)
		timeoutId = setTimeout(() => {
			visible.value = props.options.length > 0
			emits('focus')
		}, 150)
	}
	// 失去焦点
	const blurHandle = () => {
		emits('blur')
	}
	// 监听输入框
	const inputHandle = (e) => {
		emits('input', e)
	}

	// 工具函数
	const isEmpty = (val) => {
		return val === '' || val === undefined || val === null
	}

	const maskClick = (e) => {
		visible.value = false
	}
</script>
<style scoped>
	.el_select {
		position: relative;
	}

	.scroll_list {
		position: absolute;
		top: calc(100% + 12px);
		left: 0;
		width: 100%;
		background-color: #fff;
		border: 1px solid #ebeef5;
		border-radius: 6px;
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
		z-index: 3;
		padding: 4px 0;
	}

	.triangle_icon {
		position: absolute;
		width: 10px;
		height: 10px;
		background-color: #fff;
		border: 1px solid #ebeef5;
		border-right: none;
		border-bottom: none;
		left: 10%;
		top: -6px;
		transform: rotate(45deg);
	}

	.icons {
		position: relative;
		margin-right: 5px;
	}

	.select_item {
		display: flex;
		align-items: center;
		padding: 0 5px;
		min-height: 35px;
		font-size: 14px;
	}

	.select_item:hover {
		background-color: #f9f9f9;
	}

	.active {
		background-color: #f9f9f9;
	}

	.empty_text {
		text-align: center;
		line-height: 30px;
		color: gray;
		font-size: 28rpx;
	}

	.mask {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		/* background-color: rgba(0, 0, 0, .1); */
		z-index: 2;
	}

	.empty_text {
		text-align: center;
		line-height: 30px;
		color: gray;
		font-size: 28rpx;
	}
</style>