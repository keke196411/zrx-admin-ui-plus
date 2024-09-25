<template>
    <div>
        <div class="m-y-20 font-bold f-16">默认用带页码的分页</div>
        <zrx-pagination :total="total" v-model:current-page="pageNum" v-model:page-size="pageSize"></zrx-pagination>
        <div class="m-y-20 font-bold f-16">无页码分页</div>
        <zrx-pagination
            :total="total"
            v-model:current-page="pageNum"
            v-model:page-size="pageSize"
            layout="total, sizes, ->, prev, next, slot"
        ></zrx-pagination>
        <div class="m-y-20 font-bold f-16">隐藏左侧总数量和条数的分页</div>
        <zrx-pagination :total="total" v-model:current-page="pageNum" v-model:page-size="pageSize" layout="->, prev, next, slot"></zrx-pagination>
        <div class="m-y-20 font-bold f-16">小型分页</div>
        <zrx-pagination :total="total" v-model:current-page="pageNum" v-model:page-size="pageSize" layout="->, prev, pager, next"></zrx-pagination>
        <zrx-pagination :total="total" v-model:current-page="pageNum" v-model:page-size="pageSize" layout="->, prev, next"></zrx-pagination>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const pageNum = ref(1)
const pageSize = ref(10)
const total = ref(95)

watch([pageNum, pageSize], (currentValues, oldValues) => {
    if (oldValues?.[1] != currentValues?.[1] && pageNum.value != 1) {
        pageNum.value = 1

        return
    }
    console.log('🚀 ~ watch ~ pageNum, pageSize:', pageNum.value, pageSize.value)
})
</script>
