# cl-auto-page-list 组件文档

一个基于 UniApp 的虚拟分页组件，用于对静态列表数据进行分页展示，支持下拉刷新、滚动加载、自定义过滤和空状态显示。

---

## 属性（Props）

| 属性名             | 类型          | 默认值    | 必填 | 说明                                                                 |
|--------------------|---------------|-----------|------|--------------------------------------------------------------------|
| list               | Array         | []        | 是   | 原始数据列表                                                        |
| lowerThreshold     | Number/String | 50        | 否   | 触发滚动加载的底部距离（单位：px）                                   |
| pageSize           | Number        | 20        | 否   | 每页显示数量                                                        |
| delay              | Number        | 500       | 否   | 加载延迟（模拟接口请求，单位：ms）                                   |
| params             | Object        | {}        | 否   | 过滤参数，需与数据字段匹配（默认过滤规则为包含匹配）                 |
| fillterFun         | Function      | -         | 否   | 自定义过滤函数（优先级高于默认过滤）                                 |
| emptyText          | String        | "暂无数据" | 否   | 空状态提示文字                                                      |
| emptyIconColor     | String        | "#4c98f0" | 否   | 空状态图标颜色（支持 HEX/RGB）                                      |

---

## 方法（Methods）
| 方法名             | 参数          | 说明    | 
|-------------------|---------------|-----------|
| search              | ——  | 根据传入的查询条件进行首次查询，后面下拉加载也都是根据查询条件过滤后的数据      |
| reset              | —— | 排除查询条件回到第一页      | 

通过组件 `ref` 调用：

```vue
<template>
	<view class="cl_flex_page">
		<cl-nav-bar></cl-nav-bar>
		<uni-search-bar v-model="params.label" style="background-color: #fff;" placeholder="请输入关键字查询"
			@confirm="handleSearch">
		</uni-search-bar>
		<cl-auto-page-list class="list_box" :list="list" ref="clAutoPageListRef" :params="params">
			<template #list={list}>
				<view class="list_box_item" v-for="(item,index) in list" :key="index">
					{{item.label}}
				</view>
			</template>
		</cl-auto-page-list>
	</view>
</template>

<script setup>
	import {
		reactive,
		ref
	} from 'vue'
	const params = reactive({
		label: '',
	})

	const list = Array.from({
		length: 500
	}, (_, index) => {
		return {
			label: `我是展示的值${index}`,
			value: `value${index}`
		}
	})
	const clAutoPageListRef = ref()
	const handleSearch = () => {
		clAutoPageListRef.value.search()
	}
</script>

<style lang="scss" scoped>
	.list_box {
		flex: 1;
		overflow-y: auto;

		&_item {
			padding: 20rpx;
			margin-bottom: 20rpx;
			background-color: aqua;
		}
	}
</style>
```