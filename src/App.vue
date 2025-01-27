<template>
  <div id="app">
    <div class="container">
      <!-- 左侧导航栏 -->
      <AppSidebar />
      
      <!-- 右侧主内容区域 -->
      <div class="main-content">
        <MainHeader />
        <AppDashboard />
      </div>
    </div>
  </div>
</template>
 
<script setup>
import AppSidebar from '../src/components/AppSidebar.vue';
import MainHeader from '../src/components/MainHeader.vue';
import AppDashboard from '../src/components/AppDashboard.vue';
</script>

<style>
/* 全局设置 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  font-family: 'Arial', sans-serif;
}

.container {
  display: flex;
  height: 100vh;
  flex: 1;
}

.main-content {
  flex-grow: 1;
  padding: 20px;
  overflow-y: auto;
  background-color: #f4f7fc;
}

button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s, box-shadow 0.2s;
}

button:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

button:active {
  background-color: #003f7f;
  box-shadow: 0 0 10px rgba(0, 123, 255, 0.5);
}

/* 侧边栏样式 */
.app-sidebar {
  width: 280px;
  background-color: #333;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.3s ease;
  box-shadow: 2px 0px 10px rgba(0, 0, 0, 0.1);
}

.app-sidebar.sticky {
  position: sticky;
  top: 0;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
  color: #fff;
  text-align: center;
  margin-top: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

.nav-title {
  font-size: 18px;
  font-weight: bold;
  color: #ddd;
  margin-top: 20px;
  padding-left: 10px;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.sub-items {
  padding-left: 30px;
}

.sub-items li {
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s, padding-left 0.3s;
}

.sub-items li:hover {
  background-color: #444;
  padding-left: 40px; /* 动态缩进，增加交互感 */
}

.sub-items li.active {
  background-color: #555;
  color: #fff;
}

.sub-items li:active {
  background-color: #555;
}

/* 侧边栏动画：高亮显示选中的导航项 */
.sub-items li.active {
  background-color: #0061f2;
  color: #fff;
}

/* 主内容区域 */
.main-content {
  flex-grow: 1;
  padding: 20px;
  overflow-y: auto;
  background: linear-gradient(135deg, #6a5ff7, #00d4ff, #ff00a0);
}

@media (max-width: 768px) {
  /* 屏幕小于768px时，调整侧边栏和主内容区域的布局 */
  .container {
    flex-direction: column;
  }
  .app-sidebar {
    width: 100%;
    height: auto;
    box-shadow: none;
  }
  .main-content {
    padding: 15px;
  }
}
</style>
