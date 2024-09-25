---
title: Radio 单选框
---

# Radio 单选框

### 基础用法

<ClientOnly>
<div class="flex-col m-y-20">
    <el-radio-group v-model="value">
        <el-radio label="1">选项一</el-radio>
        <el-radio label="2">选项二</el-radio>
        <el-radio label="3" disabled>选项三</el-radio>
    </el-radio-group>
    <el-radio-group v-model="value1" class="m-y-20">
        <el-radio label="1">选项一</el-radio>
        <el-radio label="2">选项二</el-radio>
        <el-radio label="3" disabled>选项三</el-radio>
    </el-radio-group>
</div>
</ClientOnly>

<script setup>
import { ref } from 'vue'

const value = ref('2')
const value1 = ref('3')
</script>

::: details 示例代码

```html
<el-radio-group v-model="value">
    <el-radio label="1">选项一</el-radio>
    <el-radio label="2">选项二</el-radio>
    <el-radio label="3" disabled>选项三</el-radio>
</el-radio-group>
<el-radio-group v-model="value1" class="m-y-20">
    <el-radio label="1">选项一</el-radio>
    <el-radio label="2">选项二</el-radio>
    <el-radio label="3" disabled>选项三</el-radio>
</el-radio-group>

<script setup>
    import { ref } from 'vue'

    const value = ref('2')
    const value1 = ref('3')
</script>
```

:::

### 自定义Css变量

| 参数                             | 说明           | 类型   | 可选值 | 默认值 |
| -------------------------------- | -------------- | ------ | ------ | ------ |
| `--zrx-radio-input-size`         | radio盒子尺寸  | string | —      | 24px   |
| `--zrx-radio-checked-inner-size` | 选中部分的尺寸 | string | —      | 6px    |
