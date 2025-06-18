<template>
	<view :class="['tabs', styleType]">
		<view v-for="(item, index) in formatOption" :key="index"
			:class="['tabs_item', modelVal === item[valueField]  && 'tabs_item_active']" @click="handleToggle(item, index)">
			<text class="tabs_item_text">
				<slot name="label" :label="item[labelField]" :tabItem="item">{{item[labelField]}}</slot>
			</text>
		</view>
	</view>
</template>
<script setup>
	import {
		computed
	} from 'vue'

	const props = defineProps({
		option: {
			type: Array,
			default: () => []
		},
		labelField: {
			type: String,
			default: 'label'
		},
		valueField: {
			type: String,
			default: 'value'
		},
		// 组件风格 button、text
		styleType: {
			type: String,
			default: 'button'
		}
	})
	const formatOption = computed(() => {
		return props.option.map(item => {
			if (typeof item !== 'object') {
				return {
					[props.labelField]: item,
					[props.valueField]: item,
				}
			} else {
				return item
			}
		})
	})
	const emits = defineEmits(['change'])
	const modelVal = defineModel()
	// 切换tabs
	const handleToggle = (item, index) => {
		let newVal = item[props.valueField]
		if (newVal === modelVal.value) {
			return
		}
		modelVal.value = newVal
		emits('change', newVal, item, index)
	}
</script>
<style scoped lang="scss">
	.tabs {
		display: flex;
		font-size: $uni-font-size-base;
		color: $uni-text-color;

		&_item {
			flex: 1;
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			box-sizing: border-box;
			height: auto;

		}
	}

	.button {
		border: 2rpx solid $uni-color-primary;
		border-radius: 10rpx;
		overflow: hidden;

		.tabs_item {
			padding: 14rpx;
			color: $uni-color-primary;
			border-right: 2rpx solid $uni-color-primary;
			cursor: pointer;
		}

		.tabs_item_active {
			color: #fff;
			background-color: $uni-color-primary;
		}

		// 去除白色右侧白色间隙
		.tabs_item:last-child {
			border-right: none;
		}

		.tabs_item:last-child.tabs_item_active {
			border-right: 2rpx solid $uni-color-primary;
		}
	}

	.text {
		.tabs_item {
			cursor: pointer;

			&_text {
				padding: 12rpx 0;
				border-bottom: 4rpx solid transparent;
			}
		}

		.tabs_item_active {
			color: $uni-color-primary;

			.tabs_item_text {
				border-bottom: 4rpx solid $uni-color-primary;
			}
		}
	}
</style>