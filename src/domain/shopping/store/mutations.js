export default {
  PUSH_COLUMN: (state, column) => state.columns.push(column),
  SET_COLUMNS: (state, columns) => state.columns = columns,
  REMOVE_COLUMN: (state, columnIndex) => state.columns.splice(columnIndex, 1),
  PUSH_SHOPPING: (state, { columnIndex, shopping }) => state.columns[columnIndex].shoppings.push(shopping),
  REMOVE_SHOPPING: (state, { columnIndex, shoppingIndex }) => state.columns[columnIndex].shoppings.splice(shoppingIndex, 1),
  SET_LOADING_COLUMNS: (state, loading) => (state.loading.columns = loading)
};
