<template>
	<view class="content">
		<uni-section>按钮样式</uni-section>
		<cl-ftabs v-model="value1" :option="option"></cl-ftabs>
		<uni-section>文本样式</uni-section>
		<cl-ftabs v-model="value2" :option="option" styleType="text" @change="handleChange"></cl-ftabs>
		<uni-section>插槽</uni-section>
		<cl-ftabs v-model="value2" :option="option" styleType="text" @change="handleChange">
			<template #label="{label, tabItem, isActive}">
				<text v-if="!isActive" style="color:blueviolet;">{{label}}~{{tabItem.value}}</text>
				<text v-else style="color:red;">{{label}}~{{tabItem.value}}</text>
			</template>
		</cl-ftabs>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	const option = [{
			value: '1',
			label: '数据1'
		},
		{
			value: '2',
			label: '数据2'
		},
		'数据3',
	]
	const value1 = ref('1')
	const value2 = ref('2')

	const handleChange = (val, item, index) => {
		console.log(val, item, index);
	}
</script>

<style scoped>
	.content {
		padding: 30rpx;
	}
</style>