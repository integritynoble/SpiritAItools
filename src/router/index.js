import { createRouter, createWebHistory } from 'vue-router';

/* Layout */

const routes = [
  {
    path: '/auth-redirect',
    name: 'auth-redirect',
    component: () => import('@/views/login/auth-redirect.vue'),
    meta: { isPublic: true }, // 公开页面，不需要登录
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'), // 登录页面
    meta: { isPublic: true }, // 公开页面，不需要登录
  },
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'), // 主页面
    meta: { requiresAuth: true }, // 需要登录
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
    meta: { requiresAuth: true }, // 需要登录
  },
  // {
  //   path: '/:pathMatch(.*)*', // 捕获所有未匹配的路由
  //   redirect: '/404', // 重定向到 404 页面
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  });
  router.matcher = newRouter.matcher; // reset router
}

export default router;