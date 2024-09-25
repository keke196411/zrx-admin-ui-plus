<template>
    <div>
        <div class="m-y-20 font-bold f-16">hover激活</div>
        <el-dropdown>
            <el-button type="primary">下拉菜单dropdown</el-button>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item v-for="n in options" :key="n.value" :disabled="n.disabled">
                        {{ n.label }}
                    </el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>

        <div class="m-y-20 font-bold f-16">click激活</div>
        <el-dropdown trigger="click">
            <el-button type="primary">下拉菜单dropdown</el-button>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item v-for="n in options" :key="n.value" :disabled="n.disabled">
                        {{ n.label }}
                    </el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>

<script setup>
const options = [
    {
        label: '选项一',
        value: 1
    },
    {
        label: '选项二',
        value: 2,
        disabled: true
    },
    {
        label: '选项三',
        value: 3
    },
    {
        label: '选项四',
        value: 4
    }
]
</script>
