<template>
  <div class="detail">
    <h1>This is an about page {{ $route.params.id }}</h1>
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