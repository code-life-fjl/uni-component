# el-date-picker

## 说明

使用 picker-view 和 picker-view-column 封装的时间选择器，支持年月日时分秒各种形式的组合搭配。

## 使用方式

    ```html
    <template>
    <view class="content">
    	<cl-date-picker v-model="value" isNow dateType="hh:mm:ss"></cl-date-picker>
    </view>

</template>
	```
	
# 属性列表
| 属性名						| 说明																																																			|  类型											| 默认值							|
| -----------				| -----------																																																| -----------								| -----------					|
| dateType						| 时间格式，包含（YYYY,MM,DD,hh,mm,ss）即可，例如想要一个年月日：YYYY-MM-DD或者YYYY/MM/DD或者YYYY年MM月DD日		|  String										| YYYY-MM-DD							|
| v-model				   | 绑定的时间值																					|  String					|  ''  |
| placeholder				| 输入框提示																																												|String											|请选择								|
| disabled				| 是否禁用																																															|Boolean											|false	|
| hideBorder		| 是否隐藏边框																																					|Boolean											| false								|
| yearOptions				| 手动年份下拉选择														|string[]											| ['1990', '1991', ... '2050']									|

# 方法列表

| 方法名 | 说明             | 参数               |
| ------ | ---------------- | ------------------ |
| clear  | 点击清除图标     | -                  |
| cancel | 点击取消         | -                  |
| submit | 点击确定进行选中 | 为选择后格式化的值 |

> 若有问题可联系作者：微信号：fjl_code_life
