<template>
    <div class="w-600 p-x-12 p-y-16">
        <el-button plain @click="open">成功点击弹窗</el-button>
        <el-button plain @click="open1">成功点击弹窗alert</el-button>
        <el-button plain @click="open2">成功点击弹窗confirm</el-button>
        <el-button plain @click="open3">成功点击弹窗prompt</el-button>
    </div>

    <div class="w-600 p-x-12 p-y-16">
        <el-button plain @click="open5">点击弹窗success</el-button>
        <el-button plain @click="open6">点击弹窗error</el-button>
        <el-button plain @click="open7">点击弹窗warning</el-button>
        <el-button plain @click="open8">点击弹窗info</el-button>
    </div>
</template>

<script setup>
import { h } from 'vue'
import { ElMessage } from '@/utils/message'
import { ElMessageBox } from '@/utils/messageBox'
const open = () => {
    ElMessageBox({
        title: '成功',
        message: '成功信息辅助说明提示',
        type: 'success'
    })
        .then(() => {
            ElMessage({
                type: 'success',
                message: 'Delete completed'
            })
        })
        .catch(() => {
            ElMessage({
                type: 'info',
                message: 'Delete canceled'
            })
        })
}
const open1 = () => {
    ElMessageBox.alert('确认（动作）全部（操作对象类型）？', {
        title: '成功',
        message: '成功信息辅助说明提示',
        type: 'success'
    })
        .then(() => {
            ElMessage({
                type: 'success',
                message: 'Delete completed'
            })
        })
        .catch(() => {
            ElMessage({
                type: 'info',
                message: 'Delete canceled'
            })
        })
}
const open2 = () => {
    ElMessageBox.confirm('确认（动作）全部（操作对象类型）？')
}
const open3 = () => {
    ElMessageBox.prompt('确认（动作）全部（操作对象类型）？', {
        title: '成功'
    })
        .then(({ value }) => {
            ElMessage({
                type: 'success',
                message: `Your email is:${value}`
            })
        })
        .catch(() => {
            ElMessage({
                type: 'info',
                message: 'Input canceled'
            })
        })
}

const open5 = () => {
    ElMessageBox.alert('确认（动作）全部（操作对象类型）', {
        title: '成功',
        type: 'success'
    })
}
const open6 = () => {
    ElMessageBox.alert('错误信息辅助说明提示', {
        title: '错误',
        type: 'error'
    })
}
const open7 = () => {
    ElMessageBox.alert('提示信息辅助说明提示', {
        title: '信息',
        type: 'warning'
    })
}
const open8 = () => {
    ElMessageBox.alert('提示信息辅助说明提示', {
        title: '信息'
    })
}
</script>

<style lang="scss" scoped></style>
