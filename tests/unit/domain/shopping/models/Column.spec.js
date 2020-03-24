import Column from "@/domain/shopping/models/Column";

describe("Column", () => {
  it("Should to return shoppings null when not pass parameters", () => {
    const column = new Column();
    expect(column.shoppings).toEqual([]);
  });

  it("Should to return id null and text null when not pass parameters", () => {
    const defaultColumn = { shoppings: [1] };
    const column = new Column(defaultColumn);
    expect(column.shoppings).toEqual(defaultColumn.shoppings);
  });
});
