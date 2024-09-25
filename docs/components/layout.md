---
title: Layout 布局组件
---

# Layout 布局组件

<ClientOnly>
<zrx-layout title="zrx-admin-plus" class="m-y-20" :menu="zrxComponents" @menu-item-click="onMenuItemClick">
<template #breadcrumb>
<el-breadcrumb separator="＞">
<el-breadcrumb-item>{{ breadcrumbName }}</el-breadcrumb-item>
</el-breadcrumb>
</template>

<div class="zrx-common-container h-full p-y-24 p-x-16 overflow-y-auto">
<component :is="componentName" v-if="componentName"></component>
</div>
</zrx-layout>
</ClientOnly>

<script setup>
    import { ref, shallowRef } from 'vue'

    const zrxComponents = []
    const vmModules = import.meta.glob('../../src/examples/*.vue', { eager: true })

    const breadcrumbName = ref('')
    const componentName = shallowRef('')
    for (const path in vmModules) {
        zrxComponents.push({
            key: path,
            path: path,
            component: vmModules[path].default,
            label: path?.split('/')?.at(-1).replace('Demo.vue', '')
        })
    }

    const onMenuItemClick = (item) => {
        breadcrumbName.value = item.label
        componentName.value = item.component
    }
</script>

::: details 示例代码

```html
<zrx-layout title="zrx-admin-plus" class="m-y-20" :menu="zrxComponents" @menu-item-click="onMenuItemClick">
    <template #breadcrumb>
        <el-breadcrumb separator="＞">
            <el-breadcrumb-item>{{ breadcrumbName }}</el-breadcrumb-item>
        </el-breadcrumb>
    </template>
    <div class="zrx-common-container h-full p-y-24 p-x-16">
        <component :is="componentName" v-if="componentName"></component>
    </div>
</zrx-layout>

<script setup>
    import { ref, shallowRef } from 'vue'

    const zrxComponents = []
    const vmModules = import.meta.glob('../../src/examples/*.vue', { eager: true })

    const breadcrumbName = ref('')
    const componentName = shallowRef('')
    for (const path in vmModules) {
        const label = path?.split('/')?.at(-1).replace('Demo.vue', '')
        if(label != 'layout') zrxComponents.push({
            key: path,
            path: path,
            component: vmModules[path].default,
            label: path?.split('/')?.at(-1).replace('Demo.vue', '')
        })
    }

    const onMenuItemClick = (item) => {
        breadcrumbName.value = item.label
        componentName.value = item.component
    }
</script>
```

:::

### Attributes

| 参数            | 说明             | 类型   | 可选值 | 默认值 |
| --------------- | ---------------- | ------ | ------ | ------ |
| `title`         | 项目的左侧标题   | String | —      | —      |
| `subTitle`      | 项目的左侧副标题 | String | —      | —      |
| `defaultActive` | 菜单的默认选择项 | String | —      | —      |
| `menu`          | 菜单数据         | Array  | —      | —      |

### Events

| 事件名称          | 说明           | 回调参数     |
| ----------------- | -------------- | ------------ |
| `collapse-change` | 菜单折叠回调   | 当前折叠状态 |
| `menu-item-click` | 点击菜单项回调 | 点击菜单项   |

### Slots

| name         | 说明         |
| ------------ | ------------ |
| `menu`       | 左侧菜单插槽 |
| `icon`       | 左侧项目图标插槽 |
| `breadcrumb` | 面包屑插槽   |
| —            | 默认内容插槽 |

### 自定义Css变量

| 参数                      | 说明               | 类型   | 可选值 | 默认值      |
| ------------------------- | ------------------ | ------ | ------ | ----------- |
| `--zrx-top-nav-height`    | 顶部高度           | string | —      | 56px        |
| `--zrx-page-padding`      | 页面内容部分内边距 | string | —      | 0 16px 16px |
| `--zrx-top-nav-padding-x` | 顶部水平方向内边距 | string | —      | 16px        |
