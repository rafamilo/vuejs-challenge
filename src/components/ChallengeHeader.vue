<template>
  <header class='ChallengeHeader d-flex align-items-start justify-content-center'>
    <button @click="goToShoppings()">Shoppings</button>
  </header>
</template>

<script>
export default {
  name: 'ChallengeHeader',
  methods: {
    goToShoppings() {
      this.$router.push({ name: 'shoppings' });
    },
  }
};
</script>

<style scoped lang='scss'>
.ChallengeHeader {
  width: 100vw;
  background-color: red;
}
</style>
