<template>
	<view class="cl_navbar" :class="{'cl_dark':dark, 'cl_nvue-fixed': fixed}">
		<view class="cl_navbar__content" :class="{ 'cl_navbar--fixed': fixed, 'cl_navbar--shadow': shadow, 'cl_navbar--border': border }"
			:style="{ 'background-color': themeBgColor, 'border-bottom-color':themeColor }" >
			<clStatusBar v-if="statusBar" /> 
			<view :style="{ color: themeColor,backgroundColor: themeBgColor ,height:navbarHeight}"
				class="cl_navbar__header">
				<view @tap="onClickLeft" class="cl_navbar__header-btns cl_navbar__header-btns-left"
					:style="{width:leftIconWidth}">
					<slot name="left">
						<view class="cl_navbar__content_view" v-if="leftIcon.length > 0">
							<uni-icons :color="themeColor" :type="leftIcon" size="20" />
						</view>
						<view :class="{ 'cl_navbar-btn-icon-left': !leftIcon.length > 0 }" class="cl_navbar-btn-text"
							v-if="leftText.length">
							<text :style="{ color: themeColor, fontSize: '12px' }">{{ leftText }}</text>
						</view>
					</slot>
				</view>
				<view class="cl_navbar__header-container " @tap="onClickTitle">
					<slot>
						<view class="cl_navbar__header-container-inner">
							<text class="cl_nav-bar-text cl_ellipsis-1"
								:style="{color: themeColor }">{{ getCurrentPageTitle()}}</text>
						</view>
					</slot>
				</view>
				<view @click="onClickRight" class="cl_navbar__header-btns cl_navbar__header-btns-right"
					:style="{width:rightIconWidth}">
					<slot name="right">
						<view v-if="rightIcon.length">
							<uni-icons :color="themeColor" :type="rightIcon" size="22" />
						</view>
						<view class="cl_navbar-btn-text" v-if="rightText.length && !rightIcon.length">
							<text class="cl_nav-bar-right-text" :style="{ color: themeColor}">{{ rightText }}</text>
						</view>
					</slot>
				</view>
			</view>
		</view>
		<!-- #ifndef APP-NVUE -->
		<view class="cl_navbar__placeholder" v-if="fixed">
			<clStatusBar v-if="statusBar" />
			<view class="cl_navbar__placeholder-view" :style="{ height:navbarHeight}" />
		</view>
		<!-- #endif -->
	</view>
</template>

<script>
	import clStatusBar from "./cl-status-bar.vue";
	import pageData from '/pages.json'
	const getVal = (val) => typeof val === 'number' ? val + 'px' : val;

	/**
	 * NavBar 自定义导航栏
	 * @description 导航栏组件，主要用于头部导航
	 * @tutorial https://ext.dcloud.net.cn/plugin?id=52
	 * @property {Boolean} dark 开启黑暗模式
	 * @property {String} title 标题文字
	 * @property {String} leftText 左侧按钮文本
	 * @property {String} rightText 右侧按钮文本
	 * @property {String} leftIcon 左侧按钮图标（图标类型参考 [Icon 图标](http://ext.dcloud.net.cn/plugin?id=28) type 属性）
	 * @property {String} rightIcon 右侧按钮图标（图标类型参考 [Icon 图标](http://ext.dcloud.net.cn/plugin?id=28) type 属性）
	 * @property {String} color 图标和文字颜色
	 * @property {String} backgroundColor 导航栏背景颜色
	 * @property {Boolean} fixed = [true|false] 是否固定顶部
	 * @property {Boolean} statusBar = [true|false] 是否包含状态栏
	 * @property {Boolean} shadow = [true|false] 导航栏下是否有阴影
	 * @event {Function} clickLeft 左侧按钮点击时触发
	 * @event {Function} clickRight 右侧按钮点击时触发
	 * @event {Function} clickTitle 中间标题点击时触发
	 */
	export default {
		name: "ClNavBar",
		components: {
			clStatusBar
		},
		emits: ['clickLeft', 'clickRight', 'clickTitle'],
		props: {
			dark: {
				type: Boolean,
				default: false
			},
			title: {
				type: String,
				default: ""
			},
			leftText: {
				type: String,
				default: ""
			},
			rightText: {
				type: String,
				default: ""
			},
			leftIcon: {
				type: String,
				default: "left"
			},
			rightIcon: {
				type: String,
				default: ""
			},
			fixed: {
				type: [Boolean, String],
				default: true
			},
			color: {
				type: String,
				default: ""
			},
			backgroundColor: {
				type: String,
				default: ""
			},
			statusBar: {	
				type: [Boolean, String],
				default: true
			},
			shadow: {
				type: [Boolean, String],
				default: false
			},
			border: {
				type: [Boolean, String],
				default: false
			},
			height: {
				type: [Number, String],
				default: 44
			},
			leftWidth: {
				type: [Number, String],
				default: 60
			},
			rightWidth: {
				type: [Number, String],
				default: 60
			},
			// 自动返回时间
			autoBack:{
				type: Boolean,
				default: true
			}
		},
		mounted() {
			console.log(this.$attrs);
		},
		computed: {
			themeBgColor() {
				if (this.dark) {
					// 默认值
					if (this.backgroundColor) {
						return this.backgroundColor
					} else {
						return this.dark ? '#333' : '#FFF'
					}
				}
				return this.backgroundColor || '#FFF'
			},
			themeColor() {
				if (this.dark) {
					// 默认值
					if (this.color) {
						return this.color
					} else {
						return this.dark ? '#fff' : '#333'
					}
				}
				return this.color || '#333'
			},
			navbarHeight() {
				return getVal(this.height)
			},
			leftIconWidth() {
				return getVal(this.leftWidth)
			},
			rightIconWidth() {
				return getVal(this.rightWidth)
			}
		},
		methods: {
			onClickLeft() {
				if (this.autoBack) {
					uni.navigateBack()
				} else {
				 this.$emit("clickLeft");
				}
			},
			onClickRight() {
				this.$emit("clickRight");
			},
			onClickTitle() {
				this.$emit("clickTitle");
			},
			// 自动获取title
			getCurrentPageTitle() {
				if (this.title) {
					return this.title
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
		}
	};
</script>

<style lang="scss" scoped>
	$nav-height: 44px;

	.cl_nvue-fixed {
		/* #ifdef APP-NVUE */
		position: sticky;
		/* #endif */
	}

	.cl_nav-bar-text {
		/* #ifdef APP-PLUS */
		font-size: 34rpx;
		/* #endif */
		/* #ifndef APP-PLUS */
		font-size: 14px;
		/* #endif */
	}

	.cl_nav-bar-right-text {
		font-size: 12px;
	}

	.cl_navbar__content {
		position: relative;
		background-color: transparent;
	}

	.cl_navbar-btn-text {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		line-height: 12px;
	}

	.cl_navbar__header {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		padding: 0 10px;
		flex-direction: row;
		height: $nav-height;
		font-size: 12px;
	}

	.cl_navbar__header-btns {
		/* #ifndef APP-NVUE */
		overflow: hidden;
		display: flex;
		/* #endif */
		flex-wrap: nowrap;
		flex-direction: row;
		width: 120rpx;
		// padding: 0 6px;
		justify-content: center;
		align-items: center;
		/* #ifdef H5 */
		cursor: pointer;
		/* #endif */
	}

	.cl_navbar__header-btns-left {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		width: 120rpx;
		justify-content: flex-start;
		align-items: center;
	}

	.cl_navbar__header-btns-right {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
	}

	.cl_navbar__header-container {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex: 1;
		padding: 0 10px;
		overflow: hidden;
	}

	.cl_navbar__header-container-inner {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex: 1;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		font-size: 12px;
		overflow: hidden;
		// box-sizing: border-box;
	}


	.cl_navbar__placeholder-view {
		height: $nav-height;
	}

	.cl_navbar--fixed {
		position: fixed;
		z-index: 998;
		/* #ifdef H5 */
		left: var(--window-left);
		right: var(--window-right);
		/* #endif */
		/* #ifndef H5 */
		left: 0;
		right: 0;
		/* #endif */

	}

	.cl_navbar--shadow {
		box-shadow: 0 1px 6px #ccc;
	}

	.cl_navbar--border {
		border-bottom-width: 1rpx;
		border-bottom-style: solid;
		border-bottom-color: #eee;
	}

	.cl_ellipsis-1 {
		overflow: hidden;
		/* #ifndef APP-NVUE */
		white-space: nowrap;
		text-overflow: ellipsis;
		/* #endif */
		/* #ifdef APP-NVUE */
		lines: 1;
		text-overflow: ellipsis;
		/* #endif */
	}

	// 暗主题配置
	.cl_dark {}
</style>
