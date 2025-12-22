import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 直接用源码，而不是 npm 包

import { install as MyUI } from '../src'

createApp(App)
  .use(ElementPlus)
  .use(MyUI)
  .mount('#app')
