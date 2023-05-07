<template>
  <div class="container">
    <h1>Edit Post</h1>
    <div class="input-container">
      <v-text-field
        label="Edit Post Title"
        v-model="post.title"
        outlined
        dense
      ></v-text-field>
    </div>
    <v-card class="card">
      <Editor :bodyContent="post.content" />
      <div class="post-details">
        <v-btn class="EditPost" @click="savePost" color="primary">Save</v-btn>
      </div>
    </v-card>
  </div>
</template>

<script>
import Editor from "@/components/Editor.vue";
export default {
  props: {
    postId: {
      type: Number,
      required: true,
    },
  },
  methods: {
    savePost() {
      console.log("BRAHHHHH");
    },
  },
  data() {
    return {
      post: {
        title: this.$route.query.title || "",
        content: this.$route.query.content || "",
      },
    };
  },
  components: {
    Editor,
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 70vh;
  margin-top: 15vh;
  padding: 2px;
}

h1 {
  text-align: center;
  padding: 20px;
}

.input-container {
  width: 70%;
  margin: 0 auto;
  padding-bottom: 1rem;
}

.card {
  width: 70%;
  margin: 0 auto;
  padding: 1rem;
}

.post-details {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 15px;
  margin: 19px;
  padding-top: 10px;
  color: #999;
}

.EditPost {
  background-color: #999;
  color: beige;
  margin-top: 10px;
  padding: 4px;
  border-radius: 5px;
}
</style>
