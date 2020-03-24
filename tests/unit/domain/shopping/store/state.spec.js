import state from "@/domain/shopping/store/state";

describe("Shopping state", () => {
  it("Columns needs to start with empty array", () => {
    expect(state.columns).toEqual([]);
  });

  it("Loading needs to start with object { columns: false }", () => {
    expect(state.loading).toEqual({ columns: false });
  });
});
