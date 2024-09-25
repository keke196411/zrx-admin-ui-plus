---
title: TreeSelect 树形选择
---

# TreeSelect 树形选择

含有下拉菜单的树形选择器，是基于element-plus组件TreeSelect，结合了 el-tree 和 el-select 两个组件的功能，添加了下拉框的header，来实现在树形选择的popper中搜索的功能。

<ClientOnly>
<div class="w-240">
    <div class="m-y-20 font-bold f-16">基础用法</div>
    <zrx-tree-select v-model="value" :data="data" :render-after-expand="false"></zrx-tree-select>
    <div class="m-t-20"></div>
    <zrx-tree-select v-model="value1" :data="data" :render-after-expand="false" check-strictly></zrx-tree-select>
    <div class="m-y-20 font-bold f-16">复选框</div>
    <zrx-tree-select show-checkbox v-model="value2" :data="data" :render-after-expand="false" check-strictly></zrx-tree-select>
    <div class="m-t-20"></div>
    <zrx-tree-select
        multiple
        check-strictly
        show-checkbox
        collapse-tags
        :data="data"
        v-model="value3"
        :render-after-expand="false"
    ></zrx-tree-select>
</div>
</ClientOnly>

<script setup>
import { ref } from 'vue'

const value = ref()
const value1 = ref()
const value2 = ref([])
const value3 = ref(['1-1', '1-1-1', '2'])

const data = [
    {
        value: '1',
        label: 'Level one 1',
        children: [
            {
                value: '1-1',
                label: 'Level two 1-1',
                children: [
                    {
                        value: '1-1-1',
                        label: 'Level three 1-1-1'
                    }
                ]
            }
        ]
    },
    {
        value: '2',
        label: 'Level one 2',
        children: [
            {
                value: '2-1',
                label: 'Level two 2-1',
                children: [
                    {
                        value: '2-1-1',
                        label: 'Level three 2-1-1'
                    }
                ]
            },
            {
                value: '2-2',
                label: 'Level two 2-2',
                children: [
                    {
                        value: '2-2-1',
                        label: 'Level three 2-2-1'
                    }
                ]
            }
        ]
    },
    {
        value: '3',
        label: 'Level one 3',
        children: [
            {
                value: '3-1',
                label: 'Level two 3-1',
                children: [
                    {
                        value: '3-1-1',
                        label: 'Level three 3-1-1'
                    }
                ]
            },
            {
                value: '3-2',
                label: 'Level two 3-2',
                children: [
                    {
                        value: '3-2-1',
                        label: 'Level three 3-2-1'
                    }
                ]
            }
        ]
    }
]
</script>

::: details 示例代码

```html
<div class="m-y-20 font-bold f-16">基础用法</div>
<zrx-tree-select v-model="value" :data="data" :render-after-expand="false"></zrx-tree-select>
<div class="m-t-20"></div>
<zrx-tree-select v-model="value1" :data="data" :render-after-expand="false" check-strictly></zrx-tree-select>
<div class="m-y-20 font-bold f-16">复选框</div>
<zrx-tree-select show-checkbox v-model="value2" :data="data" :render-after-expand="false" check-strictly></zrx-tree-select>
<div class="m-t-20"></div>
<zrx-tree-select multiple check-strictly show-checkbox collapse-tags :data="data" v-model="value3" :render-after-expand="false"></zrx-tree-select>

<script setup>
    import { ref } from 'vue'

    const value = ref()
    const value1 = ref()
    const value2 = ref([])
    const value3 = ref(['1-1', '1-1-1', '2'])

    const data = [
        {
            value: '1',
            label: 'Level one 1',
            children: [
                {
                    value: '1-1',
                    label: 'Level two 1-1',
                    children: [
                        {
                            value: '1-1-1',
                            label: 'Level three 1-1-1'
                        }
                    ]
                }
            ]
        },
        {
            value: '2',
            label: 'Level one 2',
            children: [
                {
                    value: '2-1',
                    label: 'Level two 2-1',
                    children: [
                        {
                            value: '2-1-1',
                            label: 'Level three 2-1-1'
                        }
                    ]
                },
                {
                    value: '2-2',
                    label: 'Level two 2-2',
                    children: [
                        {
                            value: '2-2-1',
                            label: 'Level three 2-2-1'
                        }
                    ]
                }
            ]
        },
        {
            value: '3',
            label: 'Level one 3',
            children: [
                {
                    value: '3-1',
                    label: 'Level two 3-1',
                    children: [
                        {
                            value: '3-1-1',
                            label: 'Level three 3-1-1'
                        }
                    ]
                },
                {
                    value: '3-2',
                    label: 'Level two 3-2',
                    children: [
                        {
                            value: '3-2-1',
                            label: 'Level three 3-2-1'
                        }
                    ]
                }
            ]
        }
    ]
</script>
```

:::

### Attributes

| 参数                | 说明                                   | 类型    | 可选值 | 默认值 |
| ------------------- | -------------------------------------- | ------- | ------ | ------ |
| `showSearch`        | 下拉选择弹出框中是否显示输入框进行搜索 | Boolean | —      | true   |
| `searchPlaceholder` | 下拉选择中输入框的提示文本             | String  | —      | 请输入 |
