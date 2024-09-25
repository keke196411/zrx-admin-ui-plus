<template>
    <div class="date-picker-box inline-flex items-start flex-wrap gap-col-24px">
        <div>
            <div class="m-y-20 font-bold f-16">年选择</div>
            <el-date-picker v-model="value1" type="year" placeholder="请选择"></el-date-picker>
        </div>

        <div>
            <div class="m-y-20 font-bold f-16">月选择</div>
            <el-date-picker v-model="value2" type="month" placeholder="请选择"></el-date-picker>
        </div>

        <div>
            <div class="m-y-20 font-bold f-16">周选择</div>
            <el-date-picker v-model="value3" type="week" placeholder="请选择"></el-date-picker>
        </div>

        <div>
            <div class="m-y-20 font-bold f-16">日期选择</div>
            <el-date-picker v-model="value4" type="date" placeholder="请选择" :disabled-date="disabledDate"></el-date-picker>
        </div>

        <div class="w-220">
            <div class="m-y-20 font-bold f-16">日期范围选择</div>
            <el-date-picker
                v-model="value5"
                type="daterange"
                class="zrx-default-separator"
                :disabled-date="disabledDate"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
            ></el-date-picker>
        </div>

        <div class="w-220">
            <div class="m-y-20 font-bold f-16">月份范围选择</div>
            <el-date-picker
                v-model="value6"
                class="zrx-default-separator"
                type="monthrange"
                start-placeholder="开始月份"
                end-placeholder="结束月份"
            ></el-date-picker>
        </div>

        <div class="w-220">
            <div class="m-y-20 font-bold f-16">日期时间选择</div>
            <el-date-picker v-model="value7" type="datetime" placeholder="请选择日期时间"></el-date-picker>
        </div>

        <div class="w-420">
            <div class="m-y-20 font-bold f-16">日期时间范围选择</div>
            <el-date-picker
                v-model="value8"
                class="zrx-default-separator"
                type="datetimerange"
                start-placeholder="开始时间"
                end-placeholder="结束时间"
            ></el-date-picker>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
const value5 = ref([])
const value6 = ref([])
const value7 = ref('')
const value8 = ref([])

const disabledDate = (date) => {
    return date.getTime() <= Date.now() - 24 * 60 * 60 * 1000
}
</script>
