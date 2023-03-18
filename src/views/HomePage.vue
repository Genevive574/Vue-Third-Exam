<template>
  <div class="home-page">
    <header>
      <nav class="nav-bar">
        <img alt="AltSchool logo" class="logo" src="@/assets/altschool.png.jpg"/>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/counter">Counter</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <div class="card">
        <h2 class="welcome">WELCOME TO MY APP</h2>
        <h3 class="alt-name">AltSchool Africa Third Semester Exam</h3>
        <p class="align">
          1. Create a new vue js application using the cli then setup a counter
          composable with increment, decrement, reset, setValue functions with a
          valid UI.<br /><br />
          2. You can use local state or vuex for state management albeit using
          vuex will attract higher marks.<br /><br />
          3. Make sure to house your functionality in a page with route -
          ‘/counter’ any other route should redirect the user to a 404 page
          handled by your wildcard route.<br /><br />
        </p>
        <button class="count-btn">
          <RouterLink to="/counter" class="count-link">See Counter Here</RouterLink>
        </button>
      </div>

      <div class="hello">
        <h1>{{ msg }}</h1>
        <p>
          You can check me out here<br />
          <a href="https://github.com/Genevive574" target="_blank" rel="noopener">GITHUB</a>.
          <a href="https://www.linkedin.com/in/genevive-ijeoma/" target="_blank" rel="noopener">LINKEDIN</a>.
        </p>
      </div>
    </main>

  </div>
</template>

<script setup>
const msg = "Hello, world!";
</script>

<style>
.nav-bar {
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

.nav-bar ul {
  list-style: none;
  display: flex;
  align-items: center;
}

.nav-bar li {
  margin-right: 1.5rem;
}

.nav-bar a {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
}

.nav-bar a:hover {
  color: rgb(255, 255, 255);
  text-decoration: underline;
}

.nav-bar a:active{
  text-decoration: underline;
}

.nav-bar img {
  height: 60px;
  width: auto;
}

.align {
  text-align: left;
}

.home-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #d4d4d4;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 90%;
  margin: 2rem;
  color: #000;
  margin-top: 10rem;
}

.welcome {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.alt-name {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.count-btn {
  background-color: #2e8b57;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 1rem;
  margin-top: 1rem;
  font-size: 1.2rem;
  cursor: pointer;
}

.count-btn:hover {
  background-color: #228b22;
}

.count-link {
  color: white;
  text-decoration: none;
}

.hello {
  margin: 2rem;
  text-align: center;
}


@media screen and (max-width: 768px) {
  .card {
    margin: 1rem;
  }
}
</style>  