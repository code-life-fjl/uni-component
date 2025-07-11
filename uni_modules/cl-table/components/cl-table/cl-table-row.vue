<template>
	<view class="row">
		<view v-for="(item,index) in columns" :key="item.prop"
			:class="[border && 'border','row_cell', overHidden && 'exceed_omit_1']" :style="{...item.style}">
			<template v-if="index === 0">
				<slot :name="item.prop" :row="curRow" :column="item" :text="curRow[item.prop]">
					<view :class="[overHidden && 'exceed_omit_1']"
						:style="{paddingLeft: (isShowExpandIcon ? 0 : level * props.offsetWidth) + 'rpx'}">
						<uni-icons v-if="isShowExpandIcon" :type="isExpand ? 'bottom' : 'right'" class="expand_icon"
							@click="handleToggleExpand" :style="{paddingLeft: level * props.offsetWidth + 'rpx'}"></uni-icons>
						<text>{{curRow[item.prop]}}</text>
					</view>
				</slot>
			</template>
			<slot v-else :name="item.prop" :row="curRow" :column="item" :text="curRow[item.prop]">
				<text :class="[overHidden && 'exceed_omit_1']">{{curRow[item.prop]}}</text>
			</slot>
		</view>
	</view>
	<transition name="slide">
		<view v-if="isShowChildren">
			<ClTableRow v-for="item in curRow[childrenField]" :key="item[props.rowKey]" :columns="columns" :curRow="item"
				:border="border" :defaultExpandAll="defaultExpandAll" :isTableTree="isTableTree" :childrenField="childrenField"
				:level="level + 1" v-model:expandKeys="expandKeys" :offsetWidth="offsetWidth" :overHidden="overHidden">
				<template v-for="(itm, slotName) in slotList" #[slotName]="data">
					<slot :name="slotName" v-bind="data"></slot>
				</template>
			</ClTableRow>
		</view>
	</transition>
</template>

<script>
	export default {
		name: 'ClTableRow'
	}
</script>
<script setup>
	import {
		computed,
		ref,
		watch,
		useSlots
	} from 'vue';

	const props = defineProps({
		columns: {
			type: Array,
			default: () => []
		},
		curRow: {
			type: Object,
			default: () => ({})
		},
		border: {
			type: Boolean,
			default: true
		},
		// 是否启用树
		isTableTree: {
			type: Boolean,
			default: false
		},
		childrenField: {
			type: String,
			default: 'children'
		},
		// 子级层级
		level: Number,
		offsetWidth: {
			type: Number,
			default: 20
		},
		defaultExpandAll: {
			type: Boolean,
			default: false
		},
		rowKey: {
			type: String,
			default: 'id'
		},
		overHidden: {
			type: Boolean,
			default: false
		}
	})
	const slotList = useSlots()
	// 折叠key
	const expandKeys = defineModel('expandKeys', {
		type: Array,
		default: () => []
	})
	const curRowKey = computed(() => {
		return props.curRow[props.rowKey]
	})
	// 是否展开
	const isExpand = ref(false)
	watch(() => expandKeys.value, (newV1) => {
		if (newV1.includes(curRowKey.value)) {
			isExpand.value = true
		}
	}, {
		deep: true,
		immediate: true
	})
	// 是否有子级
	const isShowExpandIcon = computed(() => {
		if (props.isTableTree && Array.isArray(props.curRow[props.childrenField]) && props.curRow[props.childrenField]
			.length > 0) {
			return true
		}
	})
	// 是否展示子级
	const isShowChildren = computed(() => {
		return props.isTableTree && isExpand.value
	})
	// 展开或收起
	const handleToggleExpand = () => {
		if (isExpand.value === false) {
			expandKeys.value.push(curRowKey.value)
		} else {
			expandKeys.value = expandKeys.value.filter(item => item !== curRowKey.value)
		}
		isExpand.value = !isExpand.value
	}
</script>

<style scoped lang="scss">
	.row {
		display: flex;
		font-size: 26rpx;

		&_cell {
			padding: 20rpx;
			flex: 1;
			text-align: center;
		}

		.border {
			border-right: 1rpx solid $uni-border-color;
			border-bottom: 1rpx solid $uni-border-color;

			&:last-child {
				border-right: none;
			}
		}
	}

	.expand_icon {
		padding-right: 8rpx;
		cursor: pointer;
	}

	.exceed_omit_1 {
		/* 超过了就隐藏 */
		overflow: hidden;
		/* 超过了就显示省略号 */
		text-overflow: ellipsis;
		/* webkit内核的浏览器 */
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}

	.slide-enter-active,
	.slide-leave-active {
		transition: all 0.2s ease;
		overflow: hidden;
	}

	.slide-enter-from,
	.slide-leave-to {
		max-height: 0;
	}

	.slide-enter-to,
	.slide-leave-from {
		max-height: 100px;
	}
</style>