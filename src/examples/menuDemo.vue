<template>
    <div class="w-240 h-full p-x-12 p-y-16">
        <div class="m-y-20 font-bold f-16">左侧菜单</div>
        <el-radio-group v-model="isCollapse">
            <el-radio-button :value="false">展开</el-radio-button>
            <el-radio-button :value="true">收缩</el-radio-button>
        </el-radio-group>
        <el-menu popper-effect="light" default-active="4" :collapse="isCollapse" @open="handleOpen" @close="handleClose">
            <el-sub-menu index="1">
                <template #title>
                    <i class="svg-icon" :style="`mask-image:url(${comUser})`"></i>
                    <span>一级标题</span>
                </template>
                <el-sub-menu index="1-4">
                    <template #title><span>二级标题1</span></template>
                    <el-menu-item index="1-4-1">三级标题</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="1-5">
                    <template #title><span>二级标题2</span></template>
                    <el-menu-item index="1-5-1">三级标题</el-menu-item>
                </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="2">
                <i class="svg-icon" :style="`mask-image:url(${comUser})`"></i>
                <template #title>一级标题2</template>
            </el-menu-item>
            <el-menu-item index="3" disabled>
                <i class="svg-icon" :style="`mask-image:url(${comUser})`"></i>
                <template #title>一级标题3(禁用)</template>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="svg-icon" :style="`mask-image:url(${comUser})`"></i>
                <template #title>一级标题4</template>
            </el-menu-item>
            <el-sub-menu index="5">
                <template #title>
                    <i class="svg-icon" :style="`mask-image:url(${comUser})`"></i>
                    <span>一级标题5</span>
                </template>
                <el-sub-menu index="5-4">
                    <template #title><span>二级标题</span></template>
                    <el-menu-item index="5-4-1">三级标题</el-menu-item>
                </el-sub-menu>
            </el-sub-menu>
        </el-menu>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import comUser from '../../src/assets/svg-icon/auto-import/user.svg'
const isCollapse = ref(false)
const handleOpen = (key, keyPath) => {
    console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
    console.log(key, keyPath)
}
const menuList = [
    {
        id: '1',
        iconType: 'svg',
        icon: 'http://10.10.120.211:30007/ca5b71e2-df12-4d88-a155-1fb3a904706a.svg?name=nav_priority_object.svg&type=svg',
        label: '人工考核',
        path: '',
        children: []
    }
]
</script>

<style scoped lang="scss"></style>