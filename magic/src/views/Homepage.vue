<template>
  <v-app>
    <v-app-bar
      app
      color="blue darken-2"
      dark
      max-height="140"
      mx-auto
      rounded
      scroll-behavior="collapse elevate"
      scroll-threshold="419"
    >
      <v-toolbar-title> Quora Clone </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text>Home</v-btn>
      <v-btn text>About</v-btn>
      <v-btn v-on:click="login" text>Login</v-btn>
      <v-btn dark v-on:click="register">Signup</v-btn>
    </v-app-bar>

    <v-spacer flex="2"></v-spacer>

    <v-content>
      <v-container fluid>
        <v-layout row>
          <v-flex xs12 sm8 offset-sm2>
            <v-card class="mx-auto" max-width="700">
              <v-card-title>
                <h1>Welcome to Quora Clone</h1>
              </v-card-title>
              <v-card-text>
                <p>Ask and answer questions from the Quora community.</p>
                <v-text-field
                  v-model="search"
                  label="Search for questions"
                  outlined
                  dense
                ></v-text-field>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary">Ask a Question</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>

    <v-footer app color="blue darken-2" dark>
      <span>&copy; 2023 Quora Clone</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      search: "",
    };
  },
  methods: {
    login() {
      this.$router.push({
        path: "/login",
        replace: false,
      });
    },
    register() {
      this.$router.push({
        path: "/register",
        replace: false,
      });
    },
  },
};
</script>

<style>
body {
  background-color: #f5f5f5;
}
</style>
