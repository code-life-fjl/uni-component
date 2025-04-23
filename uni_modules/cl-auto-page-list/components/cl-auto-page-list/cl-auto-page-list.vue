<template>
	<scroll-view style="height: 100%" :scroll-y="true" :scroll-top="screenTop" :refresher-triggered="refreshLoading"
		:refresher-enabled="true" :lower-threshold="lowerThreshold" @scroll="scrollView" @scrolltolower="bootmScroll"
		@refresherrefresh="refresherrefresh">
		<slot name="list" :list="showList"></slot>
		<uni-load-more :status="loadMoreStatus" v-if="['loading', 'noMore', 'more'].includes(loadMoreStatus)" />
		<slot name="empty" v-if="loadMoreStatus === 'noData'">
			<view class="empty_box">
				<image class="empty_box_image" :src="emptyIconSrc" mode="aspectFit" />
				<text class="empty_box_text">{{ emptyText }}</text>
			</view>
		</slot>
	</scroll-view>
</template>

<script setup>
	import {
		ref,
		nextTick,
		computed,
		isRef,
		onMounted,
		watch
	} from 'vue'
	const props = defineProps({
		// 距底部/右边多远时（单位px），触发 scrolltolower 事件
		lowerThreshold: {
			type: [Number, String],
			default: 50,
		},
		pageSize: {
			type: Number,
			default: 20,
		},
		// 查询参数，默认会根据传入的属性进行直接过滤。
		params: {
			type: Object,
			default: () => ({})
		},
		fillterFun: Function,
		list: {
			type: Array,
			default: () => []
		},
		// 延迟数
		delay: {
			type: Number,
			default: 500
		},
		emptyIconColor: {
			type: String,
			default: '#4c98f0'
		},
		emptyText: {
			type: String,
			default: '暂无数据'
		}
	})
	// 过滤后的列表
	const filterList = ref([])
	// 当列表传入就应该首先缓存一份
	watch(() => props.list, (newV) => {
		filterList.value = newV
	}, {
		immediate: true,
		deep: true
	})

	const emptyIconSrc = computed(() => {
		let svgStr = `<svg t="1745376550584" class="icon" viewBox="0 0 1575 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
			p-id="2958" id="mx_n_1745376550586" width="100%" height="100%">
			<path
				d="M157.479601 699.632818h21.200994a10.474488 10.474488 0 0 1 10.285475 10.442986 10.316977 10.316977 0 0 1-10.285475 10.442986H157.479601v21.106488a10.474488 10.474488 0 0 1-10.505991 10.22247 10.364231 10.364231 0 0 1-10.490239-10.238221v-21.090737H115.266625a10.474488 10.474488 0 0 1-10.285475-10.442986c0-5.764906 4.520569-10.442986 10.285475-10.442986h21.216746V678.557832a10.474488 10.474488 0 0 1 10.490239-10.238222c5.796409 0 10.505991 4.489066 10.505991 10.238222v21.106488z m1385.751182-83.528138v-21.106488a10.238222 10.238222 0 0 0-10.490239-10.238222 10.474488 10.474488 0 0 0-10.505991 10.238222v21.106488h-21.200994a10.364231 10.364231 0 0 0-10.285475 10.442986c0 5.591644 4.615075 10.427235 10.285475 10.427235h21.200994v21.106488c0 5.733404 4.709582 10.238222 10.505991 10.238221 5.717653 0 10.395733-4.567822 10.490239-10.238221v-21.106488h21.216746a10.316977 10.316977 0 0 0 10.285475-10.427235 10.474488 10.474488 0 0 0-10.285475-10.442986h-21.216746zM780.483267 960.69172H251.891756c-5.560142 0-10.899768-2.205155-14.821795-6.111431a20.744212 20.744212 0 0 1-6.111431-14.774541c0-11.529813 9.513671-20.885972 20.948977-20.885973h95.199711a82.661827 82.661827 0 0 1-11.167537-41.661686V271.391631c0-22.146061 8.883626-43.394309 24.650487-59.050913a84.158182 84.158182 0 0 1 59.428939-24.382719h62.894184v-20.980479c0.015751-22.161812 8.883626-43.41006 24.650488-59.066663a84.158182 84.158182 0 0 1 59.428939-24.366968h503.736258a84.110929 84.110929 0 0 1 59.444691 24.366968 83.213116 83.213116 0 0 1 24.634736 59.066663v605.866458a82.693329 82.693329 0 0 1-11.183288 41.661687h116.132936a20.901723 20.901723 0 1 1 0.031502 41.771945H1007.834793v20.980479a82.693329 82.693329 0 0 1-11.183288 41.661686h11.246292a20.870221 20.870221 0 1 1 0 41.771945h-110.462536a41.488425 41.488425 0 0 1-6.457955 50.860335 42.008211 42.008211 0 0 1-59.381686 0l-51.112353-50.860335z m76.75516-41.771945h66.784708a41.740442 41.740442 0 0 0 41.819198-41.866451V270.415062a40.543358 40.543358 0 0 0-40.527607-40.685118h-506.87073a40.606362 40.606362 0 0 0-40.511855 40.685118v606.638262c0 23.12263 18.901332 41.866451 41.803446 41.866451h318.723718l-10.789511-10.742257a41.535678 41.535678 0 0 1-10.915519-40.370096l-19.814897-19.736141c-61.760104 45.725473-148.53297 36.306309-198.936523-21.579021a145.666268 145.666268 0 0 1 6.96199-198.905021c54.483091-54.388584 141.980508-57.586059 200.338372-7.324266a145.650517 145.650517 0 0 1 21.327004 198.274976l19.846399 19.736142a41.99246 41.99246 0 0 1 40.57486 10.836763l70.186947 69.808921z m150.580615-104.429861h63.193454a41.897953 41.897953 0 0 0 41.803447-41.756193V167.072027a41.740442 41.740442 0 0 0-41.803447-41.756193H566.693447a41.897953 41.897953 0 0 0-41.787696 41.756193v20.885972h398.849615a84.110929 84.110929 0 0 1 59.44469 24.382719 83.213116 83.213116 0 0 1 24.634737 59.066664v543.098283zM267.721622 47.001313h31.281705c8.820622 0 15.955875 6.961991 15.955875 15.672355 0 8.64736-7.135253 15.656604-15.955875 15.656604h-31.281705v31.124194c0 8.773368-6.993493 15.877119-15.75111 15.877119a15.908621 15.908621 0 0 1-11.183289-4.693831 15.719608 15.719608 0 0 1-4.567822-11.183288V78.31452H204.921945a15.861368 15.861368 0 0 1-11.246293-4.536319 15.688106 15.688106 0 0 1-4.709582-11.120284c0-8.663111 7.135253-15.672355 15.955875-15.672355h31.281705V15.877119c0-8.773368 6.993493-15.877119 15.75111-15.877119 8.694613 0 15.75111 7.088 15.751111 15.877119v31.108443zM20.99623 939.805748c0-11.529813 9.513671-20.885972 20.933226-20.885973h126.103389a20.870221 20.870221 0 1 1 0 41.771945H41.929456c-5.560142 0-10.899768-2.205155-14.837546-6.111431a20.744212 20.744212 0 0 1-6.09568-14.774541z m662.145175-134.987016a104.051835 104.051835 0 0 0 27.170665-100.885861 104.713381 104.713381 0 0 0-74.234982-73.841205 105.374928 105.374928 0 0 0-101.437151 27.028905 104.051835 104.051835 0 0 0 0 147.698161 105.390679 105.390679 0 0 0 148.501468 0zM461.917061 313.273833a20.948977 20.948977 0 0 1 20.980479-20.885972h230.974281a20.948977 20.948977 0 0 1 20.99623 20.885972 20.948977 20.948977 0 0 1-20.99623 20.885972H482.929042a20.99623 20.99623 0 0 1-14.853297-6.09568 20.759963 20.759963 0 0 1-6.142933-14.806043z m0 104.429861c0-11.545564 9.340408-20.901723 20.85447-20.901723h336.238952a20.870221 20.870221 0 1 1 0 41.771944H482.771531c-5.560142 0-10.868266-2.205155-14.790293-6.127182a20.696959 20.696959 0 0 1-6.064177-14.75879z m0 104.41411c0-11.529813 9.371911-20.885972 20.948977-20.885972h147.068117a20.870221 20.870221 0 1 1 0 41.771945h-147.052366c-5.575893 0-10.915519-2.189404-14.853297-6.111431a20.744212 20.744212 0 0 1-6.111431-14.774542zM63.004441 396.801971a63.051695 63.051695 0 0 1-54.546095-31.313207 62.374397 62.374397 0 0 1 0-62.657917 63.051695 63.051695 0 0 1 54.546095-31.34471c34.794203 0 63.004441 28.068479 63.004441 62.673668s-28.210239 62.642166-63.004441 62.642166z m0-31.313207c11.246293 0 21.657777-5.985422 27.280923-15.672355a31.187198 31.187198 0 0 0 0-31.328959 31.533723 31.533723 0 0 0-27.280923-15.656603c-17.389226 0-31.502221 14.018488-31.50222 31.328958 0 17.294719 14.112995 31.313207 31.50222 31.328959z m1301.782014-93.986876c-34.794203 0-63.004441-28.052727-63.004441-62.657916s28.210239-62.657917 63.004441-62.657917c34.778452 0 62.98869 28.052727 62.98869 62.657917s-28.194487 62.657917-63.004441 62.657916z m0-31.328958c11.246293 0 21.642026-5.969671 27.280923-15.656604a31.187198 31.187198 0 0 0 0-31.344709 31.533723 31.533723 0 0 0-27.280923-15.656604c-17.389226 0-31.502221 14.018488-31.502221 31.34471 0 17.278968 14.112995 31.313207 31.502221 31.313207z"
				fill="${props.emptyIconColor}" p-id="2959"></path>
		</svg>`
		return `data:image/svg+xml,${encodeURIComponent(svgStr)}`
	})

	//列表展示数据 
	const showList = ref([])
	//数据是否拿完
	const isEnd = ref(false)
	//是否刷新
	const refreshLoading = ref(false)
	// 距离顶部距离
	const screenTop = ref(0)
	const screenOldTop = ref(0)
	// 加载更多状态
	const loadMoreStatus = ref('loading')
	// 当前页数
	const curPage = ref(1)

	// 数据加载方法
	const load = async (type) => {
		type !== 'refresh' && (loadMoreStatus.value = 'loading')
		// 模拟接口延迟
		await delay(props.delay)
		if (filterList.value.length === 0) {
			loadMoreStatus.value = 'noData'
		} else {
			// 拼接数据
			let startIdx = (curPage.value - 1) * props.pageSize
			let endIdx = startIdx + props.pageSize
			// 获取新分页的列表数据
			let newList = filterList.value.slice(startIdx, endIdx)
			console.log(filterList, startIdx, endIdx);
			showList.value = showList.value.concat(newList)
			if (showList.value.length === filterList.value.length) {
				loadMoreStatus.value = 'noMore'
				isEnd.value = true
			} else {
				loadMoreStatus.value = 'more'
			}
		}
		refreshLoading.value = false
	}

	// 查询方法，会对params进行过滤
	const search = () => {
		filterList.value = props.list.filter(item => props.fillterFun ? props.fillterFun(item) : handleFilter(item))
		console.log(filterList.value, 'filterList.value');
		curPage.value = 1
		isEnd.value = false
		showList.value = []
		load()
	}

	// 下拉刷新
	const refresherrefresh = () => {
		refreshLoading.value = true
		// 清空所有数据加载完成标识
		isEnd.value = false
		// 页码设置为1
		curPage.value = 1
		// 清空列表
		showList.value = []
		loadMoreStatus.value = 'none'
		load('refresh')
	}
	// 获取滚动的位置
	const scrollView = (e) => {
		screenOldTop.value = e.detail.scrollTop
	}
	// 滚动条返回顶部
	const backTop = () => {
		screenTop.value = screenOldTop.value
		nextTick(() => {
			screenTop.value = 0
		})
	}
	// 触底加载
	const bootmScroll = () => {
		// 判断所有数据是否加载完成
		if (!isEnd.value) {
			curPage.value++
			loadMoreStatus.value = 'loading'
			load()
		}
	}
	// 重置方法
	const reset = () => {
		// 清空所有数据加载完成标识
		isEnd.value = false
		// 页码设置为1
		curPage.value = 1
		// 返回到顶部
		backTop()
		// 清空列表
		filterList.value = props.list
		load()
	}

	onMounted(() => {
		load()
	})

	defineExpose({
		reset,
		search,
	})

	// 延迟工具函数
	const delay = (ms = 500) => {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve();
			}, ms);
		});
	}
	// 默认过滤函数
	const handleFilter = (item) => {
		for (let key in props.params) {
			let val = props.params[key];
			if (typeof val !== 'string') {
				val = val.toString()
			}
			let listVal = item[key]
			if (typeof listVal !== 'string') {
				listVal = listVal.toString()
			}
			if (!listVal.includes(val)) {
				return false
			}
		}
		return true
	}
</script>

<style scoped>
	.empty_box {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: 30rpx;
		height: 80%;
	}

	.empty_box>.empty_box_image {
		width: 300rpx;
		height: 200rpx;
	}

	.empty_box>.empty_box_text {
		margin-top: 20px;
		color: #999;
	}
</style>