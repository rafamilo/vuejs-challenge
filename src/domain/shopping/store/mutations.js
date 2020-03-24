export default {
  PUSH_COLUMN: (state, column) => state.columns.push(column),
  REMOVE_COLUMN: (state, index) => state.columns.splice(index, 1),
  PUSH_SHOPPING: (state, { columnIndex, shopping }) => state.columns[columnIndex].push(shopping),
  REMOVE_SHOPPING: (state, { columnIndex, shoppingIndex }) => state.columns[columnIndex].splice(shoppingIndex, 1),
  SET_LOADING_COLUMNS: (state, loading) => (state.loading.list = loading)
};
