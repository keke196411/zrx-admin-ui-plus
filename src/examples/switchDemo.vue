<template>
    <div class="m-y-20 font-bold f-16">基础用法</div>
    <div class="m-y-20">
        <el-switch v-model="value1"></el-switch>
        <el-switch v-model="value2"></el-switch>
    </div>
    <div class="m-y-20 font-bold f-16">尺寸</div>
    <div class="flex-col">
        <div><el-switch v-model="value3" size="large" active-text="开启" inactive-text="关闭"></el-switch></div>
        <div><el-switch v-model="value4" active-text="Open" inactive-text="Close"></el-switch></div>
        <div><el-switch v-model="value5" size="small" active-text="Open" inactive-text="Close"></el-switch></div>
    </div>
    <div class="m-y-20 font-bold f-16">禁用状态</div>
    <div class="m-y-20">
        <el-switch v-model="value6" disabled></el-switch>
        <el-switch v-model="value7" disabled></el-switch>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const value1 = ref(true)
const value2 = ref(false)

const value3 = ref(true)
const value4 = ref(true)
const value5 = ref(true)

const value6 = ref(true)
const value7 = ref(false)
</script>