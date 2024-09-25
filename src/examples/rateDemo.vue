<template>
    <div class="flex-col">
        <div class="m-y-20 font-bold f-16">单个全选</div>
        <div class="m-y-20">
            <el-rate v-model="value1"></el-rate>
        </div>
        <div class="m-y-20 font-bold f-16">单个半选</div>
        <div class="m-y-20">
            <el-rate v-model="value4" allow-half></el-rate>
        </div>
        <div class="m-y-20 font-bold f-16">未选禁用</div>
        <div class="m-y-20">
            <el-rate v-model="value2" disabled></el-rate>
        </div>
        <div class="m-y-20 font-bold f-16">已选禁用</div>
        <div class="m-y-20">
            <el-rate v-model="value3" disabled></el-rate>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const value1 = ref(null)
const value2 = ref(2)
const value3 = ref(null)
const value4 = ref(2.5)
</script>

<style scoped lang="scss"></style>
