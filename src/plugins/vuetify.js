import Vue from "vue";
import Vuetify from "vuetify/lib";
import "@mdi/font/css/materialdesignicons.css";

Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#ffa500",
        secondary: "#b0bec5",
        accent: "#8c9eff",
        error: "#b71c1c",
        navcol: "#6E0095"
      },
    },
  },
});

export default vuetify;
