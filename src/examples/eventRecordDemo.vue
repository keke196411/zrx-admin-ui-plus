<template>
    <div class="m-t-20">
        <zrx-event-record :value="record" :prop="prop" :collapse-height="1" accordian :default-expanded-keys="['1']" row-key="id">
            <template #icon="{ row, index }">
                <i :class="row.icon" v-if="index < 2"></i>
            </template>
            <template #default="{ row }">
                <p class="f-c lh-24 m-t-4">
                    <span class="c-opacity-90 c-#394156">{{ row.createBy }}</span>
                    <span class="c-opacity-70 c-#394156">（{{ row.orgName }}）</span>
                    <i class="svg-icon zrx-icon-telephone m-l-2"></i>
                </p>
                <p class="f-c lh-24 m-t-4 m-b-8">
                    <span :class="row.status">【{{ row.result }}】</span>
                    <span class="color-opacity-70 c-#394156">{{ row.approveTime }}</span>
                </p>
            </template>
            <template #attachment="{ row }">
                <div class="br-2 bg-#F4F5F8 p-y-12 p-x-16">
                    <p class="f-c-b lh-24">
                        <span class="color-opacity-70 c-#394156">开始处理</span>
                        <span class="c-#394156">{{ row.startTime }}</span>
                    </p>
                    <p class="f-c-b lh-24 m-t-8">
                        <span class="color-opacity-70 c-#394156">处理耗时</span>
                        <span class="c-#394156">{{ row.duration }}</span>
                    </p>
                    <p class="f-c-b lh-24 m-t-8">
                        <span class="color-opacity-70 c-#394156">审批意见</span>
                        <span class="c-#394156">{{ row.comment }}</span>
                    </p>
                    <p class="f-c-b lh-24 m-t-8">
                        <span class="color-opacity-70 c-#394156">附件</span>
                        <i class="svg-icon zrx-icon-folder important:bg-#405FFE m-l-auto"></i>
                        <a class="c-#405FFE m-l-4">{{ row.file }}</a>
                    </p>
                </div>
            </template>
        </zrx-event-record>
    </div>
    <div class="m-t-20">
        <zrx-event-record :value="record" :prop="prop" current="3" row-key="id"></zrx-event-record>
    </div>
    <div class="m-t-20">
        <zrx-event-record :value="record" :prop="prop" clickable></zrx-event-record>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const prop = {
    date: 'date'
}
const record = ref([
    {
        id: '1',
        label: '登记',
        date: '2020-11-04 17:10:45',
        icon: 'zrx-icon zrx-icon-success',
        createBy: '王务琦',
        orgName: '市大数据局',
        status: 'primary',
        result: '提交',
        approveTime: '2020-11-04 17:10:45',
        startTime: '2020-11-04 16:00:40',
        duration: '1小时',
        comment: '报送下一节点',
        file: '附件.pdf'
    },
    {
        id: '2',
        label: '区县一级审批',
        date: '2020-11-04 17:10:45',
        icon: 'zrx-icon zrx-icon-error',
        createBy: '王务琦',
        orgName: '市大数据局',
        status: 'success',
        result: '同意',
        approveTime: '2020-11-04 17:10:45',
        startTime: '2020-11-04 16:00:40',
        duration: '12小时18分24秒',
        comment: '报送下一节点',
        file: '附件.pdf'
    },
    {
        id: '3',
        label: '区县一级审批',
        date: '2020-11-04 17:10:45',
        createBy: '王务琦',
        orgName: '市大数据局',
        status: 'success',
        result: '同意',
        approveTime: '2020-11-04 17:10:45',
        startTime: '2020-11-04 16:00:40',
        duration: '2.5小时',
        comment: '报送下一节点',
        file: '附件.pdf'
    },
    {
        id: '4',
        label: '主办部门',
        date: '2020-11-04 17:10:45',
        createBy: '王务琦',
        orgName: '市大数据局',
        status: 'error',
        result: '驳回',
        approveTime: '2020-11-04 17:10:45',
        startTime: '2020-11-04 16:00:40',
        duration: '11.2小时',
        comment: '报送下一节点',
        file: '附件.pdf',
        disabled: true
    }
])
</script>
