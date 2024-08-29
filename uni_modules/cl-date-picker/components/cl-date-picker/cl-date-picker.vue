<template>
	<uni-popup type="bottom" ref="popupRef">
		<view class="btn_box">
			<text @click="cancal">取消</text>
			{{dateVal}}
			<text class="submit" @click="submit">确认</text>
		</view>
		<picker-view class="picker-view" :value="dateVal" @change="dateChange" mask-class="mask_class">
			<picker-view-column v-if="dateType.includes('YYYY')">
				<view class="item" v-for="(item,index) in dateListMap['YYYY']" :key="index">{{item}}年</view>
			</picker-view-column>
			<picker-view-column v-if="dateType.includes('MM')">
				<view class="item" v-for="(item,index) in dateListMap['MM']" :key="index">{{item}}月</view>
			</picker-view-column>
			<picker-view-column v-if="dateType.includes('DD')">
				<view class="item" v-for="(item,index) in dateListMap['DD']" :key="index">{{item}}日</view>
			</picker-view-column>
			<picker-view-column v-if="dateType.includes('hh')">
				<view class="item" v-for="(item,index) in dateListMap['hh']" :key="index">{{item}}</view>
			</picker-view-column>
			<picker-view-column v-if="dateType.includes('mm')">
				<view class="item" v-for="(item,index) in dateListMap['mm']" :key="index">{{item}}</view>
			</picker-view-column>
			<picker-view-column v-if="dateType.includes('ss')">
				<view class="item" v-for="(item,index) in dateListMap['ss']" :key="index">{{item}}</view>
			</picker-view-column>
		</picker-view>
	</uni-popup>

</template>
<script setup>
	import {
		nextTick,
		reactive,
		ref,
		watch
	} from 'vue'
	const props = defineProps({
		dateType: {
			type: String,
			default: 'YYYY-MM-DD hh-mm-ss'
		},
		modelValue: {
			type: String,
			default: ''
		}
	})

	const emits = defineEmits(['update:modelValue', 'cancel', 'submit'])
	const popupRef = ref()

	const showList = ref([])
	const visible = ref(true)
	const dateListMap = reactive({
		YYYY: [],
		MM: [],
		DD: [],
		hh: [],
		mm: [],
		ss: [],
	})
	const years = ref([])
	const months = ref([])
	const days = ref([])
	const hours = ref([])
	const minutes = ref([])
	const seconds = ref([])
	const dateVal = ref([])
	const dateTypeMap = [{
			type: 'YYYY',
			regExp: /^\d{4}$/
		},
		{
			type: 'YYYY-MM',
			regExp: /^\d{4}-\d{2}$/
		}, {
			type: 'YYYY-MM-DD',
			regExp: /^\d{4}-\d{2}-\d{2}/
		},
		{
			type: 'YYYY-MM-DD hh',
			regExp: /^\d{4}-\d{2}-\d{2} \d{2}$/
		},
		{
			type: 'YYYY-MM-DD hh:mm',
			regExp: /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/
		},
		{
			type: 'YYYY-MM-DD hh:mm:ss',
			regExp: /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/
		}
	]

	const createDateList = () => {
		const date = new Date()
		if (props.dateType.includes('YYYY')) {
			for (let i = 1990; i <= 2050; i++) {
				dateListMap.YYYY.push(i + '')
			}
		}
		if (props.dateType.includes('MM')) {
			for (let i = 1; i <= 12; i++) {
				if (i <= 9) {
					dateListMap.MM.push('0' + i)
				} else {
					dateListMap.MM.push(i + '')
				}
			}
		}
		if (props.dateType.includes('DD')) {
			for (let i = 1; i <= 31; i++) {
				if (i <= 9) {
					dateListMap.DD.push('0' + i)
				} else {
					dateListMap.DD.push(i + '')
				}
			}
		}
		if (props.dateType.includes('hh')) {
			for (let i = 0; i <= 11; i++) {
				if (i <= 9) {
					dateListMap.hh.push('0' + i)
				} else {
					dateListMap.hh.push(i + '')
				}
			}
		}
		if (props.dateType.includes('mm')) {
			for (let i = 0; i <= 59; i++) {
				if (i <= 9) {
					dateListMap.mm.push('0' + i)
				} else {
					dateListMap.mm.push(i + '')
				}
			}
		}
		if (props.dateType.includes('ss')) {
			for (let i = 0; i <= 59; i++) {
				if (i <= 9) {
					dateListMap.ss.push('0' + i)
				} else {
					dateListMap.ss.push(i + '')
				}
			}
		}
	}
	// 回显时间
	// dateList为切割的时间数组，例如['2024', '12', '12']
	const showDate = (dateList) => {
		dateVal.value = []
		// 拿到与时间数组格式一致的格式列表，例如['YYYY', 'MM']
		const dateTypeList = props.dateType.split(/[-,:, ]/)
		console.log(dateTypeList, 'dateTypeList');
		dateTypeList.forEach((item, index) => {
			if (item === 'YYYY') {
				const curYearIdx = dateListMap[item].findIndex(item => item == dateList[index])
				dateVal.value[index] = curYearIdx
			}
			if (item === 'MM') {
				const curMonthIdx = dateListMap[item].findIndex(item => item === dateList[index])
				dateVal.value[index] = curMonthIdx
			}
			if (item === 'DD') {
				const curDayIdx = dateListMap[item].findIndex(item => item === dateList[index])
				dateVal.value[index] = curDayIdx
			}
			if (item === 'hh') {
				const curHourIdx = dateListMap[item].findIndex(item => item === dateList[index])
				console.log(curHourIdx, 'curHourIdx');
				dateVal.value[index] = curHourIdx
			}
			if (item === 'mm') {
				const curMinuteIdx = dateListMap[item].findIndex(item => item === dateList[index])
				dateVal.value[index] = curMinuteIdx
			}
			if (item === 'ss') {
				const curSecondIdx = dateListMap[item].findIndex(item => item === dateList[index])
				dateVal.value[index] = curSecondIdx
			}
		})
	}
	// 获取当前月份的日期
	// const getCurDateDays = (year, month) => {
	// 	days.value = []
	// 	if (props.dateType.includes('YYYY-MM-DD')) {
	// 		const [year, month] = dateVal.value
	// 		if (year && month) {
	// 			const dayNum = new Date(years.value[year], months.value[month], 0).getDate()
	// 			for (let i = 1; i <= dayNum; i++) {
	// 				days.value.push(i)
	// 			}
	// 		}
	// 	}
	// }
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
	const submit = () => {
		const resDate = props.dateType.replace(/YYYY/g, dateListMap.YYYY[dateVal.value[0]])
			.replace(/MM/g, dateListMap.MM[dateVal.value[1]])
			.replace(/DD/g, dateListMap.DD[dateVal.value[2]])
			.replace(/hh/g, dateListMap.hh[dateVal.value[3]])
			.replace(/mm/g, dateListMap.mm[dateVal.value[4]])
			.replace(/ss/g, dateListMap.ss[dateVal.value[5]]);
		console.log(resDate, 'resDate');
		emits('submit', resDate)
		emits('update:modelValue', resDate)
		popupRef.value.close()
	}
	// 打开弹窗
	const open = () => {
		const idx = dateTypeMap.findIndex(item => item.type === props.dateType)
		if (idx < 0) {
			console.error('传入时间格式有误，支持：' + dateTypeMap.map(item => item.type))
			return
		}
		createDateList()
		const curType = dateTypeMap[idx]['type']
		const curRegExp = dateTypeMap[idx]['regExp']
		if (!props.modelValue) {
			dateVal.value = []
		} else {
			if (curRegExp.test(props.modelValue)) {
				const valList = props.modelValue.split(/[-,:, ]/)
				nextTick(() => showDate(valList))
			} else {
				console.error('传入的时间值与定义的时间格式不匹配')
				return
			}
		}
		popupRef.value.open()
	}
	// 关闭弹窗
	const close = () => {
		popupRef.value.close()
	}
	defineExpose({
		close,
		open
	})
</script>
<style scoped>
	.picker-view {
		width: 100%;
		height: 500rpx;
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
</style>