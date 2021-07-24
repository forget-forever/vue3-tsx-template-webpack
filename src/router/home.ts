import { ComponentPropsOptions, DefineComponent } from "vue"

export default [
  {
    path: "/home",
    name: "Home",
    component: () => import("@/pages/home"),
    props: (route: {query: any}) => route.query
  }
]