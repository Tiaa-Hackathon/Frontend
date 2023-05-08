<template>
  <v-app-bar
    app
    color="navcol"
    dark
    scroll-behavior="collapse elevate"
    scroll-threshold="419"
  >
    <v-toolbar-title>ASQ</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-menu v-if="!$vuetify.breakpoint.mdAndUp" offset-y>
      <template v-slot:activator="{ on }">
        <v-btn text v-on="on">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          @click="navigate(item.route)"
          v-for="item in menuItems"
          :key="item.title"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-btn v-if="$vuetify.breakpoint.mdAndUp" text @click="navigate('/')"
      >Home</v-btn
    >
    <!-- <v-btn v-if="isLoggedIn" text @click="navigate('message')">Message</v-btn> -->
    <v-btn
      v-if="isLoggedIn && $vuetify.breakpoint.mdAndUp"
      text
      @click="navigate('/user/profile')"
      >Profile</v-btn
    >
    <!-- <v-btn v-if="isMod" text @click="navigate()">Review Analytics</v-btn> -->
    <v-btn
      v-on:click="login"
      v-if="!isLoggedIn && $vuetify.breakpoint.mdAndUp"
      text
      @click="navigate('/login')"
      >Login</v-btn
    >
    <v-btn text @click="navigate('/view/analytics')" v-if="isMod"
      >View Analytics</v-btn
    >
    <v-btn text @click="navigate('/reported/posts')" v-if="isMod"
      >Flagged</v-btn
    >
    <v-btn
      v-on:click="login"
      v-if="isLoggedIn && $vuetify.breakpoint.mdAndUp"
      text
      @click="logout"
      >Logout</v-btn
    >
  </v-app-bar>
</template>

<script>
// import ViewAnalytics from '@/views/ViewAnalytics.vue';

export default {
  data() {
    return {
      menuItems: [
        { title: "Home", route: "/" },
        { title: "Profile", route: "/user/profile" },
        { title: "Login", route: "/login" },
        { title: "Message", route: "/message" },
        { title: "View Analytics", route: "/view/analytics" },
        { title: "Flagged posts", route: "/reported/posts" },
      ],
    };
  },
  methods: {
    navigate(route) {
      console.log(route);
      this.$router.push(route);
    },
    logout() {
      this.$store.state.auth.user.loggedIn = false;
      this.$store.state.auth.user = {
        name: "",
        email: "",
        loggedIn: false,
      };
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      this.$router.push("/");
    },
  },
  computed: {
    isLoggedIn() {
      const token = localStorage.getItem("token");
      return token ? true : false;
    },
    isMod() {
      const user = JSON.parse(localStorage.getItem("user"));
      // if (user) {
      //   user.isModerator
      // }
      // return false;
      return user.isModerator ? user.isModerator : false;
    },
  },
  mounted() {
    const token = localStorage.getItem("token");
    if (token) {
      this.$store.state.auth.user.loggedIn = true;
      this.$store.state.auth.user = JSON.parse(localStorage.getItem("user"));
    }
  },
};
</script>

<style lang="scss" scoped></style>
