import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContactView from "../views/ContactView.vue";
import KeyboardView from "../views/KeyboardView.vue";
import RecentView from "../views/RecentView.vue";
import NewContactView from "../views/NewContactView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
    {
      path: "/clavier",
      name: "clavier",
      component: KeyboardView,
    },
    {
      path: "/recent",
      name: "recent",
      component: RecentView,
    },
    {
      path: "/nouveau-contact",
      name: "nouveau-contact",
      component: NewContactView,
    },
  ],
});

export default router;
