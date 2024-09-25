---
title: Input Number 数字输入框
---

# Input Number 数字输入框

### UI标准中的用法

<ClientOnly>
<div class="m-y-20">
    <div class="grid grid-cols-4 gap-col-24px gap-row-16px">
        <el-input-number v-model="value1" controls-position="right"></el-input-number>
    </div>
</div>
</ClientOnly>

<script setup>
import { ref } from 'vue'

const value1 = ref(0)
const value2 = ref(1)
const value3 = ref(2)
const value4 = ref(3)
</script>

::: details 示例代码

```html
<el-input-number v-model="value1" controls-position="right"></el-input-number>

<script setup>
    import { ref } from 'vue'

    const value1 = ref(0)
</script>
```

:::

### 禁用

<ClientOnly>
<div class="m-y-20">
    <div class="grid grid-cols-4 gap-col-24px">
        <el-input-number v-model="value2" controls-position="right" disabled></el-input-number>
    </div>
</div>
</ClientOnly>

::: details 示例代码

```html
<el-input-number v-model="value2" controls-position="right" disabled></el-input-number>

<script setup>
    import { ref } from 'vue'

    const value2 = ref(1)
</script>
```

:::

### 更广泛的用法

<ClientOnly>
<div class="m-y-20">
    <div class="grid grid-cols-2 gap-col-24px gap-row-16px">
        <el-input-number v-model="value3" :controls="false"></el-input-number>
    </div>
</div>
</ClientOnly>

::: details 示例代码

```html
<el-input-number v-model="value3" :controls="false"></el-input-number>

<script setup>
    import { ref } from 'vue'

    const value3 = ref(2)
</script>
```

:::

### 禁用

<ClientOnly>
<div class="m-y-20">
    <div class="grid grid-cols-4 gap-col-24px gap-row-16px">
        <el-input-number v-model="value4" :controls="false" disabled></el-input-number>
    </div>
</div>
</ClientOnly>

::: details 示例代码

```html
<el-input-number v-model="value4" :controls="false" disabled></el-input-number>

<script setup>
    import { ref } from 'vue'

    const value4 = ref(3)
</script>
```
