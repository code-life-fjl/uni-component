<template>
	<view class="cl_more_select_piker">
		<view class="input_box" @click="handleOpenPicker" :class="{hideBorder, disabled}">
			<view class="input_ele" :class="{placeholder: !hasSelect}">{{hasSelect ? showLabel : props.placeholder}}</view>
			<uni-icons class="clear_icon" v-if="hasSelect" type="clear" :size="24" color="#c0c4cc"
				@tap.native.stop="handleClear"></uni-icons>
			<uni-icons class="clear_icon" v-else type="bottom" :size="20" color="#c0c4cc"></uni-icons>
		</view>
	</view>
	<uni-popup ref="popupRef" type="bottom">
		<view class="btn_box">
			<text @click="handleCancel">取消</text>
			<text class="submit_btn" @click="handleSubmit">确实</text>
		</view>
		<view class="scoll_box" v-if="options.length > 0">
			<view v-for="(item, index) in formatOptions" :key="index" class="scoll_box_item">
				<text>{{item[labelField]}}</text>
				<view class="select_icon" :class="{active: selectList.includes(item[valueField])}" @click="handleToggle(item)">
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
		ref
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
		}
	})
	const emits = defineEmits(['update:modelValue', 'cancel', 'submit', 'clear', 'change'])
	// 弹窗选中的数据
	const selectList = ref([])
	// 下拉数据
	const formatOptions = computed(() => {
		return props.options.map(item => {
			if (typeof item !== 'object') {
				return {
					[props.labelField]: item,
					[props.valueField]: item,
				}
			} else {
				return item
			}
		})
	})
	// 显示选中数据的文本
	const showLabel = computed(() => {
		if (props.modelValue.length > 0) {
			return formatOptions.value.filter(item => props.modelValue.includes(item[props.valueField])).map(item => item[
				props.labelField]).join(props.interval)
		} else {
			return props.placeholder
		}
	})
	const hasSelect = computed(() => {
		return props.modelValue.length > 0
	})

	// 清除操作
	const handleClear = () => {
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
	const handleToggle = (item) => {
		const idx = selectList.value.findIndex(itm => itm === item[props.valueField])
		if (idx > -1) {
			selectList.value.splice(idx, 1)
		} else {
			selectList.value.push(item[props.valueField])
		}
		emits('submit', item, idx === -1, selectList.value)
	}
	const popupRef = ref()
	const handleOpenPicker = () => {
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
		padding: 10px 5px;
		box-sizing: border-box;
		width: 100%;
		background-color: #fff;
		min-height: 100px;
		max-height: 200px;
		overflow-y: auto;
	}

	.scoll_box>.scoll_box_item {
		padding: 8px 0;
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
		border-radius: 50%;
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

	.submit_btn {
		color: #007aff;
	}
	.disabled {
		background-color: #F7F6F6 !important;
		border-color: #e5e5e5 !important;
		pointer-events: none;
	}
</style>