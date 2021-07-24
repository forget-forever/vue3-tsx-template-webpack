export default [
  {
    path: "/",
    name: "Index",
    component: () => import("@/pages/index")
  },
  {
    path: "/test",
    name: "Test",
    component: () => import("@/pages/index/test")
  }
]