import getters from "@/domain/shopping/store/getters";
import state from "@/domain/shopping/store/state";

describe("Shopping getters", () => {
  it("getColumns needs return state.columns", () => {
    expect(getters.getColumns(state)).toEqual(state.columns);
  });

  it("getLoadingColumns needs return state.loading.columns", () => {
    expect(getters.getLoadingColumns(state)).toEqual(state.loading.columns);
  });
});
