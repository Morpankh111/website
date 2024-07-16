import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: () => import('@/views/HomePage.vue'),
  },
  {
    path: "/about",
    name: "AboutUs",
    component: () => import('@/views/AboutUs.vue'),
  },
  {
    path: "/contact",
    name: "ContactUs",
    component: () => import('@/views/ContactUs.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
