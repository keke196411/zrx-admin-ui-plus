---
title: Roll Number 数字滚动
---

# Roll Number 数字滚动

### 基础用法

<ClientOnly>
<div class="m-t-20 m-b-8">
    <el-button type="primary" @click="value1 = 1698">开始</el-button>
</div>
<div class="m-b-20">
    <zrx-roll-number :value="value1"></zrx-roll-number>
</div>
</ClientOnly>

<script setup>
import { ref } from 'vue'

const value1 = ref(0)
const value2 = ref(0)
const value3 = ref(58693.1266)
const value4 = ref(4.55)
const value5 = ref(0)
const value6 = ref(2968525450)
const value7 = ref(0)
const value8 = ref(6000)
const value9 = ref(undefined)
</script>

::: details 示例代码

```html
<el-button type="primary" @click="value1 = 1698">开始</el-button>
<zrx-roll-number :value="value1"></zrx-roll-number>
<script setup>
    import { ref } from 'vue'

    const value1 = ref(0)
</script>
```

:::

### 值为负数

传入负值，往负值递减

<ClientOnly>
<div class="m-b-8">
    <el-button type="primary" @click="value2 = -22350">开始</el-button>
</div>
<div class="m-b-20">
    <zrx-roll-number :value="value2"></zrx-roll-number>
</div>
</ClientOnly>

::: details 示例代码

```html
<el-button type="primary" @click="value2 = -22350">开始</el-button>
<zrx-roll-number :value="value2"></zrx-roll-number>
<script setup>
    import { ref } from 'vue'

    const value2 = ref(0)
</script>
```

:::

### 保留小数

保留2位小数

<ClientOnly>
<div class="m-b-20">
    <zrx-roll-number tag="span" :value="value3" :retain-decimals="2"></zrx-roll-number>
</div>
</ClientOnly>

::: details 示例代码

```html
<zrx-roll-number tag="span" :value="value3" :retain-decimals="2"></zrx-roll-number>

<script setup>
    import { ref } from 'vue'

    const value3 = ref(58693.1266)
</script>
```

:::

### 设置初始值

默认数字从0开始过渡。设置inited-value为true，数字从一开始的value值开始过渡

<ClientOnly>
<div class="m-b-8">
    <el-button type="primary" @click="value4 = -5.55">开始</el-button>
</div>
<div class="m-b-20">
    <zrx-roll-number :value="value4" inited-value retain-decimals="2"></zrx-roll-number>
</div>
</ClientOnly>

::: details 示例代码

```html
<zrx-roll-number :value="value4" inited-value retain-decimals="2"></zrx-roll-number>

<script setup>
    import { ref } from 'vue'

    const value4 = ref(4.55)
</script>
```

:::

### 过渡时间

<ClientOnly>
<div class="m-t-20 m-b-8">
    <el-button type="primary" @click="value5 += 3000">开始</el-button>
</div>
<div class="m-b-20 flex items-center">
    <div class="w-300">
        <p class="m-b-8">默认过渡时间500ms</p>
        <zrx-roll-number :value="value5"></zrx-roll-number>
    </div>
    <div class="w-300">
        <p class="m-b-8">过渡时间1500ms</p>
        <zrx-roll-number :value="value5" :duration="1500"></zrx-roll-number>
    </div>
</div>
</ClientOnly>

::: details 示例代码

```html
<el-button type="primary" @click="value5 += 3000">开始</el-button>
<div>
    <p class="m-b-8">默认过渡时间500ms</p>
    <zrx-roll-number :value="value5"></zrx-roll-number>
</div>
<div class="w-300">
    <p class="m-b-8">过渡时间1500ms</p>
    <zrx-roll-number :value="value5" :duration="1500"></zrx-roll-number>
</div>
<script setup>
    import { ref } from 'vue'

    const value5 = ref(0)
</script>
```

:::

### 分隔符

每隔三位加","分隔符

<ClientOnly>
<div class="m-b-20">
    调用总数：<zrx-roll-number :value="value6" break-sign retain-decimals="2"><template #default>次</template></zrx-roll-number>
</div>
</ClientOnly>

::: details 示例代码

```html
调用总数：<zrx-roll-number :value="value6" break-sign retain-decimals="2"><template #default>次</template></zrx-roll-number>

<script setup>
    import { ref } from 'vue'

    const value6 = ref(2968525450)
</script>
```

:::

### 自动添加单位（万、亿）

默认数字从0开始过渡。设置inited-value为true，数字从一开始的value值开始过渡

<ClientOnly>
<div class="m-b-20">
    调用总数：<zrx-roll-number :value="value6" add-unit retain-decimals="2">次</zrx-roll-number>
</div>
</ClientOnly>

::: details 示例代码

```html
调用总数：<zrx-roll-number :value="value6" add-unit retain-decimals="2">次</zrx-roll-number>

<script setup>
    import { ref } from 'vue'

    const value6 = ref(2968525450)
</script>
```

:::

### 单位插槽

<ClientOnly>
<div class="m-t-20 m-b-8">
    <el-button type="primary" @click="value7 = 1208806569821">开始</el-button>
</div>
<div class="m-b-20">
    地区生产总值：<zrx-roll-number :value="value7" add-unit retain-decimals="2" style="font-size: 24px" :duration="2000">
        <template #unit="{ unit }">
            <span style="font-size: 14px; opacity: 0.7">{{ unit + '元' }}</span>
        </template>
    </zrx-roll-number>
</div>
</ClientOnly>

::: details 示例代码

```html
<el-button type="primary" @click="value7 = 1208806569821">开始</el-button>
地区生产总值：<zrx-roll-number :value="value7" add-unit retain-decimals="2" style="font-size: 24px" :duration="2000">
    <template #unit="{ unit }">
        <span style="font-size: 14px; opacity: 0.7">{{ unit + '元' }}</span>
    </template>
</zrx-roll-number>
<script setup>
    import { ref } from 'vue'

    const value7 = ref(0)
</script>
```

:::

### 有选择地保留小数

在某些语境下（只能是整数）、值较小且保留小数时，带小数的数值变化可能不是想要的结果。设置always-decimal: false，当值不出现单位时，将不会出现小数

<ClientOnly>
<div class="m-b-8">
    <el-button type="primary" @click="value8 = 12380">开始</el-button>
</div>
<div class="m-b-8">
    今日访问次数：<zrx-roll-number :value="value8" add-unit :retain-decimals="2" :always-decimal="false"></zrx-roll-number>
</div>
</ClientOnly>

::: tip
注意前提是设置了add-unit和retain-decimals。只有这种条件下，值大时保留小数，值小时取整才是有意义的。
:::

::: details 示例代码

```html
<el-button type="primary" @click="value8 = 12380">开始</el-button>
今日访问次数：<zrx-roll-number :value="value8" add-unit :retain-decimals="2" :always-decimal="false"></zrx-roll-number>
<script setup>
    import { ref } from 'vue'

    const value8 = ref(6000)
</script>
```

:::

### 缺省值

当值不是数字或字符串的数字时，显示缺省值

<ClientOnly>
<div class="m-b-20">
    <zrx-roll-number :value="value9"></zrx-roll-number>
</div>
</ClientOnly>

::: details 示例代码

```html
<zrx-roll-number :value="value9"></zrx-roll-number>
<script setup>
    import { ref } from 'vue'

    const value9 = ref(undefined)
</script>
```

:::

### Attributes

| 参数              | 说明                                         | 类型           | 可选值    | 默认值 |
| ----------------- | -------------------------------------------- | -------------- | --------- | ------ |
| `value`           | 传入的数值                                   | number, string | —         | 0      |
| `retain-decimals` | 四舍五入并保留几位小数                       | number, string | —         | 0      |
| `duration`        | 过渡持续时间（毫秒）。最小200ms              | number         | —         | 500    |
| `break-sign`      | 是否每三位添加分隔符                         | boolean        | —         | false  |
| `add-unit`        | 是否自动添加单位以缩短数据                   | boolean        | —         | false  |
| `tag`             | 渲染的标签名                                 | string         | HTML tags | p      |
| `inited-value`    | 是否将最初的value设为起始数字                | boolean        | —         | false  |
| `placeholder`     | 非数字且非字符串的数字时，显示的缺省值       | number, string | —         | —      |
| `always-decimal`  | 自动添加单位时是否不管有无单位，始终保留小数 | boolean        | —         | true   |
| `interval`        | 刷新间隔，单位：ms。取值[20, 100]            | string, number | —         | 20     |

### Events

| 事件名称   | 说明         | 回调参数 |
| ---------- | ------------ | -------- |
| `onFinish` | 滚动完成回调 | —        |

### Slots

| 插槽名称 | 说明       |
| -------- | ---------- |
| —        | 默认插槽   |
| unit     | 数值的单位 |
