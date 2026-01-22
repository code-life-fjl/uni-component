<template>
  <view class="content">
    <uni-section>普通用法</uni-section>
    <cl-table
      style="max-height: 300px"
      :columns="columns"
      :data="treeData"
      overHidden
    >
    </cl-table>
    <uni-section>
      <text>表格树</text>
    </uni-section>
    <cl-table
      style="max-height: 300px"
      v-model:expandKeys="expandKeys1"
      :columns="columns"
      :data="treeData"
      isTableTree
      overHidden
    >
    </cl-table>
    <view>展开数据{{ expandKeys1 }}</view>
    <uni-section>
      <text>表格树（默认展开数据）</text>
    </uni-section>
    <cl-table
      style="max-height: 300px"
      v-model:expandKeys="expandKeys2"
      :columns="columns"
      :data="treeData"
      isTableTree
      overHidden
      defaultExpandAll
    >
    </cl-table>
    <view>展开数据{{ expandKeys2 }}</view>
    <uni-section>
      <text>表格树（表头和内容插槽）</text>
    </uni-section>
    <cl-table
      style="max-height: 300px"
      :columns="columns"
      :data="treeData"
      isTableTree
      overHidden
      defaultExpandAll
    >
      <template #id-header="{ column }">
        <text style="color: red">我是{{ column.label }}</text>
      </template>
      <template #name="{ text }">
        <text style="color: green">我使用了插槽：{{ text }}</text>
      </template>
    </cl-table>
  </view>
</template>

<script setup>
import { ref } from 'vue'
const expandKeys1 = ref([])
const expandKeys2 = ref([])
const treeData = [
  {
    id: '1',
    name: '电子产品',
    children: [
      {
        id: 2,
        name: '手机',
        children: [
          {
            id: 3,
            name: '智能手机',
            children: [],
          },
          {
            id: 4,
            name: '功能手机',
            children: [],
          },
        ],
      },
      {
        id: 5,
        name: '电脑',
        children: [
          {
            id: 6,
            name: '笔记本',
            children: [],
          },
          {
            id: 7,
            name: '台式机',
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: 8,
    name: '家居用品',
    children: [
      {
        id: 9,
        name: '家具',
        children: [
          {
            id: 10,
            name: '沙发',
            children: [],
          },
          {
            id: 11,
            name: '桌椅',
            children: [],
          },
        ],
      },
      {
        id: 12,
        name: '家电',
        children: [
          {
            id: 13,
            name: '冰箱',
            children: [],
          },
          {
            id: 14,
            name: '电视',
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: 15,
    name: '图书音像',
    children: [],
  },
]
const columns = [
  {
    prop: 'id',
    label: 'id',
    style: {
      flex: '0 0 140rpx',
      textAlign: 'left',
    },
  },
  {
    prop: 'name',
    label: '名称',
  },
]
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
