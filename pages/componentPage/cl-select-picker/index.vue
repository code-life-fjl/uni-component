<template>
	<view class="content">
		<view class="section_title">
			基础使用
		</view>
		<cl-select-picker style="width: 340px;" v-model="formData.picker" :options="options" @cancel="cancel" @clear="clear"
			@submit="pickerSubmit" disabled>
		</cl-select-picker>
		<view style="margin-top: 50rpx;">
			<view class="section_title">
				配合uni-forms使用
			</view>
			<uni-forms :modelValue="formData" ref="formRef" label-width="150rpx">
				<uni-forms-item label="表单测试" name="picker1" :rules="[{required: true, errorMessage: '表单测试不能为空'}]" required>
					<cl-select-picker v-model="formData.picker1" :options="options"></cl-select-picker>
				</uni-forms-item>
				<button @click="formSubmit">表单提交</button>
			</uni-forms>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		reactive
	} from 'vue'
	const formData = reactive({
		picker: 'value2',
		picker1: 4
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
		4
	])
	const pickerSubmit = (val, curData) => {
		console.log(val, curData);
	}
	const clear = () => {
		console.log('点击了清除按钮！');
	}
	const cancel = () => {
		console.log('点击了取消按钮！');
	}
	const formRef = ref()
	const formSubmit = async () => {
		console.log(formRef.value, 'formRef');
		await formRef.value.validate()
	}
</script>

<style scoped>
	.content {
		padding: 30px;
	}
</style>