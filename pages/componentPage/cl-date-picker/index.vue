<template>
	<view class="content">
		<view class="">
			使用picker-view和picker-view-column封装的时间选择器，支持年月日时分秒各种形式的组合搭配。
		</view>
		<cl-date-picker v-model="value" ref="datePickerRef" isNow dateType="YYYY-MM-DD"></cl-date-picker>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	const value = ref('2022-12-12')
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