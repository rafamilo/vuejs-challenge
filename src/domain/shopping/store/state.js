import Column from "../models/Column";
import Shopping from "../models/Shopping";

export default {
  loading: { columns: false },
  columns: [
    new Column({
      id: 1,
      shoppings: [
        new Shopping({ id: 1, text: "example1" }),
        new Shopping({ id: 2, text: "example2" })
      ]
    }),
    new Column({
      id: 2,
      shoppings: [
        new Shopping({ id: 3, text: "example3" }),
        new Shopping({ id: 4, text: "example4" })
      ]
    }),
    new Column({
      id: 3,
      shoppings: [
        new Shopping({ id: 5, text: "example5" }),
        new Shopping({ id: 6, text: "example6" })
      ]
    }),
    new Column({
      id: 4,
      shoppings: [
        new Shopping({ id: 7, text: "example7" }),
        new Shopping({ id: 8, text: "example8" })
      ]
    }),
    new Column({
      id: 5,
      shoppings: [
        new Shopping({ id: 9, text: "example9" }),
        new Shopping({ id: 10, text: "example10" })
      ]
    })
  ]
};
