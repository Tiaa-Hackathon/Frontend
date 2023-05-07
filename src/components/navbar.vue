<template>
  <v-app-bar
    app
    color="navcol"
    dark
    scroll-behavior="collapse elevate"
    scroll-threshold="419"
  >
    <v-toolbar-title> Quora Clone </v-toolbar-title>
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
    <v-btn v-if="$vuetify.breakpoint.mdAndUp" text @click="navigate('/about')"
      >About</v-btn
    >
    <v-btn
      v-on:click="login"
      v-if="$vuetify.breakpoint.mdAndUp"
      text
      @click="navigate('login')"
      >Login</v-btn
    >
    <v-btn
      dark
      v-on:click="register"
      v-if="$vuetify.breakpoint.mdAndUp"
      @click="navigate('register')"
      >Signup</v-btn
    >
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { title: "Home", route: "/" },
        { title: "Profile", route: "/profile" },
        { title: "Login", route: "/login" },
        { title: "Signup", route: "/register" },
      ],
    };
  },
  methods: {
    navigate(route) {
      console.log(route);
      this.$router.push(route);
    },
  },
};
</script>

<style lang="scss" scoped></style>
