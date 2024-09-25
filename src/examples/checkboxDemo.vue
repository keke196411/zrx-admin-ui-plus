<template>
    <div class="flex-col">
        <el-checkbox-group v-model="value">
            <el-checkbox value="1">选项一</el-checkbox>
            <el-checkbox value="2">选项二</el-checkbox>
            <el-checkbox value="3" disabled>选项三</el-checkbox>
        </el-checkbox-group>

        <el-checkbox v-model="checked" class="m-t-20" @change="changeAll" :indeterminate="isIndeterminate">Check all</el-checkbox>
        <el-checkbox-group v-model="value1" @change="onChange">
            <el-checkbox value="1">选项一</el-checkbox>
            <el-checkbox value="2">选项二</el-checkbox>
            <el-checkbox value="3" disabled>选项三</el-checkbox>
        </el-checkbox-group>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref(['1'])
const value1 = ref(['3'])

const checked = ref(false)
const isIndeterminate = ref(true)
const allCheck = ['1', '2', '3']
const changeAll = (val) => {
    if (val == true) {
        value1.value = allCheck
    } else if (val == false) {
        value1.value = []
    }
    isIndeterminate.value = false
}
const onChange = (val) => {
    isIndeterminate.value = val.length > 0 && val.length < allCheck.length
    if (val.length == allCheck.length) {
        checked.value = true
    } else {
        checked.value = false
    }
}
</script>
