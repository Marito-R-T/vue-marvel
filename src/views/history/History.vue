<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useHistoryStore, useSeriesStore } from '@/stores/series';
import SerieCard from '@/components/cards/SerieCard.vue';
import HistorySerieCard from '@/components/cards/HistorySerieCard.vue';

const store = useSeriesStore()
const storeHistory = useHistoryStore()
</script>

<template>
  <div class="container">
    <div class="saved-container">
      <h1 class="full-width">SAVED</h1>
      <SerieCard
        v-for="serie in store.getSeries"
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
    </div>
    <div class="history-container">
      <h1 class="full-width">HISTORY</h1>
      <HistorySerieCard 
        v-for="(serie, index) in storeHistory.getSeries" 
        :key="'h'+index"
        :id="serie.id"
        :title="serie.title"
        :image="`${serie.thumbnail.path}.${serie.thumbnail.extension}`"
      >
      </HistorySerieCard>
    </div>
  </div>
</template>

<style scoped>
.full-width {
  width: 100%;
	padding: 20px 0px 20px 10px;
}

.container {
	display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 98vw;
}

.saved-container {
	display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 60%;
}
.history-container {
  width: 40%;
}
</style>