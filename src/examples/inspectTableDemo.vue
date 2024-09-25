<template>
    <div>
        <zrx-inspect-table :data="data"></zrx-inspect-table>
    </div>
</template>

<script setup>
const data = [
    { label: '您的姓名', value: '罗小黑', required: true },
    { label: '您的份身份证号码', value: '410285199306124528' },
    { label: '您的手机号码', value: '15863245896' },
    { label: '人员类型', value: '其他' },
    { label: '是否居家隔离', value: '否' },
    { label: '住址', value: '翠香街道/紫荆社区居民委员会'.repeat(20), showTooltip: true },
    { label: '居家隔离所在街道', value: '翠香街道/紫荆社区居民委员会'.repeat(20), extraClass: 'grid-col-start-1 grid-col-end--1' }
]
</script>
