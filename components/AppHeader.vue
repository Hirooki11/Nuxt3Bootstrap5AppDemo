<template>
  <header class="app-header">
    <div class="container">
      <!-- ヘッダーのコンテンツ -->
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <!-- トグルボタン -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- ナビゲーションリスト -->
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <!-- ホーム -->
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/home">ホーム</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/introduction">紹介</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/recommendation">おすすめ！</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/contact">お問い合わせ</nuxt-link>
            </li>
            <!-- 他のナビゲーションアイテムを追加 -->
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  // コンポーネントのロジックやプロパティなど
};
</script>

<style scoped>
.app-header {
  background-color: #f8f9fa; /* お好みの背景色 */
  padding: 15px 0; /* 上下のパディング */
}

.container {
  max-width: 1140px; /* お好みの最大幅 */
  margin: 0 auto; /* 中央寄せ */
}
</style>
