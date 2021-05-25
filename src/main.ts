import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import globalData from '@/globalData'

createApp(App).use(router).use(store).use(globalData).mount('#app')
