import Vue from "vue";
// import Vuex from "vuex";
import VueQuill from "vue-quill-editor";
import "quill/dist/quill.core.css"; // import styles
import "quill/dist/quill.snow.css"; // for snow theme

import App from "./App.vue";
import "./assets/css/app.css";

import router from "./router";
import store from "./store";
import { mutationNames } from "./store/mutationTypes";
import vuetify from "./plugins/vuetify";
import GlobalMixins from "@/utils/GlobalMixins.vue";
import AppConstants from "@/utils/AppConstants";

import "@mdi/font/css/materialdesignicons.css";

Vue.mixin(GlobalMixins);
Vue.prototype.$const = AppConstants;
Vue.use(vuetify);

Vue.config.productionTip = false;
Vue.prototype.$store = store;

Vue.use(VueQuill);

new Vue({
  store: store,
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");

router.beforeEach((to, from, next) => {
  store.commit(mutationNames.setLoading, true);
  next();
});

router.afterEach(() => {
  store.commit(mutationNames.setLoading, false);
});
