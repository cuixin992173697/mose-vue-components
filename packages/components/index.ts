import type { App } from 'vue'
import { XButton } from './src/index'
// import '../styles/index.scss'

const components = [XButton]

const install = (app: App) => {
  components.forEach((c: any) => {
    if (!c.name) {
      console.warn('[MoseUI]', 'component is missing name:', c)
      return
    }
    app.component(c.name, c)
  })
}

/** 按需导出 */
export { XButton }

/** 提供 install 方法（函数式 use） */
export { install }

/** 默认导出（整库 use） */
export default {
  install
}
