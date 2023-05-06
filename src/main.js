import Vue from "vue";
import VueQuill from "vue-quill-editor";
import "quill/dist/quill.core.css"; // import styles
import "quill/dist/quill.snow.css"; // for snow theme

import App from "./App.vue";
import "./assets/css/app.css";

import router from "./router";
import vuetify from "./plugins/vuetify";
import GlobalMixins from "@/utils/GlobalMixins.vue";
import AppConstants from "@/utils/AppConstants";

import '@mdi/font/css/materialdesignicons.css'


Vue.mixin(GlobalMixins);
Vue.prototype.$const = AppConstants;
Vue.use(vuetify);

Vue.config.productionTip = false;

Vue.use(VueQuill);

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
