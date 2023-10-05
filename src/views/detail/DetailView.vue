<script setup lang="ts">
import { inject, onBeforeMount, reactive, ref } from 'vue';
import {Axios} from 'axios'
import type { Serie } from '@/types/Serie';
import { useRoute } from 'vue-router';

const axios:Axios|undefined = inject('axios')
const route = useRoute()

const serie:any = reactive({})
const loading = ref(true)

axios?.get(`v1/public/series/${route.params.id}`, {
  }).then((res: any) => {
    console.log(res)
    let s: Serie = {...res.data.data.results[0]};
    serie.id = s.id;
    serie.characters = s.characters;
    serie.creators = s.creators;
    serie.comics = s.comics;
    serie.stories = s.stories;
    serie.endYear = s.endYear;
    serie.startYear = s.startYear;
    serie.type = s.type;
    serie.thumbnail = s.thumbnail;
    serie.title = s.title;
  }).catch((err: Error) => {
    console.log(err)
  }).finally(() => {
    loading.value = false;
  });

//onBeforeMount(onbeforemount),

</script>

<template>
  <div class="detail">
    <h1>This is an about page {{ serie.id }}</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .detail {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>