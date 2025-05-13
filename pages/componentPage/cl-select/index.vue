<template>
	<view class="content">
		<text>模仿uni-data-select做的可搜索下拉框，可直接回显数据，并定位到对应的数据项</text>
		<cl-select :options="options" v-model="value"></cl-select>
		{{value}}
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	const value = ref()
	const options = Array.from({
		length: 100
	}, (_, index) => {
		return {
			label: `我是展示的值${index}`,
			value: `value${index}`
		}
	})
</script>

<style scoped>
	.content {
		padding: 30px;
	}
</style>