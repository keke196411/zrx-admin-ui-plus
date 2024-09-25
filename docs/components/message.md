---
title: Message 警告提示
---

# Message 警告提示

### 常规

<ClientOnly>
<div class="w-600 h-full p-x-12 p-y-16">
    <el-button :plain="true" @click="open1" showClose>info</el-button>
    <el-button :plain="true" @click="open2" showClose>Success</el-button>
    <el-button :plain="true" @click="open3" showClose>question</el-button>
    <el-button :plain="true" @click="open4" showClose>Error</el-button>
</div>
</ClientOnly>

<script setup>
import { h } from 'vue'
import { ElMessage } from '../../src/utils/message'
const open1 = () => {
    ElMessage({
        message: 'info, this is a info message.1111',
        duration: 3000,
        showClose: true,
        customClass: 'zrx-com-message'
    })
}
const open2 = () => {
    ElMessage({
        message: 'Congrats, this is a success message.',
        type: 'success',
        showClose: true,
        customClass: 'zrx-com-message'
    })
}
const open3 = () => {
    ElMessage({
        message: 'question, this is a question message.',
        type: 'warning',
        showClose: true,
        customClass: 'zrx-com-message'
    })
}
const open4 = () => {
    ElMessage({
        message: 'error, this is a error message.',
        type: 'error',
        showClose: true,
        customClass: 'zrx-com-message'
    })
}
const allopen1 = () => {
    ElMessage.info({ message: 'This is a message', duration: 3000 })
}
const allopen2 = () => {
    ElMessage.success({ message: 'Congrats, this is a success message.', duration: 3000 })
}
const allopen3 = () => {
    ElMessage.warning({ message: 'Warning, this is a warning message.', duration: 3000 })
}
const allopen4 = () => {
    ElMessage.error({ message: 'error, this is a error message.', duration: 3000 })
}
const open5 = () => {
    ElMessage({
        customClass: 'zrx-com-message normal',
        message: h('div', { className: 'message-content' }, [
            h('div', { className: 'message-header' }, [
                h('span', { className: 'message-info' }, '这里是一段提示文字111'),
                h('a', { className: 'message-btn' }, '操作按钮')
            ])
        ]),
        type: 'info',
        showClose: false,
        duration: 3000
    })
}

const openVn1 = () => {
    ElMessage({
        customClass: 'zrx-com-message has-title',
        message: h('div', { className: 'message-content' }, [
            h('span', { className: 'message-title' }, '提示信息'),
            h(
                'span',
                { className: 'message-info' },
                '这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。'
            )
        ]),
        type: 'warning',
        showClose: true,
        duration: 3000
    })
}
const openVn2 = () => {
    ElMessage({
        customClass: 'zrx-com-message has-title',
        message: h('div', { className: 'message-content' }, [
            h('span', { className: 'message-title' }, '提示信息'),
            h(
                'span',
                { className: 'message-info' },
                '这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。'
            )
        ]),
        type: 'success',
        showClose: true,
    })
}
const openVn3 = () => {
    ElMessage({
        customClass: 'zrx-com-message has-title',
        message: h('div', { className: 'message-content' }, [
            h('span', { className: 'message-title' }, '提示信息'),
            h(
                'span',
                { className: 'message-info' },
                '这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。'
            )
        ]),
        showClose: true,
    })
}
const openVn4 = () => {
    ElMessage({
        customClass: 'zrx-com-message has-title',
        message: h('div', { className: 'message-content' }, [
            h('span', { className: 'message-title' }, '提示信息'),
            h(
                'span',
                { className: 'message-info' },
                '这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。'
            )
        ]),
        type: 'error',
        showClose: true,
    })
}
const openVn5 = () => {
    ElMessage({
        customClass: 'zrx-com-message has-title',
        message: h('div', { className: 'message-content' }, [
            h('div', { className: 'message-header' }, [
                h('span', { className: 'message-title' }, '提示信息'),
                h('a', { className: 'message-btn' }, '操作按钮')
            ]),
            h(
                'span',
                { className: 'message-info' },
                '这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。'
            )
        ]),
        type: 'warning',
        showClose: false,
    })
}

const openG1 = () => {
    ElMessage({
        message: '这里是一段提示文字',
        duration: 0,
        showClose: true
    })
}
const openG2 = () => {
    ElMessage.error({
        message: '这里是一段提示文字',
        duration: 0,
        showClose: true
    })
}
const openG3 = () => {
    ElMessage.success({
        message: '这里是一段提示文字',
        duration: 0,
        showClose: true
    })
}
const openG4 = () => {
    ElMessage.warning({
        message: '这里是一段提示文字',
        duration: 0,
        showClose: true
    })
}
</script>

::: details 示例代码

```html
<div class="w-600 h-full p-x-12 p-y-16">
    <el-button :plain="true" @click="open1" showClose>question</el-button>
    <el-button :plain="true" @click="open2" showClose>Success</el-button>
    <el-button :plain="true" @click="open3" showClose>Warning</el-button>
    <el-button :plain="true" @click="open4" showClose>Error</el-button>
</div>
<script setup>
    import { h } from 'vue'
    import { ElMessage } from 'zrx-admin-plus'
    const open1 = () => {
        ElMessage({
            message: 'question, this is a question message.1111',
            duration: 3000,
            showClose: true
        })
    }
    const open2 = () => {
        ElMessage({
            message: 'Congrats, this is a success message.',
            type: 'success',
            showClose: true
        })
    }
    const open3 = () => {
        ElMessage({
            message: 'Warning, this is a warning message.',
            type: 'warning',
            showClose: true
        })
    }
    const open4 = () => {
        ElMessage({
            message: 'error, this is a error message.',
            type: 'error',
            showClose: true
        })
    }
</script>
```

:::

### 常规自定义

<ClientOnly>
<div class="w-600 h-full p-x-12 p-y-16">
    <el-button :plain="true" @click="open5">详情</el-button>
</div>
</ClientOnly>

::: details 示例代码

```html
<div class="w-600 h-full p-x-12 p-y-16">
    <el-button :plain="true" @click="open5">详情</el-button>
</div>

<script setup>
    import { h } from 'vue'
    import { ElMessage } from 'zrx-admin-plus'
    ElMessage({
        customClass: 'zrx-com-message',
        message: h('div', { className: 'message-content' }, [
            h('div', { className: 'message-header' }, [
                h('span', { className: 'message-info' }, '这里是一段提示文字'),
                h('a', { className: 'message-btn' }, '详情')
            ])
        ]),
        icon: h('i', { className: 'zrx-icon zrx-icon-info' }),
        type: 'info',
        showClose: false,
        duration: 3000
    })
</script>
```

:::

### 全局方法

<ClientOnly>
<div class="w-600 h-full p-x-12 p-y-16">
    <el-button :plain="true" @click="allopen1" showClose>question</el-button>
    <el-button :plain="true" @click="allopen2" showClose>Success</el-button>
    <el-button :plain="true" @click="allopen3" showClose>Warning</el-button>
    <el-button :plain="true" @click="allopen4" showClose>Error</el-button>
</div>
</ClientOnly>

::: details 示例代码

```html
<div class="w-600 h-full p-x-12 p-y-16">
    <el-button :plain="true" @click="allopen1" showClose>question</el-button>
    <el-button :plain="true" @click="allopen2" showClose>Success</el-button>
    <el-button :plain="true" @click="allopen3" showClose>Warning</el-button>
    <el-button :plain="true" @click="allopen4" showClose>Error</el-button>
</div>
<script setup>
    import { h } from 'vue'
    import { ElMessage } from 'zrx-admin-plus'
    const allopen1 = () => {
        ElMessage.info({ message: 'This is a message', duration: 3000 })
    }
    const allopen2 = () => {
        ElMessage.success({ message: 'Congrats, this is a success message.', duration: 3000 })
    }
    const allopen3 = () => {
        ElMessage.warning({ message: 'Warning, this is a warning message.', duration: 3000 })
    }
    const allopen4 = () => {
        ElMessage.error({ message: 'error, this is a error message.', duration: 3000 })
    }
</script>
```

:::

### 含标题自定义

<ClientOnly>
<div class="w-600 h-full p-x-12 p-y-16">
    <el-button :plain="true" @click="openVn1">Warning</el-button>
    <el-button :plain="true" @click="openVn2">Success</el-button>
    <el-button :plain="true" @click="openVn3">question</el-button>
    <el-button :plain="true" @click="openVn4">error</el-button>
    <el-button :plain="true" @click="openVn5">Warning（有自定义按钮）</el-button>
</div>
</ClientOnly>

::: details 示例代码

```html
<div class="w-600 h-full p-x-12 p-y-16">
    <el-button :plain="true" @click="openVn1">Warning</el-button>
    <el-button :plain="true" @click="openVn2">Success</el-button>
    <el-button :plain="true" @click="openVn3">question</el-button>
    <el-button :plain="true" @click="openVn4">error</el-button>
    <el-button :plain="true" @click="openVn5">Warning（有自定义按钮）</el-button>
</div>

<script setup>
    import { ElMessage } from 'zrx-admin-plus'
    const openVn1 = () => {
        ElMessage({
            customClass: 'zrx-com-message',
            message: h('div', { className: 'message-content' }, [
                h('span', { className: 'message-title' }, '提示信息'),
                h(
                    'span',
                    { className: 'message-info' },
                    '这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。'
                )
            ]),
            icon: h('i', { className: 'zrx-icon zrx-icon-info' }),
            type: 'warning',
            showClose: true
        })
    }
    const openVn2 = () => {
        ElMessage({
            customClass: 'zrx-com-message',
            message: h('div', { className: 'message-content' }, [
                h('span', { className: 'message-title' }, '提示信息'),
                h(
                    'span',
                    { className: 'message-info' },
                    '这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。'
                )
            ]),
            icon: h('i', { className: 'zrx-icon zrx-icon-success' }),
            type: 'success',
            showClose: true
        })
    }
    const openVn3 = () => {
        ElMessage({
            customClass: 'zrx-com-message',
            message: h('div', { className: 'message-content' }, [
                h('span', { className: 'message-title' }, '提示信息'),
                h(
                    'span',
                    { className: 'message-info' },
                    '这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。'
                )
            ]),
            icon: h('i', { className: 'zrx-icon zrx-icon-question' }),
            showClose: true
        })
    }
    const openVn4 = () => {
        ElMessage({
            customClass: 'zrx-com-message',
            message: h('div', { className: 'message-content' }, [
                h('span', { className: 'message-title' }, '提示信息'),
                h(
                    'span',
                    { className: 'message-info' },
                    '这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。'
                )
            ]),
            icon: h('i', { className: 'zrx-icon zrx-icon-error' }),
            type: 'error',
            showClose: true
        })
    }
    const openVn5 = () => {
        ElMessage({
            customClass: 'zrx-com-message',
            message: h('div', { className: 'message-content' }, [
                h('div', { className: 'message-header' }, [
                    h('span', { className: 'message-title' }, '提示信息'),
                    h('a', { className: 'message-btn' }, '操作按钮')
                ]),
                h(
                    'span',
                    { className: 'message-info' },
                    '这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。'
                )
            ]),
            icon: h('i', { className: 'zrx-icon zrx-icon-info' }),
            type: 'warning',
            showClose: false
        })
    }
</script>
```

:::

### 全局信息弹窗

<ClientOnly>
<div class="w-600 h-full p-x-12 p-y-16">
    <el-button :plain="true" @click="openG1">全局信息</el-button>
    <el-button :plain="true" @click="openG2">全局失败</el-button>
    <el-button :plain="true" @click="openG3">全局成功</el-button>
    <el-button :plain="true" @click="openG4">全局警示</el-button>
</div>
</ClientOnly>

::: details 示例代码

```html
<div class="w-600 h-full p-x-12 p-y-16">
    <el-button :plain="true" @click="openG1">全局信息</el-button>
    <el-button :plain="true" @click="openG2">全局失败</el-button>
    <el-button :plain="true" @click="openG3">全局成功</el-button>
    <el-button :plain="true" @click="openG4">全局警示</el-button>
</div>

<script>
    const openG1 = () => {
        ElMessage({
            message: '这里是一段提示文字',
            duration: 0,
            showClose: true
        })
    }
    const openG2 = () => {
        ElMessage.error({
            message: '这里是一段提示文字',
            duration: 0,
            showClose: true
        })
    }
    const openG3 = () => {
        ElMessage.success({
            message: '这里是一段提示文字',
            duration: 0,
            showClose: true
        })
    }
    const openG4 = () => {
        ElMessage.warning({
            message: '这里是一段提示文字',
            duration: 0,
            showClose: true
        })
    }
</script>
```
:::

### 自定义Css变量

| 参数                          | 说明                                     | 类型   | 可选值 | 默认值 |
| ----------------------------- | ---------------------------------------- | ------ | ------ | ------ |
| `--zrx-message-icon-width`    | 提示信息框中icon的宽度高度               | string | --     | 24px   |
| `--zrx-message-min-width`     | 提示信息框区域宽度（含右侧关闭按钮宽度） | string | --     | 436px  |
| `--zrx-message-min-btn-width` | 标题栏右边操作按钮最小宽度               | string | --     | 56px   |
