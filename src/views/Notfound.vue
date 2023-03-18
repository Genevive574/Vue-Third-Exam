<template>
  <div class="notfound-here">
    <div class="notfound-container">
      <p class="404text">404 Error</p>
      <p>Page not found</p>
      <router-link to="/" class="back">Back to home</router-link>
    </div>
  </div>
</template>

<script setup></script>
<style>
.notfound-here {
  display: flex;
  justify-content: center;
  align-items: center;
}
.notfound-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  margin: 100px auto;
  color: black;
}
.back{
    text-decoration: none;
    cursor: pointer;
    margin-top: 20px;
    color: gold;
}
.text404{
    font-size: 24px;
    margin-bottom: 0px;
    color: aliceblue;
}
</style>