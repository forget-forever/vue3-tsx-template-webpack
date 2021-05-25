export default [
  {
    path: "/",
    name: "Index",
    component: () => import("@/pages/index/index.vue")
  },
  {
    path: "/every",
    name: "EveryCollect",
    component: () => import("@/pages/index/everyCollect.vue")
  },
  {
    path: "/only",
    name: "OnlyCollectRef",
    component: () => import("@/pages/index/onlyCollectRef.vue")
  },
  {
    path: "/test",
    name: "Test",
    component: () => import("@/pages/index/test/index.vue")
  }
]