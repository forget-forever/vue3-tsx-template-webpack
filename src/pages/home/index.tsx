import {defineComponent, computed, inject, reactive, ref, watch} from 'vue'
// import store from '@/store'
import router from '@/router'
import globalData from '@/globalData'

export default defineComponent({
  name: 'Home',
  props: {},
  setup(props: {}) {
    console.log(globalData)
    console.log(props)
    let path = router.currentRoute.value.path
    globalData.sig = {a: 100, b: 300}
    const data = reactive({
      param: 1,
      fun(){
        console.log(this.param)
      }
    })
    let greet = ref(1)
    greet = computed(() => data.param);
    // globalData.pageFunction.index && globalData.pageFunction.index()
    // console.log(inject('fun'))

    watch(router.currentRoute, (newValue) => {
      // console.log(oldValue)
      // console.log(newValue)
      if (newValue.path === path) {
        console.log('home')
      }
    })
    return () => (
      <div onClick={() => {greet.value++}}>here is home page</div>
    )
  }
})