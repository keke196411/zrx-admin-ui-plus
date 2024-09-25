---
title: SearchBox 搜索栏
---

# SearchBox 搜索栏

用于排列列表的搜索项的自适应容器

### 基础用法

<ClientOnly>
<zrx-search-box class="m-t-20">
    <zrx-search-item label="姓名">
        <el-input v-model="searcher.name" placeholder="请输入"></el-input>
    </zrx-search-item>
    <zrx-search-item label="时间">
        <el-date-picker v-model="searcher.time" type="date" placeholder="请选择"></el-date-picker>
    </zrx-search-item>
    <zrx-search-item label="姓名">
        <el-input v-model="searcher.name" placeholder="请输入"></el-input>
    </zrx-search-item>
    <zrx-search-item label="时间">
        <el-date-picker v-model="searcher.time" type="date" placeholder="请选择"></el-date-picker>
    </zrx-search-item>
</zrx-search-box>
</ClientOnly>

::: details 示例代码

```html
<zrx-search-box>
    <zrx-search-item label="姓名">
        <el-input v-model="searcher.name" placeholder="请输入"></el-input>
    </zrx-search-item>
    <zrx-search-item label="时间">
        <el-date-picker v-model="searcher.time" type="date" placeholder="请选择"></el-date-picker>
    </zrx-search-item>
    <zrx-search-item label="姓名">
        <el-input v-model="searcher.name" placeholder="请输入"></el-input>
    </zrx-search-item>
    <zrx-search-item label="时间">
        <el-date-picker v-model="searcher.time" type="date" placeholder="请选择"></el-date-picker>
    </zrx-search-item>
</zrx-search-box>

<script setup>
import { ref } from 'vue'

const searcher = ref({
    name: '',
    time: ''
})
</script>
```

:::

### 响应内容变化

<ClientOnly>
<zrx-search-box class="m-t-16" ref="searchboxRef">
    <zrx-search-item label="标题">
        <el-input v-model="search.name" placeholder="请输入"></el-input>
    </zrx-search-item>
    <zrx-search-item label="是否展示全部">
        <el-select v-model="search.type" placeholder="请选择" @change="onChange">
            <el-option label="否" value="1"></el-option>
            <el-option label="是" value="2"></el-option>
        </el-select>
    </zrx-search-item>
    <template v-if="search.type=='2'">
        <zrx-search-item label="编号">
            <el-input v-model="search.code" placeholder="请输入"></el-input>
        </zrx-search-item>
        <zrx-search-item label="人员">
            <el-input v-model="search.creator" placeholder="请输入"></el-input>
        </zrx-search-item>
    </template>
</zrx-search-box>
</ClientOnly>

::: tip
searchBox 内置了对组件内部元素变化的响应，但某些情况下响应不会自动触发，此时，在变化完成后，需要调用`resetWhenChildChange`对组件进行重置
:::

::: details 示例代码

```html
<zrx-search-box ref="searchboxRef">
    <zrx-search-item label="标题">
        <el-input v-model="search.name" placeholder="请输入"></el-input>
    </zrx-search-item>
    <zrx-search-item label="是否展示全部">
        <el-select v-model="search.type" placeholder="请选择" @change="onChange">
            <el-option label="否" value="1"></el-option>
            <el-option label="是" value="2"></el-option>
        </el-select>
    </zrx-search-item>
    <template v-if="search.type=='2'">
        <zrx-search-item label="编号">
            <el-input v-model="search.code" placeholder="请输入"></el-input>
        </zrx-search-item>
        <zrx-search-item label="人员">
            <el-input v-model="search.creator" placeholder="请输入"></el-input>
        </zrx-search-item>
    </template>
</zrx-search-box>

<script setup>
import { ref, nextTick } from 'vue'

const searchboxRef = ref()
const search = ref({
    name: '',
    type: '1',
    creator: '',
    code: ''
})
const onChange = () => nextTick(() => searchboxRef.value.resetWhenChildChange(true))
</script>
```

:::

### 自定义折叠/展开

不使用默认的折叠/展开

<ClientOnly>
<zrx-search-box class="m-t-16" prevent-default-toggle @change="$event => (stretched = $event)">
    <zrx-search-item label="标题">
        <el-input v-model="formData.name" placeholder="请输入"></el-input>
    </zrx-search-item>
    <zrx-search-item label="标记">
        <el-select v-model="formData.type" placeholder="请选择">
            <el-option label="否" value="1"></el-option>
            <el-option label="是" value="2"></el-option>
        </el-select>
    </zrx-search-item>
    <template v-if="stretched">
        <zrx-search-item label="编号">
            <el-input v-model="formData.code" placeholder="请输入"></el-input>
        </zrx-search-item>
        <zrx-search-item label="人员">
            <el-input v-model="formData.creator" placeholder="请输入"></el-input>
        </zrx-search-item>
    </template>
</zrx-search-box>
</ClientOnly>

::: tip
使用默认的折叠/展开逻辑可能会导致内部元素的遮挡（如下拉框）。可开启`prevent-default-toggle`，自己实现折叠/展开逻辑，此时的组件类似简单的布局容器，不提供除样式外的其他控制。
:::

::: details 示例代码

```html
<zrx-search-box prevent-default-toggle @change="$event => (stretched = $event)">
    <zrx-search-item label="标题">
        <el-input v-model="search.name" placeholder="请输入"></el-input>
    </zrx-search-item>
    <zrx-search-item label="标记">
        <el-select v-model="search.type" placeholder="请选择">
            <el-option label="否" value="1"></el-option>
            <el-option label="是" value="2"></el-option>
        </el-select>
    </zrx-search-item>
    <template v-if="stretched">
        <zrx-search-item label="编号">
            <el-input v-model="search.code" placeholder="请输入"></el-input>
        </zrx-search-item>
        <zrx-search-item label="人员">
            <el-input v-model="search.creator" placeholder="请输入"></el-input>
        </zrx-search-item>
    </template>
</zrx-search-box>

<script setup>
import { ref } from 'vue'

const search = ref({
    name: '',
    type: '1',
    creator: '',
    code: ''
})
const stretched = ref(false)
</script>
```

:::

<script setup>
import { ref, nextTick } from 'vue'

const stretched = ref(false)
const searchboxRef = ref()
const searcher = ref({
    name: '',
    time: ''
})
const search = ref({
    name: '',
    type: '1',
    creator: '',
    code: ''
})
const formData = ref({
    name: '',
    type: '1',
    creator: '',
    code: ''
})
const onChange = () => nextTick(() => searchboxRef.value.resetWhenChildChange(true))
</script>

### 自定义Css变量

| 参数                       | 说明             | 类型   | 可选值 | 默认值 |
| -------------------------- | ---------------- | ------ | ------ | ------ |
| `--zrx-search-gap-row`     | 组件内部的行间隔 | string | --     | 24px   |
| `--zrx-search-gap-col`     | 组件内部的列间隔 | string | --     | 32px   |
| `--zrx-search-row-height`  | 组件row的高度    | string | --     | 32px   |
| `--zrx-search-padding-x`   | 组件左右两侧边距 | string | --     | 16px   |
| `--zrx-search-label-width` | 组件label的宽度  | string | --     | 88px   |

### Attributes

| 参数                     | 说明                        | 类型           | 可选值 | 默认值 |
| ------------------------ | --------------------------- | -------------- | ------ | ------ |
| `initial-expand`         | 组件初始化是否展开          | Boolean        | —      | false  |
| `padding-x`              | 组件左右两侧边距            | String, Number | —      | 16     |
| `min-input-width`        | 最小输入框宽度              | String, Number | —      | 270    |
| `column-gap`             | 组件内部的列间隔            | String, Number | —      | 32     |
| `row-gap`                | 组件内部的行间隔            | String, Number | —      | 24     |
| `label-width`            | 组件label的宽度             | String, Number | —      | 88     |
| `row-height`             | 组件row的高度               | String, Number | —      | 32     |
| `prevent-default-toggle` | 是否阻止内置的折叠/展开行为 | Boolean        | —      | false  |
| `show-toggler`           | 是否使用内置的折叠/展开按钮 | Boolean        | —      | true   |
| `searchText`             | 搜索按钮的文案              | String         | —      | 查 询  |
| `resetText`              | 重置按钮的文案              | String         | —      | 重 置  |
| `showBtns`               | 最小输入框宽度              | Boolean        | —      | true   |
| `prevent-default-toggle` | 是否阻止内置的折叠/展开行为 | Boolean        | —      | false  |
| `show-toggler`           | 是否使用内置的折叠/展开按钮 | Boolean        | —      | true   |

### Methods

| 方法名称               | 说明           | 参数                            |
| ---------------------- | -------------- | ------------------------------- |
| `resetWhenChildChange` | 使组件重新布局 | (expand) 重置完成后是否立即展开 |
| `focus`                | 使组件聚焦     | —                               |

### Events

| 事件名称        | 说明               | 回调参数                           |
| --------------- | ------------------ | ---------------------------------- |
| `transitionend` | 过渡完成回调       | { stretched, height }, originEvent |
| `change`        | 折叠/展开的回调    | 是否展开                           |
| `search`        | 点击搜索按钮的回调 | Function                           |
| `reset`         | 点击重置的回调     | Function                           |

### Slots

| name  | 说明     |
| ----- | -------- |
| —     | 默认插槽 |
| `btn` | 按钮插槽 |

### search-item Slots

| name    | 说明          |
| ------- | ------------- |
| —       | 默认插槽      |
| `label` | label内容插槽 |
