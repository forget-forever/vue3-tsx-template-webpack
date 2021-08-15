import { ref } from '@vue/reactivity'
import { IPage } from '@/components/ModelPage/type'
import ModelPage from '@/components/ModelPage'
import {defineComponent, watchEffect} from 'vue'
import { ElOption, ElSelect } from 'element-plus'

export default defineComponent({
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
    watchEffect(() => {
      console.log(greet.value)
    })
    const selectVal = ref('1')
    
    return () => (<>
      <ModelPage
        page={page}
        style={{height: '100vh'}}
      >
        {{
          default: () => (<>
            <h1>hellow world!</h1>
            <h2 onClick={() => {greet.value += 1}}>2222</h2>
            <ElSelect defaultFirstOption v-model={selectVal.value}>
              <ElOption value="1" label="aaaa"></ElOption>
              <ElOption value="2" label="abbba"></ElOption>
              <ElOption value="3" label="aarfrdfcr"></ElOption>
            </ElSelect>
          </>),
          host: () => {}
        }}
      </ModelPage>
    </>)
  },
})