<template>
  <v-row>
    <v-col cols="4" offset="4" align-self="center">
      <p class="welcome-text">Welcome Back</p>
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
              @click="submit()"
              style="
                margin-top: 2vh;
                background-color: rgba(110, 0, 149, 1);
                color: white;
              "
            >
              SIGN IN
            </v-btn>
          </v-col>
          <v-col cols="4" offset="2">
            <v-dialog v-model="dialog" persistent max-width="600px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  block
                  color=""
                  v-bind="attrs"
                  v-on="on"
                  style="
                    margin-top: 2vh;
                    background-color: rgba(110, 0, 149, 1);
                    color: white;
                  "
                >
                  REGISTER
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span>User Profile</span>
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
                            @change="save"
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
                          :items="[
                            'Science',
                            'Technology',
                            'Sports',
                            'Economics',
                            'Geopolitics',
                            'Environment',
                            'Business',
                            'Finance',
                            'Art',
                            'Culture',
                            'Others',
                          ]"
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

                  <v-dialog v-model="dialog1" persistent max-width="600px">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        color="blue darken-1"
                        text
                        v-bind="attrs"
                        v-on="on"
                        @click="cons()"
                      >
                        Next
                      </v-btn>
                    </template>
                    <v-card>
                      <v-card-title>
                        <span class="text-h5">Upload pictures</span>
                      </v-card-title>
                      <v-card-text>
                        <v-container>
                          <v-btn
                            color="blue-grey"
                            class="ma-2 white--text"
                            @click="loader = 'loading'"
                          >
                            Upload
                            <v-icon right dark> mdi-cloud-upload </v-icon>
                          </v-btn>
                        </v-container>
                      </v-card-text>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          color="blue darken-1"
                          text
                          @click="dialog1 = false"
                        >
                          Back
                        </v-btn>
                        <v-btn
                          color="blue darken-1"
                          text
                          @click="registerUser()"
                        >
                          Save
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
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

  computed: {
    alertMessage() {
      if (!this.email) {
        return "Please enter a username";
      } else {
        if (!this.password) {
          return "Please enter a password";
        } else if (this.password.length < 8) {
          return "Password should be at least 8 characters long";
        } else if (this.password.length > 20) {
          return "Password should not be more than 20 characters long";
        } else {
          return null;
        }
      }
    },
  },

  methods: {
    save(date) {
      this.$refs.menu.save(date);
    },

    async submit() {
      if (this.alertMessage) {
        // this.$router.push('/landingPage')
        return;
      }

      // try {
      //     const response = await axios.post('//localhost:8000/api/login', { email: this.email, password: this.password })

      //     const success = (response.status == 200)
      //     console.log(success)

      //     if (success) {
      //         this.$router.push('/')
      //         this.$cookies.set("email", this.email)
      //     }
      // }
      // catch (err) {
      //     console.log(err)
      // }
    },

    async registerUser() {
      const newUser = {
        email: this.email,
        firstname: this.firstname,
        lastname: this.lastname,
        password: this.password,
        gender: this.gender,
        preferences: this.pref,
        dob: this.dob,
      };
      console.log(newUser);

      // try {
      //     const response = await axios.post('//localhost:8000/api/signup', newUser)

      //     const success = (response.status == 200)

      //     if (success) {
      //         this.$router.push('/')
      //         this.$cookies.set("email", this.email)
      //     }
      // }
      // catch (err) {
      //     console.log(err)
      // }
    },

    cons() {
      console.log(this.username);
      console.log(this.firstname);
      console.log(this.lastname);
      console.log(this.c_pass);
      console.log(this.gender);
      console.log(this.pref);
      console.log(this.dob);
    },
  },
};
</script>

<style lang="scss" scoped>
// .alertmessage {
//     font-size: 100%;
//     margin-left: 10%;
//     margin-right: 10%;
//     margin-top: 7%;
//     color: rgba(109, 58, 69, 1);
// }

.welcome-text {
  font-size: 250%;
  color: rgb(0, 0, 0);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 600;
}

// .no-underline .v-text-field__slot input {
//   text-decoration: none;
//   border-bottom: none;
// }
</style>
