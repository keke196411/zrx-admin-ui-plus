---
title: Tree 树形控件
---

# Tree 树形控件

<ClientOnly>
<div class="w-240 h-full p-x-12 p-y-16">
    <div class="m-y-20 font-bold f-16">普通的树</div>
    <el-input v-model="filterText" placeholder="请输入关键字检索" class="m-b-12" @keydown="handleSearch">
        <template #suffix>
            <i class="svg-icon zrx-icon-search cursor-pointer" @click="handleSearch"></i>
        </template>
    </el-input>
    <el-tree
        :data="list"
        :indent="16"
        ref="treeRef"
        :props="defaultProps"
        :filter-node-method="filterNode"
        :expand-on-click-node="false"
    ></el-tree>
</div>
</ClientOnly>

<script setup>
import { ref } from 'vue'

const treeRef = ref()
const treeRef1 = ref()
const filterText = ref('')
const filterText1 = ref('')
const defaultProps = {
    label: 'label',
    children: 'children',
    disabled: 'disabled'
}
const handleSearch = () => {
    treeRef.value?.filter(filterText.value)
}
const handleSearch1 = () => {
    treeRef1.value?.filter(filterText1.value)
}

const filterNode = (value, data) => {
    if (!value) return true
    return data.label?.includes(value)
}

const list = [
    {
        label: '一级 1',
        children: [
            {
                label: '二级 1-1',
                children: [
                    {
                        label: '三级 1-1-1'
                    },
                    {
                        label: '三级 1-1-2',
                        children: [{ label: '四级 1-1-1', children: [{ label: '五级 1-1-2' }] }]
                    }
                ]
            },
            {
                label: '二级 1-2'
            }
        ]
    },
    {
        label: '一级 2'.repeat(5),
        children: [
            {
                label: '二级 2-1',
                children: [
                    {
                        label: '三级 2-1-1'
                    }
                ]
            },
            {
                label: '二级 2-2',
                children: [
                    {
                        label: '三级 2-2-1'
                    }
                ]
            }
        ]
    },
    {
        label: '一级 3',
        children: [
            {
                label: '二级 3-1',
                children: [
                    {
                        label: '三级 3-1-1'
                    }
                ]
            },
            {
                label: '二级 3-2',
                children: [
                    {
                        label: '三级 3-2-1'
                    }
                ]
            }
        ]
    },
    {
        label: '一级 4'
    }
]
</script>

::: details 示例代码

```html
<div class="w-240 h-full p-x-12 p-y-16">
    <div class="m-y-20 font-bold f-16">普通的树</div>
    <el-input v-model="filterText" placeholder="请输入关键字检索" class="m-b-12" @keydown="handleSearch">
        <template #suffix>
            <i class="svg-icon zrx-icon-search cursor-pointer" @click="handleSearch"></i>
        </template>
    </el-input>
    <el-tree :data="list" :indent="16" ref="treeRef" :props="defaultProps" :filter-node-method="filterNode" :expand-on-click-node="false"></el-tree>
</div>

<script setup>
    import { ref } from 'vue'

    const treeRef = ref()
    const filterText = ref('')
    const defaultProps = {
        label: 'label',
        children: 'children',
        disabled: 'disabled'
    }
    const handleSearch = () => {
        treeRef.value?.filter(filterText.value)
    }

    const filterNode = (value, data) => {
        if (!value) return true
        return data.label?.includes(value)
    }

    const list = [
        {
            label: '一级 1',
            children: [
                {
                    label: '二级 1-1',
                    children: [
                        {
                            label: '三级 1-1-1'
                        },
                        {
                            label: '三级 1-1-2',
                            children: [{ label: '四级 1-1-1', children: [{ label: '五级 1-1-2' }] }]
                        }
                    ]
                },
                {
                    label: '二级 1-2'
                }
            ]
        },
        {
            label: '一级 2'.repeat(5),
            children: [
                {
                    label: '二级 2-1',
                    children: [
                        {
                            label: '三级 2-1-1'
                        }
                    ]
                },
                {
                    label: '二级 2-2',
                    children: [
                        {
                            label: '三级 2-2-1'
                        }
                    ]
                }
            ]
        },
        {
            label: '一级 3',
            children: [
                {
                    label: '二级 3-1',
                    children: [
                        {
                            label: '三级 3-1-1'
                        }
                    ]
                },
                {
                    label: '二级 3-2',
                    children: [
                        {
                            label: '三级 3-2-1'
                        }
                    ]
                }
            ]
        },
        {
            label: '一级 4'
        }
    ]
</script>
```

:::

<div class="w-240 h-full p-x-12 p-y-16">
    <div class="m-y-20 font-bold f-16">带复选框的树</div>
    <el-input v-model="filterText1" placeholder="请输入关键字检索" class="m-b-12" @keydown="handleSearch1">
        <template #suffix>
            <i class="svg-icon zrx-icon-search cursor-pointer" @click="handleSearch1"></i>
        </template>
    </el-input>
    <el-tree
        show-checkbox
        :data="list"
        :indent="16"
        ref="treeRef1"
        :props="defaultProps"
        :filter-node-method="filterNode"
        :expand-on-click-node="false"
    ></el-tree>
</div>

::: details 示例代码

```html
<div class="w-240 h-full p-x-12 p-y-16">
    <div class="m-y-20 font-bold f-16">带复选框的树</div>
    <el-input v-model="filterText" placeholder="请输入关键字检索" class="m-b-12" @keydown="handleSearch">
        <template #suffix>
            <i class="svg-icon zrx-icon-search cursor-pointer" @click="handleSearch"></i>
        </template>
    </el-input>
    <el-tree
        show-checkbox
        :data="list"
        :indent="16"
        ref="treeRef"
        :props="defaultProps"
        :filter-node-method="filterNode"
        :expand-on-click-node="false"
    ></el-tree>
</div>

<script setup>
    import { ref } from 'vue'

    const treeRef = ref()
    const filterText = ref('')
    const defaultProps = {
        label: 'label',
        children: 'children',
        disabled: 'disabled'
    }
    const handleSearch = () => {
        treeRef.value?.filter(filterText.value)
    }

    const filterNode = (value, data) => {
        if (!value) return true
        return data.label?.includes(value)
    }

    const list = [
        {
            label: '一级 1',
            children: [
                {
                    label: '二级 1-1',
                    children: [
                        {
                            label: '三级 1-1-1'
                        },
                        {
                            label: '三级 1-1-2',
                            children: [{ label: '四级 1-1-1', children: [{ label: '五级 1-1-2' }] }]
                        }
                    ]
                },
                {
                    label: '二级 1-2'
                }
            ]
        },
        {
            label: '一级 2'.repeat(5),
            children: [
                {
                    label: '二级 2-1',
                    children: [
                        {
                            label: '三级 2-1-1'
                        }
                    ]
                },
                {
                    label: '二级 2-2',
                    children: [
                        {
                            label: '三级 2-2-1'
                        }
                    ]
                }
            ]
        },
        {
            label: '一级 3',
            children: [
                {
                    label: '二级 3-1',
                    children: [
                        {
                            label: '三级 3-1-1'
                        }
                    ]
                },
                {
                    label: '二级 3-2',
                    children: [
                        {
                            label: '三级 3-2-1'
                        }
                    ]
                }
            ]
        },
        {
            label: '一级 4'
        }
    ]
</script>
```

:::
