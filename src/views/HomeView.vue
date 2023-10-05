<script setup lang="ts">
import type { Serie } from '../types/Serie'
//import TheWelcome from '../components/TheWelcome.vue'
import type {Axios} from 'axios'
import SerieCard from '../components/cards/SerieCard.vue'
import LoadingSpin from '@/components/LoadingSpin.vue';
import { inject, onMounted, onUnmounted, reactive, ref, onErrorCaptured } from 'vue';
import { useRouter } from 'vue-router';

const axios:Axios|undefined = inject('axios')
const router = useRouter()
const series: Array<Serie> = reactive(new Array<Serie>)

const loading = ref(true)
const page = ref(1);

const onScroll = (e: Event) => {
  let scrollHeight = window.scrollY + window.innerHeight + 1
  if(scrollHeight > document.body.scrollHeight) {
    fetchSeries()
  }
}

const fetchSeries = () => {
  loading.value = true;
  axios?.get('v1/public/series', {
      params: {
        limit: 20,
        offset: page.value - 1
      }
    }).then((res: any) => {
      series.push(...res.data.data.results);
      page.value += 1
      console.log(series)
    }).catch((err: Error) => {
      console.log(err)
    }).finally(() => {
      loading.value = false;
    });

}

const mounted = () => {
  fetchSeries();
  window.addEventListener('scroll', onScroll);
};

const unmounted = () => {
  window.removeEventListener('scroll', onScroll);
};

const onerrorcaptured = () => {
  router.replace({ path: '/error' })
}

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
  width: 97vw;
}
</style>
