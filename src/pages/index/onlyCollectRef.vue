<template>
  只收集响应式依赖
  <div @click="go('/home')">here is index page, click to home</div>
  aa: {{aa}}
  <h1 @click="go('/test')">to test model</h1>
</template>

<script lang="ts">
import { computed, ref, watchEffect } from 'vue'
// import store from '@/store'
import router from '@/router'
import globalData from '@/globalData'

export default {
  name: 'OnlyConnectRef',
  setup() {
    let aa = ref(1)

    let ts = 1
    setInterval(() => {
      ts++
    }, 1000)
    const stop = watchEffect(() => {
      aa.value = ts
      console.log('aa = ts')
    })

    // 每次执行的时候都会更新依赖
    let flag = ref<boolean>(false)
    setTimeout(() => {
      flag.value = true
    }, 1000)
    watchEffect(() => {
      if(flag.value) {
        console.log(aa.value, 'irrequal')
      }
    })


    // 用computed的写法
    // aa = computed<number>(() => greet.value)


    // 跨页面调用
    let fun = () => {
      console.log(aa, 'from home component')
    }
    globalData.pageFunction.index = fun

    return {
      go: (url: string) => {
        router.push(url)
      },
      aa,
    }
  }
}
</script>