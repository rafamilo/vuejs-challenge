<template>
  <div class="column">
    <b-button class="remove-column" pill size="sm" variant="success" @click="removeColumn()">
      <i class="fas fa-times" />
    </b-button>
    <b-input-group slot="header" append="Go!">
      <b-form-input type="text" placeholder="Text" v-model="textFilter"></b-form-input>
    </b-input-group>

    <div class="order d-flex align-items-center justify-content-between pt-2">
      <b-button pill size="sm" variant="success" @click="addShopping()">
        <i class="fas fa-plus" />
      </b-button>
      <div class="text d-flex align-items-center justify-content-end">
        <span>Order</span>
        <span @click="orderAscShoppings(true)">
          <i class="fas fa-sort-up" />
        </span>
        <span @click="orderAscShoppings(false)">
          <i class="fas fa-sort-down" @click="orderAscShoppings(false)" />
        </span>
      </div>
    </div>
    <draggable v-model="column.shoppings" group="shoppings" @start="drag=true" @end="drag=false">
      <shopping
        v-for="(shopping, index) in filteredShoppings"
        :key="index"
        :shoppingIndex="index"
        :columnIndex="columnIndex"
        :shopping="shopping"
      />
      <div class="footer mt-3" slot="footer" />
    </draggable>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import shopping from "./shopping";
import draggable from "vuedraggable";
import Shopping from "../models/Shopping";
const { mapMutations } = createNamespacedHelpers("Shopping");

export default {
  name: "column",
  components: {
    shopping,
    draggable
  },
  props: {
    column: { type: Object, default: () => {} },
    columnIndex: { type: Number, required: true }
  },
  data() {
    return {
      textFilter: "",
      filteredShoppings: this.column.shoppings
    };
  },
  watch: {
    textFilter: function(text) {
      this.filterShoppingsByText(text);
    }
  },
  methods: {
    ...mapMutations(["PUSH_SHOPPING", "REMOVE_COLUMN"]),
    addShopping() {
      const randId = Math.ceil(Math.random() * 1000);
      this.PUSH_SHOPPING({
        columnIndex: this.columnIndex,
        shopping: new Shopping({ id: randId, text: `Exemple ${randId}` })
      });
    },
    removeColumn() {
      this.REMOVE_COLUMN(this.columnIndex);
    },
    filterShoppingsByText(text) {
      this.filteredShoppings = this.column.shoppings.filter(shopping => {
        return shopping.text.includes(text);
      });
    },
    orderAscShoppings(asc) {
      if (asc) {
        return this.filteredShoppings.sort((a, b) => (a.id > b.id ? 1 : -1));
      }
      return this.filteredShoppings.sort((a, b) => (a.id > b.id ? -1 : 1));
    }
  }
};
</script>

<style scoped lang='scss'>
.column {
  background-color: #fff;
  padding: 10px;
  margin-right: 10vw;
  overflow-y: scroll;
  min-height: 80vh;
  min-width: 70vw;
  border: thin solid #000;

  .remove-column {
    width: 30px;
    height: 30px;
    float: right;
    margin-bottom: 10px;
  }

  @media (min-width: 600px) {
    min-width: 20vw;
    margin-right: 4vw;
  }

  b-input-group {
    min-width: 100%;
    border-radius: 5px;
  }

  .order {
    .text {
      width: 50%;
      span {
        display: block;
        margin-right: 10px;
        margin-bottom: -5px;
      }
      .fa-sort-down, .fa-sort-up {
        cursor: pointer;
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

  .footer {
    background-color: #c7c7c7;
    width: 100%;
    min-height: 40px;
    max-height: 40px;
  }
}
</style>
