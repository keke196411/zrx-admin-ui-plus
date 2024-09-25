---
title: Steps 步骤条
---

# Steps 步骤条

### 横向常规

<ClientOnly>
<div class="w-600 h-full p-x-12 p-y-16">
    <el-steps :active="1" finish-status="finish" align-center>
        <el-step title="Title" description="This is a very very long discribtion."></el-step>
        <el-step title="Title" description="This is a very very long discribtion."></el-step>
        <el-step title="Title" description="This is a very very long discribtion."></el-step>
    </el-steps>
</div>
</ClientOnly>

::: details 示例代码

```html
<div class="w-600 h-full p-x-12 p-y-16">
    <el-steps :active="1" space="50%" finish-status="finish" align-center>
        <el-step title="Title" description="This is a very very long discribtion."></el-step>
        <el-step title="Title" description="This is a very very long discribtion."></el-step>
        <el-step title="Title" description="This is a very very long discribtion."></el-step>
    </el-steps>
</div>
```

::: 

### 纵向常规

<ClientOnly>
<div class="w-188 h-280 p-x-12 p-y-16">
    <el-steps :active="1" direction="vertical" finish-status="finish" align-center>
        <el-step title="Title" description="This is a very very long discribtion."></el-step>
        <el-step title="Title" description="This is a very very long discribtion."></el-step>
        <el-step title="Title" description="This is a very very long discribtion."></el-step>
    </el-steps>
</div>
</ClientOnly>

::: details 示例代码

```html
<div class="w-188 h-280 p-x-12 p-y-16">
    <el-steps :active="1" direction="vertical" finish-status="finish" align-center>
        <el-step title="Title" description="This is a very very long discribtion."></el-step>
        <el-step title="Title" description="This is a very very long discribtion."></el-step>
        <el-step title="Title" description="This is a very very long discribtion."></el-step>
    </el-steps>
</div>
```

:::

### 横向小

<ClientOnly>
<div class="w-600 h-full p-x-12 p-y-16">
    <el-steps class="zrx-sm-step" :active="1" finish-status="finish" align-center>
        <el-step title="Title" description="This is a very very long discribtion."></el-step>
        <el-step title="Title" description="This is a very very long discribtion."></el-step>
        <el-step title="Title" description="This is a very very long discribtion."></el-step>
    </el-steps>
</div>
</ClientOnly>

::: details 示例代码

```html
<div class="w-600 h-full p-x-12 p-y-16">
    <el-steps class="zrx-sm-step" :active="1" finish-status="finish" align-center>
        <el-step title="Title" description="This is a very very long discribtion."></el-step>
        <el-step title="Title" description="This is a very very long discribtion."></el-step>
        <el-step title="Title" description="This is a very very long discribtion."></el-step>
    </el-steps>
</div>
```

:::

### 纵向小

<ClientOnly>
<div class="w-188 h-360 p-x-12 p-y-16">
    <el-steps space="50%" class="zrx-sm-step" :active="1" direction="vertical" finish-status="finish" align-center>
        <el-step title="Title" description="This is a very very long discribtion."></el-step>
        <el-step title="Title" description="This is a very very long discribtion."></el-step>
        <el-step title="Title" description="This is a very very long discribtion."></el-step>
    </el-steps>
</div>
</ClientOnly>

::: details 示例代码

```html
<div class="w-188 h-360 p-x-12 p-y-16">
    <el-steps space="50%" class="zrx-sm-step" :active="1" direction="vertical" finish-status="finish" align-center>
        <el-step title="Title" description="This is a very very long discribtion."></el-step>
        <el-step title="Title" description="This is a very very long discribtion."></el-step>
        <el-step title="Title" description="This is a very very long discribtion."></el-step>
    </el-steps>
</div>
```

:::

### 自定义Css变量

| 参数                          | 说明               | 类型   | 可选值 | 默认值 |
| ----------------------------- | ------------------ | ------ | ------ | ------ |
| `--zrx-step-font-color`   | 步骤条字体色 | string | -- | #3b4155  |
| `--zrx-step-border-color`   | 步骤条border颜色 | string | -- | #dcdfe8  |
| `--zrx-step-porcess-bg-color`   | 步骤条进度中背景色 | string | -- | #405ffe  |
| `--zrx-step-circle-diameter`   | 步骤条圆直径 | string | -- | 28px  |