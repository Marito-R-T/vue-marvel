<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import SerieCard from '../components/cards/SerieCard.vue'
import { Serie } from '../types/Serie.ts'

const series: Serie[] = []

</script>

<template>
  <main>
    <SerieCard
      v-for="serie in series"
      :key="serie.id"
      title="title"
      type="type"
      :years="5"
      relatedResources="related"
      image="image"
      :id="1"
    >

    </SerieCard>
    <!--<TheWelcome />-->
  </main>
</template>
