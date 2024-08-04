<script setup>
  import { RouterLink, RouterView, useRoute } from 'vue-router';

  const route = useRoute();
</script>

<template>
  <main>
    <RouterView :key="route.params.slug" />
  </main>
</template>

<style scoped></style>
