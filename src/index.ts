import type { App } from 'vue'
import { MyButton } from '../packages/components'

const components = [MyButton]

const install = (app: App) => {
  components.forEach((c: any) => {
    app.component(c.name, c)
  })
}

export { MyButton, install }

