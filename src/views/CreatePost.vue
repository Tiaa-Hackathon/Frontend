<template>
  <div class="container">
    <h1>Create Post</h1>
    <div class="input-container">
      <v-text-field
        label="Enter Post Title"
        v-model="inputValue"
        outlined
        dense
      ></v-text-field>
    </div>
    <v-card class="card">
      <Editor />
      <div id="tags" class="tags">
        <Tags />
      </div>
    </v-card>
  </div>
</template>

<script>
import Tags from "@/components/Tags.vue";
import Editor from "@/components/Editor.vue";
export default {
  data() {
    return { inputValue: '' }
  },
  components: {
    Editor,
    Tags,
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
  height: 70vh;
  margin: 0 auto;
  padding: 1rem;
}
</style>
