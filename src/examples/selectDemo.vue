<template>
    <div>
        <div class="m-y-20 font-bold f-16">基础用法</div>
        <div class="grid grid-cols-4 gap-col-24px gap-row-16px">
            <el-select v-model="value">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" :disabled="item.disabled"></el-option>
            </el-select>

            <el-select v-model="value" clearable>
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>

            <el-select v-model="value" disabled>
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>

            <el-select v-model="value" filterable>
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>

            <el-select v-model="slectVal2" clearable>
                <el-option-group label="类别1">
                    <el-option label="搜索建议1" value="1"></el-option>
                    <el-option label="搜索建议2" value="2"></el-option>
                    <el-option label="搜索建议3" value="3" disabled></el-option>
                </el-option-group>
                <el-option-group label="类别2">
                    <el-option label="搜索建议4" value="4"></el-option>
                    <el-option label="搜索建议5" value="5"></el-option>
                    <el-option label="搜索建议6" value="6"></el-option>
                </el-option-group>
            </el-select>
        </div>

        <div class="m-y-20 font-bold f-16">多选</div>

        <div class="grid grid-cols-4 gap-col-24px gap-row-16px">
            <el-select v-model="slectVal3" multiple>
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" :disabled="item.disabled"></el-option>
            </el-select>

            <el-select v-model="slectVal3" clearable multiple collapse-tags>
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>

            <el-select v-model="slectVal3" disabled multiple collapse-tags>
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>

            <el-select v-model="slectVal3" filterable multiple collapse-tags>
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
const slectVal2 = ref('')
const slectVal3 = ref([])
const options = [
    { label: '选项一', value: '1' },
    { label: '选项二', value: '2' },
    { label: '选项三', value: '3', disabled: true }
]
</script>
