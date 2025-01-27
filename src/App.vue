<template>
  <div id="app">
    <!-- 如果当前路由是登录页面，则不显示侧边栏和头部 -->
    <template v-if="$route.path !== '/login'">
      <div class="container">
        <!-- 左侧导航栏 -->
        <AppSidebar />

        <!-- 右侧主内容区域 -->
        <div class="main-content">
          <MainHeader />
          <router-view /> <!-- 动态渲染路由组件 -->
        </div>
      </div>
    </template>

    <!-- 如果是登录页面，则只渲染登录组件 -->
    <template v-else>
      <router-view /> <!-- 渲染登录页面 -->
    </template>
  </div>
</template>

<script setup>
import AppSidebar from '../src/components/AppSidebar.vue';
import MainHeader from '../src/components/MainHeader.vue';
</script>

<style>
#app {
  display: flex;
  min-height: 100vh; /* 确保页面始终占据完整高度 */
  flex-direction: column;
}

.container {
  display: flex;
  height: 100vh;
}

.main-content {
  flex-grow: 1;
  padding: 20px;
  border: 1px solid red; /* 临时样式，用于调试 */
}

.app-sidebar {
  width: 250px; /* 设置固定宽度 */
  background-color: #f8f9fa; /* 临时样式，用于调试 */
}

button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

button:hover {
  background-color: #0056b3;
  transform: scale(1.05); /* 鼠标悬停时按钮放大 */
}

/* 为侧边栏的列表项添加动画 */
.app-sidebar ul li {
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.app-sidebar ul li:hover {
  background-color: #444;
}
</style>