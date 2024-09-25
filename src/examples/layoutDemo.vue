<template>
    <zrx-layout title="zrx-admin-plus" :menu="zrxComponents" @menu-item-click="onMenuItemClick">
        <template #icon>
            <i class="svg-icon zrx-project-icon m-r-0"></i>
        </template>
        <template #breadcrumb>
            <el-breadcrumb separator="＞">
                <el-breadcrumb-item>{{ breadcrumbName }}</el-breadcrumb-item>
            </el-breadcrumb>
        </template>

        <div class="zrx-common-container h-full p-y-24 p-x-16 overflow-y-auto">
            <component :is="componentName" v-if="componentName"></component>
        </div>
    </zrx-layout>
</template>

<script setup>
import logoPic from '../assets/images/logo.png'

const zrxComponents = []
const vmModules = import.meta.glob('./*.vue', { eager: true })

const breadcrumbName = ref('')
const componentName = shallowRef('')
for (const path in vmModules) {
    zrxComponents.push({
        key: path,
        path: path,
        component: vmModules[path].default,
        label: path?.split('/').at(-1).replace('Demo.vue', '')
    })
}

const onMenuItemClick = (item) => {
    breadcrumbName.value = item.label
    componentName.value = item.component
}

const menu = [
    {
        icon: 'http://10.10.120.211:32023/file//20230628/common_close_all_10263143487220023.svg',
        iconType: 'icon',
        label: '短信服务',
        path: '/msgOverView1',
        menuType: '2',
        key: '1122'
    },
    {
        icon: 'http://10.10.120.211:32023/file//20230628/common_close_all_10263143487220023.svg',
        iconType: 'icon',
        label: '短信服务',
        children: [
            { path: '/msgOverView', label: '概览', iconType: 'icon', menuType: '2', key: 'msgOverview1-1' },
            { path: '/signManage', label: '签名管理', iconType: 'icon', menuType: '2', key: 'signManage1-2' },
            { path: '/msgTemplateManage', label: '模板管理', iconType: 'icon', menuType: '2', key: 'msgTemplateManagementClient1-3' },
            { path: '/msgBusinessStatistics', label: '业务统计', iconType: 'icon', menuType: '2', key: 'msgBusinessStatisticsClient1-4' }
        ],
        key: '1',
        menuType: '1'
    },
    {
        icon: 'http://10.10.120.211:32023/file//20230703/common_close_all2_10716178161042900.svg',
        iconType: 'icon',
        label: '邮件服务',
        children: [
            { path: '/emailOverView', label: '概览', iconType: 'icon', menuType: '2', key: 'emailOverView2-1' },
            { path: '/address', label: '发信地址', iconType: 'icon', menuType: '2', key: 'address2-2' },
            { path: '/emailTemplateManage', label: '模板管理', iconType: 'icon', menuType: '2', key: 'templateManagementCilent2-3' },
            { path: '/emailBusinessStatistics', label: '业务统计', iconType: 'icon', menuType: '2', key: 'businessStatisticsClient2-4' }
        ],
        key: '2',
        menuType: '1'
    },
    {
        icon: 'http://10.10.120.211:30327/file//20231127/Common_nav_internal_mail_8485820901044336.svg',
        iconType: 'icon',
        label: '站内信服务',
        children: [
            { path: '/mailOverView', label: '概览', iconType: 'icon', menuType: '2', key: 'mailOverView3-1' },
            { path: '/mailOpenService', label: '开通应用', iconType: 'icon', menuType: '2', key: 'mailOpenService3-2' },
            { path: '/mailTemplateManage', label: '模板管理', iconType: 'icon', menuType: '2', key: 'mailTemplateManage3-3' },
            { path: '/mailBusinessStatistics', label: '业务统计', iconType: 'icon', menuType: '2', key: 'mailBusinessStatistics3-4' }
        ],
        key: '3',
        menuType: '1'
    }
]
</script>

<style scoped lang="scss">
.zrx-project-icon {
    background-image: url('../assets/images/logo.png');
}
</style>
