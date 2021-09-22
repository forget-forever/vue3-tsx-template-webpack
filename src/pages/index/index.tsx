import { computed, ref, watchEffect, defineComponent } from 'vue'
import store from '@/store'
import router from '@/router'
import { ElOption, ElSelect } from 'element-plus'
import InfiniteSource from '@/components/Infinite'
import { IData } from './type'

export default defineComponent({
  name: 'Index',
  setup() {
    const Infinite = InfiniteSource<{aa: string, na: string}, IData>()
    const go = (url: string) => {
      router.push(url)
    }

    let greet = ref(1)
    let aa = ref(1)
    console.log(aa)
    // setInterval(() => {
    //   greet.value = greet.value + 1
    // }, 1000)
    // provide('fun', fun)
    const selectVal = ref<string>("1")
    const inputVal = ref<string>("")
    watchEffect(() => {
      console.log(selectVal.value);
      console.log(store.state.test)
    })
    return () => (<>
      <ElSelect defaultFirstOption v-model={selectVal.value}>
        <ElOption value="1" label="aaaa"></ElOption>
        <ElOption value="2" label="abbba"></ElOption>
        <ElOption value="3" label="aarfrdfcr"></ElOption>
      </ElSelect>
      {/* <ElInput change={(val: any) => console.log(val)} v-model={inputVal.value} /> */}
      greet1: {greet.value}
      <div onClick={() => go('/home')}>here is index page, click to home</div>
      aa: {aa.value}
      <h1 onClick={() => go('/test')}>to test model</h1>
      <Infinite mapping={(item) => ({
        title: item.text,
        name: item.userName,
        time: item.time
      })} 
      />
    </>);
  }
})