import { computed, ref, watchEffect, defineComponent } from 'vue'
// import store from '@/store'
import router from '@/router'
import globalData from '@/globalData'

export default defineComponent({
  name: 'Index',
  setup() {
    const go = (url: string) => {
      router.push(url)
    }
    console.log(this, 'this')

    let greet = ref(1)
    let aa = ref(1)
    setInterval(() => {
      greet.value = greet.value + 1
    }, 1000)
    let fun = () => {
      console.log(aa, 'from home component')
    }
    globalData.pageFunction.index = fun
    // provide('fun', fun)

    
    return () => (<>
      greet1: {greet.value}
      <div onClick={() => go('/home')}>here is index page, click to home</div>
      aa: {aa.value}
      <h1 onClick={() => go('/test')}>to test model</h1>
    </>);
  }
})