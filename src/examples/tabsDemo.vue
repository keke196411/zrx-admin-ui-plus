<template>
    <div class="zrx-page-container">
        <el-tabs v-model="activeName">
            <el-tab-pane label="User" name="first">User</el-tab-pane>
            <el-tab-pane label="Config" name="second">Config</el-tab-pane>
            <el-tab-pane label="Role" name="third">Role</el-tab-pane>
            <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
        </el-tabs>

        <div class="w-366">
            <el-tabs v-model="activeName">
                <el-tab-pane label="User" name="first">User</el-tab-pane>
                <el-tab-pane label="Config" name="second">Config</el-tab-pane>
                <el-tab-pane label="Role" name="third">Role</el-tab-pane>
                <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
            </el-tabs>
        </div>

        <el-tabs v-model="activeName" type="border-card">
            <el-tab-pane label="User" name="first">User</el-tab-pane>
            <el-tab-pane label="Config" name="second">Config</el-tab-pane>
            <el-tab-pane label="Role" name="third">Role</el-tab-pane>
            <el-tab-pane label="Task" name="fourth" disabled>Task</el-tab-pane>
        </el-tabs>

        <el-tabs v-model="activeName" type="border-card" closable class="m-t-20">
            <el-tab-pane label="User" name="first">User</el-tab-pane>
            <el-tab-pane label="Config" name="second">Config</el-tab-pane>
            <el-tab-pane label="Role" name="third">Role</el-tab-pane>
            <el-tab-pane label="Task" name="fourth" disabled>Task</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const activeName = ref('first')
</script>
