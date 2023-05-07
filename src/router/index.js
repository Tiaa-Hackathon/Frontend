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
    path: "/post/edit",
    name: "edit-post",
    props: true,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/EditPost.vue"),
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
    path: "/user/profile",
    name: "UserProfile",
    component: () => import("../views/UserProfile.vue"),
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
