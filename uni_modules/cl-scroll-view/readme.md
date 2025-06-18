# cl-scroll-view
## 说明
该组件是对uniapp原生scroll-view组件的二次封装，我们平时在使用scroll-view组件的时候，如果想要一个完整的功能需要添加各种属性与方法，所以封装了该组件对部分操作进行简化。

## 使用方式
```vue
<template>
	<view class="content">
		<view class="section_title">
			基本使用
		</view>
		<view style="height: 600rpx;border: 1px solid gainsboro;">
			<cl-scroll-view :apiFun="apiFun" :params="searchParams">
				<template v-slot:list="{list}">
					<view class="list_box">
						<view v-for="item in list" :key="item" class="item">{{item}}</view>
					</view>
				</template>
			</cl-scroll-view>
		</view>
	</view>
</template>
<script setup>
	import {
		reactive,
		ref
	} from 'vue';
	const searchParams = reactive({
		pageSize: 10,
		pageNum: 1
	})
	// 模仿接口
	const apiFun = (params) => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				const data = Array.from({
					length: params.pageSize
				}, (_, i) => (i + 1) + (params.pageNum - 1) * params.pageSize)
				resolve({
					code: 200,
					data,
					message: '查询成功！'
				})
			}, 1000)
		})
	}
</script>
```
	
# 属性列表
| 属性名										| 说明																																																																															|  类型						| 默认值				|
| -----------								| -----------																																																																											| -----------			| -----------	|
| lowerThreshold						| 距底部/多远时（单位px），触发加载事件																																																															|  Number, String	| 50					|
| refresherEnabled					| 开启下拉刷新																																																																											|Boolean					|true					|
| autoLoad									| 是否页面加载自动加载列表																																																																					|Boolean					| true				|
| autoRefreshByParamsChange	| 参数更新是否自动刷新																																																																							|Boolean					| false				|
| apiFun										| 接口方法（只支持返回Promise对象）																																																																	|Function					|-						|
| params										| 接口的请求参数（一般包含页码，码值等）																																																															|Object						| {}					|
| pageNumField							| 页码字段，parmas对象里面的属性																																																																		|  String					| pageNum			|
| loadPageNum								|  每页加载数据长度																																																																								|  Number					| 10					|
| beforeHook								| 接口调用前的钩子函数，参数为接口请求参数parmas，此处可对参数进行二次处理。内部使用JSON进行深拷贝，部分类型可能失效																										| Function				| -						|
| afterHook									| 接口调用成功后的钩子函数，参数为接口返回的列表数据																																																									| Function				| -						|
| errorHook									| 接口调用失败后的钩子函数，该钩子函数有两个参数，参数1为错误对象，参数2为失败类型，类型为project则是业务逻辑报错，返回错误状态码值不对；类型为network是接口超时或者404等	| Function				| -						|
| successCodeNum						| 判断接口请求成功的状态码值																																																																				| Number					| 200					|
| codeField									| 判断接口请求成功的状态码字段																																																																			| String					| code				|
| msgField									| 接口调用后获取接口提示信息的字段，传了该值则错误提示会显示对应字段的值，不穿则错误提示直接为‘加载失败！’																														| String					| ''					|
| resField									| 接口调用成功后接收数据字段																																																																				| String					| data				|

# 插槽
| 插槽名						| 说明				| 作用域数据  |
| -----------		  | ----------| -----------| 
|  list           | 列表插槽  |  list：接口返回的列表数据 |
|  empty           | 无数据的页面展示插槽  |  - |
|  error           | 接口报错时页面展示的插槽（分为第一次调用接口报错跟非第一次接口报错）  |  list：接口返回的列表数据 |

> 注意：若想要在组件外部使用search（查询）或refresh（刷新）方法，可以使用ref进行调用，并将调用方法放在`nextTick`内部调用。

> 若有问题可联系作者：微信号：fjl_code_life