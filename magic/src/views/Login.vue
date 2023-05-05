<!-- <template>
  <v-app>
    <v-main>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title
                  >{{
                    isRegister ? stateObj.register.name : stateObj.login.name
                  }}
                  form</v-toolbar-title
                >
              </v-toolbar>
              <v-card-text>
                <form
                  ref="form"
                  @submit.prevent="isRegister ? register() : login()"
                >
                  <v-text-field
                    v-if="isRegister"
                    v-model="fullname"
                    name="fullname"
                    label="Fullname"
                    type="text"
                    placeholder="full name"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-if="isRegister"
                    v-model="username"
                    name="username"
                    label="Username"
                    type="text"
                    placeholder="username"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="email"
                    name="email"
                    label="Email"
                    type="text"
                    placeholder="email"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="password"
                    name="password"
                    label="Password"
                    type="password"
                    placeholder="password"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-if="isRegister"
                    v-model="confirmPassword"
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    placeholder="confirm password"
                    required
                  ></v-text-field>

                  <div class="red--text">{{ errorMessage }}</div>
                  <v-btn
                    type="submit"
                    class="mt-4"
                    color="primary"
                    value="log in"
                    >{{
                      isRegister ? stateObj.register.name : stateObj.login.name
                    }}</v-btn
                  >
                  <div
                    class="grey--text mt-4"
                    v-on:click="isRegister = !isRegister"
                  >
                    {{ toggleMessage }}
                  </div>
                </form>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      fullname: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      isRegister: false,
      errorMessage: "",
      stateObj: {
        register: {
          name: "Register",
          message: "Aleady have an Acoount? login.",
        },
        login: {
          name: "Login",
          message: "Register",
        },
      },
    };
  },
  methods: {
    login() {
      const { username } = this;
      this.$router.replace({
        name: "home",
        params: { username: username },
      });
    },
    register() {
      if (this.password == this.confirmPassword) {
        this.isRegister = false;
        this.errorMessage = "";
        this.$refs.form.reset();
      } else {
        this.errorMessage = "password did not match";
      }
    },
  },
  computed: {
    toggleMessage: function () {
      return this.isRegister
        ? this.stateObj.register.message
        : this.stateObj.login.message;
    },
  },
};
</script> -->

<template>
  <v-app>
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-20">
            <v-card-title class="text-center">Login</v-card-title>
            <v-card-text>
              <v-form>
                <v-text-field v-model="email" label="Email"></v-text-field>
                <v-text-field
                  v-model="password"
                  label="Password"
                  type="password"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text v-on:click="login">Login</v-btn>
              <v-btn color="blue draken-2" text v-on:click="reRegister"
                >Register</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        // Send login request to server
        const response = await axios.post("/api/login", {
          email: this.email,
          password: this.password,
        });

        // Check if login was successful
        if (response.data.success) {
          // Redirect to home page
          this.$router.push({
            path: "/",
            replace: false,
          });
        } else {
          // Display error message
          this.$vuetify.snackbar({
            color: "red",
            message: response.data.message,
          });
        }
      } catch (error) {
        // Display error message
        this.$vuetify.snackbar({
          color: "red",
          message: error.message,
        });
      }
    },
    reRegister() {
      this.$router.replace({
        name: "register",
      });
    },
  },
};
</script>
