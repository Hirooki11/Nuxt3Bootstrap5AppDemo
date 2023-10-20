<template>
    <aside class="app-aside">
      <div class="p-3">
        <h4>ばり馬</h4>
        <img src="images/barilogo.png" alt="ロゴ" data-v-89649d91="" style="
    width: 200px;
">
        <bariuma />
        <ul class="list-group">
          <li class="list-group-item">ばり馬</li>
          <li class="list-group-item">ばり濃</li>
          <li class="list-group-item">味噌ラーメン</li>
          <li class="list-group-item">塩ラーメン</li>
         
        </ul>
      </div>
    </aside>
  </template>
  
  <script>
  export default {
    name: 'AppAside',
  };
  </script>
  
  <style scoped>
  /* ここに必要なスタイルを追加します */
  .app-aside {
    flex: 0 0 200px; /* サイドバーの幅を設定 */
  }
  </style>