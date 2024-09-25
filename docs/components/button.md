---
title: Button 按钮
---

# Button 按钮

常用的操作按钮

### 主要按钮

<ClientOnly>
<div class="m-y-20">
    <el-button type="primary">主按钮</el-button>
    <el-button type="primary">
        <i class="svg-icon zrx-icon-download"></i>
        下载
    </el-button>
    <el-button type="primary"> <i class="svg-icon zrx-icon-search"></i>搜索用户 </el-button>
    <el-button type="primary" round >
        <i class="svg-icon zrx-icon-search"></i>
    </el-button>
    <el-button type="primary" circle>
        <i class="svg-icon zrx-icon-search"></i>
    </el-button>
    <el-button type="primary" style="--zrx-btn-min-width: 44px">确定</el-button>
    <el-button disabled type="primary" >主按钮</el-button>
</div>
</ClientOnly>

::: details 示例代码

```html
<el-button type="primary">主按钮</el-button>
<el-button type="primary">
    <i class="svg-icon zrx-icon-download"></i>
    下载
</el-button>
<el-button type="primary"> <i class="svg-icon zrx-icon-search"></i>搜索用户 </el-button>
<el-button type="primary" round>
    <i class="svg-icon zrx-icon-search"></i>
</el-button>
<el-button type="primary" circle>
    <i class="svg-icon zrx-icon-search"></i>
</el-button>
<el-button type="primary" style="--zrx-btn-min-width: 44px">确定</el-button>
<el-button disabled type="primary">主按钮</el-button>
```

:::

### 次要按钮

<ClientOnly>
<div class="m-y-20">
    <el-button type="default">次按钮</el-button>
    <el-button type="default">
        <i class="svg-icon zrx-icon-download"></i>
        下载
    </el-button>
    <el-button type="default"> 
        <i class="svg-icon zrx-icon-search"></i>搜索用户 
    </el-button>
    <el-button type="default" round>
        <i class="svg-icon zrx-icon-search"></i>
    </el-button>
    <el-button type="default" circle>
        <i class="svg-icon zrx-icon-search"></i>
    </el-button>
    <el-button type="default" style="--zrx-btn-min-width: 44px">确定</el-button>
    <el-button disabled type="default" >主按钮</el-button>
</div>
</ClientOnly>

::: details 示例代码

```html
<el-button type="default">次按钮</el-button>
<el-button type="default">
    <i class="svg-icon zrx-icon-download"></i>
    下载
</el-button>
<el-button type="default"> <i class="svg-icon zrx-icon-search"></i>搜索用户 </el-button>
<el-button type="default" round>
    <i class="svg-icon zrx-icon-search"></i>
</el-button>
<el-button type="default" circle>
    <i class="svg-icon zrx-icon-search"></i>
</el-button>
<el-button type="default" style="--zrx-btn-min-width: 44px">确定</el-button>
<el-button disabled type="default">主按钮</el-button>
```

:::

### 危险按钮

<ClientOnly>
<div class="m-y-20">
    <el-button type="danger">危险按钮</el-button>
    <el-button type="danger">
        <i class="svg-icon zrx-icon-download"></i>
        下载
    </el-button>
    <el-button type="danger"> <i class="svg-icon zrx-icon-search"></i>用户 </el-button>
    <el-button type="danger" round >
        <i class="svg-icon zrx-icon-search"></i>
    </el-button>
    <el-button type="danger" circle>
        <i class="svg-icon zrx-icon-search"></i>
    </el-button>
    <el-button type="danger" style="--zrx-btn-min-width: 44px">确定
    </el-button>
    <el-button disabled type="danger">主按钮</el-button>
</div>
</ClientOnly>

::: details 示例代码

```html
<el-button type="danger">危险按钮</el-button>
<el-button type="danger">
    <i class="svg-icon zrx-icon-download"></i>
    下载
</el-button>
<el-button type="danger"> <i class="svg-icon zrx-icon-search"></i>用户 </el-button>
<el-button type="danger" round>
    <i class="svg-icon zrx-icon-search"></i>
</el-button>
<el-button type="danger" circle>
    <i class="svg-icon zrx-icon-search"></i>
</el-button>
<el-button type="danger" style="--zrx-btn-min-width: 44px">确定 </el-button>
<el-button disabled type="danger">主按钮</el-button>
```

:::

### 幽灵按钮

<ClientOnly>
<div class="m-y-20">
    <el-button type="default" class="zrx-button-ghost">幽灵按钮</el-button>
    <el-button type="default" class="zrx-button-ghost">
        <i class="svg-icon zrx-icon-download"></i>
        下载
    </el-button>
    <el-button type="default" class="zrx-button-ghost"> <i class="svg-icon zrx-icon-search"></i>搜索用户 </el-button>
    <el-button type="default" round class="zrx-button-ghost">
        <i class="svg-icon zrx-icon-search"></i>
    </el-button>
    <el-button type="default" circle class="zrx-button-ghost">
        <i class="svg-icon zrx-icon-search"></i>
    </el-button>
    <el-button type="default" class="zrx-button-ghost" style="--zrx-btn-min-width: 44px">确定</el-button>
    <el-button disabled type="default" class="zrx-button-ghost">主按钮</el-button>
</div>
</ClientOnly>

::: details 示例代码

```html
<el-button type="default" class="zrx-button-ghost">幽灵按钮</el-button>
<el-button type="default" class="zrx-button-ghost">
    <i class="svg-icon zrx-icon-download"></i>
    下载
</el-button>
<el-button type="default" class="zrx-button-ghost"> <i class="svg-icon zrx-icon-search"></i>搜索用户 </el-button>
<el-button type="default" round class="zrx-button-ghost">
    <i class="svg-icon zrx-icon-search"></i>
</el-button>
<el-button type="default" circle class="zrx-button-ghost">
    <i class="svg-icon zrx-icon-search"></i>
</el-button>
<el-button type="default" class="zrx-button-ghost" style="--zrx-btn-min-width: 44px">确定</el-button>
<el-button disabled type="default" class="zrx-button-ghost">主按钮</el-button>
```

:::

### 文字按钮

<ClientOnly>
<div class="m-y-20">
    <el-button link type="primary">文字按钮</el-button>
    <el-button link type="primary">
        <i class="svg-icon zrx-icon-download"></i>
        下载
    </el-button>
    <el-button link type="primary"> <i class="svg-icon zrx-icon-search"></i>搜索用</el-button>
    <el-button link type="primary" style="--zrx-btn-min-width: 44px">确定</el-button>
    <el-button link disabled >主按钮</el-button>
</div>
</ClientOnly>

::: details 示例代码

```html
<el-button link type="primary">文字按钮</el-button>
<el-button link type="primary">
    <i class="svg-icon zrx-icon-download"></i>
    下载
</el-button>
<el-button link type="primary"> <i class="svg-icon zrx-icon-search"></i>搜索用</el-button>
<el-button link type="primary" style="--zrx-btn-min-width: 44px">确定</el-button>
<el-button link disabled>主按钮</el-button>
```

:::

### 自定义Css变量

| 参数                  | 说明           | 类型   | 可选值 | 默认值 |
| --------------------- | -------------- | ------ | ------ | ------ |
| `--zrx-btn-min-width` | 最小宽度       | string | —      | 80px   |
| `--zrx-btn-height`    | 高度           | string | —      | 32px   |
| `--zrx-btn-padding-x` | 水平方向内边距 | string | —      | 7px    |
| `--zrx-btn-padding-x` | 水平方向内边距 | string | —      | 7px    |
