<template>
  <div class="container">
    <div class="profile-header">
      <v-avatar class="profile-avatar" size="150">
        <img :src="userImg"> <!-- {{ UserImg }}-->
        
      </v-avatar>
      <div class="profile-name-container">
        <h1 class="profile-name">{{ userId }}</h1> <!--{{ userId }}--> 
        <span class="profile-title">{{ useremail }} </span> <!--userEmail-->
      </div>
    </div>
    <div class="user-bio">
      <p>{{ userBio }}</p> <!--userBio-->
    </div>
    <div class="profile-stats">
      <div class="stat-item">
        <div class="stat-number">{{ userPosts }}</div> <!--Number of them-->
        <div class="stat-label">Posts</div> <!--Posts-->
      </div>
      <div class="stat-item">
        <div class="stat-number">{{ userUpvotes }}</div> <!--Upvotes-->
        <div class="stat-label">Upvotes</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">{{ userDownvotes }}</div> <!--Number of them-->
        <div class="stat-label">Downvotes</div> <!--Downvotes-->
      </div>
    </div>
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
    userImg:{
      type: Image,
      required: true,
      default: "https://i.genius.com/097177ea52f6ad0147914b68157107a588f47fb2?url=http%3A%2F%2Fwww.mushrecords.com%2Falbum_art_front%2FMH202_D.jpg"
    },
    userPosts:{
      type: Number,
      required: true,
      default: 0
    },

    userUpvotes:{
      type: Number,
      required: true,
      default: 0
    },
    userDownvotes:{
      type: Number,
      required: true,
      default: 0
    }
  },
};
</script>

<style>
.container {
  max-width: 80vw;
  margin: 0 auto;
  padding: 24px;
  border-radius: 10px;
  margin-top: 5%;
  /* background-color: #e5e5e5; */
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
</style>