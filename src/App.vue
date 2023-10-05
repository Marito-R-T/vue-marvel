<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <RouterView />
</template>

<style scoped>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

nav {
	padding: 30px;
}

nav a {
	font-weight: bold;
	color: #2c3e50;
}

.nav-details a {
	color: white;
}

nav a.router-link-exact-active {
	color: #42b983;
}
</style>
