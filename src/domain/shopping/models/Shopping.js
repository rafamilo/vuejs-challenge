export default class Shopping {
  constructor({ id = null, text = null } = {}) {
    this.id = id;
    this.text = text;
    return this;
  }
}
