import * as VueRouter from "vue-router";
import HomePage from "../src/pages/HomePage.vue";
import ApartmentPage from "./pages/ApartmentPage.vue";
import NotFound from "./pages/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/apartment/:id",
    name: "apartment",
    component: ApartmentPage,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: NotFound,
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

export default router;
