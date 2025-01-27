<template>
  <div class="header">
    <h1>Hello, welcome to SpiritAItools</h1>
    <p>Your all-in-one tool for creating AI voiceovers, engaging subtitles, optimized gameplay, and more.</p>
    <button class="btn">Get Started</button>
  </div>
</template>

<script setup>
</script>

<style scoped>
.header {
  background-color: #dcdcdc;
  padding: 40px; /* 增加内部填充空间 */
  border-radius: 12px; /* 增大圆角 */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* 增大阴影 */
  text-align: center;
}

.header h1 {
  font-size: 36px; /* 增加字体大小 */
  margin-bottom: 10px; /* 增加标题与正文之间的间距 */
}

.header p {
  font-size: 28px; /* 增加正文的字体大小 */
  color: #555;
  margin-bottom: 20px; /* 增加正文与按钮之间的间距 */
}

.header .btn {
  background-color: #007bff;
  color: white;
  padding: 15px 30px; /* 增加按钮的大小 */
  border: none;
  border-radius: 8px; /* 增大按钮圆角 */
  cursor: pointer;
  font-size: 18px; /* 增加按钮文字的字体大小 */
  transition: background-color 0.3s;
}

.header .btn:hover {
  background-color: #0056b3;
}
</style>
