# cl-select
## 说明
该组件是根据uni-easyinput和scroll-view组件封装的下拉组件，组件样式与uni-select保持一致。
- 支持对象数组/基础类型数组的选项格式
- 输入时实时过滤选项
- 选中项自动回显
- 可自定义空状态提示
- 支持双向数据绑定
- 可以与uni-form组件搭配使用

> 单独使用需要配合cl-input组件
## Props 属性

| 属性名						| 类型									| 默认值				| 说明																																	|
|-------------------|--------------------	|------------	|--------------------------------------------------------------------	|
| options						| Array								| []					| 必填，选项数组（支持对象格式`{label,value}`或基础类型）									|
| labelField				| String							| 'label'			| 选项显示文本字段名																										|
| valueField				| String							| 'value'			| 选项值字段名																													|
| modelValue				| [String, Number]		| -						| 选中的值，使用v-model双向绑定																					|
| placeholder				| String							| '请选择'			| 未选择时的占位文本																										|
| maxHeight					| [String, Number]		| 300					| 下拉列表最大高度（单位：px）																						|
| placeholderStyle	| String							| ''					| 自定义占位符样式（支持CSS字符串）																			|
| disabled					| Boolean							| false				| 是否禁用输入框																												|
| maxlength					| Number							| 20					| 最大输入长度																													|
| trim							| String							| 'both'			| 同uni-easyinput										|
| hideBorder				| Boolean							| false				| 是否隐藏输入框边框																										|
| cursorSpacing			| Number							| 0						| 键盘弹起时光标距离输入框的高度（单位：px）															|
| emptyText					| String							| '暂无数据'		| 无匹配数据时的提示文本		|


## 方法列表

|方法名				| 			说明		|     参数																														|
| -----------	| -----------	|   -----------																											|
|clear				| 点击清除图标	|  -																																|
|focus				| 输入框聚焦		|  		-																															|
|blur					| 输入框失焦		|  			-																														|
|selected			| 选中数据			|  		valueFiled（选中数据的valueFiled值），data（选中数据的整个对象）	|
|input				| 输入内容改变	|  text（输入框内容）	-																								|

## 插槽说明

| 插槽名 | 说明                          |
|--------|-----------------------------|
| empty  | 自定义空状态显示内容          |
## 使用方式
```html
<template>
	<view class="content">
		<cl-select :options="options" v-model="value"></cl-select>
		选中的值：{{value}}
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
```
> 若有问题可联系作者：微信号：fjl_code_life