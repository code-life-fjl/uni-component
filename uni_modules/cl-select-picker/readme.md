# el-select-picker
## 说明
该组件是根据uni-popup和picker-view组件封装的下拉弹出组件，组件样式与uni-select保持一致。
 - 可以与uni-form组件搭配使用
 - 可以自定义选中字段与文本字段
 - 支持对象类型和字符串，数字类型的数组
 - 底部弹出，规避常规组件在顶部或者底部被遮挡的问题
## 使用方式
```html
<template>
	<view class="content">
		<cl-select-picker style="width: 340px;" v-model="formData.picker" :options="options">
		</cl-select-picker>
	</view>
</template>
<script setup>
	import {
		ref,
		reactive
	} from 'vue'
	const formData = reactive({
		picker: 'value3'
	})
	const options = ref([{
			label: '我是展示的值1',
			value: 'value1'
		},
		{
			label: '我是展示的值2',
			value: 'value2'
		},
		{
			label: '我是展示的值3',
			value: 'value3'
		},
	])
</script>
```
# 属性列表
| 属性名						| 说明																																																			|  类型											| 默认值							|
| -----------				| -----------																																																| -----------								| -----------					|
| options						| 数据列表（支持对象数组[{label: '我是label', value: '我是value'}]跟普通数组[1,2,3]）															|  Array										| []								|
| modelValue				| v-model绑定的值（只支持数字，字符串等基本类型）																												|  String, Number, undefind	| undefined						|
| placeholder				| 输入框提示																																												|String											|请选择								|
| valueFiled				| 选中数据对象里面用来回传的字段   （options为普通数组则忽略）                                                                | String										| value								|
| labelFiled					|  选中数据对象里面用来展示的字段（options为普通数组则忽略）																																	|  String										| label									|
| disabled				| 是否禁用																																															|Boolean											|false	|
| hideEmptyText				| 当列表没有数据的时候是否新增一条"暂无数据"的下拉选项用来提示用户（该选项无法被选中）														|Boolean											| false									|
| hideBorder		| 是否隐藏边框																																					|Boolean											| false								|
| emptyText						| hideEmptyText开启后的展示文本																																									| String										| 暂无数据								|

# 方法列表
|方法名					| 			说明		|     参数 |
| -----------	| -----------			|   ----------- |       
|clear				| 点击清除图标			|  -			|        
|cancel| 点击取消|  		-	|        
|submit				| 点击确定进行选中			|   	参数1为选中的对象里面自定义valueFiled值，参数2为选中的完整对象		|       

> 若有问题可联系作者：微信号：fjl_code_life
