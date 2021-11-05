import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: require("@/views/Home.vue").default,
  },
  {
    path: "/collection",
    name: "Collection",
    component: require("@/views/Collection.vue").default,
  },

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
