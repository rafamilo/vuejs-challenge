<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <button @click="goToShoppings()">Shoppings</button>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    goToShoppings() {
      this.$router.push({ name: 'shoppings' });
    },
  }
}
</script>