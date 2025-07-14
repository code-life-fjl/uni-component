<template>
	<cl-input v-model="modelValue" inputType="falseInput" :placeholder="placeholder" :disabled="disabled" v-bind="atrrs"
		@inputClick="handleOpen">
	</cl-input>
	<uni-popup type="bottom" ref="popupRef">
		<view class="btn_box">
			<text @click="cancel" style="padding: 6px;">取消</text>
			<text class="submit" @click="submit" style="padding: 6px;">确认</text>
		</view>
		<picker-view class="picker-view" :value="pickValue" @change="selectChange" mask-class="mask_class">
			<picker-view-column>
				<view class="item" v-for="(item, index) in dataList" :key="index">
					{{ item[props.labelFiled] }}
				</view>
			</picker-view-column>
		</picker-view>
	</uni-popup>
</template>

<script setup>
	import {
		watch,
		ref,
		computed,
		nextTick,
		useAttrs,
	} from 'vue'
	const atrrs = useAttrs()
	const emits = defineEmits(['submit', 'clear', 'cancel'])
	const props = defineProps({
		// 数据列表
		options: {
			type: Array,
			default: () => [],
		},
		// 输入框提示
		placeholder: {
			type: String,
			default: '请选择',
		},
		
		// 禁用
		disabled: {
			type: Boolean,
			default: false,
		},
		// 隐藏边框
		hideBorder: {
			type: Boolean,
			default: false,
		},
		// 选中数据对象里面用来展示的字段
		labelFiled: {
			type: String,
			default: 'label',
		},
		// 选中数据对象里面用来回传的字段
		valueFiled: {
			type: String,
			default: 'value',
		},
		// 是否隐藏暂无数据
		hideEmptyText: {
			type: Boolean,
			default: false,
		},
		emptyText: {
			type: String,
			default: '暂无数据',
		},
		placeholderStyle: {
			type: Object,
			default: () => ({}),
		},
	})
	const modelValue = defineModel()

	const popupRef = ref()
	const handleOpen = () => {
		if (!isEmpty(modelValue.value)) {
			dataShow()
		}
		popupRef.value.open()
	}


	const dataList = ref([])
	// 选中的文本
	// 选中的value值
	const selectText = ref(undefined)
	const selectValue = ref(undefined)
	// 无数据占位符
	const noDataValue = '#codeLife_noData#' //用来标识无数据选项

	const handleClear = () => {
		selectText.value = undefined
		selectValue.value = undefined
		// 默认回到第一行
		pickValue.value = [0]
		emits('clear')
	}
	// 是否为空
	const isEmpty = (val) => {
		return val === '' || val === null || val === undefined
	}

	// 确认选中
	const submit = (e) => {
		const idx = pickValue.value[0]
		const item = dataList.value[idx]
		const value = item ? item[props.valueFiled] : undefined
		const label = item ? item[props.labelFiled] : undefined
		if (
			(props.hideEmptyText && dataList.value.length === 0) ||
			value === noDataValue
		) {
			selectText.value = undefined
			selectValue.value = undefined
			emits('submit', undefined)
		} else {
			selectText.value = label
			selectValue.value = value
			emits('submit', value, item)
		}
		popupRef.value.close()
	}
	const cancel = () => {
		popupRef.value.close()
		emit('cancel')
	}

	// 选中数据的下标
	const pickValue = ref([0])
	// 数据回显
	const dataShow = () => {
		const idx = dataList.value.findIndex((item) => item[props.valueFiled] === modelValue.value)
		if (idx > -1) {
			pickValue.value = [idx]
			const curData = dataList.value[idx]
			selectText.value = curData[props.labelFiled]
			selectValue.value = curData[props.valueFiled]
		} else {
			selectText.value = undefined
			selectValue.value = undefined
		}
	}
	const selectChange = (e) => {
		pickValue.value = e.detail.value
	}

	watch(
		() => props.options,
		(newV) => {
			// 无数据的时候是否展示无数据选项
			if (newV.length === 0 && !props.hideEmptyText) {
				dataList.value = [{
					[props.labelFiled]: props.emptyText,
					[props.valueFiled]: noDataValue,
				}]
			} else {
				// 如果传入的数组是基本数组，如[1,2,3]则转为对象数组
				dataList.value = props.options.map((item) => {
					if (typeof item !== 'object') {
						return {
							[props.labelFiled]: item,
							[props.valueFiled]: item,
						}
					} else {
						return item
					}
				})
				dataShow()
			}
		}, {
			immediate: true,
			deep: true,
		}
	)
	// 监听数据变化双向绑定
	watch(
		() => selectValue.value,
		(newV) => {
			modelValue.value = newV
		}
	)

	// 数据回显
	watch(
		() => modelValue.value,
		(newV) => {
			if (isEmpty(newV)) {
				selectText.value = undefined
				selectValue.value = undefined
			} else {
				dataShow()
			}
		}, {
			immediate: true,
		}
	)
</script>

<style scoped>
	.input_box {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border: 1px solid #dcdfe6;
		background-color: #fff;
		border-radius: 4px;
	}

	.hideBorder {
		border: none !important;
	}

	.input_box>.input_ele {
		flex: 1;
		padding: 0 10px;
		display: flex;
		align-items: center;
		min-height: 35px;
		word-break: break-all;
		color: #333;
		font-size: 14px;
	}

	.input_box>.placeholder {
		color: #999;
		font-size: 12px;
	}

	.clear_icon {
		margin: 0 5px;
	}

	.picker-view {
		width: 100%;
		height: 500rpx;
		background-color: #fff;
	}

	.btn_box {
		padding: 20rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #fff;
		font-size: 28rpx;
	}

	.btn_box>.submit {
		color: #007aff;
	}

	.item {
		flex: 1;
		line-height: 70rpx;
		text-align: center;
		font-size: 26rpx;
	}

	.uni-easyinput__content {
		pointer-events: none;
		background-color: #007aff;
	}

	.disabled {
		background-color: #F7F6F6;
		pointer-events: none;
	}
</style>