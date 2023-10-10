<template>
  <div class="container">
    <h1>Hello Good morning</h1>
    <p>おはようございます</p>
    <NuxtPage />
    <Appalert>
    </Appalert>
  </div>
</template>

<script>
export default {
data() {
   return {
     title: 'ふくもと',
     description: '私の説明ですとまと'
   }
  },
  methods: {
    handleClick() {
  print(hello)
     }
    }
  }
</script>