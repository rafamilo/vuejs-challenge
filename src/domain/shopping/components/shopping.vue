<template>
  <div class="shopping d-flex align-items-center justify-content-between mt-3"><i>C</i> {{shopping.text}} <i>i</i></div>
</template>

<script>
export default {
  name: "shopping",
  props: { shopping: { type: Object, default: () => {} } }
};
</script>

<style scoped lang='scss'>
.shopping {
  background-color: lightblue;
  padding: 2px 15px;
  min-width: 100%;
  min-height: 35px;
  max-height: 35px;
}
</style>
