---
title: Slider 滑块
---

# Slider 滑块

<ClientOnly>
<div class="w-436 p-t-48 flex-col gap-row-20px">
    <el-slider v-model="value1" show-input></el-slider>
    <el-slider v-model="value1" show-input disabled></el-slider>
    <el-slider v-model="value2" range></el-slider>
</div>
</ClientOnly>

<script setup>
import { ref } from 'vue'

const value1 = ref(20)
const value2 = ref([10, 20])
</script>

::: details 示例代码

```html
<el-slider v-model="value1" show-input></el-slider>
<el-slider v-model="value1" show-input disabled></el-slider>
<el-slider v-model="value2" range></el-slider>

<script setup>
    import { ref } from 'vue'

    const value1 = ref(20)
    const value2 = ref([10, 20])
</script>
```

:::
