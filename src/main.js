import Vue from "vue";
import VueAnalytics from "vue-analytics";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

Vue.use(VueAnalytics, {
  id: "UA-142485991-1",
  router
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
