<template>
    <div>
        <div class="m-y-20">基础用法</div>
        <div class="f-c gap-col-24px">
            <zrx-empty-state v-for="n in states" :key="n.type" :type="n.type" :text="n.text"></zrx-empty-state>
        </div>
        <div class="m-t-20 m-b-8">缺省图标</div>
        <div class="m-b-20">用作缺省图标时，设置no-margin取消上下边距，并设置图标宽高</div>

        <div>
            <div class="w-160 h-56 f-c" border="1 solid border">
                <zrx-empty-state type="imageFailure" no-margin></zrx-empty-state>
                <div class="w-10 m-l-8 flex-auto">汽车消费贷</div>
            </div>
        </div>
    </div>
</template>

<script setup>
const states = [
    {
        type: 'data',
        text: '无数据缺省状态'
    },
    {
        type: 'personal',
        text: '未添加人员缺省状态'
    },
    {
        type: 'image',
        text: '图片空状态'
    },
    {
        type: 'imageFailure',
        text: '图片加载失败'
    },
    {
        type: 'file',
        text: '未添加文件缺省状态'
    },
    {
        type: 'search',
        text: '搜索结果为空'
    },
    {
        type: 'info',
        text: '用于出错相关空白页'
    },
    {
        type: 'warning',
        text: '用于警示相关空白页'
    },
    {
        type: 'map',
        text: '地图缺省状态'
    },
    {
        type: 'mapOffline',
        text: '地图离线状态'
    },
    {
        type: 'mapEmpty',
        text: '未添加地图缺省状态'
    },
    {
        type: 'video',
        text: '视频播放错误'
    },
    {
        type: 'videoOffline',
        text: '视频离线状态'
    }
]
</script>

<style scoped lang="scss"></style>
