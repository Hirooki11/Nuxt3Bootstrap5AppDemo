<template>
    <div class="menu-page">
      <h1>メニュー</h1>
      <div class="menu-list">
        <div class="menu-item">
          <h3>豚骨ラーメン</h3>
          <p>濃厚な豚骨スープに麺とチャーシューがたっぷり入った一杯。</p>
        </div>
        <div class="menu-item">
          <h3>醤油ラーメン</h3>
          <p>しっかりとした醤油ベースのスープが特徴のラーメン。</p>
        </div>
        <div class="menu-item">
          <h3>味噌ラーメン</h3>
          <p>まろやかな味噌味のスープに具材が絶妙にマッチした一杯。</p>
        </div>
        <!-- 他のラーメンの種類を追加 -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    // 必要に応じてコンポーネントのオプションを追加します
  };
  </script>
  
  <style scoped>
  .menu-page {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
  }
  
  .menu-item {
    margin-bottom: 20px;
  }
  
  .menu-item h3 {
    color: #d9534f; /* ラーメンをイメージする赤い色 */
  }
  
  .menu-item p {
    color: #555; /* テキストのデフォルト色を設定 */
  }
  </style>