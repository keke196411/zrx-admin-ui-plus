<template>
    <div>
        <div class="m-y-20">基础用法</div>
        <div class="f-c gap-col-8px">
            <el-tag class="zrx-tag zrx-tag-white">white</el-tag>
            <el-tag class="zrx-tag" type="info">grey</el-tag>
            <el-tag class="zrx-tag" type="primary">blue</el-tag>
            <el-tag class="zrx-tag" type="success">green</el-tag>
            <el-tag class="zrx-tag" type="warning">orange</el-tag>
            <el-tag class="zrx-tag" type="danger">red</el-tag>
        </div>

        <div class="m-y-20">可移除</div>
        <div class="f-c gap-col-8px">
            <el-tag class="zrx-tag zrx-tag-white" closable>white</el-tag>
            <el-tag class="zrx-tag" closable type="info">grey</el-tag>
            <el-tag class="zrx-tag" closable type="primary">blue</el-tag>
            <el-tag class="zrx-tag" closable type="success">green</el-tag>
            <el-tag class="zrx-tag" closable type="warning">orange</el-tag>
            <el-tag class="zrx-tag" closable type="danger">red</el-tag>
        </div>

        <div class="m-y-20">不同尺寸</div>
        <div class="f-c gap-col-8px">
            <el-tag class="zrx-tag zrx-tag-white">default tag</el-tag>
            <el-tag class="zrx-tag zrx-tag-white zrx-tag-middle">Middle tag</el-tag>
            <el-tag class="zrx-tag zrx-tag-white" size="large">large tag</el-tag>
        </div>
    </div>
</template>

<script setup></script>

<style scoped lang="scss"></style>
