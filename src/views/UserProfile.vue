<template>
  <div>
    <v-row
      style="
        background-color: white;
        height: 40vh;
        margin-top: 10vh;
        margin-left: 15vh;
        margin-right: 15vh;
      "
    >
      <v-col cols="12">
        <v-row style="margin-top: 3vh">
          <v-col cols="2">
            <v-row>
              <v-col>
                <v-avatar size="20vh" style="margin-left: 3vh">
                  <v-img :src="userImg" class="rounded-full"></v-img>
                  <!-- {{ UserImg }}-->
                </v-avatar>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="1">
            <v-row style="margin-top: 1vh">
              <v-col>
                <p class="username-text text-center">{{ userId }}</p>
              </v-col>
            </v-row>
            <v-row style="">
              <v-col>
                <p class="email-text text-center">{{ useremail }}</p>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="1" offset="2">
            <v-row style="margin-top: 2vh">
              <v-col>
                <p class="number-post text-center">{{ userPosts }}</p>
              </v-col>
            </v-row>
            <v-row style="margin-top: 1vh">
              <v-col>
                <p class="post-text text-center">Posts</p>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="1" offset="1">
            <v-row style="margin-top: 2vh">
              <v-col>
                <p class="number-post text-center">{{ userUpvotes }}</p>
              </v-col>
            </v-row>
            <v-row style="margin-top: 1vh">
              <v-col>
                <p class="post-text text-center">Upvotes</p>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="1" offset="1">
            <v-row style="margin-top: 2vh">
              <v-col>
                <p class="number-post text-center">{{ userDownvotes }}</p>
              </v-col>
            </v-row>
            <v-row style="margin-top: 1vh">
              <v-col>
                <p class="post-text text-center">Downvotes</p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <p class="user-bio">{{ userBio }}</p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  /*  props: {
    userId: {
      type: String,
      required: true,
      default: "Username"
    },
    userBio: {
      type: String,
      required: true,
      default: "Lorem ipsum mit below den aiher enzi"
    },
    useremail: {
      type: String,
      required: true,
      default: "tiaa@gmail.com"
    },
    userImg: {
      type: Image,
      required: true,
      default: "https://i.genius.com/097177ea52f6ad0147914b68157107a588f47fb2?url=http%3A%2F%2Fwww.mushrecords.com%2Falbum_art_front%2FMH202_D.jpg"
    },
    userPosts: {
      type: Number,
      required: true,
      default: 0
    },

    userUpvotes: {
      type: Number,
      required: true,
      default: 0
    },
    userDownvotes: {
      type: Number,
      required: true,
      default: 0
    }
  },
*/
  data() {
    return {
      userId: JSON.parse(localStorage.getItem("user")).name || "John Jaccob",
      userBio: "lorem ipsum",
      useremail:
        JSON.parse(localStorage.getItem("user")).email || "tiaa@gmail.org",
      userImg:
        "https://i.genius.com/097177ea52f6ad0147914b68157107a588f47fb2?url=http%3A%2F%2Fwww.mushrecords.com%2Falbum_art_front%2FMH202_D.jpg",
      userPosts: 0,
      userUpvotes: 0,
      userDownvotes: 0,
    };
  },
  async created() {
    const response = await this.getProfile();
    console.log("response", response);
    if (response.ok) {
      const {
        data: { postCount, upvotes, downvote },
      } = await response.json();
      console.log(postCount, upvotes, downvote);
      this.userPosts = postCount;
      this.userUpvotes = upvotes;
      this.userDownvotes = downvote;
    } else {
      alert("Some error occured");
    }
  },
  methods: {
    async getProfile() {
      const url = `${process.env.VUE_APP_BACKEND_URL}/user/profile`;

      const headers = new Headers();
      headers.append(
        "Authorization",
        "Bearer " + localStorage.getItem("token")
      );

      const requestOptions = {
        method: "GET",
        headers: headers,
        redirect: "follow",
      };

      const response = await fetch(url, requestOptions);
      return response;
    },
  },
};
</script>

<style scoped>
.username-text {
  font-size: 175%;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 600;
}

.email-text {
  color: #0072b1;
  font-weight: bold;
}

.number-post {
  font-size: 36px;
  font-weight: bold;
}

.post-text {
  font-size: 18px;
  color: #666666;
}

.user-bio {
  font-size: 18px;
  margin-bottom: 24px;
  margin-left: 15px;
  padding: 0.5rem;
}
</style>
