<template>
	<view class="content">
		<button @click="show">展示</button>
		<cl-date-picker v-model="value" ref="datePickerRef" dateType="YYYY-MM-DD hh:mm:ss"></cl-date-picker>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	const options = ref([
		{
			label: '单选1',
			value: '1'
		},
		{
			label: '单选2',
			value: '2'
		},
		{
			label: '单选3',
			value: '3'
		},
	])
	const value = ref('2024-12-12 11:05:20')
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