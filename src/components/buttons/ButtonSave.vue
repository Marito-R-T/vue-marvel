<script setup lang="ts">
import type { Serie } from '@/types/Serie';
import { useSeriesStore } from '@/stores/series';

const props = defineProps<{
  serie: Serie
}>()

const store = useSeriesStore()

const saveResource = () => {
  if(store.addSerie(props.serie)){
    alert("Saved Items Reach the limit")
    console.log(isAdded);
  }
  console.log(isAdded);
}

</script>

<template>
  <button class="save-button" @click="saveResource">Save</button>
</template>

<style scoped>
.save-button {
  background-color: #4CAF50; /* Color de fondo */
  color: white; /* Color de texto */
  width: 100%;
  border: none; /* Sin borde */
  padding: 10px 20px; /* Espaciado interno */
  border-radius: 5px; /* Bordes redondeados */
  cursor: pointer; /* Cambiar el cursor al pasar el mouse */
}

/* Estilos cuando el mouse está sobre el botón */
.save-button:hover {
  background-color: #45a049; /* Cambiar el color de fondo al pasar el mouse */
}
</style>
