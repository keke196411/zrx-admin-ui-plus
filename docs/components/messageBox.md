---
title: Switch 开关
---

# Switch 开关

### 基础用法

<ClientOnly>
<div class="w-600 h-full p-x-12 p-y-16">
    <el-button plain @click="open">成功点击弹窗</el-button>
    <el-button plain @click="open1">点击弹窗error</el-button>
    <el-button plain @click="open2">成功点击弹窗confirm</el-button>
    <el-button plain @click="open3">成功点击弹窗prompt</el-button>
</div>

<div class="w-600 h-full p-x-12 p-y-16">
    <el-button plain @click="open5">点击弹窗success</el-button>
    <el-button plain @click="open6">点击弹窗error</el-button>
    <el-button plain @click="open7">点击弹窗info</el-button>
    <el-button plain @click="open8">点击弹窗warning</el-button>
</div>
</ClientOnly>

<script setup>
import { h } from 'vue'
import { ElMessageBox } from '@/utils/messageBox'
const open = () => {
    ElMessageBox({
        title: '成功',
        message: '成功信息辅助说明提示',
        type: 'success'
    })
}
const open1 = () => {
    ElMessageBox({
        title: '错误',
        message: '错误信息辅助说明提示',
        type: 'error'
    })
}
const open2 = () => {
    ElMessageBox.confirm('确认（动作）全部（操作对象类型）？')
}
const open3 = () => {
    ElMessageBox.prompt('确认（动作）全部（操作对象类型）？', {
        title: '成功',
    })
}

const open5 = () => {
    ElMessageBox.alert('确认（动作）全部（操作对象类型）？', {
        title: '成功',
        type: 'success'
    })
}
const open6 = () => {
    ElMessageBox.alert('错误信息辅助说明提示', {
        title: '错误',
        type: 'error'
    })
}
const open7 = () => {
    ElMessageBox.alert('提示信息辅助说明提示', {
        title: '信息',
    })
}
const open8 = () => {
    ElMessageBox.confirm('提示信息辅助说明提示', {
        title: '信息',
    })
}
</script>

::: details 示例代码

```html
<div class="w-600 h-full p-x-12 p-y-16">
    <el-button plain @click="open">成功点击弹窗</el-button>
    <el-button plain @click="open1">成功点击弹窗alert</el-button>
    <el-button plain @click="open2">成功点击弹窗confirm</el-button>
    <el-button plain @click="open3">成功点击弹窗prompt</el-button>
</div>

<div class="w-600 h-full p-x-12 p-y-16">
    <el-button plain @click="open5">点击弹窗success</el-button>
    <el-button plain @click="open6">点击弹窗error</el-button>
    <el-button plain @click="open7">点击弹窗info</el-button>
    <el-button plain @click="open8">点击弹窗warning</el-button>
</div>

<script setup>
import { h } from 'vue'
import { ElMessageBox } from 'zrx-admin-plus'
const open = () => {
    ElMessageBox({
        title: '成功',
        message: '成功信息辅助说明提示',
        type: 'success'
    })
}
const open1 = () => {
    ElMessageBox({
        title: '错误',
        message: '错误信息辅助说明提示',
        type: 'error'
    })
}
const open2 = () => {
    ElMessageBox.confirm('确认（动作）全部（操作对象类型）？')
}
const open3 = () => {
    ElMessageBox.prompt('确认（动作）全部（操作对象类型）？', {
        title: '成功',
    })
}

const open5 = () => {
    ElMessageBox.alert('确认（动作）全部（操作对象类型）？', {
        title: '成功',
        type: 'success'
    })
}
const open6 = () => {
    ElMessageBox.alert('错误信息辅助说明提示', {
        title: '错误',
        type: 'error'
    })
}
const open7 = () => {
    ElMessageBox.alert('提示信息辅助说明提示', {
        title: '信息',
    })
}
const open8 = () => {
    ElMessageBox.confirm('提示信息辅助说明提示', {
        title: '信息',
    })
}
```

:::

### 自定义Css变量

| 参数                  | 说明                      | 类型   | 可选值 | 默认值 |
| --------------------- | ------------------------- | ------ | ------ | ------ |
| `--zrx-btn-min-width` | 模态弹窗中btn按钮最小宽度 | string | --     | 96px   |
| `--zrx-icon-width`    | 模态弹窗中左边icon宽度    | string | --     | 40px   |
| `--zrx-icon-height`   | 模态弹窗中左边icon高度    | string | --     | 40px   |
