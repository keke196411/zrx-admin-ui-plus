import unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import vueJsx from '@vitejs/plugin-vue-jsx'

const path = require('path')
module.exports = {
    title: 'zrx-admin-plus',
    // @ts-ignore
    // base: import.meta.env.PROD == 'production' ? '/zrx-admin-plus/' : '/',
    base: '/',
    description: 'Vue3版本的基于element-plus的前端组件库',
    lastUpdated: true, // 是否展示更新时间
    cleanUrls: false, // URL 中删除尾随的 .html
    // plugins: ['@vuepress/back-to-top'],
    head: [['link', { rel: 'icon', href: '/logo.png' }]],
    themeConfig: {
        theme: 'light',
        aside: false,
        logo: { src: '/logo.png', width: 24, height: 24 },
        nav: [
            { text: '主页', link: '/' },
            { text: '文档', link: '/started' },
            // {
            //     text: 'v0.7.x',
            //     items: [
            //         { text: 'v0.5.x', link: 'http://10.10.120.148:12345/0.5.x/', target: '_blank' },
            //         { text: 'v0.4.x', link: 'http://10.10.120.148:12345/0.4.x/', target: '_blank' },
            //         { text: 'v0.3.x', link: 'http://10.10.120.148:12345/0.3.x/', target: '_blank' },
            //         { text: 'v0.2.x', link: 'http://10.10.120.148:12345/0.2.x/', target: '_blank' },
            //         { text: 'v0.1.x', link: 'http://10.10.120.148:12345/0.1.x/', target: '_blank' }
            //     ]
            // },
            { text: 'Github', link: 'http://10.10.120.20:9099/front-end/zrx-admin-plus' }
        ],
        // 开启本地搜索
        search: {
            provider: 'local'
        },
        sidebarDepth: 2,
        displayAllHeaders: true,
        lastUpdated: {
            text: '最近更新'
        },
        sidebar: [
            {
                text: '入门',
                items: [
                    { text: '简介', link: '/introduce' },
                    { text: '安装', link: '/install' },
                    { text: '快速上手', link: '/started' }
                ]
            },
            {
                text: 'Element 组件',
                items: [
                    { text: 'Button按钮', link: '/components/button.md' },
                    { text: 'Tag标签', link: '/components/tag.md' },
                    { text: 'Input 输入框', link: '/components/input.md' },
                    { text: 'Input Number 数字输入框', link: '/components/inputNumber.md' },
                    { text: 'Select 下拉框', link: '/components/select.md' },
                    { text: 'Cascader 级联选择器', link: '/components/cascader.md' },
                    { text: 'Radio 单选框', link: '/components/radio.md' },
                    { text: 'Checkbox 多选框', link: '/components/checkbox.md' },
                    { text: 'DatePicker 日期选择', link: '/components/datePicker.md' },
                    { text: 'TimePicker 时间选择', link: '/components/timePicker.md' },
                    { text: 'Rate 评分', link: '/components/rate.md' },
                    { text: 'Switch 开关', link: '/components/switch.md' },
                    { text: 'Upload 上传', link: '/components/upload.md' },
                    { text: 'Slider 滑块', link: '/components/slider.md' },
                    { text: 'Dropdown 下拉菜单', link: '/components/dropdown.md' },
                    { text: 'Tree 树', link: '/components/tree.md' },
                    { text: 'TreeSelect 树形选择', link: '/components/treeSelect.md' },
                    { text: 'Form 表单', link: '/components/form.md' },
                    { text: 'Menu 菜单', link: '/components/menu.md' },
                    { text: 'Breadcrumb 菜单', link: '/components/breadcrumb.md' },
                    { text: 'Steps 步骤条', link: '/components/steps.md' },
                    { text: 'Dialog 对话框', link: '/components/dialog.md' },
                    { text: 'Message 警告提示', link: '/components/message.md' },
                    { text: 'messageBox 模态弹窗', link: '/components/messageBox.md' },
                    { text: 'Table 表格', link: '/components/table.md' },
                    { text: 'tooltip 文字提示', link: '/components/tooltip.md' },
                    { text: 'Tabs 标签页', link: '/components/tabs.md' }
                    // '/components/drawer',
                    // '/components/alert',
                    // '/components/loading',
                ]
            },
            {
                text: '自定义组件',
                items: [
                    { text: 'Icon 图标', link: '/components/icon' },
                    { text: 'DateTimePicker 日期时间选择', link: '/components/dateTimePicker.md' },
                    { text: 'Status 状态标签', link: '/components/status.md' },
                    { text: 'TableWidgets 表格小组件', link: '/components/tableWidgets.md' },
                    // '/components/tandem',
                    // '/components/tabBar',
                    // '/components/viewForm',
                    // '/components/inspectTable',
                    { text: 'Process 进度反馈', link: '/components/process' },
                    { text: 'emptyState 空态图', link: '/components/emptyState' },
                    { text: 'rollNumber 数字滚动', link: '/components/rollNumber' },
                    { text: 'Transfer 穿梭框', link: '/components/transfer.md' },
                    { text: 'Pagination 分页', link: '/components/pagination.md' },
                    { text: 'SearchBox 搜索栏', link: '/components/searchBox.md' },
                    { text: 'Layout 布局组件', link: '/components/layout.md' },
                    { text: 'InspectTable 表格信息展示', link: '/components/inspectTable.md' },
                    { text: 'Password 密码框', link: '/components/password' },
                    { text: 'SpringBox 弹性盒', link: '/components/springBox' },
                    { text: 'EventRecord 时间轴', link: '/components/eventRecord' }
                    // '/components/tabContent',
                    // '/components/password',
                ]
            }
        ]
    },
    vite: {
        resolve: {
            alias: {
                '@styles': '.vitepress/styles',
                '@': path.resolve(__dirname, '../../src'),
                '~@': path.resolve(__dirname, '../../src')
            },
            extensions: ['.vue', '.js', '.json', 'cjs']
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                    @import "/.vitepress/styles/variable.scss";
                    @import "/.vitepress/styles/component.scss";
                    `
                }
            }
        },
        plugins: [
            unocss(),
            AutoImport({
                imports: ['vue']
            }),
            vueJsx()
        ],
        server: {
            host: '0.0.0.0'
        }
    }
}
