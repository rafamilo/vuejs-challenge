export default {
  SET_SHOPPINGS: (state, shoppings) => state.shoppings = shoppings,
  PUSH_SHOPPINGS: (state, shopping) => state.shoppings.push(shopping),
  SET_LOADING_LIST: (state, loading) => state.loading.list = loading,
}