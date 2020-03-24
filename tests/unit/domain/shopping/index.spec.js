import Shopping from "@/domain/shopping/models/Shopping";

describe("Shopping", () => {
  it('Should to return id null and text null when not pass parameters', () => {
    const shopping = new Shopping();
    expect(shopping.id).toBeNull();
    expect(shopping.text).toBeNull();
  });

  it('Should to return id null and text null when not pass parameters', () => {
    const defaultShopping = { id: 1, text: 'text'};
    const shopping = new Shopping(defaultShopping);
    expect(shopping.id).toEqual(defaultShopping.id);
    expect(shopping.text).toEqual(defaultShopping.text);
  });
});
