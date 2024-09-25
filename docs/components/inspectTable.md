---
title: InspectTable 表格信息展示组件
---

# InspectTable 表格信息展示组件

<ClientOnly>
<div class="m-y-20">
    <zrx-inspect-table :data="data"></zrx-inspect-table>
</div>
</ClientOnly>

<script setup>
const data = [
    { label: '您的姓名', value: '罗小黑', required: true },
    { label: '您的份身份证号码', value: '410285199306124528' },
    { label: '您的手机号码', value: '15863245896' },
    { label: '人员类型', value: '其他' },
    { label: '是否居家隔离', value: '否' },
    { label: '住址', value: '翠香街道/紫荆社区居民委员会'.repeat(20), showTooltip: true },
    { label: '居家隔离所在街道', value: '翠香街道/紫荆社区居民委员会'.repeat(20), extraClass: 'grid-col-start-1 grid-col-end--1' }
]
</script>

::: details 示例代码

```html
<zrx-inspect-table :data="data"></zrx-inspect-table>

<script setup>
    const data = [
        { label: '您的姓名', value: '罗小黑', required: true },
        { label: '您的份身份证号码', value: '410285199306124528' },
        { label: '您的手机号码', value: '15863245896' },
        { label: '人员类型', value: '其他' },
        { label: '是否居家隔离', value: '否' },
        { label: '住址', value: '翠香街道/紫荆社区居民委员会'.repeat(20), showTooltip: true },
        { label: '居家隔离所在街道', value: '翠香街道/紫荆社区居民委员会'.repeat(20), extraClass: 'grid-col-start-1 grid-col-end--1' }
    ]
</script>
```

:::


### Attributes

| 参数          | 说明                      | 类型        | 可选值 | 默认值 |
| ------------- | ------------------------- | ----------- | ------ | ------ |
| `data`        | 展示的数据                | `Array<Item>` | —      | []     |
| `columns`     | 表格组件的列数            | Number      | —      | 2      |
| `label-width` | 表格的label的宽度         | Number      | —      | 144    |
| `label-class` | 表格的label额外的样式类名 | String      | —      | —      |

### Interface--Item

| 参数          | 说明                           | 类型    | 可选值 | 默认值 |
| ------------- | ------------------------------ | ------- | ------ | ------ |
| `label`       | 标签                           | string  | —      | —      |
| `value`       | 内容                           | string  | —      | —      |
| `reqiured`    | 标签是否带“\*”标志             | boolean | —      | false  |
| `showTooltip` | 内容是否超出省略               | boolean | —      | false  |
| `extraClass`  | 单元格的样式类名，用于更改样式 | string  | —      | —      |

### 自定义Css变量

| 参数                              | 说明 | 类型   | 可选值 | 默认值 |
| --------------------------------- | ---- | ------ | ------ | ------ |
| `--zrx-inspect-table-line-height` | 行高 | string | —      | 24px   |

### Slots

| name    | 说明     | 参数               |
| ------- | -------- | ------------------ |
| —       | 默认插槽 | #default="{ row }" |
| `label` | 标签插槽 | #label="{ row }"   |
