<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
	<body class="full-width">
		<div class="full-width">
			<div class="nav-bar">
				<router-link
					class="button-link home-link"
					:to="`/`"
				>
					<div>
						Home
					</div>
				</router-link>
				<router-link
					class="button-link history-link"
					:to="`/history`"
				>
					<div>
						History
					</div>
				</router-link>
			</div>
			<RouterView />
		</div>
	</body>
</template>

<style scoped>
.home-link {
	font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
.history-link {
	font-family: 'Times New Roman', Times, serif;
}
.button-link {
	color: black;
	text-decoration: none;
	font-weight: 100;
	padding: 10px 15px;
	border-radius: 20px;
	font-size: larger;
	margin-left: 20px;
}
.full-width {
	width: 100vw;
	height: 100vh;
}
.nav-bar {
	height: 50px;
	background-color: #b83030;
	border-radius: 10px;
	display: flex;
  justify-content: left;
  flex-wrap: wrap;
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
    max-width: none;
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

:global(#app) {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50; 
	margin-left: 0px;
  margin-right: 0px;
	margin-top: 0px;
  margin-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  max-width: 100vw;
}

</style>
