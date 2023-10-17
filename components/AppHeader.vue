<template>
    <header class="app-header">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <nuxt-link class="navbar-brand" to="/">ラーメン紹介サイト</nuxt-link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/">ホーム</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/menu">メニュー</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/about">お店について</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link to="/contact" class="btn btn-primary">お問い合わせ</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'AppHeader',
  };
  </script>
  
  <style scoped>
  /* ここに必要なスタイルを追加します */
  .app-header {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000; /* 適切なz-indexを設定 */
  }
  
  </style>