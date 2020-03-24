import VueRouter from "vue-router";
import ShoppingRoutes from "@/domain/shopping/routes";

const config = {
  mode: 'history',
  routes: [
    ShoppingRoutes
  ]
};


let instance = null;
export default class RouterConfig {
  constructor() {
    if (!instance) {
      instance = new VueRouter(config);
    }

    return instance;
  }
}