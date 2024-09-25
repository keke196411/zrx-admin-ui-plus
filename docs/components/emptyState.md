---
title: EmptyState 空态图
---

# EmptyState 空态图

用于内容为空时提示用户

### 基础用法

<ClientOnly>
<div class="inline-flex flex-wrap items-center gap-col-24px">
    <zrx-empty-state v-for="n in states" :key="n.type" :type="n.type" :text="n.text"></zrx-empty-state>
</div>
</ClientOnly>

<script setup>
const states = [
    {
        type: 'data',
        text: '无数据缺省状态'
    },
    {
        type: 'personal',
        text: '未添加人员缺省状态'
    },
    {
        type: 'image',
        text: '图片空状态'
    },
    {
        type: 'imageFailure',
        text: '图片加载失败'
    },
    {
        type: 'file',
        text: '未添加文件缺省状态'
    },
    {
        type: 'search',
        text: '搜索结果为空'
    },
    {
        type: 'info',
        text: '用于出错相关空白页'
    },
    {
        type: 'warning',
        text: '用于警示相关空白页'
    },
    {
        type: 'map',
        text: '地图缺省状态'
    },
    {
        type: 'mapOffline',
        text: '地图离线状态'
    },
    {
        type: 'mapEmpty',
        text: '未添加地图缺省状态'
    },
    {
        type: 'video',
        text: '视频播放错误'
    },
    {
        type: 'videoOffline',
        text: '视频离线状态'
    }
]
</script>

::: details 示例代码

```html
<div class="f-c gap-col-24px">
    <zrx-empty-state v-for="n in states" :key="n.type" :type="n.type" :text="n.text"></zrx-empty-state>
</div>

<script setup>
    const states = [
        {
            type: 'data',
            text: '无数据缺省状态'
        },
        {
            type: 'personal',
            text: '未添加人员缺省状态'
        },
        {
            type: 'image',
            text: '图片空状态'
        },
        {
            type: 'imageFailure',
            text: '图片加载失败'
        },
        {
            type: 'file',
            text: '未添加文件缺省状态'
        },
        {
            type: 'search',
            text: '搜索结果为空'
        },
        {
            type: 'info',
            text: '用于出错相关空白页'
        },
        {
            type: 'warning',
            text: '用于警示相关空白页'
        },
        {
            type: 'map',
            text: '地图缺省状态'
        },
        {
            type: 'mapOffline',
            text: '地图离线状态'
        },
        {
            type: 'mapEmpty',
            text: '未添加地图缺省状态'
        },
        {
            type: 'video',
            text: '视频播放错误'
        },
        {
            type: 'videoOffline',
            text: '视频离线状态'
        }
    ]
</script>
```

:::

### 缺省图标

用作缺省图标时，设置no-margin取消上下边距，并适当调整图标宽高

<ClientOnly>
<div class="w-160 h-56 f-c" border="1 solid border">
    <zrx-empty-state type="imageFailure" no-margin></zrx-empty-state>
    <div class="w-10 m-l-8 flex-auto">汽车消费贷</div>
</div>
</ClientOnly>

::: details 示例代码

```html
<div class="w-160 h-56 f-c" border="1 solid border">
    <zrx-empty-state type="imageFailure" no-margin></zrx-empty-state>
    <div class="w-10 m-l-8 flex-auto">汽车消费贷</div>
</div>
```

:::

### Attributes

| 参数        | 说明             | 类型    | 可选值                                                                                                           | 默认值                     |
| ----------- | ---------------- | ------- | ---------------------------------------------------------------------------------------------------------------- | -------------------------- |
| `type`      | 类型             | string  | data, personal, image, imageFailure, search, file, info, warning, map, mapOffline, mapEmpty, video, videoOffline | data                       |
| `text`      | 文字提示         | string  | —                                                                                                                | data: '暂无数据', 其他: '' |
| `no-margin` | 是否取消上下边距 | boolean | —                                                                                                                | false                      |

### 自定义Css变量

| 参数                         | 说明                                      | 类型   | 可选值 | 默认值 |
| ---------------------------- | ----------------------------------------- | ------ | ------ | ------ |
| `--zrx-empty-state-margin-y` | no-margin为false时before、after伪类的高度 | string | —      | 24px   |
| `--zrx-empty-state-text-mt`  | 提示文案到上面图标的边距                  | string | —      | 24px   |
| `--zrx-empty-state-width`    | 图标宽度                                  | string | —      | 56px   |
| `--zrx-empty-state-height`   | 图表高度                                  | string | —      | 56px   |
