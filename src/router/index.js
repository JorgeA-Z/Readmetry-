import {createRouter, createMemoryHistory} from "vue-router";

const router = createRouter({
    history : createMemoryHistory(),
    routes:[
        { path: "/", component: () => import("../views/home.vue") },
        { path: "/feed", component: () => import("../views/feed.vue") },
    ],
});
export default router;