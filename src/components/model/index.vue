<template>
  <div class="scroll-wrapper" :style="style" ref="ele">
    <div class="scroll-content">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import BScroll from 'better-scroll'
import { onMounted } from '@vue/runtime-core'
import { watchEffect } from 'vue'
import router from '@/router'
// eslint-disable-next-line no-unused-vars
import { IData, IPage } from './type'

interface IProps {
  page: IPage
  scroll?: boolean
  style: object
}

export default {
  name: 'Model',
  props: {
    page: {
      type: Object,
      default: () => ({})
    },
    style: {
      type: Object,
      default: () => ({})
    },
    scroll: {
      type: Boolean,
      default: false
    }
  },
  setup(props: IProps) {
    // const {page} = props
    // props.page.fun('do')
    // console.log(emit)
    // if (!props.style.height) {
    //   props.style.height = '100vh'
    // }
    // const page = props.page
    const data: IData = {
      ele: null
    }
    const path = router.currentRoute.value.path
    watchEffect(() => {
      // aa.value = globalData.a
      if (path === router.currentRoute.value.path) {
        props.page.onshow && props.page.onshow()
      }
    })
    const initBS = function(){
      const bs = new BScroll(data.ele, {
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
      const pullOver = (type: number = 0) => {
        switch(type){
          case 0: bs.finishPullUp()
          break
          default: bs.finishPullDown()
        }
      }
    }
    onMounted(() => {
      if(!data.ele.style.height){
        data.ele.style.height = '100vh'
      }
      if(props.scroll){
        initBS()
      }
    })
    return data
  },
}
</script>
<style lang="less">
.scroll-wrapper{
  overflow: hidden;
}
</style>