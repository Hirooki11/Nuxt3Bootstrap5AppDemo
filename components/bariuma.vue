<template>
    <div class="bariuma-container">
      <h2>バリウマ！ラーメン屋</h2>
      <p>バリウマ！ラーメン屋は新鮮な食材を使った本格派ラーメンが自慢のお店です。</p>
      <p>当店自慢のスープは一日煮込んだ豚骨と鶏ガラをベースにしており、秘伝のタレと絶妙なバランスで調理しています。</p>
      <p>是非、本場の味をご堪能ください。</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Bariuma',
  };
  </script>
  
  <style scoped>
  .bariuma-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  h2 {
    color: #d9534f; /* ラーメンをイメージする赤い色 */
  }
  
  p {
    color: #555; /* テキストのデフォルト色を設定 */
    line-height: 1.6;
    margin-bottom: 15px;
  }
  </style>