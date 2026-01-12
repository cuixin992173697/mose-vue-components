import type { App } from 'vue'
import { XButton } from '../packages/components'
import '../styles/index.scss'

const components = [XButton]

const install = (app: App) => {
  components.forEach((c: any) => {
    app.component(c.name, c)
  })
}

export { XButton, install }