<template>
	<picker :range="dataList" :range-key="labelFiled" :value="pickValue" @change="submit" @cancel="cancel"
		:disabled="disabled ||  pickerDisabled ">
		<uni-easyinput :disabled="disabled" v-model="selectText" :placeholder="placeholder" :clearable="isShowClearIcon"
			:suffixIcon="!isShowClearIcon && 'bottom'" @clear="handleClear"></uni-easyinput>
	</picker>
</template>

<script setup>
	import {
		watch,
		ref,
		computed,
		nextTick
	} from 'vue'
	const emit = defineEmits(['update:modelValue', 'submit', 'clear', 'cancel'])

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
		// 是否隐藏暂无数据
		hideEmptyText: {
			type: Boolean,
			default: false,
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
		modelValue: {
			type: [String, Number],
			default: undefined,
		},
		//
		emptyText: {
			type: String,
			default: '暂无数据',
		},
		placeholderStyle: {
			type: Object,
			default: () => ({}),
		},
	})

	const dataList = ref([])
	const selectText = ref(undefined)
	const selectValue = ref(undefined)
	const noDataValue = '#codeLife_noData#' //用来标识无数据选项

	// 为了在点击清除的时候picker不弹出
	const pickerDisabled = ref(false)
	const handleClear = () => {
		pickerDisabled.value = true
		selectText.value = undefined
		selectValue.value = undefined
		emit('clear')
		setTimeout(() => {
			pickerDisabled.value = false
		})
	}
	// 是否为空
	const isEmpty = (val) => {
		return val === '' || val === null || val === undefined
	}

	// 确认选中
	const submit = (e) => {
		const idx = Number(e.detail.value)
		const item = dataList.value[idx]
		const value = item ? item[props.valueFiled] : undefined
		const label = item ? item[props.labelFiled] : undefined
		if (
			(props.hideEmptyText && dataList.value.length === 0) ||
			value === noDataValue
		) {
			selectText.value = undefined
			selectValue.value = undefined
			emit('submit', undefined)
		} else {
			selectText.value = label
			selectValue.value = value
			emit('submit', value, item)
		}
	}
	const cancel = () => {
		emit('cancel')
	}

	// 选中数据的下标
	const pickValue = ref(0)
	// 数据回显
	const dataShow = (list, val) => {
		const idx = list.findIndex((item) => item[props.valueFiled] === val)
		if (idx > -1) {
			pickValue.value = idx
		}
		const curData = list[idx]
		if (curData) {
			selectText.value = curData[props.labelFiled]
			selectValue.value = curData[props.valueFiled]
		} else {
			selectText.value = undefined
			selectValue.value = undefined
		}
	}

	// 是否显示清除按钮
	const isShowClearIcon = computed(() => {
		if (!isEmpty(selectValue.value) && !props.disabled) {
			return true
		}
	})

	watch(
		() => props.options,
		(newV) => {
			// 无数据的时候是否展示无数据选项
			if (newV.length === 0 && !props.hideEmptyText) {
				dataList.value = [{
					[props.labelFiled]: props.emptyText,
					[props.valueFiled]: noDataValue,
				}, ]
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
				dataShow(dataList.value, props.modelValue)
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
			emit('update:modelValue', newV)
		}
	)

	// 数据回显
	watch(
		() => props.modelValue,
		(newV) => {
			if (isEmpty(newV)) {
				selectText.value = undefined
				selectValue.value = undefined
			} else {
				dataShow(dataList.value, newV)
			}
		}, {
			immediate: true,
		}
	)
</script>

<style scoped>
	.uni_input {
		min-height: 35px;
		/* padding: 0; */
		display: flex;
		align-items: center;
		justify-content: space-between;
		border: 1px solid #e5e5e5;
		box-sizing: border-box;
		border-radius: 4px;
		word-break: break-all;
		overflow: hidden;
	}

	.show_text {
		color: #333;
		font-size: 14px;
	}

	.hideBorder {
		border: none;
	}

	.disabled {
		background-color: #f7f6f6 !important;
		border-color: #e5e5e5 !important;
		pointer-events: none;
	}
</style>