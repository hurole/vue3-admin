import { createWebHashHistory, createRouter } from "vue-router";
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            component: () => import("@/components/Layout/index.vue"),
        },
        {
            path: "/login",
            component: () => import("@/views/Login/index.vue"),
        },
    ],
});

export default router;
