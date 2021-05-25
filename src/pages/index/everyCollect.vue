<template>
  每次执行的时候都会更新依赖
  <br/>
  aa: {{aa}}
</template>

<script lang="ts">
import { computed, ref, watchEffect } from 'vue'
// import store from '@/store'
import router from '@/router'
import globalData from '@/globalData'

export default {
  name: 'EveryConnect',
  setup() {

    let aa = ref<number>(0)
    setInterval(() => {
      aa.value++
    }, 1000)
    // 每次执行的时候都会更新依赖
    let flag = ref<boolean>(false)
    setTimeout(() => {
      flag.value = true
    }, 100)
    watchEffect(() => {
      if(flag.value) {
        console.log(aa.value, 'irrequal')
      }
      // flag.value = 
    })

    

    return {
      go: (url: string) => {
        router.push(url)
      },
      aa,
    }
  }
}
</script>