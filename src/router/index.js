import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/timer",
      name: "Timer",
      component: () => import("../views/TimerView.vue"),
    },
    {
      path: "/timer2",
      name: "Timer2",
      component: () => import("../views/Timer2View.vue"),
    },
  ],
});

export default router;
