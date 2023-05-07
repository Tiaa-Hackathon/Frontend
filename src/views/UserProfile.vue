<template>
  <div>
    <v-row style="background-color: beige; height: 50vh; margin-top: 10vh; margin-left: 15vh; margin-right: 15vh;">
      <v-row style="margin-top: 3vh;">
        <v-col cols="2">
          <v-avatar size="20vh" style="margin-left: 3vh;">
            <v-img :src="userImg" class="rounded-full"></v-img> <!-- {{ UserImg }}-->
          </v-avatar>
        </v-col>
        <v-col cols="1">
          <v-row style="margin-top: 1vh;">
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
      </v-row>
    </v-row>
  </div>
</template>
<script>


export default {
  props: {
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
};
</script>

<style scoped>
.container {
  max-width: 80vw;
  margin: 0 auto;
  padding: 24px;
  border-radius: 10px;
  margin-top: 5%;
  background-color: #e5e5e5;
}


.profile-header {
  display: flex;
  align-items: center;
  margin-bottom: 24px;
}

.profile-avatar {
  margin-right: 24px;
}

.profile-name-container {
  display: flex;
  flex-direction: column;
}

.profile-name {
  font-size: 36px;
  font-weight: bold;
  margin: 0;
}

.profile-title {
  font-size: 24px;
  font-weight: bold;
  margin-top: 8px;
  color: #0072b1;
}

.profile-location {
  font-size: 18px;
  margin-top: 8px;
  color: #666666;
}

.profile-connections {
  font-size: 18px;
  margin-top: 8px;
  color: #666666;
}

.user-bio {
  font-size: 18px;
  margin-bottom: 24px;
  padding: 0.5rem;
}

.profile-stats {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #e5e5e5;
  padding: 24px;
}


.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-number {
  font-size: 36px;
  font-weight: bold;
}

.stat-label {
  font-size: 18px;
  color: #666666;
}

.username-text{
  font-size: 175%;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 600;
}

.email-text{
  color: #0072b1;
  font-weight: bold;
}
</style>