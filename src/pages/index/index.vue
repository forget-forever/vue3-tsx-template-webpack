<template>
  greet: {{greet}}
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
  name: 'Index',
  setup() {
    console.log(this, 'this')

    let greet = ref(1)
    let aa = ref(1)
    setInterval(() => {
      greet.value++
    }, 1000)
    // aa = computed(() => greet.value)


    // const stop = watchEffect(() => {
    //   aa.value = greet.value
    //   console.log('aa = greet')
    // })

    // 五秒后停止副作用函数
    // setTimeout(stop, 5000)



    // 跨页面调用
    let fun = () => {
      console.log(aa, 'from home component')
    }
    globalData.pageFunction.index = fun
    // provide('fun', fun)

    
    return {
      greet,
      go: (url: string) => {
        router.push(url)
      },
      aa,
    }
  }
}
</script>