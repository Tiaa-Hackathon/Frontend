<template>
  <v-row style="margin-top: 15vh">
    <v-col cols="4" offset="4">
      <p class="welcome-text text-center">Welcome Back</p>
    </v-col>
    <v-col cols="4" offset="4">
      <v-container style="padding-top: 5vh; padding-bottom: 5vh">
        <v-row>
          <v-col cols="10" offset="1">
            <v-row style="height: 10vh">
              <v-col cols="12">
                <v-text-field
                  solo
                  label="Email"
                  hint="Enter your Email Address"
                  v-model="email"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row style="height: 10vh; margin-top: 3vh">
              <v-col cols="12">
                <v-text-field
                  solo
                  label="Password"
                  hint="Enter your Password"
                  type="password"
                  v-model="password"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row style="margin-top: 3vh">
          <v-col cols="4" offset="1">
            <v-btn
              block
              elevation="2"
              type="submit"
              style="background-color: rgba(110, 0, 149, 1); color: white"
              @click="handleLogin"
            >
              SIGN IN
            </v-btn>
          </v-col>
          <v-col cols="4" offset="2">
            <v-dialog v-model="dialog" persistent max-width="600px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn block color="" v-bind="attrs" v-on="on">
                  REGISTER
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span>User Registration</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          label="First name*"
                          v-model="firstname"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          label="Last name*"
                          v-model="lastname"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          label="Email*"
                          required
                          v-model="email"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          label="Password*"
                          type="password"
                          required
                          v-model="password"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          label="Confirm Password*"
                          type="password"
                          v-model="c_pass"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-menu
                          ref="menu"
                          v-model="menu"
                          :close-on-content-click="false"
                          transition="scale-transition"
                          offset-y
                          min-width="auto"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              v-model="dob"
                              label="Date of birth*"
                              prepend-icon="mdi-calendar"
                              readonly
                              v-bind="attrs"
                              v-on="on"
                              required
                            ></v-text-field>
                          </template>
                          <v-date-picker
                            v-model="dob"
                            :active-picker.sync="activePicker"
                            :max="
                              new Date(
                                Date.now() -
                                  new Date().getTimezoneOffset() * 60000
                              )
                                .toISOString()
                                .substr(0, 10)
                            "
                            min="1950-01-01"
                          ></v-date-picker>
                        </v-menu>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-autocomplete
                          :items="[
                            'Female',
                            'Male',
                            'Trans',
                            'Agender',
                            'Gender-neutral',
                            'Non-binary',
                            'Other',
                          ]"
                          label="Gender*"
                          v-model="gender"
                          required
                        ></v-autocomplete>
                      </v-col>
                      <v-col cols="12">
                        <v-autocomplete
                          :items="interests"
                          :max="5"
                          label="Interests*"
                          multiple
                          required
                          v-model="pref"
                        ></v-autocomplete>
                      </v-col>
                    </v-row>
                  </v-container>
                  <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="dialog = false">
                    Close
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="handleRegister">
                    Register
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
import { mutationNames } from "@/store/mutationTypes";
export default {
  data() {
    return {
      email: "",
      password: "",
      dialog: false,
      dialog1: false,
      firstname: "",
      lastname: "",
      c_pass: "",
      gender: "",
      pref: [],
      interests: [
        "Art",
        "Books",
        "Cars",
        "Cooking",
        "Dancing",
        "Fashion",
        "Fitness",
        "Gaming",
        "Movies",
        "Music",
        "Photography",
        "Sports",
        "Travel",
        "Writing",
      ],

      activePicker: null,
      dob: null,
      menu: false,
    };
  },

  watch: {
    menu(val) {
      val && setTimeout(() => (this.activePicker = "YEAR"));
    },
  },

  // computed: {
  //   alertMessage() {
  //     if (!this.email) {
  //       return "Please enter a username";
  //     } else {
  //       if (!this.password) {
  //         return "Please enter a password";
  //       } else if (this.password.length < 8) {
  //         return "Password should be at least 8 characters long";
  //       } else if (this.password.length > 20) {
  //         return "Password should not be more than 20 characters long";
  //       } else {
  //         return null;
  //       }
  //     }
  //   },
  // },

  methods: {
    isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },

    async login() {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const url = `${process.env.VUE_APP_BACKEND_URL}/auth/login`;
      const body = {
        email: this.email,
        password: this.password,
      };

      const requestOptions = {
        method: "POST",
        body: JSON.stringify(body),
        redirect: "follow",
        headers: myHeaders,
      };

      const response = await fetch(url, requestOptions);
      return response;
    },
    async handleLogin() {
      if (!this.isValidEmail(this.email)) return alert("Invalid Email");
      if (!this.password) return alert("Password is required");

      const response = await this.login();
      if (response.ok) {
        const { data } = await response.json();
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        this.$store.commit(mutationNames.setID, data.user.id);
        this.$store.commit(mutationNames.setLoggedIn, true);
        this.$router.push("/");
      } else {
        alert("Invalid Credentials");
      }
    },
    save(date) {
      this.$refs.menu.save(date);
    },
    async handleRegister() {
      if (!this.firstname) return alert("First Name is required");
      if (!this.lastname) return alert("Last Name is required");
      if (!this.isValidEmail(this.email)) return alert("Invalid Email");
      if (!this.password) return alert("Password is required");
      if (!this.c_pass) return alert("Confirm Password is required");
      if (this.password !== this.c_pass) return alert("Passwords do not match");
      if (this.email.length < 8)
        return alert("Password should be at least 8 characters long");
      if (!this.gender) return alert("Gender selection is required");
      if (this.pref.length === 0)
        return alert("Interest selection is required");
      if (!this.dob) return alert("Date of birth is required");
      const newUser = {
        email: this.email,
        name: `${this.firstname}${this.lastname ? " " + this.lastname : ""}}`,
        password: this.password,
        confirmPassword: this.c_pass,
        dob: this.dob,
        gender: this.gender,
        interests: this.pref,
      };

      const response = await this.register(newUser);

      if (response.ok) {
        alert("Registration Successful! Please login to continue");
        const { data } = await response.json();
        localStorage.setItem("user", JSON.stringify(data.user));
        this.$store.commit(mutationNames.setID, data.user.id);
        this.$store.commit(mutationNames.setLoggedIn, false);
        this.$router.push("/");
      } else {
        alert("Invalid Credentials");
      }
    },
    async register(data) {
      const url = `${process.env.VUE_APP_BACKEND_URL}/auth/register`;
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const requestOptions = {
        method: "POST",
        body: JSON.stringify(data),
        redirect: "follow",
        headers: myHeaders,
      };

      const response = await fetch(url, requestOptions);
      return response;
    },
  },
};
</script>

<style lang="scss" scoped>
.welcome-text {
  font-size: 250%;
  color: rgb(0, 0, 0);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 600;
  align-self: center;
}
</style>
