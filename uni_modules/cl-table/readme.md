# cl-table
## 说明
支持树结构展示的table组件
- 支持树结构展示
- 支持表头和内容的插槽
- 支持默认展开所有子节点或者展开固定节点
- 支持自定义列宽与对其方式，或修改样式

## Props 属性

| 属性名						| 类型									| 默认值						| 说明																																	|
|-------------------|--------------------	|------------			|--------------------------------------------------------------------	|
| data							| Array								| []							| 表格数据																															|
| columns						| Array								| []							| 表格列																																|
| headerStyle				| Object							| {}							| 表头样式																															|
| rowKey						| String							| 'id'						| 行id																																	|
| border						| Boolean							| true						| 是否展示边框																													|
| isTableTree				| 	Boolean						| false						| 是否展示树结构																												|
| childrenField			| String							| 'children'			| 接收子数据字段																												|
| offsetWidth				| Number							| 20 	（单位rpx）	| 树表结构首列的偏移量																									|
| defaultExpandAll	| Boolean							| false						|	是否展开所有																													|
| overHidden				| Boolean							| true						| 超出行隐藏																														|
| v-model:expandKeys| Array								| []							| 展开数据的行id																												|

## Column 属性

| 属性名						| 类型									| 默认值				| 说明																																												|
|-------------------|--------------------	|------------	|--------------------------------------------------------------------												|
| prop							| String							| -						| 列的属性字段																																								|
| label							| String							| -						| 表头展示																																										|
| style							| Object							| {}					| 列样式		{ flex: '0 0 140rpx', textAlign: 'left'}列宽度设置为140，默认平分，左对齐，默认居中	|


## 插槽说明

| 插槽名								| 说明																							|
|--------								|-----------------------------										|
| 	[prop]	Column的prop| 对应列(row: 行数据,text: 显示文本, column: 列配置)	|
| 	[prop]-header				| 表头(column: 列配置)															|

## 使用方式

```html
<template>
	<view class="content">
		<uni-section>普通用法</uni-section>
		<cl-table style="max-height: 300px;" :columns="columns" :data="treeData" overHidden>
		</cl-table>
		<uni-section>
			<text>表格树</text>
		</uni-section>
		<cl-table style="max-height: 300px;" v-model:expandKeys="expandKeys1" :columns="columns" :data="treeData"
			isTableTree overHidden>
		</cl-table>
		<view>展开数据{{expandKeys1}}</view>
		<uni-section>
			<text>表格树（默认展开数据）</text>
		</uni-section>
		<cl-table style="max-height: 300px;" v-model:expandKeys="expandKeys2" :columns="columns" :data="treeData"
			isTableTree overHidden defaultExpandAll>
		</cl-table>
		<view>展开数据{{expandKeys2}}</view>
		<uni-section>
			<text>表格树（表头和内容插槽）</text>
		</uni-section>
		<cl-table style="max-height: 300px;" :columns="columns" :data="treeData" isTableTree overHidden defaultExpandAll>
			<template #id-header="{column}">
				<text style="color: red;">我是{{column.label}}</text>
			</template>
			<template #name="{text}">
				<text style="color: green;">我使用了插槽：{{text}}</text>
			</template>
		</cl-table>
	</view>
</template>

<script setup>
	import {
		ref
	}
	from 'vue'
	const expandKeys1 = ref([])
	const expandKeys2 = ref([])
	const treeData = [{
			id: '1',
			name: "电子产品",
			children: [{
					id: 2,
					name: "手机",
					children: [{
							id: 3,
							name: "智能手机",
							children: []
						},
						{
							id: 4,
							name: "功能手机",
							children: []
						}
					]
				},
				{
					id: 5,
					name: "电脑",
					children: [{
							id: 6,
							name: "笔记本",
							children: []
						},
						{
							id: 7,
							name: "台式机",
							children: []
						}
					]
				}
			]
		},
		{
			id: 8,
			name: "家居用品",
			children: [{
					id: 9,
					name: "家具",
					children: [{
							id: 10,
							name: "沙发",
							children: []
						},
						{
							id: 11,
							name: "桌椅",
							children: []
						}
					]
				},
				{
					id: 12,
					name: "家电",
					children: [{
							id: 13,
							name: "冰箱",
							children: []
						},
						{
							id: 14,
							name: "电视",
							children: []
						}
					]
				}
			]
		},
		{
			id: 15,
			name: "图书音像",
			children: []
		}
	]
	const columns = [{
		prop: 'id',
		label: 'id',
		style: {
			flex: '0 0 140rpx',
			textAlign: 'left'
		}
	}, {
		prop: 'name',
		label: '名称',

	}]
</script>

<style scoped lang="scss">
	.content {
		height: 100%;
		padding: 20rpx;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		overflow-y: auto;
	}
</style>
```
> 若有问题可联系作者：微信号：fjl_code_life