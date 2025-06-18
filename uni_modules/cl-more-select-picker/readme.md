# cl-more-select-picker
## 说明
该组件是根据uni-popup组件封装的多选组件，组件样式与uni-select保持一致。可以与uni-form组件搭配使用
## 使用方式
```html
	<template>
		<view class="content">
			<cl-more-select-picker v-model="value" :options="options" ></cl-more-select-picker>
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
	
# 属性列表
| 属性名			| 说明																																								|  类型											| 默认值				|
| -----------	| -----------																																				| -----------								| -----------	|
| options			| 数据列表（支持对象数组[{label: '我是label', value: '我是value'}]跟普通数组[1,2,3]）	|  Array										| []					|
| placeholder	| 输入框提示																																					|String											|请选择				|
| disabled		| 是否禁用																																						|Boolean										|false				|
| hideBorder	| 是否隐藏边框																																				|Boolean										| false				|
| v-model			| v-model绑定的值（只支持数字，字符串等基本类型）																			|  String, Number, undefind	| undefined		|
| labelFiled	|  选中数据对象里面用来展示的字段（options为普通数组则忽略）														|  String										| text				|
| valueFiled	| 选中数据对象里面用来回传的字段   （options为普通数组则忽略）													| String										| value				|
| emptyText		| 无数据的展示文本																																		| String										| 暂无数据			|
| selectTarget| 切换状态的触发元素 [checkbox：点击选框，row：点击行数据]															| String										| row					|
| isFilter		| 是否需要过滤																																				| Boolean										| true				|
| maxLength		| 设置可选数量	（为空则不显示）																												| Number										| undefined		|

# 方法列表
|方法名					| 			说明		|     参数 |
| -----------	| -----------			|   ----------- |       
|clear				| 点击清除图标			|  -			|        
|submit | 确认按钮|  		参数1：选中数据的valueFiled值，参数2：当前数据对象	|        
|cancel| 取消按钮|  			-	|        
|change| 状态改变|  		参数1：当前数据对象，参数2：选中还是取消选中（Boolearn），参数3：所有选中的值	|        

> 若有问题可联系作者：微信号：fjl_code_life