<template>
  <div class="column">
    <b-input-group slot="header">
      <template v-slot:append>
        <b-input-group-text>Go!</b-input-group-text>
      </template>
      <b-form-input></b-form-input>
    </b-input-group>
    <div class="order d-flex align-items-center justify-content-end">
      <span>Order</span>
      <i class="fas fa-sort-up" />
      <i class="fas fa-sort-down" />
    </div>
    <draggable v-model="column.shoppings" group="shoppings" @start="drag=true" @end="drag=false">
      <shopping v-for="shopping in column.shoppings" :key="shopping.id" :shopping="shopping" />
    </draggable>
  </div>
</template>

<script>
import shopping from "./shopping";
import draggable from "vuedraggable";

export default {
  name: "column",
  components: {
    shopping,
    draggable
  },
  props: { column: { type: Object, default: () => {} } }
};
</script>

<style scoped lang='scss'>
.column {
  padding: 10px;
  margin-right: 10vw;
  overflow-y: scroll;
  min-height: 80vh;
  min-width: 70vw;
  border: thin solid #000;

  @media (min-width: 600px) {
    min-width: 20vw;
    margin-right: 4vw;
  }

  b-input-group {
    min-width: 100%;
    border-radius: 5px;
  }

  .order {
    span {
      display: block;
      margin-right: 10px;
      margin-bottom: -5px;
    }
    .fa-sort-up {
      margin-bottom: -20px;
    }
    .fa-sort-down {
      margin-top: -15px;
    }
    svg {
      font-size: 40px;
    }
  }
}
</style>
