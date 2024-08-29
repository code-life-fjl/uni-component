<template>
	<cl-nav-bar left-text="返回" right-text="设置" title="标题" @clickLeft="() =>{}" @clickRight="() =>{}">
	<template #left>22</template>
	<template #right>123</template>
	</cl-nav-bar>
	<view style="padding: 30rpx;">
		cl-nav-bar组件与uni-nav-bar组件并无区别，只是在其基础上定义了一些常用的属性与方法。具体差异可见md说明。
	</view>
</template>

<script setup>
</script>

<style>
</style>