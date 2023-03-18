<template>
    <div class="homes">
    <div class="counter-card">
      <h1 class="counter-title">Counter</h1>
      <div class="counter-container">
        <p class="counter-value">{{ store.state.value }}</p>
        <div class="counter-buttons">
          <button class="counter-button" @click="increment">+</button>
          <button class="counter-button" @click="decrement">-</button>
          <button class="counter-button" @click="reset">Reset</button>
        </div>
        <div class="counter-set-value">
          <button class="counter-button" @click="setValue">Set Value</button>
          <input class="counter-input" type="number" v-model="value" />
        </div>
      </div>
    </div>
  </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { useStore } from "vuex";
  const store = useStore();
  
  const value = ref(0);
  const increment = () => {
    store.commit("increment");
  };
  
  const decrement = () => {
    store.commit("decrement");
  };
  
  const reset = () => {
    store.commit("reset");
  };
  
  const setValue = () => {
    store.commit("setValue", value);
  };
  </script>
  
  <style scoped>
  .counter-card {
    background-color: #d4d4d4;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    padding: 1rem;
    border-radius: 10px;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    max-width: 500px;
    margin: 2rem;
    color: #fff;
  }
  .homes {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
  
  .counter-title {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #000;
  }
  
  .counter-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .counter-value {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #333;
  }
  
  .counter-buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }
  
  .counter-button {
    background-color: #1877f2;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }
  
  .counter-button:hover {
    background-color: #3b5998;
  }
  
  .counter-set-value {
    display: flex;
    align-items: center;
  }
  
  .counter-input {
    margin-left: 1rem;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1.2rem;
    width: 100px;
  }
  </style>
  