const routes = [
  {
    path: "/",
    component: () => import("layouts/Default.vue"),
    children: [{ path: "", component: () => import("pages/Index.vue") }],
  },
  {
    path: "/about",
    component: () => import("layouts/Default.vue"),
    children: [{ path: "", component: () => import("pages/AboutPage.vue") }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
