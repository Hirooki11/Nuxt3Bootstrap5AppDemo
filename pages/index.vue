<template>
  <div class="container">
    <Header />
    <NuxtPage />
    <Footer />
    <Appalert>
    </Appalert>
  </div>
</template>

<script>
import customFunction from '@/assets/custom.js';

export default {
  mounted() {
    customFunction();

  }
}
</script>