<template>
	<view class="el_select">
		<cl-input class="cl_input" v-model="curSelectLabel" :placeholder="showPlaceholder"
			:inputType="filterable ? 'input' :  'falseInput'" :placeholderStyle="placeholderStyle" :disabled="disabled"
			:maxlength="maxlength" :trim="trim" :inputBorder="!hideBorder" :cursorSpacing="cursorSpacing" @focus="focusHandle"
			@input="inputHandle" @blur="blurHandle" @inputClick="inputClick" @clear="clearHandle">
			<template #right v-if="filterable">
				<view class="icons" v-if="!disabled">
					<uni-icons v-if="!isSelected || visible" :type="visible ? 'top' : 'bottom'" size="14"
						color="#999"></uni-icons>
				</view>
			</template>
		</cl-input>
		<view class="scroll_list" v-show="visible">
			<view class="triangle_icon"></view>
			<scroll-view scroll-y :scroll-into-view="scrollIntoView" :style="{maxHeight: maxHeight + 'px'}">
				<view class="select_item" :class="{active: item[valueField] === curSelect[valueField]}"
					v-for="(item, index) in showOptions" :key="index" @click="selected(item)" :id="item[valueField]">
					{{item[labelField]}}
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
		onMounted,
		getCurrentInstance
	} from 'vue'
	const curInstance = getCurrentInstance()
	const props = defineProps({
		options: {
			type: Array,
			default: () => []
		},
		labelField: {
			type: String,
			default: 'label'
		},
		valueField: {
			type: String,
			default: 'value'
		},
		modelValue: {
			type: [String, Number],
			default: undefined
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
			default: 0
		},
		emptyText: {
			type: String,
			default: '暂无数据'
		},
		filterable: {
			type: Boolean,
			default: true
		}
	})

	const emits = defineEmits(['update:modelValue', 'focus', 'blur', 'selected', 'clear', 'input'])

	// 控制下拉框
	const visible = ref(false)
	// 当前选中的数据
	const curSelect = ref({})
	const curSelectLabel = ref()
	const curSelectValue = ref()
	const isSelected = computed(() => {
		if (Object.keys(curSelect.value).length === 0) {
			return false
		} else {
			return true
		}
	})

	// 定位到某个元素
	const scrollIntoView = ref()
	// 展示的下拉数据
	const showOptions = ref([])
	// 格式化的下拉列表数据
	const formatOptions = computed(() => {
		return props.options.map(item => {
			if (typeof item !== 'object') {
				return {
					[props.valueField]: item,
					[props.labelField]: item
				}
			} else {
				return item
			}
		})
	})

	// 选中数据
	const selected = (item) => {
		curSelect.value = item
		visible.value = false
		emits('selected', item[props.valueField], item)
	}
	// 清除
	const clearHandle = () => {
		// 清除所选项跟定位元素
		curSelect.value = {}
		console.log(props.options[0][props.valueField]);

		emits('clear')
	}
	const showPlaceholder = ref(props.placeholder)
	// 输入框点击（不可搜索的状态）
	const inputClick = () => {
		if (isSelected.value) {
			showPlaceholder.value = curSelect.value[props.labelField]
		} else {
			showPlaceholder.value = props.placeholder
		}
		visible.value = true
		// 如果数据不是对象则转为对象
		showOptions.value = formatOptions.value
		curSelectLabel.value = undefined
	}
	// 聚焦函数
	const focusHandle = (inputVal) => {
		if (isSelected.value) {
			showPlaceholder.value = curSelect.value[props.labelField]
		} else {
			showPlaceholder.value = props.placeholder
		}
		visible.value = true
		// 如果数据不是对象则转为对象
		showOptions.value = formatOptions.value
		curSelectLabel.value = undefined
		emits('focus', inputVal)
	}
	// 失去焦点
	const blurHandle = () => {
		if (isSelected.value) {
			curSelectLabel.value = curSelect.value[props.labelField]
		} else {
			curSelectLabel.value = undefined
		}
		emits('blur')
	}
	// 添加防抖逻辑
	let searchTimer = null
	const inputHandle = (e) => {
		clearTimeout(searchTimer)
		searchTimer = setTimeout(() => {
			showOptions.value = formatOptions.value.filter(item => item[props.labelField].includes(e))
			emits('input', e)
		}, 200)
	}

	// 监听下拉框是否显示
	watch(() => visible.value, (val) => {
		if (val) {
			// 监听是否有选中的值，有则替换Placeholder进行展示并定位到对应元素
			nextTick(() => {
				if (isSelected.value) {
					showPlaceholder.value = curSelect.value[props.labelField]
					scrollIntoView.value = curSelect.value[props.valueField]
				} else {
					showPlaceholder.value = props.placeholder
					if (formatOptions.value.length > 0) {
						scrollIntoView.value = formatOptions.value[0][props.valueField]
					}
				}
			})
		}
	})

	watch(() => curSelect.value, (val) => {
		if (Object.keys(val).length === 0) {
			curSelectLabel.value = undefined
			curSelectValue.value = undefined
			showPlaceholder.value = props.placeholder
		} else {
			curSelectLabel.value = val[props.labelField]
			curSelectValue.value = val[props.valueField]
		}
		emits('update:modelValue', curSelectValue.value)
	})
	// 回显数据
	const setCurSelect = () => {
		if (formatOptions.value.length > 0 && !isEmpty(props.modelValue)) {
			const data = formatOptions.value.find(item => item[props.valueField] === props.modelValue)
			if (data) {
				curSelect.value = data
			}
		}
	}

	// 工具函数
	const isEmpty = (val) => {
		return val === '' || val === undefined || val === null
	}
	watch([() => props.options, () => props.modelValue], () => {
		setCurSelect()
	}, {
		deep: true,
		immediate: true,
	})

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
		opacity: .5;
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
	}
</style>