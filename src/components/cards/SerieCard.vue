<script setup lang="ts">

import { Characters } from '@/types/Character';
import { Comics } from '@/types/Comic';
import { Creators } from '@/types/Creator';
import { Stories } from '@/types/Story';
import { computed, onMounted } from 'vue';

const props = defineProps<{
	title: String,
	type: String,
	image: String,
	startYear: Number,
	endYear: Number,
	characters: Characters,
	creators: Creators,
	stories: Stories,
	comics: Comics,
	id: Number
}>()

const finishYear = computed(() => props.endYear === 2099 ? 'and continuing' : `Finish Year: ${props.endYear}`)
const totalCharacters = computed(() => props.characters.available ? `${props.characters.available} characters`: '');
const totalCreators = computed(() => props.creators.available ? `${props.creators.available} creators`: '');
const totalStories = computed(() => props.stories.available ? `${props.stories.available} stories`: '');
const totalComics = computed(() => props.comics.available ? `${props.comics.available} comics`: '');

const mounted = () => {
};

onMounted(mounted);

</script>

<template>
	<router-link
			class="event-link"
			:to="`/detail/${id}`"
		>
		<div class="event-card">
			<img :src="image.toString()" alt="Card image" />
			<h2 class="container-data">{{ title }}</h2>
			<p v-if="type"><b class="large-text container-data">Tipo: </b>{{ type }}</p>
			<p class="container-data">{{ `Year started: ${startYear} and ${finishYear}` }}</p>
			<div class="container-data">
				<b class="large-text">Sources</b>
				<p class="source-tag">{{ totalCharacters  }}</p> 
				<p class="source-tag">{{ totalCreators  }}</p>
				<p class="source-tag">{{ totalStories  }}</p>
				<p class="source-tag">{{ totalComics  }}</p>
			</div>
		</div>
	</router-link>
</template>

<style scoped>
.container-data {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	padding: 15px 0px 0px 0px;
	align-content: center;
}

.large-text {
	padding: 20px 0px 0px 10px;
	font-size: large;
	width: 100%;
}

.source-tag {
	padding: 0px 0px 0px 10px;
}

.event-card {
	width: 350px;
	height: 100%;
	background: rgb(60, 62, 68);
	border-radius: 20px;
	overflow: hidden;
	transition: all 0.2s linear;
	cursor: pointer;
	color: white;
	padding: 0px 0px 15px 0px;
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
.event-card:hover {
	transform: scale(1.01);
	box-shadow: 0 3px 12px 0 rgba(24, 24, 24, 0.2),
		0 1px 15px 0 rgba(0, 0, 0, 0.19);
	background-color: rgb(221, 146, 146);
	color: black;
}
.event-card > .title {
	margin: 0;
}
.event-link {
	color: black;
	text-decoration: none;
	background-color: rgb(32, 32, 32);
	font-weight: 100;
	padding: 10px 15px;
	border-radius: 20px;
}

.event-link:hover {
	color: rgb(22, 22, 22);
	text-decoration: none;
	background-color: rgb(32, 32, 32);
	font-weight: 100;
	padding: 10px 15px;
}
</style>

