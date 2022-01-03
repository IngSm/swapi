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
    children: [
      {
        path: "/films",
        name: "Films",
        component: require("@/views/Films.vue").default,
      },
      {
        path: "/vehicles",
        name: "Vehicles",
        component: require("@/views/Vehicles.vue").default,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
