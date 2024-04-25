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
		<view class="section_title">
			隐藏loading弹窗，并对请求参数（永远请求pageNum等于10的数据）和接口返回值进行二次处理（将结果包装为“我是处理过的返回值n”）
		</view>
		<view style="height: 600rpx;border: 1px solid gainsboro;">
			<cl-scroll-view :apiFun="apiFun1" :params="searchParams1" :loadToastConfig="false" :beforeHook="beforeHook"
				:afterHook="afterHook">
				<template v-slot:list="{list}">
					<view class="list_box">
						<view v-for="item in list" :key="item" class="item">{{item}}</view>
					</view>
				</template>
			</cl-scroll-view>
		</view>
		<view class="section_title">
			无数据页面
		</view>
		<view style="height: 800rpx;border: 1px solid gainsboro;">
			<cl-scroll-view :apiFun="apiFun2" :params="searchParams2">
				<template v-slot:list="{list}">
					<view class="list_box">
						<view v-for="item in list" :key="item" class="item">{{item}}</view>
					</view>
				</template>
			</cl-scroll-view>
		</view>
		<view class="section_title">
			自定义无数据页面
		</view>
		<view style="height: 800rpx;border: 1px solid gainsboro;">
			<cl-scroll-view :apiFun="apiFun2" :params="searchParams2"
				:emptyShowConfig="{text: '好像没有拿到数据哇', imgSrc: '/static/logo.png'}">
				<template v-slot:list="{list}">
					<view class="list_box">
						<view v-for="item in list" :key="item" class="item">{{item}}</view>
					</view>
				</template>
			</cl-scroll-view>
		</view>
		<view class="section_title">
			使用插槽控制自定义无数据页面
		</view>
		<view style="height: 800rpx;border: 1px solid gainsboro;">
			<cl-scroll-view :apiFun="apiFun2" :params="searchParams2"
				:emptyShowConfig="{text: '好像没有拿到数据哇', imgSrc: '/static/logo.png'}">
				<template v-slot:list="{list}">
					<view class="list_box" v-if="list.length > 0">
						<view v-for="item in list" :key="item" class="item">{{item}}</view>
					</view>
				</template>
				<template v-slot:empty>
					<view style="height: 100%;background-color: aquamarine;">我是无数据页面，你可以任意设置</view>
				</template>
			</cl-scroll-view>
		</view>
		<view class="section_title">
			显示第一次加载直接失败的状态
		</view>
		<view style="height: 800rpx;border: 1px solid gainsboro">
			<cl-scroll-view :apiFun="apiFun3" :params="searchParams3">
				<template v-slot:list="{list}">
					<view class="list_box">
						<view v-for="item in list" :key="item" class="item">{{item}}</view>
					</view>
				</template>
			</cl-scroll-view>
		</view>
		<view class="section_title">
			显示非第一次加载失败的状态，使用messageField字段控制提示信息，使用errorToastConfig隐藏弹窗图标，使用errorShowConfig配置错误时展示的文本
		</view>
		<view style="height: 800rpx;border: 1px solid gainsboro">
			<cl-scroll-view :apiFun="apiFun4" :params="searchParams4" hideLoad messageField="message"
				:errorToastConfig="{icon: 'none'}" :errorShowConfig="{text: '好像没有拿到数据哇', imgSrc: '/static/logo.png'}">
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
	const searchParams1 = reactive({
		pageSize: 10,
		pageNum: 1
	})
	const searchParams2 = reactive({
		pageSize: 10,
		pageNum: 1
	})
	const searchParams3 = reactive({
		pageSize: 10,
		pageNum: 1
	})
	const searchParams4 = reactive({
		pageSize: 10,
		pageNum: 1
	})
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
	const apiFun1 = (params) => {
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
	const apiFun2 = (params) => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve({
					code: 200,
					data: [],
					message: '查询成功！'
				})
			}, 1000)
		})
	}
	const apiFun3 = (params) => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve({
					code: 500,
					data: [],
					message: '查询失败！'
				})
			}, 1000)
		})
	}
	// 测试方法，模仿第一次接口调用成功，第二次接口调用识别
	const apiFun4 = (params) => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve({
					code: params.pageNum === 1 ? 200 : 500,
					data: params.pageNum === 1 ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] : [],
					message: params.pageNum === 1 ? '查询成功！' : '这是一次测试信息提示！',
				})
			}, 1000)
		})
	}

	// 接口调用之前设置参数（永远只返回pageNum=10的数据）
	const beforeHook = (params) => {
		params.pageNum = 10
		return params
	}

	const afterHook = (list) => {
		return list.map(item => `我是处理过的返回值${item}`)
	}
</script>

<style scoped>
	.content {
		padding: 30rpx;
	}

	.list_box {
		padding: 20rpx;
	}

	.item {
		padding: 20rpx;
		border: 1px solid gainsboro;
	}
</style>