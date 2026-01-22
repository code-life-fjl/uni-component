# cl-tabs
## 说明
该组件百分比还原uni-ui的uni-segmented-control分段器组件。
- 支持v-model双向数据绑定
- 支持对象数组/基础类型数组的选项格式
- 支持`label`插槽自定义回显
- 支持监听tabs切换

## Props 属性

| 属性名						| 类型									| 默认值				| 说明																																	|
|-------------------|--------------------	|------------	|--------------------------------------------------------------------	|
| options						| Array								| []					| 必填，选项数组（支持对象格式`Object`或基础类型`Array<number						| string>`）	|
| labelField				| String							| 'label'			| 选项显示文本字段名																										|
| valueField				| String							| 'value'			| 选项值字段名																													|
| modelValue				| [String, Number]		| -						| 选中的值，使用v-model双向绑定																					|
| styleType					| String							| 'button'		| tabs的样式风格（button、text）																				|


## 方法列表

|方法名				| 			说明		|     参数																																								|
| -----------	| -----------	|   -----------																																					|
|change				| 切换数据			|  		val（选中数据的valueFiled值），data（选中数据的整个对象）, index（选中数据的下标值）	|

## 插槽说明

| 插槽名	| 说明																															|
|--------	|-----------------------------																		|
| label		| 自定义tabs的每项文本,作用域（label：文本值，tabItem：单项tabs对象, isActive：是否选中）	|
## 使用方式
```html
<template>
	<view class="content">
		<uni-section>按钮样式</uni-section>
		<cl-tabs v-model="value1" :option="option"></cl-tabs>
		<uni-section>文本样式</uni-section>
		<cl-tabs v-model="value2" :option="option" styleType="text" @change="handleChange"></cl-tabs>
		<uni-section>插槽</uni-section>
		<cl-tabs v-model="value2" :option="option" styleType="text" @change="handleChange">
			<template #label="{label, tabItem, isActive}">
				<text v-if="!isActive" style="color:blueviolet;">{{label}}~{{tabItem.value}}</text>
				<text v-else style="color:red;">{{label}}~{{tabItem.value}}</text>
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
```
> 若有问题可联系作者：微信号：fjl_code_life