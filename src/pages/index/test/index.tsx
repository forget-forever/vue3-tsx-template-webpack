import { ref } from '@vue/reactivity'
import ModelPage from '@/components/model/index.vue'
import { IPage } from '@/components/model/type'
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'Test',
  props: {

  },
  components: {
    ModelPage
  },
  setup() {
    const page: IPage = {
      onshow() {
        console.log('show test page')
      },
      onPullingDown(over) {
        console.log('down')
        over('down')
      },
      onPullingUp(over) {
        console.log('up')
        over('up')
      },
      onScroll(pos: any) {
        console.log(pos)
      }
    }
    const greet = ref(1)
    return () => (
      <ModelPage page={page} scroll={true}>
        <h1>hellow world!</h1>
        <h2 style="color: red;">{greet}</h2>
      </ModelPage>
    )
  },
})