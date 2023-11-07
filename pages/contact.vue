<template>
  <div class="contact-container">
    <h1>お問い合わせ</h1>
    <p>ご質問やご意見がありましたら、以下のフォームからご連絡ください。</p>
    <form>
      <div>
        <label for="name">お名前:</label>
        <input type="text" id="name" name="name" required>
      </div>
      <div>
        <label for="email">メールアドレス:</label>
        <input type="email" id="email" name="email" required>
      </div>
      <div>
        <label for="message">メッセージ:</label>
        <textarea id="message" name="message" rows="4" required></textarea>
      </div>
      <button type="submit">送信</button>
    </form>
    <p>もしくは、以下の連絡先までご連絡ください。</p>
    <p>福元洋貴</p>
    <p>電話番号: 075-366-3168</p>
    <p>メールアドレス: info@kyoto-tech.ac.jp</p>
  </div>
</template>

<script>
export default {
  name: 'Contact',
};
</script>

<style scoped>
.contact-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}
</style>
