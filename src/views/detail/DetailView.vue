<script setup lang="ts">
import { defineAsyncComponent, onErrorCaptured } from 'vue';
import LoadingSpin from '@/components/LoadingSpin.vue';
import { useRouter } from 'vue-router';

// Import the router
const router = useRouter()

// Define an async component for 'SerieProfile.vue'
const ProfileSerie = defineAsyncComponent(() =>
  import('@/components/profiles/SerieProfile.vue')
);

// Function to be executed when an error is captured
const onerrorcaptured = () => {
  // Redirect to the error page using the router
  router.replace({ path: '/error' })
}

// Execute the 'onerrorcaptured' hook when an error is captured
onErrorCaptured(onerrorcaptured);

</script>

<template>
  <div class="container">
    <Suspense >
      <template #default>
        <ProfileSerie></ProfileSerie>
      </template>
      <template #fallback>
        <LoadingSpin class="loading"></LoadingSpin>
      </template>
    </Suspense>
  </div>
</template>

<style>

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