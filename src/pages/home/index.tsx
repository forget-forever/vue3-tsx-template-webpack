import {defineComponent, computed, inject, reactive, ref, watch} from 'vue'
// import store from '@/store'
import router from '@/router'

export default defineComponent({
  name: 'Home',
  props: {},
  setup(props: {}) {
    console.log(props)
    let path = router.currentRoute.value.path
    const data = reactive({
      param: 1,
      fun(){
        console.log(this.param)
      }
    })
    let greet = ref(1)
    greet = computed(() => data.param);
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