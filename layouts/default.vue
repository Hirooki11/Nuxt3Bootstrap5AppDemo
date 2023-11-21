<template>
  <div>
    <AppHeader />

    <!-- メインコンテンツ -->
    <main>
      <slot />
      <!-- Nuxtのページコンポーネントが表示されるスロット -->
    </main>
    
    <AppFooter />
  </div>
</template>

<script>


</script>

<style scoped>
/* お好みのスタイリングを追加 */
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
}

main {
  padding: 20px;
}
</style>