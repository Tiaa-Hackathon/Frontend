import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ErrorPage from "../views/ErrorPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LoginView.vue"),
  },
  {
    path: "/post/create",
    name: "create-post",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CreatePost.vue"),
  },
  {
    path: "/message",
    name: "message",
    component: () =>
      import(/* webpackChunkName: "message" */ "../views/MessageView.vue"),
  },
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/*",
    name: "error",
    component: ErrorPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
