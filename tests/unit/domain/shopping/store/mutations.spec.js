import getters from "@/domain/shopping/store/getters";
import state from "@/domain/shopping/store/state";
import mutations from "@/domain/shopping/store/mutations";
import Shopping from "@/domain/shopping/models/Shopping";
import Column from "@/domain/shopping/models/Column";

describe("Shopping mutations", () => {
  it("PUSH_COLUMN needs push new column to columns", () => {
    const column = 1;
    const lastLength = getters.getColumns(state).length;
    mutations.PUSH_COLUMN(state, column);

    const columns = getters.getColumns(state);
    expect(columns.length).toEqual(lastLength + 1);
    expect(columns[columns.length - 1]).toEqual(column);
  });

  it("REMOVE_COLUMN needs remove column to columns", () => {
    let columns = getters.getColumns(state);
    mutations.REMOVE_COLUMN(state, columns.length - 1);

    columns = getters.getColumns(state);
    expect(columns).toEqual([]);
  });

  it("PUSH_SHOPPING needs push new shopping to column shoppings", () => {
    const shopping = new Shopping();
    const column = new Column();
    mutations.PUSH_COLUMN(state, column);

    const columns = getters.getColumns(state);
    mutations.PUSH_SHOPPING(state, {
      columnIndex: columns.length - 1,
      shopping
    });

    expect(columns[columns.length - 1].shoppings).toEqual([shopping]);
  });

  it("REMOVE_SHOPPING needs remove shopping to column shoppings", () => {
    const columns = getters.getColumns(state);
    mutations.REMOVE_SHOPPING(state, {
      columnIndex: columns.length - 1,
      shoppingIndex: columns[columns.length - 1].shoppings.length - 1
    });

    expect(columns[columns.length - 1].shoppings).toEqual([]);
  });

  it("SET_LOADING_COLUMNS needs set new value to loading", () => {
    const loading = true;
    mutations.SET_LOADING_COLUMN(state, loading);
    expect(getters.getLoadingColumn(state)).toEqual(loading);
  });
});
