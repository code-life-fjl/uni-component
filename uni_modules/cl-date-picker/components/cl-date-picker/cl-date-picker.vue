<template>
	<view class="input_box" :class="{disabled, hideBorder}">
		<view class="input_ele" :class="`input ${!modelValue && 'placeholder'}`" @click.stop="handleOpen">
			{{ modelValue || placeholder }}
		</view>
		<uni-icons class="clear_icon" v-if="modelValue" type="clear" :size="24" color="#c0c4cc"
			@click="handleClear"></uni-icons>
		<uni-icons class="clear_icon" v-else type="bottom" :size="20" color="#c0c4cc"></uni-icons>
	</view>
	<uni-popup type="bottom" ref="popupRef">
		<view class="btn_box">
			<text @click="cancal">取消</text>
			<text class="submit" @click="handleSubmit">确认</text>
		</view>
		<picker-view class="picker-view" :value="dateVal" @change="dateChange" mask-class="mask_class">
			<picker-view-column v-for="(item, index) in dateOptionList" :key="index">
				<view class="item" v-for="(itm, idx) in item.options" :key="idx">
					{{ itm }}
					{{ dateLabelMap[item.type] }}
				</view>
			</picker-view-column>
		</picker-view>
	</uni-popup>
</template>
<script setup>
	import {
		computed,
		nextTick,
		reactive,
		ref,
		watch
	} from 'vue'
	import {
		onLoad
	} from '@dcloudio/uni-app'
	const props = defineProps({
		dateType: {
			type: String,
			default: 'YYYY-MM-DD',
		},
		modelValue: {
			type: String,
			default: '',
		},
		placeholder: {
			type: String,
			default: '请选择',
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		// 隐藏border
		hideBorder: {
			type: Boolean,
			default: false,
		},
		// 年份下拉选项
		yearOptions: {
			type: Array,
			default: () => ([])
		},
		// 打开弹窗默认选中当前时间
		isNow: {
			type: Boolean,
			default: true
		}
	})

	const emits = defineEmits(['update:modelValue', 'cancel', 'submit'])
	const popupRef = ref()
	const dateOptionList = ref([])
	// 存储的时间下拉值，也就是选项的下标
	const dateVal = ref([])
	const dateLabelMap = {
		YYYY: '年',
		MM: '月',
		DD: '日',
		hh: '时',
		mm: '分',
		ss: '秒',
	}
	const dateTypeMap = [{
			type: 'YYYY',
			regExp: /^\d{4}$/,
		},
		{
			type: 'YYYY-MM',
			regExp: /^\d{4}-\d{2}$/,
		},
		{
			type: 'YYYY-MM-DD',
			regExp: /^\d{4}-\d{2}-\d{2}/,
		},
		{
			type: 'YYYY-MM-DD HH',
			regExp: /^\d{4}-\d{2}-\d{2} \d{2}$/,
		},
		{
			type: 'YYYY-MM-DD HH:mm',
			regExp: /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/,
		},
		{
			type: 'YYYY-MM-DD HH:mm:ss',
			regExp: /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/,
		},
	]
	const isEmpty = (val) => {
		return val === null || val === '' || val === undefined
	}
	// 补0的函数
	const supplementZero = (num) => {
		return num >= 10 ? num + '' : '0' + num
	}
	// 获取当前时间对象
	const getNowDate = () => {
		const now = new Date();
		const YYYY = now.getFullYear() + '';
		const MM = supplementZero(now.getMonth() + 1); // 月份从 0 开始，需要加 1
		const DD = supplementZero(now.getDate())
		const hh = supplementZero(now.getHours())
		const mm = supplementZero(now.getMinutes())
		const ss = supplementZero(now.getSeconds())
		return {
			YYYY,
			MM,
			DD,
			hh,
			mm,
			ss
		}
	}

	// 获取时间类型列表
	const dateFormatList = computed(() => {
		const regex = /(YYYY|MM|DD|hh|mm|ss)/g;
		const matches = props.dateType.match(regex);
		return matches || [];
	})
	// 获取时间值列表
	const dataValList = computed(() => {
		const regex = /(\d{4}|\d{2}|\d{2}|\d{2}|\d{2}|\d{2})/g;
		const matches = props.modelValue.match(regex);
		return matches || [];
	})
	const getDateValList = (str) => {
		const regex = /(\d{4}|\d{2}|\d{2}|\d{2}|\d{2}|\d{2})/g;
		const matches = props.modelValue.match(regex);
		return matches || [];
	}
	// 创建时间选项
	const createDateOptions = () => {
		dateOptionList.value = []
		const date = new Date()
		if (dateFormatList.value.length === 0) {
			throw new Error('传入的时间格式无法识别到有效值，有效值包含：YYYY,MM,DD,hh,mm,ss')
			return false
		}
		dateFormatList.value.forEach((item, index) => {
			let options = []
			// 设置年份选项
			if (item === 'YYYY') {
				if (props.yearOptions.length === 0) {
					for (let i = 1990; i <= 2050; i++) {
						options.push(i + '')
					}
				} else {
					for (let i = 1990; i <= 2050; i++) {
						options = props.yearOptions
					}
				}
			}
			// 设置月份选项
			if (item === 'MM') {
				for (let i = 1; i <= 12; i++) {
					options.push(supplementZero(i))
				}
			}
			// 设置天数选项
			if (item === 'DD') {
				for (let i = 1; i <= 31; i++) {
					options.push(supplementZero(i))
				}
			}
			// 设置小时选项
			if (item === 'hh') {
				for (let i = 0; i <= 23; i++) {
					options.push(supplementZero(i))
				}
			}
			// 设置分钟秒钟选项
			if (item === 'mm' || item === 'ss') {
				for (let i = 0; i <= 59; i++) {
					options.push(supplementZero(i))
				}
			}
			dateOptionList.value.push({
				type: item,
				options
			})
		})
	}

	// 获取对应下表进行时间回显
	const showDate = () => {
		dateVal.value = []
		dateFormatList.value.forEach((item, index) => {
			const curOption = dateOptionList.value.find(itm => itm.type === item)
			const curData = curOption.options.findIndex(itm => itm === dataValList.value[index])
			dateVal.value.push(curData)
		})
	}
	const dateChange = ({
		detail
	}) => {
		dateVal.value = detail.value
	}
	// 取消按钮
	const cancal = () => {
		emits('cancel')
		popupRef.value.close()
	}
	// 提交按钮
	const handleSubmit = () => {
		let str = props.dateType
		dateFormatList.value.forEach((item, index) => {
			const reg = new RegExp(item)
			const curOption = dateOptionList.value.find(itm => itm.type === item)
			const curData = curOption.options[dateVal.value[index]]
			str = str.replace(reg, curData)
		})
		console.log(str, 'str');
		emits('submit', str)
		emits('update:modelValue', str)
		popupRef.value.close()
	}
	// 打开弹窗
	const handleOpen = () => {
		if (isEmpty(props.modelValue)) {
			if (props.isNow) {
				let nowDateIdxList = []
				const nowDateMap = getNowDate()
				dateFormatList.value.forEach(item => {
					const curOption = dateOptionList.value.find(itm => itm.type === item)
					let curIdx = curOption.options.findIndex(itm => itm === nowDateMap[item])
					console.log(curIdx, curOption, nowDateMap[item]);
					nowDateIdxList.push(curIdx)
				})
				dateVal.value = nowDateIdxList
			} else {
				dateVal.value = []
			}
		} else {
			nextTick(() => showDate())
		}
		popupRef.value.open()
	}

	onLoad(() => {
		createDateOptions()
	})
	// 关闭弹窗
	const close = () => {
		popupRef.value.close()
	}
	defineExpose({
		close,
		open: handleOpen,
	})
	// 清除所选数据
	const handleClear = () => {
		emits('update:modelValue', '')
	}
</script>
<!-- 这里没有使用任何css编译器，方便在其他环境使用 -->
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