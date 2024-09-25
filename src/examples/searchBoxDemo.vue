<template>
    <div class="zrx-page-container">
        <zrx-search-box>
            <zrx-search-item label="姓名">
                <el-input v-model="searcher.name" placeholder="请输入"></el-input>
            </zrx-search-item>
            <zrx-search-item label="时间">
                <el-date-picker v-model="searcher.time" type="date" placeholder="请选择"></el-date-picker>
            </zrx-search-item>
            <zrx-search-item label="姓名">
                <el-input v-model="searcher.name" placeholder="请输入"></el-input>
            </zrx-search-item>
            <zrx-search-item label="时间">
                <el-date-picker v-model="searcher.time" type="date" placeholder="请选择"></el-date-picker>
            </zrx-search-item>
        </zrx-search-box>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const searcher = ref({
    name: '',
    time: ''
})
</script>
