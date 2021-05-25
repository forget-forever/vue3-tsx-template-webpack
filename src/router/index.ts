import { createRouter, createWebHashHistory } from "vue-router"
import home from './home'
import mainIndex from './mainIndex'

const routes = [
  ...home,
  ...mainIndex
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
