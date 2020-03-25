<template>
  <div class="shopping">{{shopping.text}}</div>
</template>

<script>
export default {
  name: "shopping",
  props: { shopping: { type: Object, default: () => {} } }
};
</script>

<style scoped lang='scss'>
.shopping {
}
</style>
