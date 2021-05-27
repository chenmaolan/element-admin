import { App } from 'vue'
import { ElButton } from 'element-plus'
import lang from 'element-plus/lib/locale/lang/zh-cn'
import locale from 'element-plus/lib/locale'

export default (app: App) : void => {
  locale.use(lang)

  const components = [
    ElButton
  ]
  components.forEach(component => {
    app.component(component.name, component)
  })
  // 设置全局button大小
  app.config.globalProperties.$ELEMENT = {
    size: 'medium'
  }
}
