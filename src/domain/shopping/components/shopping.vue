<template>
  <div class="shopping d-flex align-items-center justify-content-start mt-3 position-relative">
    <div class="d-flex align-items-center justify-content-center">
      <i class="fas fa-shopping-cart" />
    </div>
    {{shopping.text}}
    <i class="fas fa-info-circle position-absolute" :title="shopping.id"/>
  </div>
</template>

<script>
export default {
  name: "shopping",
  props: { shopping: { type: Object, default: () => {} } }
};
</script>

<style scoped lang='scss'>
.shopping {
  cursor: pointer;
  background-color: #e8eaf6;
  padding: 1px 15px;
  min-width: 100%;
  min-height: 35px;
  max-height: 35px;
  div:first-child {
    background-color: #616161;
    color: #fff;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    margin-right: 10px;
    .fa-shopping-cart {
      margin-left: -1px;
      width: 15px;
      height: 15px;
    }
  }
  .fa-info-circle {
    right: 0;
    margin-right: 12px;
    color: #6d6d6d;
    width: 12px;
    height: 12px;
  }
}
</style>
