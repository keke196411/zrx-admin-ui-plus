<template>
    <div>
        <div class="m-y-20 font-bold f-16">日期时间选择</div>
        <zrx-date-time-picker v-model="value1" type="datetime" class="w-240"></zrx-date-time-picker>

        <div class="m-y-20 font-bold f-16">日期时间范围选择</div>
        <zrx-date-time-picker v-model="value2" type="datetimerange" class="w-420"></zrx-date-time-picker>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const value1 = ref(new Date())
const value2 = ref([])
</script>
