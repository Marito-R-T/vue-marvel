<script setup lang="ts">
import { defineAsyncComponent, onErrorCaptured } from 'vue';
import LoadingSpin from '@/components/LoadingSpin.vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const ProfileSerie = defineAsyncComponent(() =>
  import('@/components/profiles/SerieProfile.vue')
);

const onerrorcaptured = () => {
  router.replace({ path: '/error' })
}

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