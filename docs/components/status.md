---
title: Status 状态
---

# Status 状态

用于表格等处

### 基础用法

<ClientOnly>
<div class="flex gap-col-24px m-y-20">
    <zrx-status type="error">已报错</zrx-status>
    <zrx-status type="danger">已报错</zrx-status>
    <zrx-status type="success">已完成</zrx-status>
    <zrx-status type="primary">进行中</zrx-status>
    <zrx-status type="warning">预警</zrx-status>
    <zrx-status type="disabled">已禁用</zrx-status>
</div>
</ClientOnly>

::: details 示例代码

```html
<div class="flex gap-col-24px">
    <zrx-status type="error">已报错</zrx-status>
    <zrx-status type="danger">已报错</zrx-status>
    <zrx-status type="success">已完成</zrx-status>
    <zrx-status type="primary">进行中</zrx-status>
    <zrx-status type="warning">预警</zrx-status>
    <zrx-status type="disabled">已禁用</zrx-status>
</div>
```

:::

### 自定义颜色

<ClientOnly>
<div class="m-y-20">
    <zrx-status color="#626aef">已禁用</zrx-status>
</div>
</ClientOnly>

::: details 示例代码

```html
<zrx-status color="#626aef">已禁用</zrx-status>
```

:::

### Attributes

| 参数    | 说明           | 类型   | 可选值                                                    | 默认值 |
| ------- | -------------- | ------ | --------------------------------------------------------- | ------ |
| `type`  | 状态类型       | String | `primary` `success` `warning` `danger` `error` `disabled` | —      |
| `color` | 自定义背景颜色 | String | —                                                         | —      |
