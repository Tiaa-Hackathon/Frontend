<template>
  <div class="createPost" style="margin: 20px 20px 0 20px">
    <v-avatar style="margin: 10px; width: 80px; height: 80px">
      <img src="https://randomuser.me/api/portraits/men/15.jpg" />
    </v-avatar>

    <input class="post" type="text" placeholder="Hey! What's on your mind?" />
  </div>
</template>

<script>
export default {
  name: "CreatePostVue",
  data() {
    return {
      post: "",
    };
  },
};
</script>

<style scoped>
.createPost {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: rgb(255, 239, 239);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}
.post {
  width: 80%;
  height: 80%;
  margin-left: 10px;
  margin-right: 20px;
  border-radius: 10px;
  border: 1px solid #525252;
  padding: 10px;
  font-size: 1rem;
  background: white;
}
img {
  width: 80%;
  height: 80%;
  border-radius: 50%;
}
</style>
