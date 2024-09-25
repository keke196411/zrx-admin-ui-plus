import DefaultTheme from 'vitepress/theme'
// index.css用于重置vitepress的css变量
import './index.css' 
import zrxAdminPlus from '../../../src/index'
import 'uno.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

export default {
    Layout: DefaultTheme.Layout,
    enhanceApp({ app }) {
        app.use(zrxAdminPlus, { locale: zhCn })
    }
}
