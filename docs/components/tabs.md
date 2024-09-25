---
title: Tabs 标签页
---

# Tabs 标签页

### 基础用法

<ClientOnly>
<div class="m-y-20">
    <el-tabs v-model="activeName">
        <el-tab-pane label="User" name="first">User</el-tab-pane>
        <el-tab-pane label="Config" name="second">Config</el-tab-pane>
        <el-tab-pane label="Role" name="third">Role</el-tab-pane>
        <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
    </el-tabs>
    <div class="w-366">
        <el-tabs v-model="activeName">
            <el-tab-pane label="User" name="first">User</el-tab-pane>
            <el-tab-pane label="Config" name="second">Config</el-tab-pane>
            <el-tab-pane label="Role" name="third">Role</el-tab-pane>
            <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
        </el-tabs>
    </div>
    <el-tabs v-model="activeName" type="border-card">
        <el-tab-pane label="User" name="first">User</el-tab-pane>
        <el-tab-pane label="Config" name="second">Config</el-tab-pane>
        <el-tab-pane label="Role" name="third">Role</el-tab-pane>
        <el-tab-pane label="Task" name="fourth" disabled>Task</el-tab-pane>
    </el-tabs>
    <el-tabs v-model="activeName" type="border-card" closable class="m-t-20">
        <el-tab-pane label="User" name="first">User</el-tab-pane>
        <el-tab-pane label="Config" name="second">Config</el-tab-pane>
        <el-tab-pane label="Role" name="third">Role</el-tab-pane>
        <el-tab-pane label="Task" name="fourth" disabled>Task</el-tab-pane>
    </el-tabs>
</div>
</ClientOnly>

<script setup>
import { ref } from 'vue'

const activeName = ref('first')
</script>

::: details 示例代码

```html
<el-tabs v-model="activeName">
    <el-tab-pane label="User" name="first">User</el-tab-pane>
    <el-tab-pane label="Config" name="second">Config</el-tab-pane>
    <el-tab-pane label="Role" name="third">Role</el-tab-pane>
    <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
</el-tabs>
<div class="w-366">
    <el-tabs v-model="activeName">
        <el-tab-pane label="User" name="first">User</el-tab-pane>
        <el-tab-pane label="Config" name="second">Config</el-tab-pane>
        <el-tab-pane label="Role" name="third">Role</el-tab-pane>
        <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
    </el-tabs>
</div>
<el-tabs v-model="activeName" type="border-card">
    <el-tab-pane label="User" name="first">User</el-tab-pane>
    <el-tab-pane label="Config" name="second">Config</el-tab-pane>
    <el-tab-pane label="Role" name="third">Role</el-tab-pane>
    <el-tab-pane label="Task" name="fourth" disabled>Task</el-tab-pane>
</el-tabs>
<el-tabs v-model="activeName" type="border-card" closable class="m-t-20">
    <el-tab-pane label="User" name="first">User</el-tab-pane>
    <el-tab-pane label="Config" name="second">Config</el-tab-pane>
    <el-tab-pane label="Role" name="third">Role</el-tab-pane>
    <el-tab-pane label="Task" name="fourth" disabled>Task</el-tab-pane>
</el-tabs>

<script setup>
    import { ref } from 'vue'

    const activeName = ref('first')
</script>
```

:::

### 自定义Css变量

| 参数                          | 说明                 | 类型   | 可选值 | 默认值 |
| ----------------------------- | -------------------- | ------ | ------ | ------ |
| `--zrx-tabs-content-padding`  | 内容部分内边距       | string | —      | 16px   |
| `--zrx-tabs-scroll-padding-x` | 可滚动时，水平内边距 | string | —      | 24px   |
| `--zrx-tabs-item-width`       | 单个item的宽度       | string | —      | 106px  |
