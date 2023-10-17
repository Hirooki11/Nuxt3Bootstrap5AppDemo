<template>
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <nuxt-link class="navbar-brand" to="/">福元洋貴の選んだラーメン</nuxt-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <nuxt-link class="nav-link" to="/">ホーム <span class="sr-only">(現位置)</span></nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/special-ramen">特製ラーメン</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/spicy-ramen">激辛ラーメン</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/healthy-ramen">ヘルシーラーメン</nuxt-link>
            </li>
          </ul>
        </div>
      </nav>
      <nuxt />
    </div>
  </template>
  
  <script>
  export default {
    name: 'DefaultLayout',
  };
  </script>
  
  <style>
.福元洋貴の選んだラーメン {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 3rem;
  padding: 10rem;
}
  </style>