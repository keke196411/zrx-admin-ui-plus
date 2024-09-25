<template>
    <div>
        <div class="m-y-20 font-bold f-16">基础用法</div>
        <div class="grid grid-cols-4 gap-col-24px gap-row-16px">
            <el-input v-model="value" placeholder="请输入" :maxlength="16" show-word-limit></el-input>
            <el-input v-model="value" placeholder="请输入" disabled></el-input>
            <el-input v-model="value" placeholder="请输入" clearable></el-input>
            <el-input v-model="value" placeholder="请输入" show-password></el-input>
        </div>
        <div class="m-y-20 font-bold f-16">带图标的输入框 Icon Input</div>
        <div class="grid grid-cols-4 gap-col-24px">
            <el-input v-model="value" placeholder="请输入">
                <template #prefix>
                    <i class="svg-icon zrx-icon-search"></i>
                </template>
            </el-input>
            <el-input v-model="value" placeholder="请输入" disabled>
                <template #suffix>
                    <i class="svg-icon zrx-icon-search"></i>
                </template>
            </el-input>
            <el-input v-model="value" placeholder="请输入" clearable>
                <template #suffix>
                    <i class="svg-icon zrx-icon-search"></i>
                </template>
            </el-input>
        </div>

        <div class="m-y-20 font-bold f-16">文本框</div>
        <div class="grid grid-cols-4 gap-col-24px gap-row-16px">
            <el-input v-model="value" placeholder="请输入" type="textarea" :rows="5" :maxlength="16" show-word-limit></el-input>
            <el-input v-model="value" placeholder="请输入" type="textarea" :rows="5" disabled></el-input>
        </div>

        <div class="m-y-20 font-bold f-16">数字输入框 Input Number</div>
        <div class="grid grid-cols-4 gap-col-24px gap-row-16px">
            <el-input-number v-model="num" :min="1" :max="99" controls-position="right" />
            <el-input-number v-model="num" :min="1" :max="99" controls-position="right" disabled />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
const num = ref(1)
</script>

<style scoped lang="scss"></style>
