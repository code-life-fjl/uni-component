<template>
  <picker
    :range="dataList"
    :range-key="labelFiled"
    :disabled="disabled"
    @change="submit"
    @cancel="cancel"
  >
    <view class="uni_input" :class="{ hideBorder, disabled }">
      <text v-if="isEmpty(selectText)" class="placeholder">{{
        placeholder
      }}</text>
      <text v-else class="show_text">{{ selectText }}</text>
      <view v-if="isEmpty(selectValue) || disabled">
        <uni-icons type="bottom" size="14" color="#999"></uni-icons>
      </view>
      <view v-else @click.stop="clearhanlder">
        <uni-icons type="clear" size="24" color="#C1C6CF"></uni-icons>
      </view>
    </view>
  </picker>
</template>

<script setup>
import { watch, ref } from 'vue'
const emit = defineEmits(['update:modelValue', 'submit', 'clear', 'cancel'])

const props = defineProps({
  // 数据列表
  options: {
    type: Array,
    default: () => [],
  },
  // 输入框提示
  placeholder: {
    type: String,
    default: '请选择',
  },
  // 当列表没有数据的时候是否新增一条"暂无数据"用来提示用户
  hideEmptyText: {
    type: Boolean,
    default: false,
  },
  // 禁用
  disabled: {
    type: Boolean,
    default: false,
  },
  // 隐藏边框
  hideBorder: {
    type: Boolean,
    default: false,
  },
  // 选中数据对象里面用来展示的字段
  labelFiled: {
    type: String,
    default: 'text',
  },
  // 选中数据对象里面用来回传的字段
  valueFiled: {
    type: String,
    default: 'value',
  },
  modelValue: {
    type: [String, Number],
		default: undefined
  },
	// 
  emptyText: {
    type: String,
    default: '暂无数据',
  },
})

const dataList = ref([])
const selectText = ref(undefined)
const selectValue = ref(undefined)
const noDataValue = '#codeLife_noData#' //用来标识无数据选项

const clearhanlder = () => {
  selectText.value = undefined
  selectValue.value = undefined
  emit('clear')
}

const submit = (e) => {
  const idx = Number(e.detail.value)
  const item = dataList.value[idx]
	console.log(item, 'item', props, item[props.valueFiled]);
  const value = item ? item[props.valueFiled] : undefined
  const label = item ? item[props.labelFiled] : undefined
	console.log(value, 'valuevalue');
  if (
    (props.hideEmptyText && dataList.value.length === 0) ||
    value === noDataValue
  ) {
    selectText.value = undefined
    selectValue.value = undefined
    emit('submit', undefined)
  } else {
    selectText.value = label
    selectValue.value = value
    emit('submit', value, item)
  }
}
const cancel = () => {
  emit('cancel')
}

// 数据回显
const dataShow = (list, val) => {
  const curData = list.find((item) => item[props.valueFiled] === val)
  if (curData) {
    selectText.value = curData[props.labelFiled]
    selectValue.value = curData[props.valueFiled]
  } else {
    selectText.value = undefined
    selectValue.value = undefined
  }
}

watch(
  () => props.options,
  (newV) => {
    if (newV.length === 0 && !props.hideEmptyText) {
      dataList.value = [
        {
          [props.labelFiled]: props.emptyText,
          [props.valueFiled]: noDataValue,
        },
      ]
    } else {
      // 如果传入的数组是基本数组，如[1,2,3]则转为对象数组
      dataList.value = props.options.map((item) => {
        if (typeof item !== 'object') {
          return {
            [props.labelFiled]: item,
            [props.valueFiled]: item,
          }
        } else {
          return item
        }
      })
      dataShow(dataList.value, props.modelValue)
    }
  },
  {
    immediate: true,
    deep: true,
  }
)
// 监听数据变化双向绑定
watch(
  () => selectValue.value,
  (newV) => {
    emit('update:modelValue', newV)
  }
)

// 数据回显
watch(
  () => props.modelValue,
  (newV) => {
		console.log(newV, 'newVnewV');
    if (isEmpty(newV)) {
      selectText.value = undefined
      selectValue.value = undefined
    } else {
      dataShow(dataList.value, newV)
    }
  }
)

const isEmpty = (val) => {
  return val === '' || val === null || val === undefined
}
</script>

<style scoped>
.uni_input {
  min-height: 35px;
  padding: 0 5px 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 4px;
  word-break: break-all;
}
.show_text {
	color: #333;
	font-size: 14px;
}
.uni_input .placeholder {
  font-size: 12px;
  color: #6a6a6a;
}
.hideBorder {
  border: none;
}
.disabled {
  background-color: #f5f7fa;
}
</style>
