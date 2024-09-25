---
title: TableWidgets 表格小组件
---

# TableWidgets 表格小组件

用于表格字段较多时候，控制表格字段的显隐；

<ClientOnly>
<div class="m-y-20">
    <el-table :data="tableData">
        <template v-for="item in dataColumns.filter(op => op.label != '操作')" :key="item.prop">
            <el-table-column
                :label="item.label"
                :prop="item.prop"
                show-overflow-tooltip
                :fixed="item.fixed"
                v-if="item.show"
            ></el-table-column>
        </template>
        <el-table-column label="操作" width="300" fixed="right">
            <template #header>
                <span>操作</span>
                <zrx-table-widgets v-model="dataColumns" rowKey="prop"></zrx-table-widgets>
            </template>
            <template #default="{ row }">
                <el-button link type="primary"> 关联角色 </el-button>
                <el-button link type="primary"> 关联用户组 </el-button>
                <el-button link type="primary"> 应用授权 </el-button>
            </template>
        </el-table-column>
    </el-table>
</div>
</ClientOnly>

<script setup>
import { ref } from 'vue'

const tableData = ref([])
const dataColumns = ref([
    { prop: 'loginName', label: '用户名', fixed: 'left', isFixed: true, show: true },
    { prop: 'name', label: '姓名', fixed: false, isFixed: false, show: true },
    { prop: 'orgName', label: '所属机构', fixed: false, isFixed: false, show: true },
    { prop: 'createName', label: '创建人', fixed: false, isFixed: false, show: true },
    { prop: 'createTime', label: '创建时间', fixed: false, isFixed: false, show: true },
    { prop: 'updateTime', label: '更新时间', fixed: false, isFixed: false, show: true },
    { prop: 'custom', label: '操作', fixed: 'right', isFixed: true, show: true }
])
</script>

::: details 示例代码

```html
<el-table :data="tableData">
    <template v-for="item in dataColumns.filter(op => op.label != '操作')" :key="item.prop">
        <el-table-column :label="item.label" :prop="item.prop" show-overflow-tooltip :fixed="item.fixed" v-if="item.show"></el-table-column>
    </template>
    <el-table-column label="操作" width="300" fixed="right">
        <template #header>
            <span>操作</span>
            <zrx-table-widgets v-model="dataColumns" rowKey="prop"></zrx-table-widgets>
        </template>
        <template #default="{ row }">
            <el-button link type="primary"> 关联角色 </el-button>
            <el-button link type="primary"> 关联用户组 </el-button>
            <el-button link type="primary"> 应用授权 </el-button>
        </template>
    </el-table-column>
</el-table>

<script setup>
    import { ref } from 'vue'

    const tableData = ref([])
    const dataColumns = ref([
        { prop: 'loginName', label: '用户名', fixed: 'left', isFixed: true, show: true },
        { prop: 'name', label: '姓名', fixed: false, isFixed: false, show: true },
        { prop: 'orgName', label: '所属机构', fixed: false, isFixed: false, show: true },
        { prop: 'createName', label: '创建人', fixed: false, isFixed: false, show: true },
        { prop: 'createTime', label: '创建时间', fixed: false, isFixed: false, show: true },
        { prop: 'updateTime', label: '更新时间', fixed: false, isFixed: false, show: true },
        { prop: 'custom', label: '操作', fixed: 'right', isFixed: true, show: true }
    ])
</script>
```

:::

### Attributes

| 参数     | 说明              | 类型   | 可选值 | 默认值 |
| -------- | ----------------- | ------ | ------ | ------ |
| `rowKey` | 传入数据的唯一key | String | —      | `id`   |
| `title`  | 全选标签的文案    | String | —      | `全选` |

### Methods

| 方法名称 | 说明           | 参数 |
| -------- | -------------- | ---- |
| `change` | 点击确定的回调 | —    |
