<template>
    <div class="w-220 flex-col gap-row-12px">
        <el-time-picker v-model="value1" placeholder="请选择" clearable></el-time-picker>

        <el-time-picker v-model="value2" placeholder="请选择" clearable :disabled-hours="() => [1, 2, 3]"></el-time-picker>

        <el-time-picker
            is-range
            v-model="value3"
            placeholder="请选择"
            clearable
            :disabled-hours="() => [1, 2, 3]"
            class="zrx-default-separator"
        ></el-time-picker>
    </div>
</template>

<script setup>
const value1 = ref('')
const value2 = ref('')
const value3 = ref([])
</script>
