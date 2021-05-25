export default [
  {
    path: "/home",
    name: "Home",
    component: () => import("@/pages/home/index.vue"),
    props: (route: any) => route.query
  }
]