<template>
    <aside class="app-aside">
      <div class="p-3">
        <h4>ばり馬</h4>
        <img src="~assets/barilogo.png" alt="バリウマのロゴ">"
        <bariuma />
        <ul class="list-group">
          <li class="list-group-item">豚骨ラーメン</li>
          <li class="list-group-item">醤油ラーメン</li>
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