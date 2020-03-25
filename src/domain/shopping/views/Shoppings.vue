<template>
  <div class="Shoppings d-flex">
    <draggable
      class="columns d-flex"
      v-model="columns"
      group="columns"
      @start="drag=true"
      @end="drag=false"
    >
      <column
        class="column"
        v-for="(column, index) in columns"
        :key="index"
        :columnIndex="index"
        :column="column"
      />
      <div
        class="plus-column d-flex align-items-center justify-content-center"
        @click="addColumn()"
      >
        <i class="fas fa-plus" />
      </div>
    </draggable>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import draggable from "vuedraggable";
import column from "../components/column";
import Column from "../models/Column";
const { mapGetters, mapMutations } = createNamespacedHelpers("Shopping");

export default {
  name: "Shoppings",
  components: {
    draggable,
    column
  },
  computed: {
    ...mapGetters(["getColumns", "getLoadingColumns"]),
    columns: {
      get() {
        return this.getColumns;
      },
      set(value) {
        return this.SET_COLUMNS(value);
      }
    }
  },
  methods: {
    ...mapMutations(["PUSH_COLUMN", "SET_COLUMNS"]),
    addColumn() {
      return this.PUSH_COLUMN(new Column());
    }
  }
};
</script>

<style scoped lang='scss'>
.Shoppings {
  .columns {
    padding: 3vh 4vw 3vh 4vw;
    height: 95vh;
    min-width: 100%;
    overflow-x: scroll;

    @media (min-width: 600px) {
      padding-left: 2vw;
    }
  }

  .plus-column {
    cursor: pointer;
    -webkit-box-shadow: 0px 12px 9px -5px rgba(0, 0, 0, 0.41);
    -moz-box-shadow: 0px 12px 9px -5px rgba(0, 0, 0, 0.41);
    box-shadow: 0px 12px 9px -5px rgba(0, 0, 0, 0.41);

    &:active {
      background-color: red;
      -webkit-box-shadow: 0px 10px 9px -5px rgba(0, 0, 0, 0.41);
      -moz-box-shadow: 0px 10px 9px -5px rgba(0, 0, 0, 0.41);
      box-shadow: 0px 10px 9px -5px rgba(0, 0, 0, 0.41);
    }

    margin-left: -20px;
    background-color: #f16d3f;
    border-radius: 50%;
    color: #fff;
    min-width: 70px;
    max-width: 70px;
    min-height: 70px;
    max-height: 70px;
    font-size: 40px;
  }
}
</style>
