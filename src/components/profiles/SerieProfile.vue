<script setup lang="ts">
import { computed, defineAsyncComponent, inject, onErrorCaptured, onMounted, ref } from 'vue';
import {Axios} from 'axios'
import type { Serie } from '@/types/Serie';
import { useRoute, useRouter } from 'vue-router';
import type { MarvelResponse } from '@/types/MarvelResponse';
import { useHistoryStore, useSeriesStore } from '@/stores/series';
import LoadingSpin from '@/components/LoadingSpin.vue';

// Import the Axios instance and inject it as a dependency
const axios:Axios|undefined = inject('axios')


// Import store modules and router utilities
const store = useSeriesStore()
const storeHistory = useHistoryStore()
const route = useRoute()
const router = useRouter()

// Define async components for various card types
const StoryCard = defineAsyncComponent(() =>
  import('@/components/cards/StoryCard.vue')
);
const CreatorCard = defineAsyncComponent(() =>
  import('@/components/cards/CreatorCard.vue')
);
const ComicCard = defineAsyncComponent(() =>
  import('@/components/cards/ComicCard.vue')
);
const CharacterCard = defineAsyncComponent(() =>
  import('@/components/cards/CharacterCard.vue')
);

// Fetch data for a Marvel series using Axios
const data:MarvelResponse = await new Promise((resolve, reject) => {
  axios?.get(`v1/public/series/${route.params.id}`, {}).then((res) => {
    resolve(res);
  }).catch((err) => {
    console.log(err);
    reject({});
  })
});

// Extract the series data from the fetched response
const serie:Serie =  data.data.data.results[0];

// Create a reactive flag to check if the series is added to the store
const isAdded = ref(computed(() => {
  let series = store.getSeries;
  return series.find((s) => s.id === serie.id) ? true : false
}));

// Computed properties to display totals for various data categories
const totalCharacters = computed(() => serie.characters.available ? `${serie.characters.available} characters`: '');
const totalCreators = computed(() => serie.creators.available ? `${serie.creators.available} creators`: '');
const totalStories = computed(() => serie.stories.available ? `${serie.stories.available} stories`: '');
const totalComics = computed(() => serie.comics.available ? `${serie.comics.available} comics`: '');

// Function to save the series to the store
const saveResource = () => {
  if(!store.addSerie(serie)){
    alert("Saved Items Reach the limit")
  }
}

// Function to handle error capturing
const onerrorcaptured = () => {
  router.replace({ path: '/error' })
}

// Function to be executed when the component is mounted
const mounted = () => {
  // Add the series to the history store
  storeHistory.addSerie(serie);
};

// Execute the mounted and error capturing functions when appropriate
onMounted(mounted);
onErrorCaptured(onerrorcaptured);

</script>

<template>
  <div class="card">
    <div class="title">
      <button :class="isAdded ? 'saved-button':'save-button'" @click="saveResource">Save</button>
    </div>
    <h2 class="title">
      {{ serie.title }}
    </h2>
		<img :src="`${serie.thumbnail.path}.${serie.thumbnail.extension}`" alt="Card image" />
    <div>
      <p v-if="serie.type" class="pt"><b class="large-text pt">Tipo: </b>{{ serie.type }}</p>
      <p class="pt">{{ `Year started: ${serie.startYear} and ${serie.endYear}` }}</p>
      <div class="pt">
        <b class="large-text pt">Sources</b>
        <p class="source-tag pt">{{ totalCharacters  }}</p> 
        <p class="source-tag pt">{{ totalCreators  }}</p>
        <p class="source-tag pt">{{ totalStories  }}</p>
        <p class="source-tag pt">{{ totalComics  }}</p>
      </div>
    </div>
  
  </div>
  <div class="detail">
    <Suspense >
      <template #default>
        <StoryCard>Related Stories</StoryCard>
      </template>
      <template #fallback>
        <LoadingSpin class="loading"></LoadingSpin>
      </template>
    </Suspense>
    <Suspense >
      <template #default>
        <CreatorCard>Related Creators</CreatorCard>
      </template>
      <template #fallback>
        <LoadingSpin class="loading"></LoadingSpin>
      </template>
    </Suspense>
    <Suspense >
      <template #default>
        <ComicCard>Related Comics</ComicCard>
      </template>
      <template #fallback>
        <LoadingSpin class="loading"></LoadingSpin>
      </template>
    </Suspense>
    <Suspense >
      <template #default>
        <CharacterCard>Related Characters</CharacterCard>
      </template>
      <template #fallback>
        <LoadingSpin class="loading"></LoadingSpin>
      </template>
    </Suspense>
  </div>
</template>

<style scoped>
.pt{
	padding: 20px 0px 0px 10px;
}

.large-text {
	padding: 20px 0px 0px 10px;
	font-size: large;
	width: 100%;
}

.source-tag {
	padding: 0px 0px 0px 10px;
}
.title {
	padding: 15px 0px 0px 0px;
}

.card {
  position: relative;
  height: 100vh;
  width: 30%;
  align-content: center;
  justify-content: center;
  text-align: center;
}

.detail {
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

img {
	margin-top: 5%;
	min-height: 350px;
	max-height: 350px;
	max-width: 350px;
	border: 5px outset;
	border-color: rgb(124, 124, 124);
}

.save-button {
  background-color: #474747; /* Color de fondo */
  color: white; /* Color de texto */
  width: 100%;
  border: none; /* Sin borde */
  padding: 10px 20px; /* Espaciado interno */
  border-radius: 5px; /* Bordes redondeados */
  cursor: pointer; /* Cambiar el cursor al pasar el mouse */
}

/* Estilos cuando el mouse está sobre el botón */
.save-button:hover {
  background-color: #858585; /* Cambiar el color de fondo al pasar el mouse */
}
.saved-button {
  background-color: #45a049;
  color: white; /* Color de texto */
  width: 100%;
  border: none; /* Sin borde */
  padding: 10px 20px; /* Espaciado interno */
  border-radius: 5px; /* Bordes redondeados */
  cursor: pointer; /* Cambiar el cursor al pasar el mouse */
}

.saved-button:hover {
  background-color: #54d15a; /* Cambiar el color de fondo al pasar el mouse */
}
</style>