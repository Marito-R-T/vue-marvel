<script setup lang="ts">
import type { FullCharacter } from '@/types/Character';
import type { MarvelResponse } from '@/types/MarvelResponse';
import type { FullStory, Story } from '@/types/Story';
import type { Axios } from 'axios';
import { inject } from 'vue';
import { useRoute } from 'vue-router';

const axios:Axios|undefined = inject('axios')
const route = useRoute()

const data:MarvelResponse = await new Promise((resolve, reject) => {
  axios?.get(`v1/public/series/${route.params.id}/characters`, {}).then((res) => {
    console.log(res);
    resolve(res);
  }).catch(() => {
    reject({});
  })
});
const characters:Array<FullCharacter> =  data.data.data.results;
</script>

<template>
	<div class="main-container">
		<h1 v-if="characters.length>0">Related Characters</h1>
		<div class="list-container">
			<div v-for="(character, index) in characters" :key="`s`+index" class="story-card">
				<div class="half-container">
					<h2 class="container">{{ character.name }}</h2>
					<p class="container">{{ `Modified at ${character.modified}` }}</p>
				</div>
				<div class="half-container">
					<p class="source-tag">{{ character.description ? character.description : 'NO DESCRIPTION'  }}</p> 
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

