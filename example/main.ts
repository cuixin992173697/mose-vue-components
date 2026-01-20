import { createApp } from 'vue'
import App from './App.vue'
import 'element-plus/dist/index.css'
// 使用发布到 npm 包后的样式文件
// import 'mose-vue-components/dist/mose-vue-components.css'

import ElementPlus from 'element-plus'
// import MoseUI from 'mose-vue-components'
// 本地调试
import  MoseUI  from '../packages/index'

createApp(App)
  .use(ElementPlus)
  .use(MoseUI)
  .mount('#app')
