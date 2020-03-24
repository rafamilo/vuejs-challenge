import getters from "@/domain/shopping/store/getters";
import state from "@/domain/shopping/store/state";

describe("Shopping getters", () => {
  it("Should defined getShoppings and getLoadingList", () => {
    expect(getters.getShoppings).toBeDefined();
    expect(getters.getLoadingList).toBeDefined();
  });

  it("getShoppings needs return state.shoppings", () => {
    expect(getters.getShoppings(state)).toEqual(state.shoppings);
  });

  it("getLoadingList needs return state.loading.list", () => {
    expect(getters.getLoadingList(state)).toEqual(state.loading.list);
  });
});
