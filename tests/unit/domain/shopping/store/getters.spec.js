import getters from "@/domain/shopping/store/getters";
import state from "@/domain/shopping/store/state";

describe("Shopping getters", () => {
  it("getShoppings needs return state.shoppings", () => {
    expect(getters.getShoppings(state)).toEqual(state.shoppings);
  });

  it("getLoadingList needs return state.loading.list", () => {
    expect(getters.getLoadingList(state)).toEqual(state.loading.list);
  });
});
