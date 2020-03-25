<template>
  <div class="Shoppings d-flex flex-column">
    <draggable
      class="columns d-flex"
      v-model="columns"
      group="columns"
      @start="drag=true"
      @end="drag=false"
    >
      <column class="column" v-for="column in columns" :key="column.id" :column="column" />
    </draggable>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import column from "../components/column";
import draggable from "vuedraggable";
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
    ...mapMutations([
      "PUSH_COLUMN",
      "SET_COLUMNS",
      "REMOVE_COLUMN",
      "PUSH_SHOPPING",
      "REMOVE_SHOPPING",
      "SET_LOADING_COLUMNS"
    ])
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
}
</style>
