<template>
	<view class="table" :class="border && 'border'">
		<view class="table_header" :style="headerStyle">
			<view v-for="item in columns" :key="item.prop" class="table_header_cell" :style="item.style || {}">
				<slot :name="item.prop + '-header'" :column="item">
					<text :class="[overHidden && 'exceed_omit_1']">{{item.label}}</text>
				</slot>
			</view>
		</view>
		<view class="table_body">
			<cl-table-row v-model:expandKeys="expandKeys" v-for="item in data" :key="item[rowKey]" :columns="columns"
				:curRow="item" :border="border" :isTableTree="isTableTree" :childrenField="childrenField" :level="0"
				:offsetWidth="offsetWidth" :defaultExpandAll="defaultExpandAll" :expandKeys="expandKeys"
				:overHidden="overHidden" :rowKey="rowKey">
				<template v-for="(itm, slotName) in slotList" #[slotName]="data">
					<slot :name="slotName" v-bind="data"></slot>
				</template>
			</cl-table-row>
		</view>
	</view>

</template>
<script setup>
	import {
		useSlots,
		watch
	} from 'vue'
	import ClTableRow from './cl-table-row.vue'
	const slotList = useSlots()
	const props = defineProps({
		// 表格数据
		data: {
			type: Array,
			default: () => []
		},
		// 表格列
		columns: {
			type: Array,
			default: () => []
		},
		// 表格header的样式（可用于修改背景色以及文字样式）
		headerStyle: {
			type: Object,
			default: () => ({})
		},
		// 行key
		rowKey: {
			type: String,
			default: 'id'
		},
		// 边框
		border: {
			type: Boolean,
			default: true
		},
		// 是否启用树
		isTableTree: {
			type: Boolean,
			default: false
		},
		// 树表的子字段
		childrenField: {
			type: String,
			default: 'children'
		},
		// 树结构向右偏移量
		offsetWidth: {
			type: Number,
			default: 20
		},
		// 是否默认展开所有
		defaultExpandAll: {
			type: Boolean,
			default: false
		},
		// 超出行隐藏
		overHidden: {
			type: Boolean,
			default: false
		}
	})
	// 折叠key
	const expandKeys = defineModel('expandKeys', {
		type: Array,
		default: () => []
	})

	/**
	 * 递归收集树结构中所有包含子节点的节点ID
	 * @param {Array} tree - 树结构的对象数组
	 * @param {string} [childrenKey='children'] - 子节点属性名
	 * @returns {Array} - 包含子节点的节点ID数组
	 */
	const getChildrenKeys = (tree, childrenKey = 'children') => {
		const result = [];

		function traverse(nodeList) {
			if (!Array.isArray(nodeList) || nodeList.length === 0) {
				return;
			}
			for (const node of nodeList) {
				const children = node[childrenKey];
				// 如果当前节点有子节点且子节点数组长度大于0
				if (Array.isArray(children) && children.length > 0) {
					// 收集当前节点的ID
					if (node.id !== undefined) {
						result.push(node.id);
					}
					// 递归遍历子节点
					traverse(children);
				}
			}
		}
		traverse(tree);
		return result;
	}
	// 如果是全部展开则自动获取所有有子级的key
	watch(() => props.defaultExpandAll, (newV) => {
		if (newV) {
			expandKeys.value = getChildrenKeys(props.data)
		}
	}, {
		immediate: true,
		deep: true
	})
</script>
<style scoped lang="scss">
	.table {
		display: flex;
		flex-direction: column;
		width: 100%;

		&_header {
			display: flex;
			background-color: $uni-bg-color-grey;

			&_cell {
				padding: 20rpx;
				flex: 1;
				text-align: center;
			}
		}

		&_body {
			flex: 1;
			overflow-y: auto;
		}
	}

	.border {
		border: 1rpx solid $uni-border-color;
		border-bottom: none;

		.table_header_cell {
			border-right: 1rpx solid $uni-border-color;
			border-bottom: 1rpx solid $uni-border-color;

			&:last-child {
				border-right: none;
			}
		}
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
</style>