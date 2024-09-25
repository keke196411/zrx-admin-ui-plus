<template>
    <div class="m-y-20 font-bold f-16">UI标准中的用法</div>
    <div class="m-y-20">
        <el-input-number v-model="value1" controls-position="right"></el-input-number>
    </div>
    <div class="m-y-20 font-bold f-16">禁用</div>
    <div class="m-y-20">
        <el-input-number v-model="value2" controls-position="right" disabled></el-input-number>
    </div>
    <div class="m-y-20 font-bold f-16">更广泛的用法</div>
    <div class="m-y-20">
        <el-input-number v-model="value3" :controls="false"></el-input-number>
    </div>
    <div class="m-y-20 font-bold f-16">禁用</div>
    <div class="m-y-20">
        <el-input-number v-model="value4" :controls="false" disabled></el-input-number>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const value1 = ref(0)
const value2 = ref(1)
const value3 = ref(2)
const value4 = ref(3)
</script>