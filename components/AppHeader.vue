<template>
  <header class="app-header">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container d-flex justify-content-between align-items-center" style="height: 100vh;">


        <button class="navbar-toggler" :type="'button'" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <!-- ホーム -->
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/home">ホーム</nuxt-link>
            </li>
            <!-- 専攻一覧 -->
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/major">専攻一覧</nuxt-link>
            </li>
            <!-- 学校について -->
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/about">学校について</nuxt-link>
            </li>
            <!-- お問い合わせ -->
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

</script>

<style></style>
