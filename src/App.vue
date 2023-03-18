<template>

  
  <nav class="nav">
    <img alt="AltSchool logo" class="logo" src="@/assets/altschool.png.jpg"/>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/counter">Counter</router-link></li>
    </ul>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #3b5998;
  color: white;
  font-size: 1.2rem;
  z-index: 100;
}

.nav ul {
  list-style: none;
  display: flex;
  align-items: center;
}

.nav li {
  margin-right: 1.5rem;
}

.nav img {
  height: 60px;
  width: auto;
}


nav a {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>