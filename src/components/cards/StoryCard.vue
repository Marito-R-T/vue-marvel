<script setup lang="ts">
import type { MarvelResponse } from '@/types/MarvelResponse';
import type { FullStory } from '@/types/Story';
import type { Axios } from 'axios';
import { inject } from 'vue';
import { useRoute } from 'vue-router';

// Import the Axios instance and inject it as a dependency
const axios:Axios|undefined = inject('axios')

// Import the route utility
const route = useRoute()

// Fetch story data for a Marvel series using Axios
const data:MarvelResponse = await new Promise((resolve, reject) => {
  axios?.get(`v1/public/series/${route.params.id}/stories`, {}).then((res) => {
    // Resolve the promise with the response data
	resolve(res);
  }).catch((err) => {
	// Handle errors by logging them
	console.log(err);

	// Reject the promise with an empty object
    reject({});
  })
});

// Extract the stories data from the fetched response
const stories:Array<FullStory> =  data.data.data.results;
</script>

<template>
	<div class="main-container">
		<h1 v-if="stories.length>0"><slot></slot></h1>
		<div class="list-container">
			<div v-for="(story, index) in stories" :key="`s`+index" class="story-card">
				<div class="half-container">
					<h2 class="container">{{ story.title }}</h2>
					<p v-if="story.type"><b class="large-text container">Type: </b>{{ story.type }}</p>
					<p class="container">{{ `Modified at ${story.modified}` }}</p>
				</div>
				<div class="half-container">
					<p class="source-tag">{{ story.description ? story.description : 'NO DESCRIPTION'  }}</p> 
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.list-container {
	width: 100%;
	align-content: center;
	justify-content: center;
	display: flex;
	flex-wrap: wrap;
}
.main-container {
	width: 100%;
	align-content: center;
	justify-content: center;
}
.half-container {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	align-content: center;
	width: 50%;
}
.container {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	padding: 15px 0px 0px 0px;
	align-content: center;
	width: 100%;
}

.large-text {
	font-size: large;
	width: 100%;
}

.source-tag {
	padding: 0px 0px 0px 10px;
}

.story-card {
	width: 60vw;
	background: rgb(60, 62, 68);
	overflow: hidden;
	transition: all 0.2s linear;
	border: 5px outset;
	border-color: rgb(124, 124, 124);
	cursor: pointer;
	color: white;
	padding: 0px 0px 15px 0px;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
.status {
	display: flex;
	justify-content: center;
}
.status-icon-r,
.status-icon-g {
	margin: auto 0;
	height: 0.5rem;
	width: 0.5rem;
	margin-right: 0.375rem;
	background: rgb(214, 61, 46);
	border-radius: 50%;
}
.status-icon-g {
	background: rgb(92 199 12);
}
img {
	margin-top: 5%;
	min-height: 350px;
	max-height: 350px;
	max-width: 350px;
	border: 5px outset;
	border-color: rgb(124, 124, 124);
}

.event-card > .title {
	margin: 0;
}
</style>

