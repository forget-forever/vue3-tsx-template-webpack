import { ref } from '@vue/reactivity'
import { IPage } from '@/components/ModelPage/type'
import ModelPage from '@/components/ModelPage'
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'Test',
  props: { },
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
    return () => (<>
      <ModelPage page={page} style={{height: '100vh'}}>
        <h1>hellow world!</h1>
        <h2 style="color: red;">{greet}</h2>
      </ModelPage>
    </>)
  },
})