<template>
  <div>
    <AppHeader />
    <main>
      <AppAside />
    </main>
    <AppFooter />
    
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue';
import AppAside from '~/components/AppAside.vue';
import AppFooter from '~/components/AppFooter.vue';

export default {
  components: {
    AppHeader,
    AppAside,
    AppFooter,
  },
};
</script>

<style>
/* ここに必要なスタイルを追加します */
</style>