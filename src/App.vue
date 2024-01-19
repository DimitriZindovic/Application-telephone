<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/contact">Contact</RouterLink>
      <RouterLink to="/clavier">Clavier</RouterLink>
      <RouterLink to="/recent">Récents</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: #342d2d;
}

nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  height: 100%;
}

nav a {
  text-decoration: none;
  color: #fff;
  font-size: 1.5rem;
}

nav a:hover {
  cursor: pointer;
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}
</style>
