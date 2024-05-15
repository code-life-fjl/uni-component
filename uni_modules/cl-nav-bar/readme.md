# cl-nav-bar
## 说明
该组件是根据uni-nav-bar二次封装所得，组件属性与方法基本一致。
## 使用方式
	```html
	<template>
		<view class="content">
			<cl-nav-bar></cl-nav-bar>
		</view>
	</template>
	<script setup></script>
	```
# 属性列表
| 属性名						| 说明																																																			|  类型											| 默认值							|
| -----------				| -----------																																																| -----------								| -----------					|
| title								| 标题文字，如果不穿则自动从page.json文件里获取，获取的顺序是优先查询pages数组，找不到则查询subPackages数组			|  String										| -								|
| leftText				| 左侧按钮文本																												|  String					|    - |
| rightText				| 右侧按钮文本																												|  String					|    - |
| leftIcon				| 左侧按钮图标	（图标类型参考 uni-icon 图标 type 属性）											|String											|-								|
| rightIcon				| 右侧按钮图标	（图标类型参考 uni-icon 图标 type 属性）											|String											|-								|
| color				    | 图标和文字颜色                                                                | String										| #000000								|
| backgroundColor	|  导航栏背景颜色									|  String										| #FFFFFF										|
| fixed				| 是否固定顶部																										|Boolean											|false	|
| statusBar				| 是否包含状态栏																										|Boolean											|false	|
| shadow				| 导航栏下是否有阴影																										|Boolean											|false	|
| border				| 导航栏下是否有边框																										|Boolean											|true	|
| height				| 导航栏高度														|Number/String												| 44									|
| dark		| 导航栏开启暗黑模式																																					|Boolean											| false								|
| leftWidth						| 导航栏左侧插槽宽度																																								| Number/String											| 120rpx								|
| rightWidth						| 导航栏右侧插槽宽度																																								| Number/String											| 120rpx								|
| stat						| 是否开启统计标题功能。注意：只有使用title 属性 ，且开启了统计功能才生效																																					| Number/String											| 120rpx								|

# 事件列表
|插槽名称					| 			说明		|     参数 |
| -----------	| -----------			|   ----------- |       
|clickLeft| 左侧按钮点击时触发|  		-	|        
|clickRight| 右侧按钮点击时触发			|   	-		|  

<!-- # 插槽列表
|插槽名称					| 			说明		|     参数 |
| -----------	| -----------			|   ----------- |       
|default					| 向导航栏中间插入			|  -			|        
|left| 向导航栏左侧插入|  		-	|        
|right				| 向导航栏右侧插入			|   	-		|     -->  

> 若有问题可联系作者：微信号：fjl_code_life