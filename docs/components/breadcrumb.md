---
title: Breadcrumb 面包屑
---

# Breadcrumb 面包屑

<ClientOnly>
<div class="w-600 h-full p-x-12 p-y-16">
    <el-breadcrumb separator="＞">
        <el-breadcrumb-item :to="{ path: '/' }">系统管理</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">设备管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>视频监控</el-breadcrumb-item>
        <el-breadcrumb-item>视频监控（最后一级需要展示高亮）</el-breadcrumb-item>
    </el-breadcrumb>
</div>
</ClientOnly>

::: details 示例代码

```html
<template>
    <div class="w-400 h-full p-x-12 p-y-16">
        <el-breadcrumb separator="＞">
            <el-breadcrumb-item :to="{ path: '/' }">系统管理</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">设备管理</a></el-breadcrumb-item>
            <el-breadcrumb-item>视频监控</el-breadcrumb-item>
            <el-breadcrumb-item>视频监控</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script setup></script>
```

::: 

### 自定义Css变量

| 参数                          | 说明               | 类型   | 可选值 | 默认值 |
| ----------------------------- | ------------------ | ------ | ------ | ------ |
| `--zrx-breadcrumb-text-color`   | 面包屑字体色 | string | -- | #3b4155  |