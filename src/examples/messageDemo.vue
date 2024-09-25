<template>
    <el-button :plain="true" @click="open1" showClose>info</el-button>
    <el-button :plain="true" @click="open2" showClose>Success</el-button>
    <el-button :plain="true" @click="open3" showClose>Warning</el-button>
    <el-button :plain="true" @click="open4" showClose>Error</el-button>
    <el-button :plain="true" @click="open5">详情</el-button>
    <el-button :plain="true" @click="openVn1">info</el-button>
    <el-button :plain="true" @click="openVn2">Success</el-button>
    <el-button :plain="true" @click="openVn3">question</el-button>
    <el-button :plain="true" @click="openVn4">error</el-button>
    <el-button :plain="true" @click="openVn5">info（有自定义按钮）</el-button>

    <el-button :plain="true" @click="openG1">全局信息</el-button>
    <el-button :plain="true" @click="openG2">全局失败</el-button>
    <el-button :plain="true" @click="openG3">全局成功</el-button>
    <el-button :plain="true" @click="openG4">全局警示</el-button>
</template>

<script lang="ts" setup>
import { h } from 'vue'
import { ElMessage } from '@/utils/message'

const open1 = () => {
    ElMessage({
        message: '这里是一段提示文字',
        duration: 0,
        showClose: true,
        customClass: 'zrx-com-message'
    })
}
const open2 = () => {
    ElMessage({
        message: 'Congrats, this is a success message.',
        type: 'success',
        duration: 3000,
        showClose: true,
        customClass: 'zrx-com-message'
    })
    ElMessage.success({ message: 'This is a message', duration: 3000, customClass: 'zrx-com-message' })
}
const open3 = () => {
    ElMessage({
        message: '这里是一段提示文字',
        type: 'warning',
        duration: 3000,
        showClose: true,
        customClass: 'zrx-com-message'
    })
}
const open4 = () => {
    ElMessage({
        message: 'error, this is a error message.',
        type: 'error',
        duration: 3000,
        showClose: true,
        customClass: 'zrx-com-message'
    })
    // ElMessage.error('Oops, this is a error message.')
}
const open5 = () => {
    // ElMessage({
    //     customClass: 'zrx-com-message',
    //     message: h('div', { className: 'message-content' }, [
    //         h('div', { className: 'message-header' }, [
    //             h('span', { className: 'message-info' }, '这里是一段提示文字'),
    //             h('a', { className: 'message-btn' }, '操作按钮')
    //         ])
    //     ]),
    //     icon: h('i', { className: 'zrx-icon zrx-icon-info' }),
    //     type: 'warning',
    //     showClose: false,
    //     duration: 3000
    // })
    ElMessage({
        customClass: 'zrx-com-message',
        message: h('div', { className: 'message-content' }, [
            h('div', { className: 'message-header' }, [
                h('span', { className: 'message-info' }, '这里是一段提示文字'),
                h('a', { className: 'message-btn' }, '详情')
            ])
        ]),
        icon: h('i', { className: 'zrx-icon zrx-icon-info' }),
        type: 'info',
        showClose: false,
        duration: 3000
    })
}
const openVn1 = () => {
    ElMessage({
        customClass: 'zrx-com-message has-title',
        message: h('div', { className: 'message-content' }, [
            h('span', { className: 'message-title' }, '提示信息'),
            h(
                'span',
                { className: 'message-info' },
                '这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。'
            )
        ]),
        icon: h('i', { className: 'zrx-icon zrx-icon-info' }),
        type: 'info',
        showClose: true,
        duration: 0
    })
}
const openVn2 = () => {
    ElMessage({
        customClass: 'zrx-com-message has-title',
        message: h('div', { className: 'message-content' }, [
            h('span', { className: 'message-title' }, '提示信息'),
            h(
                'span',
                { className: 'message-info' },
                '这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。'
            )
        ]),
        icon: h('i', { className: 'zrx-icon zrx-icon-success' }),
        type: 'success',
        showClose: true,
        duration: 3000
    })
}
const openVn3 = () => {
    ElMessage({
        customClass: 'zrx-com-message has-title',
        message: h('div', { className: 'message-content' }, [
            h('span', { className: 'message-title' }, '提示信息'),
            h(
                'span',
                { className: 'message-info' },
                '这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。'
            )
        ]),
        icon: h('i', { className: 'zrx-icon zrx-icon-question' }),
        type: 'warning',
        showClose: true,
        duration: 3000
    })
}
const openVn4 = () => {
    ElMessage({
        customClass: 'zrx-com-message has-title',
        message: h('div', { className: 'message-content' }, [
            h('span', { className: 'message-title' }, '提示信息'),
            h(
                'span',
                { className: 'message-info' },
                '这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。'
            )
        ]),
        icon: h('i', { className: 'zrx-icon zrx-icon-error' }),
        type: 'error',
        showClose: true,
        duration: 3000
    })
}
const openVn5 = () => {
    ElMessage({
        customClass: 'zrx-com-message has-title',
        message: h('div', { className: 'message-content' }, [
            h('div', { className: 'message-header' }, [
                h('span', { className: 'message-title' }, '提示信息'),
                h('a', { className: 'message-btn' }, '操作按钮')
            ]),
            h(
                'span',
                { className: 'message-info' },
                '这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。这里是一段提示文字，这里是一段提示文字这里是一段提示文字。'
            )
        ]),
        icon: h('i', { className: 'zrx-icon zrx-icon-info' }),
        type: 'info',
        showClose: false,
        duration: 3000
    })
}

const openG1 = () => {
    ElMessage({
        message: '这里是一段提示文字',
        duration: 0,
        showClose: true
    })
}
const openG2 = () => {
    ElMessage.error({
        message: '这里是一段提示文字',
        duration: 0,
        showClose: true
    })
}
const openG3 = () => {
    ElMessage.success({
        message: '这里是一段提示文字',
        duration: 0,
        showClose: true
    })
}
const openG4 = () => {
    ElMessage.warning({
        message: '这里是一段提示文字',
        duration: 0,
        showClose: true
    })
}
</script>

<style lang="scss" scoped></style>
