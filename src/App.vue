<template>
    <el-config-provider :locale="zhCn">
        <layoutDemo>
            <!-- <tabsDemo></tabsDemo> -->
        </layoutDemo>
    </el-config-provider>
</template>

<script setup>
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import layoutDemo from './examples/layoutDemo.vue'
</script>

<style scoped lang="scss">
.g-root {
    width: 100vw;
    height: 100vh;
}
</style>
