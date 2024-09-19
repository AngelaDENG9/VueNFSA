<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
<<<<<<< HEAD
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">
      <!-- <p>hi</p> -->
      <HelloWorld msg="You did it!" />

      <nav>
        <!-- <RouterLink to="/">Home</RouterLink> -->
        <!-- <RouterLink to="/about">About</RouterLink> -->
=======
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
>>>>>>> 1b841f67b4622d2861e6028d5d48f4438f0b666f
      </nav>
    </div>
  </header>

<<<<<<< HEAD
  <!-- <RouterView /> -->
=======
  <RouterView />
>>>>>>> 1b841f67b4622d2861e6028d5d48f4438f0b666f
</template>

<style scoped>
header {
<<<<<<< HEAD
  /* line-height: 1.5; */
  /* max-height: 100vh; */
  width: 100vw;
=======
  line-height: 1.5;
  max-height: 100vh;
>>>>>>> 1b841f67b4622d2861e6028d5d48f4438f0b666f
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
<<<<<<< HEAD
  /* padding: 0 1rem; */
=======
  padding: 0 1rem;
>>>>>>> 1b841f67b4622d2861e6028d5d48f4438f0b666f
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
<<<<<<< HEAD
  /* header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  } */
=======
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
>>>>>>> 1b841f67b4622d2861e6028d5d48f4438f0b666f

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
<<<<<<< HEAD
    /* display: flex; */
    /* width: 100vw; */
=======
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
>>>>>>> 1b841f67b4622d2861e6028d5d48f4438f0b666f
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

<<<<<<< HEAD
    /* padding: 1rem 0; */
=======
    padding: 1rem 0;
>>>>>>> 1b841f67b4622d2861e6028d5d48f4438f0b666f
    margin-top: 1rem;
  }
}
</style>
