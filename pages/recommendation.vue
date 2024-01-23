<template>
  <div style="font-size: 20px;">
    <h1>{{ bariuma.title }}</h1>
    <h4>{{ bariuma.description }}</h4>
    <Bariuma />
  </div>
</template>

<script>
export default {
  name: 'About',
};


</script>

<script setup lang="ts">
const bariuma = useBariuma()
</script>