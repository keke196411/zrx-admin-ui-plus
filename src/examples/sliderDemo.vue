<template>
    <div class="w-436 p-t-48 flex-col gap-row-20px">
        <el-slider v-model="value1" show-input></el-slider>

        <el-slider v-model="value1" show-input disabled></el-slider>

        <el-slider v-model="value2" range />
    </div>
</template>

<script setup>
import { ref } from 'vue'

const value1 = ref(20)
const value2 = ref([10, 20])
</script>
