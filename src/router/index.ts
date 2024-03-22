import { ReviewQueryServiceOnMemory } from "@/components/review/infra/on-memory"
import { createRouter, createWebHistory } from "vue-router"

const HomeView = () => import("@/views/HomeView.vue")
const StoryBookSample = () => import("@/stories/Page.vue")

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
  ],
})

export default router
