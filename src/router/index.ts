import { ReviewQueryServiceOnApi } from "@/components/review/infra"
import {
  createMemoryHistory,
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
  type RouterHistory,
} from "vue-router"

const HomeView = () => import("@/views/home/index.vue")

const create = (fn: (base?: string) => RouterHistory) =>
  createRouter({
    history: fn(import.meta.env.BASE_URL),
    routes,
  })

const routes = [
  {
    path: "/",
    name: "home",
    props: { queryService: new ReviewQueryServiceOnApi() },
    component: HomeView,
  },
] as const satisfies RouteRecordRaw[]

const isTest = import.meta.env.STORYBOOK === "true"

export const router = isTest ? create(createMemoryHistory) : create(createWebHistory)
