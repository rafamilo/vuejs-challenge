<template>
  <header class="ChallengeHeader d-flex align-items-center justify-content-start">
    <div
      class="shopping d-flex align-items-center justify-content-center"
      @click="goToShoppings()"
    >Shoppings</div>
  </header>
</template>

<script>
export default {
  name: "ChallengeHeader",
  methods: {
    goToShoppings() {
      this.$router.push({ name: "shoppings" });
    }
  }
};
</script>

<style scoped lang='scss'>
.ChallengeHeader {
  height: 5vh;
  width: 100vw;
  background-color: #dcbdff;
  .shopping {
    cursor: pointer;
    color: #fff;
    font-weight: bold;
    padding: 5px;
    background-color: transparent;
    height: 100%;

    &:hover {
      background-color: rgba(0,0,0, 0.2);
    }
  }
}
</style>
