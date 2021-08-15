import BScroll from 'better-scroll'
import { onMounted, PropType, ref } from '@vue/runtime-core'
import { CSSProperties, defineComponent, watchEffect } from 'vue'
import router from '@/router'
import { IPage } from './type'

export default defineComponent({
  props: {
    page: { type: Object as PropType<IPage>, required: true },
    scroll: { type: Boolean, default: false },
    style: { type: Object as PropType<CSSProperties>, default: { } }
  },
  setup(props, {slots, attrs}) {
    const ele = ref<HTMLDivElement>()
    const path = router.currentRoute.value.path
    watchEffect(() => {
      
      if (path === router.currentRoute.value.path) {
        props.page.onshow && props.page.onshow()
      }
    })
    const initBS = function(){
      const bs = new BScroll(ele.value as HTMLDivElement, {
        click: false,
        probeType: 0,
        startY: 0,
        pullDownRefresh: true,
        pullUpLoad: true
      })
      // 窗体滚动事件
      props.page.onScroll && bs.on('scroll', (pos: any) => {
        props.page.onScroll && props.page.onScroll(pos)
      })
      // 下拉刷新的事件
      props.page.onPullingDown && bs.on('pullingDown', () => {
        props.page.onPullingDown && props.page.onPullingDown(pullOver)
      })
      // 上拉触底
      props.page.onPullingUp && bs.on('pullingUp', () => {
        props.page.onPullingUp && props.page.onPullingUp(pullOver)
      })
      const pullOver = (type: 'up' | 'down') => {
        switch(type){
          case 'up': bs.finishPullUp()
          break
          default: bs.finishPullDown()
        }
      }
    }
    onMounted(() => {
      if(props.scroll){
        initBS()
      }
    })
    return () => (
      <div class="scroll-wrapper" style={{...props.style, overflow: 'hidden'}} ref={ele}>
        <div class="scroll-content">
          {slots.default && slots.default('11')}
        </div>
      </div>
    )
  },
})