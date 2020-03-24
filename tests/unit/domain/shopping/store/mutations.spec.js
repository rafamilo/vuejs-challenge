import getters from "@/domain/shopping/store/getters";
import state from "@/domain/shopping/store/state";
import mutations from "@/domain/shopping/store/mutations";

describe("Shopping mutations", () => {
  it("Should defined SET_SHOPPINGS and SET_LOADING_LIST", () => {
    expect(mutations.SET_SHOPPINGS).toBeDefined();
    expect(mutations.SET_LOADING_LIST).toBeDefined();
  });

  it("SET_SHOPPINGS needs set new value to shoppings", () => {
    const shoppings = [1, 2, 3, 4];
    mutations.SET_SHOPPINGS(state, shoppings);
    expect(getters.getShoppings(state)).toEqual(shoppings);
  });

  it("PUSH_SHOPPINGS needs push new value to shoppings", () => {
    const shopping = 5;
    const lastLength = getters.getShoppings(state).length;
    mutations.PUSH_SHOPPINGS(state, shopping);

    const shoppings = getters.getShoppings(state);
    expect(shoppings.length).toEqual(lastLength + 1);
    expect(shoppings[shoppings.length - 1]).toEqual(5);
  });

  it("SET_LOADING_LIST needs set new value to loading", () => {
    const loading = true;
    mutations.SET_LOADING_LIST(state, loading);
    expect(getters.getLoadingList(state)).toEqual(loading);
  });
});
