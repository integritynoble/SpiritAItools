<template>
    <div class="sidebar">
      <div class="logo">Token AI</div>
      <ul>
        <li>Dashboard</li>
        <li>Create</li>
        <li>Tools</li>
        <li>More</li>
      </ul>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .sidebar {
    width: 350px;
    background-color: #333;
    color: white;
    padding: 20px;
    height: 100vh;
  }
  
  .sidebar .logo {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .sidebar ul {
    list-style-type: none;
    padding: 0;
  }
  
  .sidebar li {
    padding: 10px;
    cursor: pointer;
  }
  
  .sidebar li:hover {
    background-color: #444;
  }
  </style>
  