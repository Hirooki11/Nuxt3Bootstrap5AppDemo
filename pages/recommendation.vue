<template>
  <div class="recommendation-container">
    <h1>私のおすすめは"ばり馬"です</h1>
    <p>これは僕の地元'和歌山県'にあるお店です</p>
    <Bariuma />
  </div>
</template>

<script>
export default {
  name: 'About',
};
</script>

<style scoped>
.recommendation-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}
</style>