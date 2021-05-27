import { App } from 'vue'
import {
  ElButton, ElMessage, ElNotification,
  ElMessageBox
} from 'element-plus'
import lang from 'element-plus/lib/locale/lang/zh-cn'
import locale from 'element-plus/lib/locale'
import 'element-plus/lib/theme-chalk/index.css'

export default (app: App) : void => {
  locale.use(lang)

  const components = [
    ElButton,
    ElMessage,
    ElNotification,
    ElMessageBox
  ]
  components.forEach(component => {
    app.component(component.name, component)
  })
  app.config.globalProperties.$message = ElMessage
  app.config.globalProperties.$notify = ElNotification
  app.config.globalProperties.$confirm = ElMessageBox.confirm
  app.config.globalProperties.$alert = ElMessageBox.alert
  app.config.globalProperties.$prompt = ElMessageBox.prompt
  // 设置全局button大小
  app.config.globalProperties.$ELEMENT = {
    size: 'medium'
  }
}
