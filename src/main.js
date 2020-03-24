import Vue from "vue";
import App from "./App.vue";
import "es6-promise/auto";
import Vuex from "vuex";
import VueRouter from "vue-router";
import RouterConfig from "@/configs/RouterConfig";
import VuexStoreConfig from "@/configs/VuexStoreConfig"

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(VueRouter);

const router = new RouterConfig();
const store = new VuexStoreConfig();

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
