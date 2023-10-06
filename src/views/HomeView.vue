<script setup lang="ts">
import type { Serie } from '../types/Serie'
//import TheWelcome from '../components/TheWelcome.vue'
import type {Axios} from 'axios'
import SerieCard from '../components/cards/SerieCard.vue'
import LoadingSpin from '@/components/LoadingSpin.vue';
import { inject, onMounted, onUnmounted, reactive, ref, onErrorCaptured } from 'vue';
import { useRouter } from 'vue-router';

// Import Axios and inject it as a dependency
const axios:Axios|undefined = inject('axios')

// Import the router
const router = useRouter()

// Create an empty array to store series data
const series: Array<Serie> = reactive(new Array<Serie>)

// Create a reactive loading flag
const loading = ref(true)

// Create a reactive page number
const page = ref(1);

// Function to handle scroll events
const onScroll = () => {
  // Calculate scroll position
  let scrollHeight = window.scrollY + window.innerHeight + 1

  // Check if scroll position is at the bottom and not currently loading
  if(scrollHeight > document.body.scrollHeight && !loading.value) {
    fetchSeries()
  }
}

// Function to fetch series data
const fetchSeries = () => {
  // Set loading flag to true
  loading.value = true;

  // Make an Axios GET request to fetch series data
  axios?.get('v1/public/series', {
      params: {
        limit: 20,
        offset: (page.value - 1)*20
      }
    }).then((res: any) => {
      // Append fetched data to the series array
      series.push(...res.data.data.results);
      // Increment the page number
      page.value += 1
    }).catch((err: Error) => {
      // Handle errors by logging them
      console.log(err)
    }).finally(() => {
      // Set loading flag to false after the request is complete
      loading.value = false;
    });

}

// Function to be executed when the component is mounted
const mounted = () => {
  // Fetch series data when the component is mounted
  fetchSeries();

  // Add a scroll event listener to trigger more data loading
  window.addEventListener('scroll', onScroll);
};

// Function to be executed when the component is unmounted
const unmounted = () => {
  // Remove the scroll event listener when the component is unmounted
  window.removeEventListener('scroll', onScroll);
};

// Function to handle error capturing
const onerrorcaptured = () => {
  // Redirect to the error page if an error is captured
  router.replace({ path: '/error' })
}

// Execute the mounted, unmounted, and error cycle hook functions
onMounted(mounted);
onUnmounted(unmounted);
onErrorCaptured(onerrorcaptured);

</script>

<template>
  <div class="container" @scroll.capture="onScroll">
    <SerieCard
      v-for="serie in series"
      :key="serie.id"
      :title="serie.title"
      :type="serie.type"
      :startYear="serie.startYear"
      :endYear="serie.endYear"
      :characters="serie.characters"
      :stories="serie.stories"
      :comics="serie.comics"
      :creators="serie.creators"
      :image="`${serie.thumbnail.path}.${serie.thumbnail.extension}`"
      :id="serie.id"
    />
    <LoadingSpin class="loading" v-if="loading">
    </LoadingSpin>
  </div>
</template>

<style scoped>

.loading {
  width: 100%;
}

.container {
	display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 99vw;
}
</style>
