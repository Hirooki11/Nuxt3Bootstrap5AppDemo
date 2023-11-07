<template>
    <header class="app-header">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container  d-flex justify-content-center align-items-center" style="height: 100vh;">
    <img src="images/エントランス.png" alt="エントランス" class="img-fluid" style="max-width: 50%;" />">
          <nuxt-link class="navbar-brand" to="/">京都デザイン＆テクノロジー専門学校</nuxt-link>

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
                <NuxtLink class="nav-link" to="/home">ホーム</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" to="/major">専攻一覧</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" to="/about">学校について</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/contact" class="btn btn-primary">お問い合わせ</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </template>
  
  <script>

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