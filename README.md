# uni-app-components

基于 **uni-app + Vue3 + uni-ui** 封装的常用业务组件库，适用于跨端开发场景。

## 技术栈

- uni-app
- Vue 3 (Composition API)
- uni-ui

## 组件列表

| 组件名称 | 说明 |
| --- | --- |
| cl-select-picker | 单选选择器，底部弹出滚动选择器，支持数据回显、自定义字段、v-model双向绑定 |
| cl-scroll-view | 滚动列表容器，集成下拉刷新、上拉加载更多、空状态展示、接口请求等功能 |
| cl-select | 下拉选择框，支持搜索过滤、键盘输入筛选、下拉选项展示 |
| cl-nav-bar | 导航栏组件，基于uni-nav-bar封装，支持自动获取页面标题、状态栏适配 |
| cl-date-picker | 日期时间选择器，支持多种日期格式(年/月/日/时/分/秒)自由组合 |
| cl-autocomplete | 自动补全输入框，输入时自动匹配选项并高亮显示匹配文本 |
| cl-auto-page-list | 前端分页列表，基于本地数据自动分页，支持下拉刷新、筛选过滤 |
| cl-more-select-picker | 多选选择器，底部弹出多选面板，支持关键字筛选、全选等功能 |
| cl-tabs | 标签页切换组件，支持button和text两种风格，可自定义标签内容 |
| cl-table | 表格组件，支持树形结构、列自定义、展开/折叠、插槽自定义单元格 |
| cl-video | 视频组件，支持自动截取视频第一帧作为封面，兼容APP和H5端 |

## 目录结构

```
uni_modules/
├── cl-select-picker/     # 单选选择器
├── cl-scroll-view/       # 滚动列表
├── cl-select/            # 下拉选择
├── cl-nav-bar/           # 导航栏
├── cl-date-picker/       # 日期选择器
├── cl-autocomplete/      # 自动补全
├── cl-auto-page-list/    # 前端分页列表
├── cl-more-select-picker/# 多选选择器
├── cl-tabs/              # 标签页
├── cl-table/             # 表格
├── cl-video/             # 视频组件
└── ...
```

## 使用方式

组件已通过 `uni_modules` 方式组织，支持 easycom 自动导入，无需手动引入即可在页面中直接使用：

```vue
<template>
  <cl-select-picker v-model="value" :options="options" />
</template>
```

## 示例页面

项目入口页面 `pages/index/index.vue` 提供了所有组件的演示入口，点击对应按钮可跳转至各组件的示例页面。
