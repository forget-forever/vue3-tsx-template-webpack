<template>
  <model :page="page" :scroll="true">
    <h1>hellow world!</h1>
    <h2 style="color: red;">{{greet}}</h2>
  </model>
</template>

<script lang="ts">
import { ref } from '@vue/reactivity'
import model from '@/components/model/index.vue'
import { IPage } from '@/components/model/interfaces'

export default {
  name: 'Test',
  props: {

  },
  components: {
    model
  },
  setup() {
    const page: IPage = {
      onshow() {
        console.log('show test page')
      },
      onPullingDown(over: (t: number) => void) {
        console.log('down')
        over(1)
      },
      onPullingUp(over: (t: number) => void) {
        console.log('up')
        over(0)
      },
      onScroll(pos: any) {
        // console.log(pos)
      }
    }
    const greet = ref(1)
    return {
      page,
      greet
    }
  },
}
</script>