import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
// import MoseUI from 'mose-vue-components'
// import { install as MoseUI } from 'mose-vue-components'
import 'element-plus/dist/index.css'
import  MoseUI  from '../packages/index'

createApp(App)
  .use(ElementPlus)
  .use(MoseUI)
  .mount('#app')
