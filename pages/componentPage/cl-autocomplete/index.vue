<template>
	<view class="content">
		<text>模仿uni-data-select做的提示输入框，并可以根据输入内容进行过滤</text>
		<cl-autocomplete v-model="searchText" :options="fruitList" placeholder="搜索水果" max-height="400" is-highlight/>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	const fruitList = ['Apple', 'Banana', 'Orange', 'Mango', 'Strawberry']
	const searchText = ref('')
</script>

<style scoped>
	.content {
		padding: 30px;
	}
</style>