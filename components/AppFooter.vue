<template>
  <footer class="app-footer mt-auto py-3 bg-light">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <h5>フォローする</h5>
          <p class="follow-link">
            Twitter: <a href="https://twitter.com/kyoto_tech_" target="_blank">@kyoto_tech_</a><br>
            Instagram: <a href="https://Instagram.com/kyoto_tech_insta" target="_blank">@kyoto_tech_insta</a>
          </p>
        </div>
      </div>
      <hr>
      <p class="text-muted">© 2023 福元グループ</p>
    </div>
  </footer>
</template>
  
<style scoped>
/* ここに必要なスタイルを追加します */
.app-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  line-height: 60px;
  background-color: #f5f5f5;
}

/* p.follow-linkのマージンとパディングを0に設定 */
p.follow-link {
  margin: 0;
  padding: 0;
}
/* a要素のデフォルトスタイルを上書き */
p.follow-link a {
  text-decoration: none; /* リンクの下線をなくす */
  color: black; /* リンクの色を黒に設定 */
}
</style>
