import { createWebHashHistory, createRouter } from 'vue-router';
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: () => import('@/views/Layout/index.vue'),
            children: [
                {
                    path: '/',
                    name: 'dashborad',
                    component: () => import('@/views/Dashborad/index.vue'),
                },
                {
                    path: '/user',
                    name: 'user',
                    component: () => import('@/views/User/index.vue'),
                },
                {
                    path: '/rights',
                    name: 'rights',
                    component: () => import('@/views/Rights/index.vue'),
                },
            ],
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/Login/index.vue'),
        },
    ],
});

export default router;
