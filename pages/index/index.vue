<template>
	<view class="content">
		<button class="button" v-for="(item, index) in pageList" :key="index"
			@click="toPage(item.componentPath)">{{item.componentName}}</button>

	</view>
	<comboxObj label="label" value="value" :candidates="candidates" v-model="city"></comboxObj>
</template>

<script setup>
	import comboxObj from './uni-comboxObj.vue'
	import {
		ref,
	} from 'vue'
	const candidates = ref([{
			label: 1,
			value: 111
		},
		{
			label: 2,
			value: 2222
		}
	])
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
</style>