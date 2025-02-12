<template>
	<view class="content">
		<button class="button" v-for="(item, index) in pageList" :key="index"
			@click="toPage(item.componentPath)">{{item.componentName}}</button>
	</view>
</template>

<script setup>
	import {
		ref,
	} from 'vue'
	const city = ref('')
	const pageList = ref([{
			componentName: 'cl-select-picker',
			componentPath: '/pages/componentPage/cl-select-picker/index'
		},
		{
			componentName: 'cl-scroll-view',
			componentPath: '/pages/componentPage/cl-scroll-view/index'
		},
		{
			componentName: 'cl-select',
			componentPath: '/pages/componentPage/cl-select/index'
		},
		{
			componentName: 'cl-nav-bar',
			componentPath: '/pages/componentPage/cl-nav-bar/index'
		},
		{
			componentName: 'cl-date-picker',
			componentPath: '/pages/componentPage/cl-date-picker/index'
		},
		{
			componentName: 'cl-autocomplete',
			componentPath: '/pages/componentPage/cl-autocomplete/index'
		}
	])
	const pickerSubmit = (val, curData) => {
		console.log(val, curData);
	}

	const toPage = (url) => {
		uni.navigateTo({
			url
		})
	}
</script>

<style scoped>
	.content {
		padding: 50px;

	}

	.content>.button {
		margin-bottom: 20rpx;
	}

	.table,
	.td {
		box-sizing: border-box;
		border: 1px solid #dadada;
	}
</style>