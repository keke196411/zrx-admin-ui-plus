<template>
    <div class="flex-col">
        <el-radio-group v-model="value">
            <el-radio value="1">选项一</el-radio>
            <el-radio value="2">选项二</el-radio>
            <el-radio value="3" disabled>选项三</el-radio>
        </el-radio-group>

        <el-radio-group v-model="value1" class="m-y-20">
            <el-radio value="1">选项一</el-radio>
            <el-radio value="2">选项二</el-radio>
            <el-radio value="3" disabled>选项三</el-radio>
        </el-radio-group>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('2')
const value1 = ref('3')
</script>

<style scoped lang="scss"></style>
