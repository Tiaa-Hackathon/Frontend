import Vue from "vue";
import Vuex from "vuex";
import { mutationNames } from "./mutationTypes";

Vue.use(Vuex);

const authenticationModule = {
  state: {
    user: {
      loggedIn: false,
      id: null,
      username: "",
    },
  },
  mutations: {
    [mutationNames.setID](state, id) {
      Vue.set(state.user, "id", id);
    },
    [mutationNames.setLoggedIn](state, loggedInStatus) {
      Vue.set(state.user, "loggedIn", loggedInStatus);
    },
    [mutationNames.clearUser](state) {
      Vue.set(state.user, "loggedIn", false);
      Vue.set(state.user, "id", null);
    },
    [mutationNames.setUsername](state, username) {
      Vue.set(state.user, "username", username);
      Vue.set(state.user, "loggedIn", true);
    },
  },
};

const store = new Vuex.Store({
  state: {
    loading: true,
  },
  getters: {},
  mutations: {
    [mutationNames.setLoading](state, loadingStatus) {
      Vue.set(state, "loading", loadingStatus);
    },
  },
  modules: { auth: authenticationModule },
});

export default store;
