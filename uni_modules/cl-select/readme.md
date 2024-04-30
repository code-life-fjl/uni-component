# cl-select
## 说明
该组件是根据uni-easyinput和scroll-view组件封装的下拉组件，组件样式与uni-select保持一致。可以与uni-form组件搭配使用
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
# 属性列表
| 属性名																																							| 说明											|  类型				| 默认值|
| -----------																																					| -----------								| -----------	| -----------|
| options																																							| 数据列表（支持对象数组[{label: '我是label', value: '我是value'}]跟普通数组[1,2,3]）|  Array			| []|
| placeholder																																					| 输入框提示								|String				|请选择|
| disabled																																						| 是否禁用									|Boolean			|false|
| hideBorder																																					| 是否隐藏边框							|Boolean			| false|
| modelValue																																					| v-model绑定的值（只支持数字，字符串等基本类型）|  String, Number, undefind| undefined|
| labelFiled																																					|  选中数据对象里面用来展示的字段（options为普通数组则忽略）|  String			| text|
| valueFiled																																					| 选中数据对象里面用来回传的字段   （options为普通数组则忽略）| String			| value|
| emptyText																																						| hideEmptyText开启后的展示文本| String			| 暂无数据|
| maxlength																																						| 最大输入长度，设置为 -1 的时候不限制最大长度| Number			| 20|
| trim																																								| 是否自动去除空格 both: 去除两端空格; left: 去除左侧空格; right: 去除右侧空格; all: 去除所有空格; none: 不去除空格 | String | both |
| cursorSpacing																																				| 指定光标与键盘的距离，单位 px 。取 textarea/input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离。| Number			|0|

# 方法列表
|方法名					| 			说明		|     参数 |
| -----------	| -----------			|   ----------- |       
|clear				| 点击清除图标			|  -			|        
|focus| 输入框聚焦|  		-	|        
|blur| 输入框失焦|  			-	|        
|selected| 选中数据|  		valueFiled（选中数据的valueFiled值），data（选中数据的整个对象）	|        
|input| 输入内容改变|  text（输入框内容）	-	|        

> 若有问题可联系作者：微信号：fjl_code_life