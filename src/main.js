import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // 引入路由
import { getToken } from '@/utils/auth'; // 引入 auth.js 用于检查登录状态

// 创建 Vue 应用
const app = createApp(App);

// 全局前置守卫：确保用户未登录时跳转到登录页面
router.beforeEach((to, from, next) => {
  const isLoggedIn = !!getToken(); // 检查是否已登录

  if (to.meta.isPublic) {
    // 如果是公开页面（如登录页面），直接放行
    next();
  } else if (to.meta.requiresAuth && !isLoggedIn) {
    // 如果需要登录且用户未登录，则跳转到登录页面
    next({ path: '/login', query: { redirect: to.fullPath } });
  } else {
    // 否则继续导航
    next();
  }
});

// 使用路由
app.use(router);

// 挂载应用
app.mount('#app');