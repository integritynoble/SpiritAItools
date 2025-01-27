<template>
  <div class="sidebar">
    <!-- Logo -->
    <div class="logo">SpiritAItools</div>

    <!-- 导航项 -->
    <ul>
      <!-- Dashboard大标题 -->
      <li class="nav-title">Dashboard</li>
      <ul class="sub-items">
        <li @click="handleClick('Spirit AI Editor')">Spirit AI Editor</li>
        <li @click="handleClick('My Project')">My Project</li>
        <li @click="handleClick('My Exports')">My Exports</li>
        <li @click="handleClick('My Assets')">My Assets</li>
      </ul>

      <!--Create大标题 -->
      <li class="nav-title">Create</li>
      <ul class="sub-items">
        <li @click="handleClick('Reddit Video')">Sales Data</li>
        <li @click="handleClick('Fake Texts Video')">Fake Texts Video</li>
        <li @click="handleClick('ChatGPT Video')">ChatGPT Video</li>
        <li @click="handleClick('Split Video')">Split Video</li>
        <li @click="handleClick('Blur Video')">Blur Video</li>
        <li @click="handleClick('Voiceover Video')">Voiceover Video</li>
      </ul>

      <!-- Tools大标题 -->
      <li class="nav-title">Tools</li>
      <ul class="sub-items">
        <li @click="handleClick('AI Images')">AI Images</li>
        <li @click="handleClick('AI Voiceover')">AI Voiceover</li>
        <li @click="handleClick('AI Brainstorm')">AI Brainstorm</li>
        <li @click="handleClick('YT Downloader')">YT Downloader</li>
        <li @click="handleClick('TikTok Downloader')">TikTok Downloader</li>
      </ul>
      
      <!-- More大标题 -->
      <li class="nav-title">More</li>
      <ul class="sub-items">
        <li @click="handleClick('About Us')">About Us</li>
      </ul>
    </ul>
  </div>
</template>

<script setup>
const handleClick = (item) => {
  alert(`You clicked on ${item}`);
};
</script>

<style scoped>
.sidebar {
  width: 400px;
  background-color: #333;
  color: white;
  padding: 20px;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #fff;
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
}

.sub-items {
  padding-left: 30px;
}

.sub-items li {
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.sub-items li:hover {
  background-color: #444;
}

.sub-items li:active {
  background-color: #555;
}
</style>
