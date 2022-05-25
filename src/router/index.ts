import { createWebHashHistory, createRouter } from "vue-router";
import Dashborad from "@/views/Dashborad/index.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: Dashborad,
    },
  ],
});

export default router;
