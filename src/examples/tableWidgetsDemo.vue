<template>
    <div class="m-y-20">
        <el-table :data="tableData" ref="tableRef">
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
                    <zrx-table-widgets v-model="dataColumns" rowKey="prop" @change="() => { tableRef.doLayout() }" />
                </template>

                <template #default="{ row }">
                    <el-button link type="primary"> 关联角色 </el-button>
                    <el-button link type="primary"> 关联用户组 </el-button>
                    <el-button link type="primary"> 应用授权 </el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script setup>
const tableRef = ref()
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
