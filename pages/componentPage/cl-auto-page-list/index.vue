<template>
	<view class="cl_flex_page">
		<uni-search-bar v-model="params.label" style="background-color: #fff;" placeholder="请输入关键字查询"
			@confirm="handleSearch">
		</uni-search-bar>
		<cl-auto-page-list class="list_box" :list="list" ref="clAutoPageListRef" :params="params">
			<template #list={list}>
				<view class="list_box_item" v-for="(item,index) in list" :key="index">
					{{item.label}}
				</view>
			</template>
		</cl-auto-page-list>
	</view>
</template>

<script setup>
	import {
		reactive,
		ref
	} from 'vue'
	const params = reactive({
		label: '',
	})

	const list = Array.from({
		length: 20
	}, (_, index) => {
		return {
			label: `我是展示的值${index}`,
			value: `value${index}`
		}
	})
	const clAutoPageListRef = ref()
	const handleSearch = () => {
		clAutoPageListRef.value.search()
	}
</script>

<style lang="scss" scoped>
	.list_box {
		flex: 1;
		overflow-y: auto;

		&_item {
			padding: 20rpx;
			margin-bottom: 20rpx;
			background-color: aqua;
		}
	}
</style>