import { ReviewQueryServiceOnMemory } from "@/components/review/infra/on-memory"
import {
  createMemoryHistory,
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router"

const HomeView = () => import("@/views/HomeView.vue")
const StoryBookSample = () => import("@/stories/Page.vue")

export const createMemoryRouter = () => {
  return createRouter({
    history: createMemoryHistory(import.meta.env.BASE_URL),
    routes,
  })
}

export const createWebRouter = () =>
  createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
  })

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    props: { queryService: new ReviewQueryServiceOnMemory() },
    component: HomeView,
  },
  {
    path: "/storybook",
    name: "storybook",
    component: StoryBookSample,
  },
]
