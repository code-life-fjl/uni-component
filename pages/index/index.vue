<template>
	<view class="content">
		<button class="button" v-for="(item, index) in pageList" :key="index"
			@click="toPage(item.componentPath)">{{item.componentName}}</button>
	</view>
</template>

<script setup>
	import {
		ref,onMounted
	} from 'vue'
	import {onShareAppMessage} from '@dcloudio/uni-app'
	const formRef = ref()
	const formData = ref({
		val: ''
	})
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
		},
		{
			componentName: 'cl-auto-page-list',
			componentPath: '/pages/componentPage/cl-auto-page-list/index'
		},
		{
			componentName: 'cl-more-select-picker',
			componentPath: '/pages/componentPage/cl-more-select-picker/index'
		},
		{
			componentName: 'cl-tabs',
			componentPath: '/pages/componentPage/cl-tabs/index'
		},
		{
			componentName: 'cl-table',
			componentPath: '/pages/componentPage/cl-table/index'
		}
	])

	const toPage = (url) => {
		uni.navigateTo({
			url
		})
	}
	onMounted(() => {
		uni.showShareMenu({
			title: '234',
			menus: ["shareAppMessage", "shareTimeline"]
		})
	})
	onShareAppMessage((res) => {
		console.log(res);
		return {
			title: '243'
		}
	})
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