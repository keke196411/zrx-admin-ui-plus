---
title: Password 密码框
---

# Password 密码框

用于在查看模式下，展示敏感字符。

### 基础用法

<ClientOnly>
<div>
    <div class="m-t-16 f-c">
        <span>密码:</span>
        <zrx-password class="m-l-8" :value="data1"></zrx-password>
    </div>
    <el-button class="m-t-12" type="primary" @click="data1 += 652361">更改值</el-button>
</div>
</ClientOnly>

::: details 示例代码

```html
密码: <zrx-password :value="data1"></zrx-password>
<el-button type="primary" @click="data1 += 652361">更改值</el-button>
<script>
export default {
    data() {
        return {
            data1: 253332156
        }
    }
}
</script>
```

:::

### 通过插槽

<ClientOnly>
<div class="m-t-16 f-c">
    <span>密码:</span>
    <zrx-password class="m-l-8"><span password>{{ data2 }}</span></zrx-password>
</div>
</ClientOnly>

::: tip
通过插槽传入时，需在目标元素上设置"password"属性使组件找到显示值
:::

::: details 示例代码

```html
密码:<zrx-password><span password>{{ data2 }}</span></zrx-password>
<script>
export default {
    data() {
        return {
            data2: 'zz22391rb'
        }
    }
}
</script>
```

:::

### 手动更新

<ClientOnly>
<div>
    <div class="m-t-16 f-c">
        <span>密码:</span>
        <zrx-password class="m-l-8" ref="passwordRef">
            <span password>{{ data3 }}</span>
        </zrx-password>
    </div>
    <el-button class="m-t-12" type="primary" @click="changeValue">更改值</el-button>
</div>
</ClientOnly>

::: tip
通过插槽传值时，组件没有监听值的变化，若发生外部值的变化，需要调用init方法重置组件内部值
:::

::: details 示例代码

```html
<span>密码:</span>
<zrx-password ref="passwordRef">
    <span password>{{ data3 }}</span>
</zrx-password>
<el-button type="primary" @click="changeValue">更改值</el-button>
<script>
export default {
    data() {
        return {
            data3: 'sfd6691wes'
        }
    },
    methods: {
        changeValue() {
            this.data3 = '22350wqeswt'
            this.$nextTick(this.$refs.password.init)
        }
    }
}
</script>
```

:::

### 忽略值

当传入的值等于忽略值时，将只显示空值提示

<ClientOnly>
<div>
    <div class="m-t-16 f-c">
        <span>密码:</span>
        <zrx-password class="m-l-8" :value="data4" exclusive="- -"></zrx-password>
    </div>
    <el-button type="primary" class="m-t-12" @click="data4 = 22350">更改值</el-button>
</div>
</ClientOnly>

::: tip
在不想将空提示值当做密文展示时非常有用。典型的场景是密文字段经过了空值转提示值"- -"处理，此时组件接收到"- -"值，将不会当做密文而直接展示。
:::

::: details 示例代码

```html
密码:
<zrx-password :value="data4" exclusive="- -"></zrx-password>
<el-button type="primary" @click="data4 = 22350"></el-button>
<script>
export default {
    data() {
        return {
            data4: '- -'
        }
    }
}
</script>
```

:::

### 自定义Css变量

| 参数                       | 说明           | 类型   | 可选值 | 默认值 |
| -------------------------- | -------------- | ------ | ------ | ------ |
| `--zrx-password-min-width` | 密码框最小宽度 | string | --     | 80px  |

### Attributes

| 参数          | 说明                                 | 类型           | 可选值                              | 默认值       |
| ------------- | ------------------------------------ | -------------- | ----------------------------------- | ------------ |
| `tag`         | 渲染的标签名                         | string         | HTML tags                           | div          |
| `value`       | 明文值                               | string, number | —                                   | ''           |
| `placeholder` | 空值提示                             | string         | —                                   | —            |
| `char-length` | 密文长度                             | number, string | 大于0的整数值。若传入小数则向上取整 | value.length |
| `exclusive`   | 当传入值等于该值时，直接展示空值提示 | number, string | —                                   | —            |

### Methods

| 方法名称 | 说明   | 参数 |
| -------- | ------ | ---- |
| `init`   | 初始化 | —    |

### Slots

| 插槽名称 | 说明     |
| -------- | -------- |
| —        | 默认插槽 |

<script setup>
import { ref, nextTick } from 'vue'
const data1 = ref(253332156)
const data2 = ref('zz22391rb')
const data3 = ref('sfd6691wes')
const data4 = ref('- -')
const passwordRef = ref()
const changeValue = () => {
    data3.value = '22350wqeswt'
    nextTick(() => passwordRef.value.init())
}
</script>

<style lang="scss" scoped>
:deep(.zrx-password) {
    .s-text {
        margin: 0;
    }
}
</style>
