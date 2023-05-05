<template>
  <v-app>
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card>
            <v-card-title class="text-center">Register</v-card-title>
            <v-card-text>
              <v-form>
                <v-text-field v-model="name" label="Name"></v-text-field>
                <v-text-field v-model="email" label="Email"></v-text-field>
                <v-text-field
                  v-model="password"
                  label="Password"
                  type="password"
                ></v-text-field>
                <v-text-field
                  v-model="confirmPassword"
                  label="Confirm Password"
                  type="password"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="register"
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
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    async register() {
      try {
        // Send register request to server
        const response = await axios.post("/api/register", {
          name: this.name,
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword,
        });

        // Check if registration was successful
        if (response.data.success) {
          // Redirect to login page
          this.$router.push({
            path: "/login",
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
  },
};
</script>
