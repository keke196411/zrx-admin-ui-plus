import { createApp } from 'vue'
import App from './App.vue'
import zrxAdminPlus from './index'

import 'uno.css'

const app = createApp(App)

app.use(zrxAdminPlus)
app.mount('#app')
