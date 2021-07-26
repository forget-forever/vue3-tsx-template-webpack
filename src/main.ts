import { createApp } from 'vue';
import App from './App';
import router from '@/router'
import store from '@/store';
import globalData from '@/globalData';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

createApp(App).use(ElementPlus).use(router).use(store).use(globalData).mount('#app')
