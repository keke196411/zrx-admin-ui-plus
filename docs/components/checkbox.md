---
title: Checkbox 多选框
---

# Checkbox 多选框

<ClientOnly>
<div class="flex-col m-y-20">
    <el-checkbox-group v-model="value">
        <el-checkbox label="1">选项一</el-checkbox>
        <el-checkbox label="2">选项二</el-checkbox>
        <el-checkbox label="3" disabled>选项三</el-checkbox>
    </el-checkbox-group>
    <el-checkbox v-model="checked" class="m-t-20" @change="changeAll" :indeterminate="isIndeterminate">Check all</el-checkbox>
    <el-checkbox-group v-model="value1" @change="onChange">
        <el-checkbox label="1">选项一</el-checkbox>
        <el-checkbox label="2">选项二</el-checkbox>
        <el-checkbox label="3" disabled>选项三</el-checkbox>
    </el-checkbox-group>
</div>
</ClientOnly>

<script setup>
import { ref } from 'vue'

const value = ref(['1'])
const value1 = ref(['3'])

const checked = ref(false)
const isIndeterminate = ref(true)
const allCheck = ['1', '2', '3']
const changeAll = (val) => {
    if (val == true) {
        value1.value = allCheck
    } else if (val == false) {
        value1.value = []
    }
    isIndeterminate.value = false
}
const onChange = (val) => {
    isIndeterminate.value = val.length > 0 && val.length < allCheck.length
    if (val.length == allCheck.length) {
        checked.value = true
    } else {
        checked.value = false
    }
}
</script>

::: details 示例代码

```html
<el-checkbox-group v-model="value">
    <el-checkbox label="1">选项一</el-checkbox>
    <el-checkbox label="2">选项二</el-checkbox>
    <el-checkbox label="3" disabled>选项三</el-checkbox>
</el-checkbox-group>
<el-checkbox v-model="checked" class="m-t-20" @change="changeAll" :indeterminate="isIndeterminate">Check all</el-checkbox>
<el-checkbox-group v-model="value1" @change="onChange">
    <el-checkbox label="1">选项一</el-checkbox>
    <el-checkbox label="2">选项二</el-checkbox>
    <el-checkbox label="3" disabled>选项三</el-checkbox>
</el-checkbox-group>

<script setup>
    import { ref } from 'vue'

    const value = ref(['1'])
    const value1 = ref(['3'])

    const checked = ref(false)
    const isIndeterminate = ref(true)
    const allCheck = ['1', '2', '3']
    const changeAll = (val) => {
        if (val == true) {
            value1.value = allCheck
        } else if (val == false) {
            value1.value = []
        }
        isIndeterminate.value = false
    }
    const onChange = (val) => {
        isIndeterminate.value = val.length > 0 && val.length < allCheck.length
        if (val.length == allCheck.length) {
            checked.value = true
        } else {
            checked.value = false
        }
    }
</script>
```

:::

### 自定义Css变量

| 参数                             | 说明             | 类型   | 可选值 | 默认值 |
| -------------------------------- | ---------------- | ------ | ------ | ------ |
| `--zrx-checkbox-input-size`      | checkbox盒子尺寸 | string | —      | 24px   |
