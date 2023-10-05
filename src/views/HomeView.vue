<script setup lang="ts">
import type { Serie } from '../types/Serie'
//import TheWelcome from '../components/TheWelcome.vue'
import type {Axios} from 'axios'
import SerieCard from '../components/cards/SerieCard.vue'
import { inject, onMounted, reactive } from 'vue';

const axios:Axios|undefined = inject('axios')

const series: Array<Serie> = reactive(new Array<Serie>)

const mounted = () => {
  axios?.get('v1/public/series', {
    params: {
      titleStartsWith:"Hulk"
    }
  }).then((res: any) => {
    console.log(res);
    console.log(res.data.data.results)
    series.push(...res.data.data.results);
    console.log(series)
  }).catch((err: Error) => {
    console.log(err)
  });
};

onMounted(mounted);

</script>

<template>
  <div class="container">
    <SerieCard
      v-for="serie in series"
      :key="serie.id"
      :title="serie.title"
      type="type"
      :years="5"
      relatedResources="related"
      image="image"
      :id="serie.id"
    />
  </div>
</template>

<style scoped>
.container {
	display: inline;
  justify-content: center;
  width: 1200px;
}
</style>
