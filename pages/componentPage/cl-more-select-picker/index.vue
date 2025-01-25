<template>
	<view class="content">
		<cl-more-select-picker v-model="val" :options="options"></cl-more-select-picker>
	</view>
</template>

<script setup>
	import {ref} from 'vue'
	import {onLoad} from '@dcloudio/uni-app'
	const val = ref([])
	const options = ref([])
	onLoad(() => {
		options.value = Array.from({length: 100}, (_, i) => {
			return {
				label: '我是label' + (i + 1),
				value: i + 1
			}
		})
	})
</script>

<style scoped>
	.content {
		padding: 40px;
		box-sizing: border-box;
	}
</style>