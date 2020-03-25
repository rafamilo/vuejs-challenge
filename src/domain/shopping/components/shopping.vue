<template>
  <div class="shopping d-flex align-items-center justify-content-start mt-3 position-relative">
    <div class="d-flex align-items-center justify-content-center">
      <i class="fas fa-shopping-cart" />
    </div>
    {{shopping.text}}
    <i class="fas fa-info-circle position-absolute" :title="shopping.id" />
    <div class="remove-shopping position-absolute" @click="removeShopping()">
      <i class="fas fa-times"/>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapMutations } = createNamespacedHelpers("Shopping");

export default {
  name: "shopping",
  props: {
    shopping: { type: Object, default: () => {} },
    columnIndex: { type: Number },
    shoppingIndex: { type: Number }
  },
  methods: {
    ...mapMutations(["REMOVE_SHOPPING"]),
    removeShopping() {
      console.log(this.columnIndex, this.shoppingInde);
      this.REMOVE_SHOPPING({
        columnIndex: this.columnIndex,
        shoppingIndex: this.shoppingIndex
      });
    }
  }
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
    right: 30px;
  }
  .remove-shopping {
    right: 0;
    margin-right: 12px;
    color: #6d6d6d;
  }
}
</style>
