import { computed, ref, watchEffect, defineComponent } from 'vue'
// import store from '@/store'
import router from '@/router'
import globalData from '@/globalData'
import { ElOption, ElSelect } from 'element-plus'
import Infinite from '@/components/Infinite'

export default defineComponent({
  name: 'Index',
  setup() {
    const go = (url: string) => {
      router.push(url)
    }
    console.log(this, 'this')

    let greet = ref(1)
    let aa = ref(1)
    // setInterval(() => {
    //   greet.value = greet.value + 1
    // }, 1000)
    let fun = () => {
      console.log(aa, 'from home component')
    }
    globalData.pageFunction.index = fun
    // provide('fun', fun)
    const selectVal = ref<string>("1")
    const inputVal = ref<string>("")
    watchEffect(() => {
      console.log(selectVal.value);
    })
    return () => (<>
      <ElSelect defaultFirstOption v-model={selectVal.value}>
        <ElOption value="1" label="aaaa"></ElOption>
        <ElOption value="2" label="abbba"></ElOption>
        <ElOption value="3" label="aarfrdfcr"></ElOption>
      </ElSelect>
      {/* <ElInput change={(val: any) => console.log(val)} v-model={inputVal} /> */}
      greet1: {greet.value}
      <div onClick={() => go('/home')}>here is index page, click to home</div>
      aa: {aa.value}
      <h1 onClick={() => go('/test')}>to test model</h1>
      <Infinite />
    </>);
  }
})