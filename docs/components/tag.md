---
title: Tag 标签
---

# Tag 标签

用于标记和选择

### 基础用法

<ClientOnly>
<div class="f-c gap-col-8px m-y-20">
    <el-tag class="zrx-tag-white">white</el-tag>
    <el-tag type="info">grey</el-tag>
    <el-tag type="primary">blue</el-tag>
    <el-tag type="success">green</el-tag>
    <el-tag type="warning">orange</el-tag>
    <el-tag type="danger">red</el-tag>
</div>
</ClientOnly>

::: details 示例代码

```html
<el-tag class="zrx-tag-white">white</el-tag>
<el-tag type="info">grey</el-tag>
<el-tag type="primary">blue</el-tag>
<el-tag type="success">green</el-tag>
<el-tag type="warning">orange</el-tag>
<el-tag type="danger">red</el-tag>
```

:::

### 可移除

<ClientOnly>
<div class="f-c gap-col-8px m-y-20">
    <el-tag class="zrx-tag-white" closable>white</el-tag>
    <el-tag closable type="info">grey</el-tag>
    <el-tag closable type="primary">blue</el-tag>
    <el-tag closable type="success">green</el-tag>
    <el-tag closable type="warning">orange</el-tag>
    <el-tag closable type="danger">red</el-tag>
</div>
</ClientOnly>

::: details 示例代码

```html
<el-tag class="zrx-tag-white" closable>white</el-tag>
<el-tag closable type="info">grey</el-tag>
<el-tag closable type="primary">blue</el-tag>
<el-tag closable type="success">green</el-tag>
<el-tag closable type="warning">orange</el-tag>
<el-tag closable type="danger">red</el-tag>
```

:::

### 不同尺寸

<ClientOnly>
<div class="f-c gap-col-8px m-t-20">
    <el-tag class="zrx-tag-white" size="large">large tag</el-tag>
</div>
</ClientOnly>

::: details 示例代码

```html
<el-tag class="zrx-tag-white" size="large">large tag</el-tag>
```

:::

### 自定义Css变量

| 参数                            | 说明                                | 类型   | 可选值 | 默认值 |
| ------------------------------- | ----------------------------------- | ------ | ------ | ------ |
| `--zrx-tag-height`              | 高度                                | string | —      | 24px   |
| `--zrx-tag-padding-x`           | 水平方向内边距                      | string | —      | 7px    |
| `--zrx-tag-hover-bg-color`      | 当关闭icon处于hover时tag对应背景色  | string | —      |        |
| `--zrx-tag-hover-icon-bg-color` | 当关闭icon处于hover时icon对应背景色 | string | —      |        |
