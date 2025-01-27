<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <button class="btn">Create Now</button>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  title: String,
  description: String
});
</script>

<style scoped>
.card {
  background-color: #dcdcdc;
  padding: 30px; /* 增加卡片的内边距 */
  border-radius: 12px; /* 增加圆角 */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1); /* 增加阴影 */
  width: 35%; /* 增大卡片宽度 */
  text-align: center;
}

.card h3 {
  font-size: 34px; /* 增大标题的字体大小 */
  font-weight: bold; /* 加粗标题 */
  margin-bottom: 20px; /* 增加标题与描述之间的间距 */
}

.card p {
  font-size: 28px; /* 增大描述文字的字体大小 */
  margin-bottom: 30px; /* 增加描述与按钮之间的间距 */
}

.card .btn {
  background-color: #007bff;
  color: white;
  padding: 15px 30px; /* 增加按钮的内边距 */
  border: none;
  border-radius: 8px; /* 增加按钮圆角 */
  cursor: pointer;
  font-size: 18px; /* 增加按钮的字体大小 */
}

.card .btn:hover {
  background-color: #0056b3;
}
</style>
