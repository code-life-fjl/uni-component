<template>
	<view class="cl_more_select_piker">
		<view class="input_box" :class="{hideBorder, disabled}">
			<view class="input_ele" @click="handleOpenPicker" :class="{placeholder: !hasSelect}">
				{{hasSelect ? showLabel : props.placeholder}}
			</view>
			<uni-icons class="clear_icon" v-if="hasSelect" type="clear" :size="24" color="#c0c4cc"
				@click="handleClear"></uni-icons>
			<uni-icons class="clear_icon" v-else type="bottom" :size="20" color="#c0c4cc"></uni-icons>
		</view>
	</view>
	<uni-popup ref="popupRef" type="bottom">
		<view class="btn_box">
			<text class="cancel_btn" @click="handleCancel">取消</text>
			<uni-easyinput v-if="isFilter" style="margin: 0 20rpx;" v-model="keywords" placeholder="请输入关键字查询"></uni-easyinput>
			<text class="submit_btn" @click="handleSubmit">确定</text>
		</view>
		<view class="scoll_box" v-if="filterList.length > 0">
			<view v-for="(item, index) in filterList" :key="index" class="scoll_box_item" @click="handleToggle(item, 'row')">
				<text>{{item[labelField]}}</text>
				<view class="select_icon" :class="{active: selectList.includes(item[valueField])}"
					@click.stop="handleToggle(item, 'checkbox')">
					<text v-if="selectList.includes(item[valueField])">√</text>
				</view>
			</view>
		</view>
		<view v-else class="empty_box">
			{{ emptyText }}
		</view>
	</uni-popup>
</template>
<script setup>
	import {
		computed,
		ref,
		watch
	} from 'vue'
	const props = defineProps({
		options: {
			type: Array,
			default: () => ([])
		},
		modelValue: {
			type: Array,
			default: () => ([])
		},
		placeholder: {
			type: String,
			default: '请选择'
		},
		labelField: {
			type: String,
			default: 'label'
		},
		valueField: {
			type: String,
			default: 'value'
		},
		interval: {
			type: String,
			default: '、'
		},
		hideBorder: {
			type: Boolean,
			default: false
		},
		emptyText: {
			type: String,
			default: '暂无数据'
		},
		disabled: {
			type: Boolean,
			default: false
		},
		// checkbox  点击勾选框  row  点击行数据
		selectTarget: {
			type: String,
			default: 'row'
		},
		isFilter: {
			type: Boolean,
			default: true
		},
		maxLength: {
			type: Number,
			default: undefined
		}
	})
	const isType = (type, val) => `[object ${type}]` === Object.prototype.toString.call(val)
	const emits = defineEmits(['update:modelValue', 'cancel', 'submit', 'clear', 'change'])
	const formatList = ref([]) //格式化后的列表，为了应对数组里面不是对象的情况，例如[1,2,3]
	const filterList = ref([]) //过滤后的列表
	const keywords = ref("")
	watch(() => props.options, () => {
		formatList.value = props.options.map(item => {
			if (isType('Number', item) || isType('String', item)) {
				return {
					[props.labelField]: item,
					[props.valueField]: item,
				}
			} else {
				return item
			}
		})
		filterList.value = formatList.value
		keywords.value = ''
	}, {
		deep: true,
		immediate: true
	})
	watch(() => keywords.value, (newV) => {
		filterList.value = formatList.value.filter(item => item[props.labelField].includes(keywords.value))
		console.log(filterList.value);
	}, {
		deep: true,
		immediate: true
	})
	// 弹窗选中的数据
	const selectList = ref([])
	// 显示选中数据的文本
	const showLabel = computed(() => {
		if (props.modelValue.length > 0) {
			return formatList.value.filter(item => props.modelValue.includes(item[props.valueField])).map(item => item[
				props.labelField]).join(props.interval)
		} else {
			return props.placeholder
		}
	})
	const hasSelect = computed(() => {
		return props.modelValue?.length > 0
	})

	// 清除操作
	const handleClear = () => {
		console.log(123213);
		emits('update:modelValue', [])
	}
	// 取消按钮
	const handleCancel = () => {
		selectList.value = []
		popupRef.value.close()
		emits('cancel')
	}
	// 确认按钮
	const handleSubmit = () => {
		emits('update:modelValue', selectList.value)
		popupRef.value.close()
		selectList.value = []
		emits('submit', selectList.value)
	}
	// 选中不选择状态切换
	const handleToggle = (item, type) => {
		if (props.selectTarget === 'checkbox' && type !== 'checkbox') return
		const idx = selectList.value.findIndex(itm => itm === item[props.valueField])
		// 判断是不是新目标
		if (idx === -1 && typeof props.maxLength === 'number' && selectList.value.length === props.maxLength) {
			uni.showToast({
				title: `最多只能选择${props.maxLength}条数据`,
				icon: 'none',
				duration: 500
			})
			return
		}
		if (idx > -1) {
			selectList.value.splice(idx, 1)
		} else {
			selectList.value.push(item[props.valueField])
		}
		emits('change', item, idx === -1, selectList.value)
	}
	const popupRef = ref()
	const handleOpenPicker = () => {
		keywords.value = ''
		selectList.value = JSON.parse(JSON.stringify(props.modelValue))
		popupRef.value.open()
	}
</script>
<style scoped lang="scss">
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
		box-sizing: border-box;
		display: flex;
		align-items: center;
		min-height: 35px;
		word-break: break-all;
		color: #333;
		font-size: 14px;
	}

	.placeholder {
		color: #999 !important;
		font-size: 12px !important;
	}

	.scoll_box {
		padding: 10rpx 10rpx 20rpx 10rpx;
		box-sizing: border-box;
		width: 100%;
		background-color: #fff;
		min-height: 100px;
		max-height: 200px;
		overflow-y: auto;
	}

	.scoll_box>.scoll_box_item {
		padding: 8px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 14px;
		color: #333;
		border-bottom: 1px solid ghostwhite;
	}

	.scoll_box_item:last-child {
		border: none;
		padding-bottom: 0;
	}

	.empty_box {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100px;
		font-size: 12px;
		color: #636363;
		background-color: #fff;
	}

	.select_icon {
		margin-left: 20px;
		flex-shrink: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 18px;
		height: 18px;
		border: 1px solid gainsboro;
	}

	.select_icon.active {
		font-size: 12px;
		font-weight: bold;
		color: #fff;
		background-color: #007aff;
	}


	.btn_box {
		padding: 10px 5px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid ghostwhite;
		background-color: #fff;
	}

	.cancel_btn {
		padding: 10rpx;
	}

	.submit_btn {
		padding: 10rpx;
		color: #007aff;
	}

	.disabled {
		background-color: #F7F6F6 !important;
		border-color: #e5e5e5 !important;
		pointer-events: none;
	}
</style>