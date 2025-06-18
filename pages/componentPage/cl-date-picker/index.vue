<template>
	<view class="content">
		<view class="">
			使用picker-view和picker-view-column封装的时间选择器，支持年月日时分秒各种形式的组合搭配。
		</view>
		<uni-section>基础使用</uni-section>
		<cl-date-picker v-model="value1" ref="datePickerRef"></cl-date-picker>
		<uni-section>切换时间格式</uni-section>
		<cl-date-picker v-model="value2" ref="datePickerRef" dateType="hh:mm:ss"></cl-date-picker>
		<uni-section>禁用状态</uni-section>
		<cl-date-picker v-model="value3" ref="datePickerRef" disabled></cl-date-picker>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	const value1 = ref()
	const value2 = ref('12:12:12')
	const value3 = ref()
	const datePickerRef = ref()
	const show = () => {
		datePickerRef.value.open()
	}
</script>

<style scoped>
	.content {
		padding: 30px;
		box-sizing: border-box;
	}
</style>