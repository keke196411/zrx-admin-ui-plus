---
title: DateTimePicker 日期时间选择
---

# DateTimePicker 日期时间选择

::: tip

该组件符合UI规范，部分element-plus日期组件功能不支持：
e.g. 选项禁用
:::

<ClientOnly>
<div class="m-y-20 font-bold f-16">日期时间选择</div>
<zrx-date-time-picker v-model="value1" type="datetime" class="w-240"></zrx-date-time-picker>
<div class="m-y-20 font-bold f-16">日期时间范围选择</div>
<zrx-date-time-picker v-model="value2" type="datetimerange" class="w-420"></zrx-date-time-picker>
</ClientOnly>

<script setup>
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref([])
</script>

::: details 示例代码

```html
<div class="m-y-20 font-bold f-16">日期时间选择</div>
<zrx-date-time-picker v-model="value1" type="datetime" class="w-240"></zrx-date-time-picker>
<div class="m-y-20 font-bold f-16">日期时间范围选择</div>
<zrx-date-time-picker v-model="value2" type="datetimerange" class="w-420"></zrx-date-time-picker>

<script setup>
    import { ref } from 'vue'

    const value1 = ref('')
    const value2 = ref([])
</script>
```

:::
