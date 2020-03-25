import Vue from "vue";
import App from "./App.vue";
import "es6-promise/auto";
import Vuex from "vuex";
import VueRouter from "vue-router";
import RouterConfig from "@/configs/RouterConfig";
import VuexStoreConfig from "@/configs/VuexStoreConfig";
import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.use(BootstrapVue);

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(BootstrapVue);

const router = new RouterConfig();
const store = new VuexStoreConfig();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
