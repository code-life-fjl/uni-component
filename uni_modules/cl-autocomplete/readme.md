# cl-autocomplete 输入框提示组件

## 组件作用
提供带搜索过滤功能的下拉选择组件，适用于以下场景：
- 输入时有提示数据
- 输入时实时过滤备选数据

## Props 属性说明

| 属性名			| 类型					| 默认值			| 说明																	|
|-------------------|--------------------	|------------	|--------------------------------------------------------------------	|
| options			| Array					| []			| 必填，选项数组（当前仅支持字符串数组）									|
| v-model			| String				| ''			| 输入框绑定值															|
| placeholder		| String				| '请选择'		| 输入框占位文本															|
| maxHeight			| [String, Number]		| 300			| 下拉提示列表最大高度（单位：px）										|
| placeholderStyle	| String				| ''			| 自定义占位符样式（支持CSS字符串）										|
| disabled			| Boolean				| false			| 是否禁用输入框															|
| maxlength			| Number				| 20			| 最大输入长度															|
| hideBorder		| Boolean				| false			| 是否隐藏输入框边框														|
| cursorSpacing		| Number				| 300			| 键盘弹起时光标距离输入框的高度（单位：px）								|
| type				| String				| 'text'		| 输入框类型，支持uni-easyinput所有类型（text/number/password等）			|
| isStrict			| Boolean				| false			| 是否启用严格模式，会区分大小写											|
| isHighlight		| Boolean				| false			| 是否高亮展示关键字														|
| highlightColor	| String				| '#007aff'		| 高亮颜色，需要isHighlight为true有效										|
| customFilter		| Function				| -				| 自定义过滤方法															|

## 基本使用示例

```vue
<template>
  <cl-autocomplete 
    v-model="searchText"
    :options="fruitList"
    placeholder="搜索水果"
    max-height="400"
  />
</template>

<script setup>
const fruitList = ['Apple', 'Banana', 'Orange', 'Mango', 'Strawberry']
const searchText = ref('')
</script>
```