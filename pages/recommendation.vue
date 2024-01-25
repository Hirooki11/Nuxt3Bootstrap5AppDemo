<template>
  <div>
    <h1>{{ bariuma.title }}</h1>
    <h4>{{ bariuma.description }}</h4>
    <Bariuma />
  </div>
</template>

<script setup lang="ts">
const bariuma = useBariuma()
</script>

