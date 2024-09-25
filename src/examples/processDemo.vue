<template>
    <div class="flex-col">
        <p class="m-row"><el-button type="primary" @click="process1 = true">加载</el-button></p>
        <el-table header-row-class-name="header-row-class" :data="table1" row-key="id" v-process="process1">
            <el-table-column prop="id" label="序号" show-overflow-tooltip></el-table-column>
            <el-table-column prop="date" label="日期" show-overflow-tooltip></el-table-column>
            <el-table-column prop="name" label="姓名" show-overflow-tooltip></el-table-column>
            <el-table-column prop="address" label="住址" show-overflow-tooltip></el-table-column>
        </el-table>
    </div>
    <div class="flex-col">
        <p class="m-row"><el-button type="primary" @click="process2 = true">加载</el-button></p>
        <el-table header-row-class-name="header-row-class" :data="table1" row-key="id" v-process.body="process2">
            <el-table-column prop="id" label="序号" show-overflow-tooltip></el-table-column>
            <el-table-column prop="date" label="日期" show-overflow-tooltip></el-table-column>
            <el-table-column prop="name" label="姓名" show-overflow-tooltip></el-table-column>
            <el-table-column prop="address" label="住址" show-overflow-tooltip></el-table-column>
        </el-table>
    </div>
    <div class="flex-col">
        <div class="process-bar" v-process="process3" ref="processRef"></div>
        <div class="flex-bar">
            <el-button type="primary" @click="onStart">启动/继续</el-button>
            <el-button @click="onPause">暂停</el-button>
            <el-button @click="onFinish">结束</el-button>
            <el-button type="danger" @click="onFail">失败</el-button>
        </div>
    </div>
    <div class="flex-col">
        <div class="gallery" v-process.bottom="process4" style="padding-bottom: 16px; position: relative">
            <p>15s</p>
        </div>
        <div class="gallery" v-process:[30].bottom="process4" style="padding-bottom: 16px; position: relative">
            <p>30s</p>
        </div>
        <div class="m-row" style="width: 600px; margin-top: 16px"><el-button type="primary" @click="process4 = true">加载</el-button></div>
    </div>
    <div class="flex-col">
        <div class="m-row"><el-button type="primary" @click="process5 = true">加载</el-button></div>
        <el-table header-row-class-name="header-row-class" :data="table1" row-key="id" v-process="process5" zrx-process-background="rgba(0,0,0,0.5)">
            <el-table-column prop="id" label="序号" show-overflow-tooltip></el-table-column>
            <el-table-column prop="date" label="日期" show-overflow-tooltip></el-table-column>
            <el-table-column prop="name" label="姓名" show-overflow-tooltip></el-table-column>
            <el-table-column prop="address" label="住址" show-overflow-tooltip></el-table-column>
        </el-table>
    </div>
    <div class="flex-col">
        <div class="gallery">
            <div class="process-box" v-process:[8].right="process6" zrx-process-background="rgba(0,0,0,0.1)">出现在右侧</div>
            <el-button type="primary" @click="process6 = true">加载</el-button>
        </div>
        <div class="gallery">
            <div class="process-box" v-process:[8].bottom="process7" zrx-process-background="rgba(0,0,0,0.1)">出现在下侧</div>
            <el-button type="primary" @click="process7 = true">加载</el-button>
        </div>
        <div class="gallery">
            <div class="process-box" v-process:[8].left="process8" zrx-process-background="rgba(0,0,0,0.1)">出现在左侧</div>
            <el-button type="primary" @click="process8 = true">加载</el-button>
        </div>
    </div>
    <div class="flex-col">
        <el-button type="primary" @click="process9 = true">加载</el-button>
        <zrx-process :show="process9 != 0"></zrx-process>
    </div>
    <div class="flex-col">
        <div class="process-bar" v-process="process10" ref="processRef1"></div>
        <el-button type="primary" @click="setExample1">加载</el-button>
    </div>
    <div class="flex-col">
        <div class="process-bar" style="height: 6px"><zrx-process :show="process11" :option="option1"></zrx-process></div>
        <el-button type="primary" @click="process11 = true">加载</el-button>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
const process1 = ref(false)
const process2 = ref(false)
const process3 = ref(false)
const process4 = ref(false)
const process5 = ref(false)
const process6 = ref(false)
const process7 = ref(false)
const process8 = ref(false)
const process9 = ref(0)
const process10 = ref(false)
const process11 = ref(false)
const option1 = reactive({
    thickness: '6px',
    background: '#F4F5F8'
})
const processRef = ref()
const processRef1 = ref()
const table1 = reactive([
    {
        id: '1',
        date: '2022-9-22 14:27:22',
        name: '王腾飞',
        address: '上海市静安区南京路1258号'
    },
    {
        id: '2',
        date: '2022-9-22 14:27:22',
        name: '王腾飞',
        address: '上海市静安区南京路1258号'
    },
    {
        id: '3',
        date: '2022-9-22 14:27:22',
        name: '王腾飞',
        address: '上海市静安区南京路1258号'
    },
    {
        id: '4',
        date: '2022-9-22 14:27:22',
        name: '王腾飞',
        address: '上海市静安区南京路1258号'
    }
])
const onStart = () => {
    if (!process3.value) {
        process3.value = true
    } else {
        processRef.value.zrxProcess.start()
    }
}
const onPause = () => {
    processRef.value.zrxProcess.pause()
}
const onFinish = () => {
    process3.value = false
}
const onFail = () => {
    processRef.value.zrxProcess.fail().then(() => {
        process3.value = false
    })
}
const setExample1 = () => {
    processRef1.value.zrxProcess.setOption({
        color: '#1BBE8C',
        marginEdage: '5px'
    })
    process10.value = true
}
</script>
