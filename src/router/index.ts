import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import Page from "@/stories/Page.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/storybook",
      name: "storybook",
      component: Page,
    },
  ],
})

export default router
