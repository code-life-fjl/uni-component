<template>
	<uni-nav-bar class="cl-nav-bar" v-bind="$attrs" :border="border" :statusBar="statusBar" :fixed="fixed"
		:leftIcon="leftIcon" :title="getCurrentPageTitle()" @clickLeft="clickLeft" @clickright="clickright">
		<template v-if="leftSoltVisible" #left>
			<slot name="left"></slot>
		</template>
		<template v-if="rightSoltVisible" #right>
			<slot name="right"></slot>
		</template>
	</uni-nav-bar>
</template>
<script setup>
	import pageData from '/pages.json'
	import {
		onMounted,
		getCurrentInstance,
		useAttrs,
		useSlots,
		computed,
		ref
	} from 'vue'
	import {
		onReady
	} from '@dcloudio/uni-app'
	const props = defineProps({
		title: {
			type: String,
			default: ''
		},
		statusBar: {
			type: Boolean,
			default: true
		},
		fixed: {
			type: Boolean,
			default: true
		},
		leftIcon: {
			type: String,
			default: 'left'
		},
		border: {
			type: Boolean,
			default: false
		},
		clickLeft: {
			type: Function
		},
		clickright: {
			type: Function
		}
	})
	const $attrs = useAttrs()
	const emits = defineEmits(['getHeight'])
	
	const leftSoltVisible = computed(() => {
		return useSlots().left
	})
	const rightSoltVisible = computed(() => {
		return useSlots().right
	})
	const centerSoltVisible = computed(() => {
		return useSlots().default
	})
	
	onReady(() => {
		// vue3获取组件实例
		const pageInstace = getCurrentInstance()
		const query = uni.createSelectorQuery().in(pageInstace?.proxy)
		query.select('.cl-nav-bar').boundingClientRect((data) => {
				emits('getHeight', data.height)
			})
			.exec()
	})

	// 自动获取title
	const getCurrentPageTitle = () => {
		if (props.title) {
			return props.title
		}
		const pageList = getCurrentPages()
		const curPage = pageList[pageList.length - 1]
		if (curPage) {
			const {
				route
			} = curPage
			const {
				subPackages,
				pages
			} = pageData
			for (let page of pages) {
				if (page.path === route) {
					return page.style?.navigationBarTitleText
				}
			}
			for (let subPackage of subPackages) {
				if (route.includes(subPackage.root)) {
					const page = subPackage.pages.find(item => `${subPackage.root}/${item.path}` === route)
					if (page) {
						return page.style?.navigationBarTitleText
					}
				}
			}
		}
	}

	const clickLeft = () => {
		if (typeof props.clickLeft === 'function') {
			props.clickLeft()
		} else {
			uni.navigateBack()
		}
	}
	const clickright = () => {
		if (typeof props.clickright === 'function') {
			props.clickright()
		}
	}
</script>