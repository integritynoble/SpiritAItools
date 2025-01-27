<template>
  <div id="app">
    <template v-if="showLayout">
      <div class="container">
        <!-- 左侧导航栏 -->
        <AppSidebar />

        <!-- 右侧主内容区域 -->
        <div class="main-content">
          <MainHeader />
          <router-view />
        </div>
      </div>
    </template>
    <template v-else>
      <!-- 不需要布局的页面（如登录页面） -->
      <router-view />
    </template>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import AppSidebar from '@/components/AppSidebar.vue';
import MainHeader from '@/components/MainHeader.vue';

const route = useRoute();

// 根据路由的 meta 字段判断是否显示布局
const showLayout = computed(() => !route.meta.isPublic);
</script>

<style>
/* 样式保持不变 */
</style>