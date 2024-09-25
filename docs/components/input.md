---
title: Input 输入框
---

# Input 输入框

### 基础用法

<ClientOnly>
<div class="m-y-20">
    <div class="grid grid-cols-4 gap-col-24px gap-row-16px">
        <el-input v-model="value" placeholder="请输入" :maxlength="16" show-word-limit></el-input>
        <el-input v-model="value" placeholder="请输入" disabled></el-input>
        <el-input v-model="value" placeholder="请输入" clearable></el-input>
        <el-input v-model="value" placeholder="请输入" show-password></el-input>
    </div>
</div>
</ClientOnly>

<script setup>
import { ref } from 'vue'

const value = ref('')
const input = ref('')
const num = ref(1)
</script>

::: details 示例代码

```html
<el-input v-model="value" placeholder="请输入" :maxlength="16" show-word-limit></el-input>
<el-input v-model="value" placeholder="请输入" disabled></el-input>
<el-input v-model="value" placeholder="请输入" clearable></el-input>
<el-input v-model="value" placeholder="请输入" show-password></el-input>

<script setup>
    import { ref } from 'vue'

    const value = ref('')
</script>
```

:::

### 带图标的输入框 Icon Input

<ClientOnly>
<div class="m-y-20">
    <div class="grid grid-cols-4 gap-col-24px">
        <el-input v-model="value" placeholder="请输入">
            <template #prefix>
                <i class="svg-icon zrx-icon-search"></i>
            </template>
        </el-input>
        <el-input v-model="value" placeholder="请输入" disabled>
            <template #suffix>
                <i class="svg-icon zrx-icon-search"></i>
            </template>
        </el-input>
        <el-input v-model="value" placeholder="请输入" clearable>
            <template #suffix>
                <i class="svg-icon zrx-icon-search"></i>
            </template>
        </el-input>
    </div>
</div>
</ClientOnly>

::: details 示例代码

```html
<el-input v-model="value" placeholder="请输入">
    <template #prefix>
        <i class="svg-icon zrx-icon-search"></i>
    </template>
</el-input>
<el-input v-model="value" placeholder="请输入" disabled>
    <template #suffix>
        <i class="svg-icon zrx-icon-search"></i>
    </template>
</el-input>
<el-input v-model="value" placeholder="请输入" clearable>
    <template #suffix>
        <i class="svg-icon zrx-icon-search"></i>
    </template>
</el-input>

<script setup>
    import { ref } from 'vue'

    const value = ref('')
</script>
```

:::

### 文本框

<ClientOnly>
<div class="m-y-20">
    <div class="grid grid-cols-2 gap-col-24px gap-row-16px">
        <el-input v-model="value" placeholder="请输入" type="textarea" :rows="5" :maxlength="16" show-word-limit></el-input>
        <el-input v-model="value" placeholder="请输入" type="textarea" :rows="5" disabled></el-input>
    </div>
</div>
</ClientOnly>

::: details 示例代码

```html
<el-input v-model="value" placeholder="请输入" type="textarea" :rows="5" :maxlength="16" show-word-limit></el-input>
<el-input v-model="value" placeholder="请输入" type="textarea" :rows="5" disabled></el-input>

<script setup>
    import { ref } from 'vue'

    const value = ref('')
</script>
```

:::

### 数字输入框 Input Number

<ClientOnly>
<div class="m-y-20">
    <div class="grid grid-cols-4 gap-col-24px gap-row-16px">
        <el-input-number v-model="num" :min="1" :max="99" controls-position="right"></el-input-number>
        <el-input-number v-model="num" :min="1" :max="99" controls-position="right" disabled></el-input-number>
    </div>
</div>
</ClientOnly>

::: details 示例代码

```html
<el-input-number v-model="num" :min="1" :max="99" controls-position="right"></el-input-number>
<el-input-number v-model="num" :min="1" :max="99" controls-position="right" disabled></el-input-number>

<script setup>
    import { ref } from 'vue'

    const num = ref(1)
</script>
```

:::

### 密码输入框

<ClientOnly>
<div class="m-y-20">
    <div class="w-300">
        <el-input type="password" v-model="input" placeholder="please input password" show-password></el-input>
    </div>
</div>
</ClientOnly>

::: details 示例代码

```html
<el-input type="password" v-model="value" placeholder="please input password" show-password></el-input>
<script setup>
import { ref } from 'vue'
const value = ref('')
</script>

```

:::

### 自定义Css变量

| 参数                    | 说明           | 类型   | 可选值 | 默认值 |
| ----------------------- | -------------- | ------ | ------ | ------ |
| `--zrx-input-padding-x` | 水平方向内边距 | string | —      | 7px    |
