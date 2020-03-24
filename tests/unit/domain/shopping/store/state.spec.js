import state from "@/domain/shopping/store/state";

describe("Shopping state", () => {
  it("Should defined shoppings and loading.list", () => {
    expect(state.shoppings).toBeDefined();
    expect(state.loading.list).toBeDefined();
  });

  it("Shoppings needs to start with empty array", () => {
    expect(state.shoppings).toEqual([]);
  });

  it("Loading needs to start with object { list: false }", () => {
    expect(state.loading).toEqual({ list: false });
  });
});
