<!-- 穿梭框测试页面 -->
<template>
    <div>
        <div class="flex flex-wrap overflow-y-auto">
            <div class="w-750 h-546">
                基础模式(默认表格项穿梭)
                <zrx-transfer :data="data" @change="onChange" v-model="value1"></zrx-transfer>
            </div>
            <div class="w-750 h-546">
                基础模式(默认表格项穿梭)-props
                <zrx-transfer :data="data1" :props="props" showGroup @change="onChange" v-model="value2"></zrx-transfer>
            </div>
            <div class="w-750 h-546">
                基础模式(列表项穿梭)
                <zrx-transfer :data="data" type="list" @change="onChange" v-model="value3"></zrx-transfer>
            </div>
            <div class="w-750 h-546">
                基础模式-多个目标池
                <zrx-transfer :data="data" :targetConfig="targetConfig" @change="onChange" v-model="value4"></zrx-transfer>
            </div>

            <div class="w-750 h-546">
                分组模式
                <zrx-transfer :data="data" showGroup v-model="value1"></zrx-transfer>
            </div>
            <div class="w-750 h-546">
                分组模式-多个目标池
                <zrx-transfer :data="data" showGroup @change="onChange" v-model="value5" :targetConfig="targetConfig"></zrx-transfer>
            </div>
            <div class="w-750 h-546">
                表头多数据显示
                <zrx-transfer :data="data" :tableColumns="tableColumns" @change="onChange" v-model="value6"></zrx-transfer>
            </div>
            <div class="w-750 h-546">
                表头多数据显示-多个目标池
                <zrx-transfer
                    :data="data"
                    :targetConfig="targetConfig"
                    :tableColumns="tableColumns"
                    v-model="value7"
                    @change="onChange"
                ></zrx-transfer>
            </div>
            <div class="w-750 h-546">
                分组模式-表头多数据显示
                <zrx-transfer :data="data" showGroup :tableColumns="tableColumns" @change="onChange" v-model="value8"></zrx-transfer>
            </div>
            <div class="w-750 h-546">
                分组模式-表头多数据显示-多个目标池
                <zrx-transfer
                    :data="data"
                    showGroup
                    v-model="value9"
                    :targetConfig="targetConfig"
                    :tableColumns="tableColumns"
                    @change="onChange"
                ></zrx-transfer>
            </div>
        </div>
    </div>
</template>

<script setup>
const data = [
    {
        key: 0,
        label: '选项一2选项一2选项一2选项一2',
        group: '分组一1'
    },
    {
        key: 1,
        label: '选项一a',
        group: '分组一',
        disabled: true
    },
    {
        key: 2,
        label: '选项二',
        group: '分组一'
    },
    {
        key: 3,
        label: '选项三',
        group: '分组一'
    },
    {
        key: 4,
        label: '选项四',
        group: '分组一'
    },
    {
        key: 21,
        label: '选项一',
        group: '分组二'
    },
    {
        key: 22,
        label: '选项二a',
        group: '分组二',
        disabled: true
    },
    {
        key: 23,
        label: '选项三',
        group: '分组二'
    },
    {
        key: 24,
        label: '选项四',
        group: '分组二'
    },
    {
        key: 31,
        label: '选项一',
        group: '分组三'
    },
    {
        key: 32,
        label: '选项二a',
        group: '分组三',
        disabled: true
    },
    {
        key: 33,
        label: '选项三',
        group: '分组三'
    },
    {
        key: 34,
        label: '选项四',
        group: '分组三'
    }
]
const props = {
    key: 'id',
    label: 'name',
    group: 'type',
    groupLabel: 'typeName'
}
const data1 = [
    {
        id: 0,
        name: '选项0',
        type: 'a',
        typeName: '分组a'
    },
    {
        id: 1,
        name: '选项1',
        type: 'a',
        typeName: '分组a'
    },
    {
        id: 2,
        name: '选项2',
        type: 'a',
        typeName: '分组a'
    },
    {
        id: 3,
        name: '选项3',
        type: 'b',
        typeName: '分组b'
    },
    {
        id: 4,
        name: '选项4',
        type: 'b',
        typeName: '分组b'
    },
    {
        id: 5,
        name: '选项5',
        type: 'b',
        typeName: '分组b'
    }
]
const targetConfig = [
    {
        key: 1,
        title: '已选择',
        label: '负责人',
        placeholder: '请输入'
    },
    {
        key: 2,
        title: '已选择',
        label: '成员',
        placeholder: '请输入'
    }
]

const tableColumns = [
    {
        title: '选项',
        key: 'label',
        isShowTitle: true
    },
    {
        title: 'key',
        key: 'key'
    },
    {
        title: '是否选择',
        key: 'disabled'
    }
]

const onChange = (value) => {
    console.log('🚀 ~ onChange ~ onChange:', value)
}

const value1 = ref([21, 33])
const value2 = ref([21, 33])
const value3 = ref([21, 33])
const value4 = ref([[21, 33], [3]])
const value5 = ref([[21, 33], []])
const value6 = ref([21, 33])
const value7 = ref([])
const value8 = ref([21, 33])
const value9 = ref([[21, 33], [4]])
</script>
