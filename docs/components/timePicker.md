---
title: TimePicker 时间选择
---

# TimePicker 时间选择

<ClientOnly>
<div class="w-220 m-y-20 flex-col gap-row-12px">
    <el-time-picker v-model="value1" placeholder="请选择" clearable></el-time-picker>
    <el-time-picker v-model="value2" placeholder="请选择" clearable :disabled-hours="() => [1, 2, 3]"></el-time-picker>
    <el-time-picker
        is-range
        clearable
        v-model="value3"
        placeholder="请选择"
        class="zrx-default-separator"
        :disabled-hours="() => [1, 2, 3]"
    ></el-time-picker>
</div>
</ClientOnly>

<script setup>
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('')
const value3 = ref([])
</script>

::: details 示例代码

```html
<el-time-picker v-model="value1" placeholder="请选择" clearable></el-time-picker>
<el-time-picker v-model="value2" placeholder="请选择" clearable :disabled-hours="() => [1, 2, 3]"></el-time-picker>
<el-time-picker
    is-range
    clearable
    v-model="value3"
    placeholder="请选择"
    class="zrx-default-separator"
    :disabled-hours="() => [1, 2, 3]"
></el-time-picker>

<script setup>
    import { ref } from 'vue'

    const value1 = ref('')
    const value2 = ref('')
    const value3 = ref([])
</script>
```

:::
