---
title: EventRecord 时间轴
---

# EventRecord 时间轴

### 设计稿中的常见用法

<ClientOnly>
<div class="m-t-16">
    <zrx-event-record :value="record" title="流转记录" :collapse-height="1" sortable :default-expanded-keys="['1']" row-key="id" sort-key="approveTime" style="--zrx-event-record-width: 400px;">
        <template #default="{ row }">
            <p class="f-c lh-24 m-t-4">
                <span class="c-opacity-90 c-#394156">{{ row.createBy }}</span>
                <span class="c-opacity-70 c-#394156">（{{ row.orgName }}）</span>
                <i class="svg-icon zrx-icon-telephone opacity-70 m-l-2"></i>
            </p>
            <p class="f-c lh-24 m-t-4 m-b-8">
                <span :class="'zrx-color-' + row.status">【{{ row.result }}】</span>
                <span class="color-opacity-70 c-#394156">{{ row.approveTime }}</span>
            </p>
        </template>
        <template #attachment="{ row }">
            <div class="br-2 bg-#F4F5F8 p-y-12 p-x-16">
                <p class="f-c-b lh-24">
                    <span class="color-opacity-70 c-#394156">开始处理</span>
                    <span class="c-#394156">{{ row.startTime }}</span>
                </p>
                <p class="f-c-b lh-24 m-t-8">
                    <span class="color-opacity-70 c-#394156">处理耗时</span>
                    <span class="c-#394156">{{ row.duration }}</span>
                </p>
                <p class="f-c-b lh-24 m-t-8">
                    <span class="color-opacity-70 c-#394156">审批意见</span>
                    <span class="c-#394156">{{ row.comment }}</span>
                </p>
                <p class="f-c-b lh-24 m-t-8">
                    <span class="color-opacity-70 c-#394156">附件</span>
                    <i class="svg-icon zrx-icon-folder important:bg-#405FFE m-l-auto"></i>
                    <a class="important:c-#405FFE m-l-4">{{ row.file }}</a>
                </p>
            </div>
        </template>
    </zrx-event-record>
</div>
</ClientOnly>

::: details 示例代码

```html
<zrx-event-record :value="record" title="流转记录" :collapse-height="1" sortable :default-expanded-keys="['1']" row-key="id" sort-key="approveTime" style="--zrx-event-record-width: 400px">
    <template #default="{ row }">
        <p class="f-c lh-24 m-t-4">
            <span class="c-opacity-90 c-#394156">{{ row.createBy }}</span>
            <span class="c-opacity-70 c-#394156">（{{ row.orgName }}）</span>
            <i class="svg-icon zrx-icon-telephone m-l-2"></i>
        </p>
        <p class="f-c lh-24 m-t-4 m-b-8">
            <span :class="'zrx-color-' + row.status">【{{ row.result }}】</span>
            <span class="color-opacity-70 c-#394156">{{ row.approveTime }}</span>
        </p>
    </template>
    <template #attachment="{ row }">
        <div class="br-2 bg-#F4F5F8 p-y-12 p-x-16">
            <p class="f-c-b lh-24">
                <span class="color-opacity-70 c-#394156">开始处理</span>
                <span class="c-#394156">{{ row.startTime }}</span>
            </p>
            <p class="f-c-b lh-24 m-t-8">
                <span class="color-opacity-70 c-#394156">处理耗时</span>
                <span class="c-#394156">{{ row.duration }}</span>
            </p>
            <p class="f-c-b lh-24 m-t-8">
                <span class="color-opacity-70 c-#394156">审批意见</span>
                <span class="c-#394156">{{ row.comment }}</span>
            </p>
            <p class="f-c-b lh-24 m-t-8">
                <span class="color-opacity-70 c-#394156">附件</span>
                <i class="svg-icon zrx-icon-folder important:bg-#405FFE m-l-auto"></i>
                <a class="c-#405FFE m-l-4">{{ row.file }}</a>
            </p>
        </div>
    </template>
</zrx-event-record>
<script setup>
import { ref } from 'vue'
const record = ref([
    {
        id: '1',
        label: '登记',
        date: '2024-04-22 21:15:30',
        createBy: '李清照',
        orgName: '市大数据局',
        status: 'primary',
        result: '提交',
        approveTime: '2024-04-22 21:15:30',
        startTime: '2024-04-15 08:42:55',
        duration: '1小时',
        comment: '报送下一节点',
        file: '附件.pdf'
    },
    {
        id: '2',
        label: '区县一级审批',
        date: '2024-04-08 17:30:10',
        icon: 'zrx-icon zrx-icon-info',
        createBy: '王晓刚',
        orgName: '市大数据局',
        status: 'success',
        result: '审批通过',
        approveTime: '2024-04-08 17:30:10',
        startTime: '2024-03-29 12:20:45',
        duration: '12小时18分24秒',
        comment: '报送下一节点',
        file: '附件.pdf'
    },
    {
        id: '3',
        label: '地市一级审批',
        date: '2024-03-19 19:55:28',
        icon: 'zrx-icon zrx-icon-question',
        createBy: '王务琦',
        orgName: '市大数据局',
        status: 'success',
        result: '同意',
        approveTime: '2024-03-19 19:55:28',
        startTime: '2024-03-10 06:10:02',
        duration: '2.5小时',
        comment: '同意申请',
        file: '附件.pdf'
    },
    {
        id: '4',
        label: '主管部门',
        date: '2024-03-02 15:28:17',
        icon: 'zrx-icon zrx-icon-warning',
        icon: 'zrx-icon zrx-icon-success',
        createBy: '李莉',
        orgName: '市大数据局',
        status: 'success',
        result: '审批通过',
        approveTime: '2024-03-02 15:28:17',
        startTime: '2024-02-21 10:50:40',
        duration: '11.2小时',
        comment: '- -',
        disabled: true,
        file: '附件.pdf'
    },
    {
        id: '5',
        label: '直属部门',
        date: '2024-02-12 23:07:05',
        icon: 'zrx-icon zrx-icon-error',
        createBy: '蒙恬',
        orgName: '市大数据局',
        status: 'error',
        result: '驳回',
        approveTime: '2024-02-12 23:07:05',
        startTime: '2024-02-05 08:33:50',
        duration: '5天15小时28分39秒',
        comment: '暂缓审批',
        disabled: true,
        file: '附件.pdf'
    }
])
</script>
```

:::

### 基础用法

<div class="m-t-16">
    <zrx-event-record :value="record" :prop="{ date: 'date' }" clickable></zrx-event-record>
</div>

::: tip
当 EventRecord 指定`prop.date`字段时，显示标题后的时间戳
:::

::: details 示例代码

```html
<event-record :value="record" :prop="{ date: 'date' }" clickable></event-record>

<script setup>
import { ref } from 'vue'
const record = ref([
    {
        id: '1',
        label: '登记',
        date: '2024-04-22 21:15:30',
        createBy: '李清照',
        orgName: '市大数据局',
        status: 'primary',
        result: '提交',
        approveTime: '2024-04-22 21:15:30',
        startTime: '2024-04-15 08:42:55',
        duration: '1小时',
        comment: '报送下一节点',
        file: '附件.pdf'
    },
    {
        id: '2',
        label: '区县一级审批',
        date: '2024-04-08 17:30:10',
        icon: 'zrx-icon zrx-icon-info',
        createBy: '王晓刚',
        orgName: '市大数据局',
        status: 'success',
        result: '审批通过',
        approveTime: '2024-04-08 17:30:10',
        startTime: '2024-03-29 12:20:45',
        duration: '12小时18分24秒',
        comment: '报送下一节点',
        file: '附件.pdf'
    },
    {
        id: '3',
        label: '地市一级审批',
        date: '2024-03-19 19:55:28',
        icon: 'zrx-icon zrx-icon-question',
        createBy: '王务琦',
        orgName: '市大数据局',
        status: 'success',
        result: '同意',
        approveTime: '2024-03-19 19:55:28',
        startTime: '2024-03-10 06:10:02',
        duration: '2.5小时',
        comment: '同意申请',
        file: '附件.pdf'
    },
    {
        id: '4',
        label: '主管部门',
        date: '2024-03-02 15:28:17',
        icon: 'zrx-icon zrx-icon-warning',
        icon: 'zrx-icon zrx-icon-success',
        createBy: '李莉',
        orgName: '市大数据局',
        status: 'success',
        result: '审批通过',
        approveTime: '2024-03-02 15:28:17',
        startTime: '2024-02-21 10:50:40',
        duration: '11.2小时',
        comment: '- -',
        disabled: true,
        file: '附件.pdf'
    },
    {
        id: '5',
        label: '直属部门',
        date: '2024-02-12 23:07:05',
        icon: 'zrx-icon zrx-icon-error',
        createBy: '蒙恬',
        orgName: '市大数据局',
        status: 'error',
        result: '驳回',
        approveTime: '2024-02-12 23:07:05',
        startTime: '2024-02-05 08:33:50',
        duration: '5天15小时28分39秒',
        comment: '暂缓审批',
        disabled: true,
        file: '附件.pdf'
    }
])
</script>
```

:::

### 体现当前流转状态

<div class="m-t-16">
    <zrx-event-record :value="record" :current="3" :prop="{ date: 'startTime', disabled: 'disabled' }" row-key="id"></zrx-event-record>
</div>

::: tip
当 EventRecord 指定`current`属性或`prop.current`字段时，标记对应节点为当前节点；指定`prop.disabled`字段时，标记对应节点为失效节点（只代表流程状态，仍可正常点击）
:::

::: details 示例代码

```html
<zrx-event-record :value="record" :current="3" :prop="{ date: 'startTime', disabled: 'disabled' }" row-key="id"></zrx-event-record>

<script setup>
import { ref } from 'vue'
const record = ref([
    {
        id: '1',
        label: '登记',
        date: '2024-04-22 21:15:30',
        createBy: '李清照',
        orgName: '市大数据局',
        status: 'primary',
        result: '提交',
        approveTime: '2024-04-22 21:15:30',
        startTime: '2024-04-15 08:42:55',
        duration: '1小时',
        comment: '报送下一节点',
        file: '附件.pdf'
    },
    {
        id: '2',
        label: '区县一级审批',
        date: '2024-04-08 17:30:10',
        icon: 'zrx-icon zrx-icon-info',
        createBy: '王晓刚',
        orgName: '市大数据局',
        status: 'success',
        result: '审批通过',
        approveTime: '2024-04-08 17:30:10',
        startTime: '2024-03-29 12:20:45',
        duration: '12小时18分24秒',
        comment: '报送下一节点',
        file: '附件.pdf'
    },
    {
        id: '3',
        label: '地市一级审批',
        date: '2024-03-19 19:55:28',
        icon: 'zrx-icon zrx-icon-question',
        createBy: '王务琦',
        orgName: '市大数据局',
        status: 'success',
        result: '同意',
        approveTime: '2024-03-19 19:55:28',
        startTime: '2024-03-10 06:10:02',
        duration: '2.5小时',
        comment: '同意申请',
        file: '附件.pdf'
    },
    {
        id: '4',
        label: '主管部门',
        date: '2024-03-02 15:28:17',
        icon: 'zrx-icon zrx-icon-warning',
        icon: 'zrx-icon zrx-icon-success',
        createBy: '李莉',
        orgName: '市大数据局',
        status: 'success',
        result: '审批通过',
        approveTime: '2024-03-02 15:28:17',
        startTime: '2024-02-21 10:50:40',
        duration: '11.2小时',
        comment: '- -',
        disabled: true,
        file: '附件.pdf'
    },
    {
        id: '5',
        label: '直属部门',
        date: '2024-02-12 23:07:05',
        icon: 'zrx-icon zrx-icon-error',
        createBy: '蒙恬',
        orgName: '市大数据局',
        status: 'error',
        result: '驳回',
        approveTime: '2024-02-12 23:07:05',
        startTime: '2024-02-05 08:33:50',
        duration: '5天15小时28分39秒',
        comment: '暂缓审批',
        disabled: true,
        file: '附件.pdf'
    }
])
</script>
```

:::

### 自定义图标

<ClientOnly>
<div class="m-t-16">
    <zrx-event-record :value="record">
        <template #icon="{ row, index }">
            <i :class="row.icon" v-if="row.icon"></i>
        </template>
    </zrx-event-record>
</div>
</ClientOnly>

::: details 示例代码

```html
<zrx-event-record :value="record">
    <template #icon="{ row, index }">
        <i :class="row.icon" v-if="row.icon"></i>
    </template>
</zrx-event-record>

<script setup>
import { ref } from 'vue'
const record = ref([
    {
        id: '1',
        label: '登记',
        date: '2024-04-22 21:15:30',
        createBy: '李清照',
        orgName: '市大数据局',
        status: 'primary',
        result: '提交',
        approveTime: '2024-04-22 21:15:30',
        startTime: '2024-04-15 08:42:55',
        duration: '1小时',
        comment: '报送下一节点',
        file: '附件.pdf'
    },
    {
        id: '2',
        label: '区县一级审批',
        date: '2024-04-08 17:30:10',
        icon: 'zrx-icon zrx-icon-info',
        createBy: '王晓刚',
        orgName: '市大数据局',
        status: 'success',
        result: '审批通过',
        approveTime: '2024-04-08 17:30:10',
        startTime: '2024-03-29 12:20:45',
        duration: '12小时18分24秒',
        comment: '报送下一节点',
        file: '附件.pdf'
    },
    {
        id: '3',
        label: '地市一级审批',
        date: '2024-03-19 19:55:28',
        icon: 'zrx-icon zrx-icon-question',
        createBy: '王务琦',
        orgName: '市大数据局',
        status: 'success',
        result: '同意',
        approveTime: '2024-03-19 19:55:28',
        startTime: '2024-03-10 06:10:02',
        duration: '2.5小时',
        comment: '同意申请',
        file: '附件.pdf'
    },
    {
        id: '4',
        label: '主管部门',
        date: '2024-03-02 15:28:17',
        icon: 'zrx-icon zrx-icon-warning',
        icon: 'zrx-icon zrx-icon-success',
        createBy: '李莉',
        orgName: '市大数据局',
        status: 'success',
        result: '审批通过',
        approveTime: '2024-03-02 15:28:17',
        startTime: '2024-02-21 10:50:40',
        duration: '11.2小时',
        comment: '- -',
        disabled: true,
        file: '附件.pdf'
    },
    {
        id: '5',
        label: '直属部门',
        date: '2024-02-12 23:07:05',
        icon: 'zrx-icon zrx-icon-error',
        createBy: '蒙恬',
        orgName: '市大数据局',
        status: 'error',
        result: '驳回',
        approveTime: '2024-02-12 23:07:05',
        startTime: '2024-02-05 08:33:50',
        duration: '5天15小时28分39秒',
        comment: '暂缓审批',
        disabled: true,
        file: '附件.pdf'
    }
])
</script>
```

:::

### 指定初始排序

<ClientOnly>
<div class="m-t-16">
    <zrx-event-record :value="record" title="流转记录" :collapse-height="1" sortable sort-key="approveTime" initial-sort="asc" ref="eventRecordRef">
        <template #default="{ row }">
            <p class="f-c lh-24 m-t-4">
                <span class="c-opacity-90 c-#394156">{{ row.createBy }}</span>
                <span class="c-opacity-70 c-#394156">（{{ row.orgName }}）</span>
                <i class="svg-icon zrx-icon-telephone opacity-70 m-l-2"></i>
            </p>
            <p class="f-c lh-24 m-t-4">
                <span :class="'zrx-color-' + row.status">【{{ row.result }}】</span>
                <span class="color-opacity-70 c-#394156">{{ row.approveTime }}</span>
            </p>
        </template>
    </zrx-event-record>
</div>
</ClientOnly>

::: tip
当返回数据未排序或想更改默认排序时，请指定`initial-sort`并在传入`value`值后，立即调用组件`sort`方法使初始排序与需求相符。
若传入`value`的值变化，可调用`updateSort`方法同步数据值与组件当前排序状态
:::

::: details 示例代码

```html
<zrx-event-record :value="record" title="流转记录" :collapse-height="1" sortable sort-key="approveTime" initial-sort="asc" ref="eventRecordRef">
    <template #default="{ row }">
        <p class="f-c lh-24 m-t-4">
            <span class="c-opacity-90 c-#394156">{{ row.createBy }}</span>
            <span class="c-opacity-70 c-#394156">（{{ row.orgName }}）</span>
            <i class="svg-icon zrx-icon-telephone opacity-70 m-l-2"></i>
        </p>
        <p class="f-c lh-24 m-t-4">
            <span :class="'zrx-color-' + row.status">【{{ row.result }}】</span>
            <span class="color-opacity-70 c-#394156">{{ row.approveTime }}</span>
        </p>
    </template>
</zrx-event-record>

<script setup>
import { ref, onMounted } from 'vue'

const eventRecordRef = ref(null)
const record = ref([
    {
        id: '1',
        label: '登记',
        date: '2024-04-22 21:15:30',
        createBy: '李清照',
        orgName: '市大数据局',
        status: 'primary',
        result: '提交',
        approveTime: '2024-04-22 21:15:30',
        startTime: '2024-04-15 08:42:55',
        duration: '1小时',
        comment: '报送下一节点',
        file: '附件.pdf'
    },
    {
        id: '2',
        label: '区县一级审批',
        date: '2024-04-08 17:30:10',
        icon: 'zrx-icon zrx-icon-info',
        createBy: '王晓刚',
        orgName: '市大数据局',
        status: 'success',
        result: '审批通过',
        approveTime: '2024-04-08 17:30:10',
        startTime: '2024-03-29 12:20:45',
        duration: '12小时18分24秒',
        comment: '报送下一节点',
        file: '附件.pdf'
    },
    {
        id: '3',
        label: '地市一级审批',
        date: '2024-03-19 19:55:28',
        icon: 'zrx-icon zrx-icon-question',
        createBy: '王务琦',
        orgName: '市大数据局',
        status: 'success',
        result: '同意',
        approveTime: '2024-03-19 19:55:28',
        startTime: '2024-03-10 06:10:02',
        duration: '2.5小时',
        comment: '同意申请',
        file: '附件.pdf'
    },
    {
        id: '4',
        label: '主管部门',
        date: '2024-03-02 15:28:17',
        icon: 'zrx-icon zrx-icon-warning',
        icon: 'zrx-icon zrx-icon-success',
        createBy: '李莉',
        orgName: '市大数据局',
        status: 'success',
        result: '审批通过',
        approveTime: '2024-03-02 15:28:17',
        startTime: '2024-02-21 10:50:40',
        duration: '11.2小时',
        comment: '- -',
        disabled: true,
        file: '附件.pdf'
    },
    {
        id: '5',
        label: '直属部门',
        date: '2024-02-12 23:07:05',
        icon: 'zrx-icon zrx-icon-error',
        createBy: '蒙恬',
        orgName: '市大数据局',
        status: 'error',
        result: '驳回',
        approveTime: '2024-02-12 23:07:05',
        startTime: '2024-02-05 08:33:50',
        duration: '5天15小时28分39秒',
        comment: '暂缓审批',
        disabled: true,
        file: '附件.pdf'
    }
])
onMounted(() => eventRecordRef.value.sort())
</script>
```

:::

### 自定义Css变量

| 参数                            | 说明             | 类型   | 可选值 | 默认值 |
| ------------------------------- | ---------------- | ------ | ------ | ------ |
| `--zrx-event-record-width`      | 时间轴宽度       | string | —      | 300px  |
| `--zrx-event-record-row-height` | 时间轴标题栏行高 | string | —      | 32px   |
| `--zrx-event-record-row-gap`    | 时间轴标题栏间距 | string | —      | 12px   |
| `--zrx-event-record-max-height` | 时间轴最大高度   | string | —      | 100%   |

### Attributes

| 参数                    | 说明                                                                                         | 类型           | 可选值          | 默认值           |
| ----------------------- | -------------------------------------------------------------------------------------------- | -------------- | --------------- | ---------------- |
| `value`                 | 时间轴数据                                                                                   | array          | —               | []               |
| `droppable`             | 时间轴每行是否可折叠/展开                                                                    | Boolean        | true, false     | true             |
| `prop`                  | 配置项                                                                                       | object         | 见[Prop](#prop) | —                |
| `collapse-height`       | 行折叠后的高度                                                                               | String, Number | —               | 0                |
| `accordion`             | 是否手风琴模式                                                                               | Boolean        | true, false     | false            |
| `row-key`               | 行唯一标识符                                                                                 | String         | —               | zrxEventRecordId |
| `default-expanded-keys` | 默认展开行                                                                                   | Array          | —               | []               |
| `default-expanded-all`  | 默认展开所有行                                                                               | Boolean        | true, false     | false            |
| `current`               | 标识为当前流程节点对应的id                                                                   | String, number | —               | —                |
| `clickable`             | 是否可点击                                                                                   | Boolean        | true, false     | false            |
| `title`                 | 顶部标题文字                                                                                 | String         | —               | —                |
| `sortable`              | 是否显示排序按钮。注意不影响排序`sort`方法                                                   | Boolean        | true, false     | false            |
| `sort-key`              | 排序字段                                                                                     | String         | —               | —                |
| `sort-method`           | 传递给sort方法的回调参数。优先于`sort-key`                                                   | Function       | —               | —                |
| `initial-sort`          | 默认初始数据的排序。如果初始时传入的数据排序方式不同，请在第一次赋值后调用`sort`方法同步排序 | String         | desc, asc       | desc             |

### Prop

| 参数       | 说明                                   | 类型   | 可选值 | 默认值 |
| ---------- | -------------------------------------- | ------ | ------ | ------ |
| `label`    | 指定节点标签为节点对象的某个属性值     | string | —      | label  |
| `date`     | 指定节点时间戳为节点对象的某个属性值   | string | —      | —      |
| `current`  | 指定当前流程节点为对象的某个属性值     | string | —      | —      |
| `disabled` | 指定节点是否失效状态为对象的某个属性值 | string | —      | —      |

### Methods

| 方法名称     | 说明                                            | 参数               |
| ------------ | ----------------------------------------------- | ------------------ |
| `sort`       | 内置排序方法（不改变`value`绑定的对象）         | 排序方式,desc或asc |
| `updateSort` | 同步传入`value`值的排序为组件当前排序状态的方法 | —                  |

### Slots

| name         | 说明                                 |
| ------------ | ------------------------------------ |
| —            | 标题行以下，折叠区域以上（若有）内容 |
| `headline`   | 顶部内容                             |
| `icon`       | 图标位置内容                         |
| `attachment` | 折叠展示区域内容                     |

### Events

| 事件名称      | 说明               | 回调参数                                     |
| ------------- | ------------------ | -------------------------------------------- |
| `panelClick`  | 点击行的回调       | 当前选中行对应的对象                         |
| `checkChange` | 选中行改变时的回调 | 当前选中行对应的对象, 上一个选中行对应的对象 |

<script setup>
import { ref, onMounted } from 'vue'

const eventRecordRef = ref(null)
const record = ref([
    {
        id: '1',
        label: '登记',
        date: '2024-04-22 21:15:30',
        createBy: '李清照',
        orgName: '市大数据局',
        status: 'primary',
        result: '提交',
        approveTime: '2024-04-22 21:15:30',
        startTime: '2024-04-15 08:42:55',
        duration: '1小时',
        comment: '报送下一节点',
        file: '附件.pdf'
    },
    {
        id: '2',
        label: '区县一级审批',
        date: '2024-04-08 17:30:10',
        icon: 'zrx-icon zrx-icon-info',
        createBy: '王晓刚',
        orgName: '市大数据局',
        status: 'success',
        result: '审批通过',
        approveTime: '2024-04-08 17:30:10',
        startTime: '2024-03-29 12:20:45',
        duration: '12小时18分24秒',
        comment: '报送下一节点',
        file: '附件.pdf'
    },
    {
        id: '3',
        label: '地市一级审批',
        date: '2024-03-19 19:55:28',
        icon: 'zrx-icon zrx-icon-question',
        createBy: '王务琦',
        orgName: '市大数据局',
        status: 'success',
        result: '同意',
        approveTime: '2024-03-19 19:55:28',
        startTime: '2024-03-10 06:10:02',
        duration: '2.5小时',
        comment: '同意申请',
        file: '附件.pdf'
    },
    {
        id: '4',
        label: '主管部门',
        date: '2024-03-02 15:28:17',
        icon: 'zrx-icon zrx-icon-warning',
        icon: 'zrx-icon zrx-icon-success',
        createBy: '李莉',
        orgName: '市大数据局',
        status: 'success',
        result: '审批通过',
        approveTime: '2024-03-02 15:28:17',
        startTime: '2024-02-21 10:50:40',
        duration: '11.2小时',
        comment: '- -',
        disabled: true,
        file: '附件.pdf'
    },
    {
        id: '5',
        label: '直属部门',
        date: '2024-02-12 23:07:05',
        icon: 'zrx-icon zrx-icon-error',
        createBy: '蒙恬',
        orgName: '市大数据局',
        status: 'error',
        result: '驳回',
        approveTime: '2024-02-12 23:07:05',
        startTime: '2024-02-05 08:33:50',
        duration: '5天15小时28分39秒',
        comment: '暂缓审批',
        disabled: true,
        file: '附件.pdf'
    }
])
onMounted(() => eventRecordRef.value.sort())
</script>

<style lang="scss" scoped>
:deep(.zrx-event-record) {
    p {
        margin-top: 0;
        margin-bottom: 0;
        line-height: normal;
    }
    ul {
        margin-top: 0;
        margin-bottom: 0;
        padding-left: 0;
    }
}
</style>
