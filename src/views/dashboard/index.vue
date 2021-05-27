<template>
  <div>
    <el-button @click="sayhi">点点点~</el-button>
  </div>
</template>

<script lang="ts">
import { ComponentInternalInstance, defineComponent, getCurrentInstance } from 'vue'

export default defineComponent({
  name: 'Dashboard',
  setup () {
    // 两种写法
    // const { proxy } = getCurrentInstance()!  // 取不为空的
    const { proxy } = getCurrentInstance() as ComponentInternalInstance // 类型断言
    console.log(proxy, 'proxy-----')
    const sayhi = () => {
      // ComponentPublicInstance 自定义挂在的实例类型
      // (proxy as ComponentPublicInstance).$message.info('嘻嘻嘻~~~~')
      proxy?.$message.info('嘻嘻嘻~~~~')
    }
    return {
      sayhi
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
