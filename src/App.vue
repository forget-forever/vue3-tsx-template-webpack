<template>
  <!-- <h1 @click="option('你好')" style="color: red">{{aa}}</h1> -->
  <router-view v-slot="{ Component }">
    <keep-alive exclude="Model">
      <component :is="Component"/>
    </keep-alive>
  </router-view>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import {provide} from 'vue'
// import router from '@/router'

@Options({
  components: {
  },
})
export default class App extends Vue {
  // aa = 'hello world!'
  // option = (msg: string) =>{
  //   console.log(this.aa)
  //   this.aa = msg
  // }
  constructor(prop: {}){
    super(prop)
    // provide('fun', this.fun)
  }
  fun = () => {
    console.log('this is fun')
  }
  
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
}
</style>
