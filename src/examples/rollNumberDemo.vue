<template>
    <div>
        <div class="m-y-20 font-bold f-16">基础用法</div>
        <p class="m-b-12">基础的滚动数字</p>
        <div class="m-b-8">
            <el-button type="primary" @click="value1 = 1698">开始</el-button>
        </div>
        <div class="m-b-20">
            <zrx-roll-number :value="value1"></zrx-roll-number>
        </div>
        <div class="m-y-20 font-bold f-16">值为负数</div>
        <p class="m-b-12">传入负值，往负值递减</p>
        <div class="m-b-8">
            <el-button type="primary" @click="value2 = -22350">开始</el-button>
        </div>
        <div class="m-b-20">
            <zrx-roll-number :value="value2"></zrx-roll-number>
        </div>
        <div class="m-y-20 font-bold f-16">保留小数</div>
        <p class="m-b-12">保留2位小数</p>
        <div class="m-b-20">
            <zrx-roll-number tag="span" :value="value3" :retain-decimals="2"></zrx-roll-number>
        </div>
        <div class="m-y-20 font-bold f-16">设置初始值</div>
        <p class="m-b-12">默认数字从0开始过渡。设置inited-value为true，数字从一开始的value值开始过渡。</p>
        <div class="m-b-8">
            <el-button type="primary" @click="value4 = -5.55">开始</el-button>
        </div>
        <div class="m-b-20">
            <zrx-roll-number :value="value4" inited-value retain-decimals="2"></zrx-roll-number>
        </div>
        <div class="m-y-20 font-bold f-16">过渡时间</div>
        <div class="m-b-8">
            <el-button type="primary" @click="value5 += 3000">开始</el-button>
        </div>
        <div class="m-b-20 flex items-center">
            <div class="w-300">
                <p class="m-b-8">默认过渡时间500ms</p>
                <zrx-roll-number :value="value5"></zrx-roll-number>
            </div>
            <div class="w-300">
                <p class="m-b-8">过渡时间1500ms</p>
                <zrx-roll-number :value="value5" :duration="1500"></zrx-roll-number>
            </div>
        </div>
        <div class="m-y-20 font-bold f-16">分隔符</div>
        <p class="m-b-12">每隔三位加","分隔符</p>
        <div class="m-b-20">
            调用总数：<zrx-roll-number :value="value6" break-sign retain-decimals="2"><template #default>次</template></zrx-roll-number>
        </div>
        <div class="m-y-20 font-bold f-16">自动添加单位（万、亿）</div>
        <div class="m-b-20">
            调用总数：<zrx-roll-number :value="value6" add-unit retain-decimals="2">次</zrx-roll-number>
        </div>
        <div class="m-y-20 font-bold f-16">单位插槽</div>
        <div class="m-b-8">
            <el-button type="primary" @click="value7 = 1208806569821">开始</el-button>
        </div>
        <div class="m-b-20">
            地区生产总值：<zrx-roll-number :value="value7" add-unit retain-decimals="2" style="font-size: 24px" :duration="2000">
                <template #unit="{ unit }">
                    <span style="font-size: 14px; opacity: 0.7">{{ unit + '元' }}</span>
                </template>
            </zrx-roll-number>
        </div>
        <div class="m-y-20 font-bold f-16">有选择地保留小数</div>
        <p class="m-b-12">在某些语境下（只能是整数）、值较小且保留小数时，带小数的数值变化可能不是想要的结果。设置always-decimal: false，当值不出现单位时，将不会出现小数。</p>
        <div class="m-b-8">
            <el-button type="primary" @click="value8 = 12380">开始</el-button>
        </div>
        <div class="m-b-8">
            今日访问次数：<zrx-roll-number :value="value8" add-unit :retain-decimals="2" :always-decimal="false"></zrx-roll-number>
        </div>
        <p class="m-b-20">注意前提是设置了add-unit和retain-decimals。只有这种条件下，值大时保留小数，值小时取整才是有意义的。</p>
        <div class="m-y-20 font-bold f-16">缺省值</div>
        <p class="m-b-12">当值不是数字或字符串的数字时，显示缺省值</p>
        <div class="m-b-20">
            <zrx-roll-number :value="value9"></zrx-roll-number>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const value1 = ref(0)
const value2 = ref(0)
const value3 = ref(58693.1266)
const value4 = ref(4.55)
const value5 = ref(0)
const value6 = ref(2968525450)
const value7 = ref(0)
const value8 = ref(6000)
const value9 = ref(undefined)
</script>
