<template>
  <!-- <v-container align-self="center" justify="center">
    <v-row align-self="auto" justify="center">
      <v-col cols="12" md="6"> -->
  <v-card class="mb-5">
    <v-card-subtitle>
      <v-avatar style="margin-right: 20px">
        <img src="https://randomuser.me/api/portraits/men/75.jpg" />
      </v-avatar>
      <span>{{ post.author }}</span>
      <span class="mx-2">|</span>
      <span>{{ post.date }}</span>
      <v-btn icon class="edit-icon" v-on:click="editPost">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </v-card-subtitle>
    <v-card-title>
      <h3>{{ post.title }}</h3>
    </v-card-title>
    <v-card-actions>
      <v-row no-gutters align-self="center">
        <v-col>
          <v-btn icon v-on:click="upvote">
            <v-icon>mdi-thumb-up</v-icon>
          </v-btn>
          <span>{{ post.upvotes }}</span>
          <v-btn icon v-on:click="downvote">
            <v-icon>mdi-thumb-down</v-icon>
          </v-btn>
          <span>{{ post.downvotes }}</span>
        </v-col>
        <v-dialog v-model="dialog" width="600px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn text v-on:click="viewPost(post)" v-bind="attrs" v-on="on">
              View post
            </v-btn>
          </template>
          <v-card style="padding: 2rem">
            <v-card-text>
              <div v-html="markedContent"></div>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-row>
    </v-card-actions>
  </v-card>
  <!-- </v-col>
    </v-row>
  </v-container> -->
</template>

<script>
import MarkdownIt from "markdown-it";

export default {
  data() {
    return {
      markedContent: "## Hello world",
    };
  },
  props: {
    post: {
      type: Object,
      required: true,
      default: () => {
        return {
          title: "First post",
          content: "# Hello world\n\n## Hello world",
          upvotes: 0,
          downvotes: 0,
          author: "John Doe",
          date: "May 6, 2023",
        };
      },
    },
  },
  methods: {
    upvote() {
      this.post.upvotes += 1;
    },
    downvote() {
      this.post.downvotes += 1;
    },
    viewPost() {},
    editPost() {},
  },
  created() {
    const md = new MarkdownIt();
    const data = md.render(this.post.content);
    this.markedContent = data;
  },
};
</script>

<style scoped>
.edit-icon {
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
}
</style>
