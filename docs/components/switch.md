---
title: Switch 开关
---

# Switch 开关

### 基础用法

<ClientOnly>
<div class="m-y-20">
    <div class="grid grid-cols-4 gap-col-12px gap-row-16px">
        <el-switch v-model="value1"></el-switch>
        <el-switch v-model="value2"></el-switch>
    </div>
</div>
</ClientOnly>

<script setup>
import { ref } from 'vue'
const value1 = ref(true)
const value2 = ref(false)

const value3 = ref(true)
const value4 = ref(true)
const value5 = ref(true)

const value6 = ref(true)
const value7 = ref(false)
</script>

::: details 示例代码

```html
<el-switch v-model="value1"></el-switch>
<el-switch v-model="value2"></el-switch>

<script setup>
import { ref } from 'vue'
const value1 = ref(true)
const value2 = ref(false)
</script>
```

:::

### 不同尺寸

<ClientOnly>
<div class="m-y-20">
    <div class="grid grid-cols-4 gap-col-12px gap-row-16px">
        <el-switch v-model="value3" size="large" active-text="开启" inactive-text="关闭"></el-switch>
        <el-switch v-model="value4" active-text="Open" inactive-text="Close"></el-switch>
        <el-switch v-model="value5" size="small" active-text="Open" inactive-text="Close"></el-switch>
    </div>
</div>
</ClientOnly>

::: details 示例代码

```html
<el-switch v-model="value3" size="large" active-text="开启" inactive-text="关闭"></el-switch>
<el-switch v-model="value4" active-text="Open" inactive-text="Close"></el-switch>
<el-switch v-model="value5" size="small" active-text="Open" inactive-text="Close"></el-switch>

<script setup>
import { ref } from 'vue'
const value3 = ref(true)
const value4 = ref(true)
const value5 = ref(true)
</script>
```

:::

### 禁用状态

<ClientOnly>
<div class="m-y-20">
    <div class="grid grid-cols-4 gap-col-12px gap-row-16px">
        <el-switch v-model="value6" disabled></el-switch>
        <el-switch v-model="value7" disabled></el-switch>
    </div>
</div>
</ClientOnly>

::: details 示例代码

```html
<el-switch v-model="value6" disabled></el-switch>
<el-switch v-model="value7" disabled></el-switch>

<script setup>
import { ref } from 'vue'
const value6 = ref(true)
const value7 = ref(false)
</script>
```

:::

### 自定义Css变量

| 参数                          | 说明               | 类型   | 可选值 | 默认值 |
| ----------------------------- | ------------------ | ------ | ------ | ------ |
| `--zrx-switch-large-minwidth` | 大号开关的最小宽度 | string | --     | 48px   |
| `--zrx-switch-large-height`   | 大号开关的视觉高度 | string | --     | 24px   |
| `--zrx-switch-minwidth`       | 开关的最小宽度     | string | --     | 40px   |
| `--zrx-switch-height`         | 开关的高度         | string | --     | 20px   |
| `--zrx-switch-large-minwidth` | 小号开关的最小宽度 | string | --     | 32px   |
| `--zrx-switch-small-height`   | 小号开关的高度     | string | --     | 16px   |
