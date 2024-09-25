---
title: SpringBox 弹性盒
---

# SpringBox 弹性盒

轻量的，可收缩/展开的自适应容器

### 基础用法

<ClientOnly>
<div class="m-t-16">
    <el-button type="primary" @click="value1 = !value1">{{ value1 ? '收起' : '展开' }}</el-button>
    <zrx-spring-box class="m-t-16" :value="value1">
        <el-form :model="formData1">
            <el-form-item prop="name" label="中文名称">
                <el-input v-model="formData1.name" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item prop="ename" label="英文名称">
                <el-input v-model="formData1.ename" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item prop="creator" label="创建者">
                <el-input v-model="formData1.ename" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item prop="category" label="属性类别">
                <el-select v-model="formData1.category" placeholder="请选择">
                    <el-option value="标识类"></el-option>
                    <el-option value="定义类"></el-option>
                    <el-option value="关系类"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item prop="update" label="更新时间">
                <zrx-date-time-picker v-model="formData1.update" type="datetime"></zrx-date-time-picker>
            </el-form-item>
        </el-form>
    </zrx-spring-box>
</div>
</ClientOnly>

::: details 示例代码

```html
<el-button type="primary" @click="value1 = !value1">{{ value1 ? '收起' : '展开' }}</el-button>
<zrx-spring-box :value="value1">
    <el-form :model="formData1">
        <el-form-item prop="name" label="中文名称">
            <el-input v-model="formData1.name" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item prop="ename" label="英文名称">
            <el-input v-model="formData1.ename" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item prop="creator" label="创建者">
            <el-input v-model="formData1.ename" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item prop="category" label="属性类别">
            <el-select v-model="formData1.category" placeholder="请选择">
                <el-option value="标识类"></el-option>
                <el-option value="定义类"></el-option>
                <el-option value="关系类"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="更新时间">
            <zrx-date-time-picker v-model="formData1.update" type="datetime"></zrx-date-time-picker>
        </el-form-item>
    </el-form>
</zrx-spring-box>

<script setup>
import { ref } from 'vue'

const value1 = ref(true)
const formData1 = ref({
    name: '',
    ename: '',
    creator: '',
    category: '',
    update: null
})
</script>
```

:::

### 响应内容变化

<ClientOnly>
<div class="m-t-16">
    <el-button type="primary" @click="value2 = !value2">{{ value2 ? '收起' : '展开' }}</el-button>
    <zrx-spring-box class="m-t-16" :value="value2" ref="springBoxRef">
        <el-form-item prop="name" label="流程名称">
            <el-input v-model="formData2.name" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item prop="code" label="流程编号">
            <el-input v-model="formData2.code" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item prop="gross" label="显示其他内容">
            <el-radio v-model="formData2.gross" :label="true" @change="toggleGross">是</el-radio>
            <el-radio v-model="formData2.gross" :label="false" @change="toggleGross">否</el-radio>
        </el-form-item>
        <el-form-item prop="creator" label="申请人" v-show="formData2.gross">
            <el-input v-model="formData2.creator" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="申请时间" v-show="formData2.gross">
            <zrx-date-time-picker v-model="formData2.update" type="datetime"></zrx-date-time-picker>
        </el-form-item>
    </zrx-spring-box>
</div>
</ClientOnly>

::: tip
当 SpringBox 内容变化时，需要调用 reset 方法重设容器高度
:::

::: details 示例代码

```html
<el-button type="primary" @click="value2 = !value2">{{ value2 ? '收起' : '展开' }}</el-button>
<zrx-spring-box :value="value2" ref="springBoxRef">
    <el-form-item prop="name" label="流程名称">
        <el-input v-model="formData2.name" placeholder="请输入"></el-input>
    </el-form-item>
    <el-form-item prop="code" label="流程编号">
        <el-input v-model="formData2.code" placeholder="请输入"></el-input>
    </el-form-item>
    <el-form-item prop="gross" label="显示其他内容">
        <el-radio v-model="formData2.gross" :label="true" @change="toggleGross">是</el-radio>
        <el-radio v-model="formData2.gross" :label="false" @change="toggleGross">否</el-radio>
    </el-form-item>
    <el-form-item prop="creator" label="申请人" v-show="formData2.gross">
        <el-input v-model="formData2.creator" placeholder="请输入"></el-input>
    </el-form-item>
    <el-form-item label="申请时间" v-show="formData2.gross">
        <zrx-date-time-picker v-model="formData2.update" type="datetime"></zrx-date-time-picker>
    </el-form-item>
</zrx-spring-box>

<script setup>
import { ref, nextTick } from 'vue'

const value2 = ref(true)
const springBoxRef = ref(null)
const formData2 = ref({
    name: '',
    code: '',
    gross: false,
    creator: '',
    update: ''
})
const toggleGross = () => {
    nextTick(() => springBoxRef.value.reset())
}
</script>
```

:::

<script setup>
import { ref, nextTick } from 'vue'

const value1 = ref(true)
const springBoxRef = ref(null)
const formData1 = ref({
    name: '',
    ename: '',
    creator: '',
    category: '',
    update: null
})
const value2 = ref(true)
const formData2 = ref({
    name: '',
    code: '',
    gross: false,
    creator: '',
    update: ''
})
const toggleGross = () => {
    nextTick(() => springBoxRef.value.reset())
}
</script>

### Attributes

| 参数           | 说明         | 类型    | 可选值      | 默认值 |
| -------------- | ------------ | ------- | ----------- | ------ |
| `value`        | 展开/折叠    | boolean | true, false | true   |
| `start-height` | 折叠时的高度 | number  | —           | 0      |

### Methods

| 方法名称 | 说明           | 参数 |
| -------- | -------------- | ---- |
| `reset`  | 重置 SpringBox | —    |

### Events

| 事件名称   | 说明                | 回调参数        |
| ---------- | ------------------- | --------------- |
| `onToggle` | 展开/折叠完成的回调 | v: 当前是否展开 |

### Slots

| name | 说明              |
| ---- | ----------------- |
| —    | SpringBox内嵌内容 |
