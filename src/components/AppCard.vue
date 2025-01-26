<template>
    <div class="card">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <button class="btn">Create Now</button>
    </div>
  </template>
  
  <script setup>
  import {defineProps} from "vue"
  defineProps({
    title: String,
    description: String
  });
  </script>
  
  <style scoped>
  .card {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 30%;
    text-align: center;
  }
  
  .card h3 {
    font-size: 20px;
  }
  
  .card .btn {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .card .btn:hover {
    background-color: #0056b3;
  }
  </style>
  