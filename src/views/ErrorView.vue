
  
<script setup lang="ts">

</script>

<template>
    <div class="error-page">
      <h1>Error</h1>
      <p>Se ha producido un error.</p>
      <router-link to="/">Volver a la página principal</router-link>
    </div>
  </template>
  
  <style scoped>
  .error-page {
    text-align: center;
    padding: 20px;
  }
  
  h1 {
    font-size: 2rem;
    color: #ff0000;
  }
  
  p {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }
  
  /* Estilos adicionales según tus preferencias */
  </style>
  