---
title: Rate 评分
---

# Rate 评分

### 单个全选

<ClientOnly>
<div class="m-y-20">
    <el-rate v-model="value1"></el-rate>
</div>
</ClientOnly>

<script setup>
import { ref } from 'vue'

const value1 = ref(null)
const value2 = ref(2)
const value3 = ref(null)
const value4 = ref(2.5)
</script>

::: details 示例代码

```html
<el-rate v-model="value1"></el-rate>

<script setup>
    import { ref } from 'vue'

    const value1 = ref(null)
</script>
```

:::

### 单个半选

<ClientOnly>
<div class="m-y-20">
    <el-rate v-model="value4" allow-half></el-rate>
</div>
</ClientOnly>

::: details 示例代码

```html
<el-rate v-model="value4"></el-rate>

<script setup>
    import { ref } from 'vue'

    const value4 = ref(2.5)
</script>
```

:::

### 已选禁用

<ClientOnly>
<div class="m-y-20">
    <el-rate v-model="value2" disabled></el-rate>
</div>
</ClientOnly>

::: details 示例代码

```html
<el-rate v-model="value2" disabled></el-rate>

<script setup>
    import { ref } from 'vue'

    const value2 = ref(2)
</script>
```

:::

### 未选禁用

<ClientOnly>
<div class="m-y-20">
    <el-rate v-model="value3" disabled></el-rate>
</div>
</ClientOnly>

::: details 示例代码

```html
<el-rate v-model="value3" disabled></el-rate>

<script setup>
    import { ref } from 'vue'

    const value3 = ref(null)
</script>
```

:::
