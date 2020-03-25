export default class Column {
  constructor({ id, shoppings } = {}) {
    this.id = id || null,
    this.shoppings = shoppings || [];
    return this;
  }
}
