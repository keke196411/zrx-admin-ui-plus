---
title: Process 进度条
---

# Process 进度条

用于页面切换或加载数据时显示进度

### 基础用法

<ClientOnly>
<div>
    <el-button class="m-t-16" type="primary" @click="process1 = true">加载</el-button>
    <el-table :data="table1" row-key="id" v-process="process1">
        <el-table-column prop="id" label="序号" show-overflow-tooltip></el-table-column>
        <el-table-column prop="date" label="日期" show-overflow-tooltip></el-table-column>
        <el-table-column prop="name" label="姓名" show-overflow-tooltip></el-table-column>
        <el-table-column prop="address" label="住址" show-overflow-tooltip></el-table-column>
    </el-table>
</div>
</ClientOnly>

::: tip
Process 提供了两种调用方法：指令和标签。对于指令 v-progress，需绑定 Boolean 值
:::

::: details 示例代码

```html
<el-button type="primary" @click="process1 = true">加载</el-button>
<el-table :data="table1" row-key="id" v-process="process1">
    <el-table-column prop="id" label="序号" show-overflow-tooltip></el-table-column>
    <el-table-column prop="date" label="日期" show-overflow-tooltip></el-table-column>
    <el-table-column prop="name" label="姓名" show-overflow-tooltip></el-table-column>
    <el-table-column prop="address" label="住址" show-overflow-tooltip></el-table-column>
</el-table>
<script setup>
import { ref, reactive } from 'vue'
const process1 = ref(false)
const table1 = reactive([
    {
        id: '1',
        date: '2022-9-22 14:27:22',
        name: '王腾飞',
        address: '上海市静安区南京路1258号'
    },
    {
        id: '2',
        date: '2022-9-22 14:27:22',
        name: '王腾飞',
        address: '上海市静安区南京路1258号'
    },
    {
        id: '3',
        date: '2022-9-22 14:27:22',
        name: '王腾飞',
        address: '上海市静安区南京路1258号'
    },
    {
        id: '4',
        date: '2022-9-22 14:27:22',
        name: '王腾飞',
        address: '上海市静安区南京路1258号'
    }
])
</script>
```

:::

### 添加至 body

<ClientOnly>
<div>
    <el-button class="m-t-16" type="primary" @click="process2 = true">加载</el-button>
    <el-table header-row-class-name="header-row-class" :data="table1" row-key="id" v-process.body="process2">
        <el-table-column prop="id" label="序号" show-overflow-tooltip></el-table-column>
        <el-table-column prop="date" label="日期" show-overflow-tooltip></el-table-column>
        <el-table-column prop="name" label="姓名" show-overflow-tooltip></el-table-column>
        <el-table-column prop="address" label="住址" show-overflow-tooltip></el-table-column>
    </el-table>
</div>
</ClientOnly>

::: tip
指令式调用默认将进度条添加至指令元素，添加 body 修饰符可将进度条插入至 body
:::

::: details 示例代码

```html
<el-button type="primary" @click="process2 = true">加载</el-button>
<el-table header-row-class-name="header-row-class" :data="table1" row-key="id" v-process.body="process2">
    <el-table-column prop="id" label="序号" show-overflow-tooltip></el-table-column>
    <el-table-column prop="date" label="日期" show-overflow-tooltip></el-table-column>
    <el-table-column prop="name" label="姓名" show-overflow-tooltip></el-table-column>
    <el-table-column prop="address" label="住址" show-overflow-tooltip></el-table-column>
</el-table>
<script setup>
import { ref, reactive } from 'vue'
const process2 = ref(false)
const table1 = reactive([
    {
        id: '1',
        date: '2022-9-22 14:27:22',
        name: '王腾飞',
        address: '上海市静安区南京路1258号'
    },
    {
        id: '2',
        date: '2022-9-22 14:27:22',
        name: '王腾飞',
        address: '上海市静安区南京路1258号'
    },
    {
        id: '3',
        date: '2022-9-22 14:27:22',
        name: '王腾飞',
        address: '上海市静安区南京路1258号'
    },
    {
        id: '4',
        date: '2022-9-22 14:27:22',
        name: '王腾飞',
        address: '上海市静安区南京路1258号'
    }
])
</script>
```

:::

### 直接操作

<ClientOnly>
<div>
    <div class="relative m-t-6 p-b-12" v-process="process3" ref="processRef"></div>
    <div>
        <el-button type="primary" @click="onStart">启动/继续</el-button>
        <el-button @click="onPause">暂停</el-button>
        <el-button @click="onFinish">结束</el-button>
        <el-button type="danger" @click="onFail">失败</el-button>
    </div>
</div>
</ClientOnly>

::: tip
通过节点绑定的 vm 对象直接调用 Process 实例的方法，操作进度条状态
:::

::: details 示例代码

```html
<div v-process="process3" ref="processRef"></div>
<div>
    <el-button type="primary" @click="onStart">启动/继续</el-button>
    <el-button @click="onPause">暂停</el-button>
    <el-button @click="onFinish">结束</el-button>
    <el-button type="danger" @click="onFail">失败</el-button>
</div>
<script setup>
import { ref } from 'vue'
const process3 = ref(false)
const processRef = ref()
const onStart = () => {
    if (!process3.value) {
        process3.value = true
    } else {
        processRef.value.zrxProcess.start()
    }
}
const onPause = () => {
    processRef.value.zrxProcess.pause()
}
const onFinish = () => {
    process3.value = false
}
const onFail = () => {
    processRef.value.zrxProcess.fail().then(() => {
        process3.value = false
    })
}
```

:::

### 设置时长

设置 Process 持续时长

<ClientOnly>
<div>
    <p class="m-y-0">15s</p>
    <div class="relative m-b-12 h-4 bg-#dcdcdc" v-process.bottom="process4"></div>
    <p class="m-y-0">30s</p>
    <div class="relative m-b-12 h-4 bg-#dcdcdc" v-process:[30].bottom="process4"></div>
    <el-button type="primary" @click="process4 = true">加载</el-button>
</div>
</ClientOnly>

::: tip
默认持续时间 15s，可通过指令参数更改时长
:::

::: details 示例代码

```html
<p>15s</p>
<div v-process.bottom="process4"></div>
<p>30s</p>
<div v-process:[30].bottom="process4"></div>
<el-button type="primary" @click="process4 = true">加载</el-button>
<script setup>
import { ref } from 'vue'
const process4 = ref(false)
<script>
```

:::

### 更改背景

可定义背景颜色，默认透明

<ClientOnly>
<div>
    <el-button type="primary" @click="process5 = true">加载</el-button>
    <el-table :data="table1" row-key="id" v-process="process5" zrx-process-background="rgba(0,0,0,0.5)">
        <el-table-column prop="id" label="序号" show-overflow-tooltip></el-table-column>
        <el-table-column prop="date" label="日期" show-overflow-tooltip></el-table-column>
        <el-table-column prop="name" label="姓名" show-overflow-tooltip></el-table-column>
        <el-table-column prop="address" label="住址" show-overflow-tooltip></el-table-column>
    </el-table>
</div>
</ClientOnly>

::: details 示例代码

```html
<el-button type="primary" @click="process5 = true">加载</el-button>
<el-table :data="table1" row-key="id" v-process="process5" zrx-process-background="rgba(0,0,0,0.5)">
    <el-table-column prop="id" label="序号" show-overflow-tooltip></el-table-column>
    <el-table-column prop="date" label="日期" show-overflow-tooltip></el-table-column>
    <el-table-column prop="name" label="姓名" show-overflow-tooltip></el-table-column>
    <el-table-column prop="address" label="住址" show-overflow-tooltip></el-table-column>
</el-table>
<script setup>
import { ref, reactive } from 'vue'
const process5 = ref(false)
const table1 = reactive([
    {
        id: '1',
        date: '2022-9-22 14:27:22',
        name: '王腾飞',
        address: '上海市静安区南京路1258号'
    },
    {
        id: '2',
        date: '2022-9-22 14:27:22',
        name: '王腾飞',
        address: '上海市静安区南京路1258号'
    },
    {
        id: '3',
        date: '2022-9-22 14:27:22',
        name: '王腾飞',
        address: '上海市静安区南京路1258号'
    },
    {
        id: '4',
        date: '2022-9-22 14:27:22',
        name: '王腾飞',
        address: '上海市静安区南京路1258号'
    }
])
</script>
```

:::

### 选择位置

<ClientOnly>
<div class="f-c column-gap-12">
    <div class="w-200 p-12">
        <div class="relative h-160 c-#bec0c8 f-c-c" v-process:[8].right="process6" zrx-process-background="rgba(0,0,0,0.1)" style="border: 1px dashed #DCDFE8">出现在右侧</div>
        <el-button class="m-t-8" type="primary" @click="process6 = true">加载</el-button>
    </div>
    <div class="w-200 p-12">
        <div class="relative h-160 c-#bec0c8 f-c-c" v-process:[8].bottom="process7" zrx-process-background="rgba(0,0,0,0.1)" style="border: 1px dashed #DCDFE8">出现在下侧</div>
        <el-button class="m-t-8" type="primary" @click="process7 = true">加载</el-button>
    </div>
    <div class="w-200 p-12">
        <div class="relative h-160 c-#bec0c8 f-c-c" v-process:[8].left="process8" zrx-process-background="rgba(0,0,0,0.1)" style="border: 1px dashed #DCDFE8">出现在左侧</div>
        <el-button class="m-t-8" type="primary" @click="process8 = true">加载</el-button>
    </div>
</div>
</ClientOnly>

::: tip
Process 提供了 top, right, bottom, left 四种展示位置，默认进度条在顶部
:::

::: details 示例代码

```html
<div>
    <div v-process:[8].right="process6" zrx-process-background="rgba(0,0,0,0.1)">出现在右侧</div>
    <el-button type="primary" @click="process6 = true">加载</el-button>
</div>
<div>
    <div v-process:[8].bottom="process7" zrx-process-background="rgba(0,0,0,0.1)">出现在下侧</div>
    <el-button type="primary" @click="process7 = true">加载</el-button>
</div>
<div>
    <div v-process:[8].left="process8" zrx-process-background="rgba(0,0,0,0.1)">出现在左侧</div>
    <el-button type="primary" @click="process8 = true">加载</el-button>
</div>
<script setup>
import { ref } from 'vue'
const process6 = ref(false)
const process7 = ref(false)
const process8 = ref(false)
</script>
```

:::

### 标签式调用

通过标签式的调用

<ClientOnly>
<div>
    <el-button type="primary" @click="process9 = true">加载</el-button>
    <div class="relative">
        <ClientOnly><zrx-process :show="process9 != 0"></zrx-process></ClientOnly>
        <el-table :data="table1" row-key="id">
            <el-table-column prop="id" label="序号" show-overflow-tooltip></el-table-column>
            <el-table-column prop="date" label="日期" show-overflow-tooltip></el-table-column>
            <el-table-column prop="name" label="姓名" show-overflow-tooltip></el-table-column>
            <el-table-column prop="address" label="住址" show-overflow-tooltip></el-table-column>
        </el-table>
    </div>
</div>
</ClientOnly>

::: tip
通过标签调用时，指令形式传入的所有配置项都可以在 props: option 中设置
:::

::: details 示例代码

```html
<div>
    <el-button type="primary" @click="process9 = true">加载</el-button>
    <div>
        <zrx-process :show="process9 != 0"></zrx-process>
        <el-table :data="table1" row-key="id">
            <el-table-column prop="id" label="序号" show-overflow-tooltip></el-table-column>
            <el-table-column prop="date" label="日期" show-overflow-tooltip></el-table-column>
            <el-table-column prop="name" label="姓名" show-overflow-tooltip></el-table-column>
            <el-table-column prop="address" label="住址" show-overflow-tooltip></el-table-column>
        </el-table>
    </div>
</div>
<script setup>
const process9 = ref(false)
const table1 = reactive([
    {
        id: '1',
        date: '2022-9-22 14:27:22',
        name: '王腾飞',
        address: '上海市静安区南京路1258号'
    },
    {
        id: '2',
        date: '2022-9-22 14:27:22',
        name: '王腾飞',
        address: '上海市静安区南京路1258号'
    },
    {
        id: '3',
        date: '2022-9-22 14:27:22',
        name: '王腾飞',
        address: '上海市静安区南京路1258号'
    },
    {
        id: '4',
        date: '2022-9-22 14:27:22',
        name: '王腾飞',
        address: '上海市静安区南京路1258号'
    }
])
</script>
```

:::

### 自定义

Process 提供了丰富的自定义配置，见[Props](#props)

#### 指令形式配置

<ClientOnly>
<div>
    <div class="relative m-t-8 p-b-16" v-process="process10" ref="processRef1"></div>
    <el-button type="primary" @click="setExample1">加载</el-button>
</div>
</ClientOnly>

::: tip
安装 Process 时，通过 Vue.use(Process, option) 传入自定义配置参数，该配置是全局生效的。若要更改单个实例的配置，可通过引用 el.zrxProcess 调用 setOption(option)。示例更改了颜色和边距
:::

::: details 示例代码

```html
<div v-process="process10" ref="processRef1"></div>
<el-button type="primary" @click="setExample1">加载</el-button>
<script setup>
import { ref } from 'vue'
const process10 = ref(false)
const setExample1 = () => {
    processRef1.value.zrxProcess.setOption({
        color: '#1BBE8C',
        marginEdage: '5px'
    })
    process10.value = true
}
</script>
```

:::

#### 标签形式配置

<ClientOnly>
<div>
    <div class="relative m-y-16 h-6"><ClientOnly><zrx-process :show="process11" :option="option1"></zrx-process></ClientOnly></div>
    <el-button type="primary" @click="process11 = true">加载</el-button>
</div>
</ClientOnly>

::: tip
通过组件的 option 属性传入配置。示例更改了背景色和条厚度
:::

::: details 示例代码

```html
<div><zrx-process :show="process11" :option="option1"></zrx-process></div>
<el-button type="primary" @click="process11 = true">加载</el-button>
<script>
import { ref, reactive } from 'vue'
const process11 = ref(false)
const option1 = reactive({
    thickness: '6px',
    background: '#F4F5F8'
})
</script>
```

:::

<script setup>
import { ref, reactive } from 'vue'

const process1 = ref(false)
const process2 = ref(false)
const process3 = ref(false)
const process4 = ref(false)
const process5 = ref(false)
const process6 = ref(false)
const process7 = ref(false)
const process8 = ref(false)
const process9 = ref(false)
const process10 = ref(false)
const process11 = ref(false)
const processRef = ref()
const processRef1 = ref()
const table1 = reactive([
    {
        id: '1',
        date: '2022-9-22 14:27:22',
        name: '王腾飞',
        address: '上海市静安区南京路1258号'
    },
    {
        id: '2',
        date: '2022-9-22 14:27:22',
        name: '王腾飞',
        address: '上海市静安区南京路1258号'
    },
    {
        id: '3',
        date: '2022-9-22 14:27:22',
        name: '王腾飞',
        address: '上海市静安区南京路1258号'
    },
    {
        id: '4',
        date: '2022-9-22 14:27:22',
        name: '王腾飞',
        address: '上海市静安区南京路1258号'
    }
])
const option1 = reactive({
    thickness: '6px',
    background: '#F4F5F8'
})
const onStart = () => {
    if (!process3.value) {
        process3.value = true
    } else {
        processRef.value.zrxProcess.start()
    }
}
const onPause = () => {
    processRef.value.zrxProcess.pause()
}
const onFinish = () => {
    process3.value = false
}
const onFail = () => {
    processRef.value.zrxProcess.fail().then(() => {
        process3.value = false
    })
}
const setExample1 = () => {
    processRef1.value.zrxProcess.setOption({
        color: '#1BBE8C',
        marginEdage: '5px'
    })
    process10.value = true
}
</script>

### Attributes

| 参数        | 说明                             | 类型    | 可选值                   | 默认值 |
| ----------- | -------------------------------- | ------- | ------------------------ | ------ |
| `show`      | 是否显示                         | boolean | true, false              | false  |
| `location`  | 进度条位置                       | string  | top, right, bottom, left | top    |
| `penetrate` | Process 出现时是否能正常点击页面 | boolean | true, false              | false  |
| `option`    | 配置项，见[Props](#props)        | object  | —                        | —      |

### Props

| 参数          | 说明                                     | 类型    | 可选值      | 默认值                                                 |
| ------------- | ---------------------------------------- | ------- | ----------- | ------------------------------------------------------ |
| `duration`    | 持续时间（s）                            | number  | —           | 15                                                     |
| `color`       | 进度条颜色                               | string  | —           | #405FFE                                                |
| `position`    | css`position`属性                        | string  | —           | absolute                                               |
| `failedColor` | 错误/失败颜色                            | string  | —           | #F0465A                                                |
| `thickness`   | 进度条厚度                               | string  | —           | 3px                                                    |
| `transition`  | 过渡参数                                 | object  | —           | { speed: `0.2s`, opacity: `0.6s`, termination: `300` } |
| `granularity` | 持续时间算法参数，值越大 duration 越精确 | number  | —           | 10                                                     |
| `location`    | 进度条位置。优先级低于 props-location    | string  | —           | disabled                                               |
| `penetrate`   | 遮罩下面内容是否可点击                   | boolean | true, false | false                                                  |
| `marginEdage` | 边距                                     | string  | —           | 0px                                                    |
| `inverse`     | 进度条是否反向                           | boolean | true, false | false                                                  |
| `autoFinish`  | 是否完成时自动消失                       | boolean | true, false | true                                                   |
| `background`  | 遮罩背景                                 | string  | —           | transparent                                            |

### Methods

| 方法名称    | 说明         | 参数                            |
| ----------- | ------------ | ------------------------------- |
| `start`     | 启动进度条   | duration: 持续时间              |
| `setOption` | 重置配置参数 | option: 配置，见[Props](#props) |
| `set`       | 设置进度     | num: 需要设置的进度值（百分制） |
| `get`       | 获取进度     | num: 当前的进度值               |
| `increase`  | 增加当前进度 | num: 要增加的进度值             |
| `decrease`  | 减少当前进度 | num: 要减少的进度值             |
| `pause`     | 暂停         | —                               |
| `finish`    | 结束         | —                               |
| `fail`      | 失败         | —                               |

### Directive

| 名称        | 类型      | 说明                                               | 可选值                   |
| ----------- | --------- | -------------------------------------------------- | ------------------------ |
| `body`      | modifiers | 将进度条添加至 body 下，不加则添加至指令所在元素下 | —                        |
| `location`  | modifiers | 进度条位置                                         | top, right, bottom, left |
| `penetrate` | modifiers | 遮罩不影响点击下面元素                             | —                        |
| `duration`  | arg       | 进度条持续时间                                     | number                   |
| `value`     | value     | 进度条是否显示                                     | true, false              |
