<template>
	<view class="content">
		<cl-select :options="options" v-model="value"></cl-select>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	const value = ref()
	const options = Array.from({length: 100}, (_, index) => {
		return {
			label: `我是展示的值${index}`,
			value: `我是选中的值${index}`
		}
	})
</script>

<style scoped>
	.content {
		padding: 30px;
	}
</style>