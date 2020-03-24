import ShoppingIndex from "@/domain/shopping/views";
import Shoppings from "@/domain/shopping/views/Shoppings";

export default {
  path: "/shoppings",
  name: "shoppings",
  redirect: { name: 'shoppings.list' },
  component: ShoppingIndex,
  children: [
    {
      path: "",
      name: "shoppings.list",
      component: Shoppings
    }
  ]
};
