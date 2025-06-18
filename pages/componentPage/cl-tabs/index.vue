<template>
	<view class="content">
		<uni-section>按钮样式</uni-section>
		<cl-tabs v-model="value1" :option="option"></cl-tabs>
		<uni-section>文本样式</uni-section>
		<cl-tabs v-model="value2" :option="option" styleType="text" @change="handleChange"></cl-tabs>
		<uni-section>插槽</uni-section>
		<cl-tabs v-model="value2" :option="option" styleType="text" @change="handleChange">
			<template #label="{label, tabItem}">
				<text style="color:blueviolet;">{{label}}~{{tabItem.value}}</text>
			</template>
		</cl-tabs>
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