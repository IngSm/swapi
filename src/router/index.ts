import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: require("@/views/Home.vue").default,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
