<template>
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
          <v-icon v-on:click="toggleComments(index)" >mdi-comment</v-icon>

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
    <v-expand-transition>
      <div v-show="showComments[index]">
        <v-divider></v-divider>
        <v-card variant="tonal">
          <div class="comment-section">
            <h3>Comments</h3>
            <div v-for="(comment, index) in comments" :key="index" class="comment">
              <p>
                <strong>{{ comment.author }}</strong> ({{
                  comment.timestamp
                }})
              </p>
              <p>{{ comment.content }}</p>
              <div v-if="!comment.replied">
                <v-btn small @click="showReplyForm(index)">Reply</v-btn>
              </div>
              <div v-if="comment.showReplyForm">
                <textarea v-model="comment.replyContent"></textarea>
                <v-btn small @click="addReply(index)">Submit Reply</v-btn>
              </div>
              <div v-if="comment.replied">
                <p>
                  <strong>{{ comment.replyAuthor }}</strong> ({{
                    comment.replyTimestamp
                  }}) - Reply:
                </p>
                <p>{{ comment.replyContent }}</p>
              </div>
            </div>
            <div class="new-comment">
              <h4>Add a comment</h4>
              <textarea v-model="newComment.content"></textarea>
              <v-btn @click="addComment">Add Comment</v-btn>
            </div>
          </div>
        </v-card>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
import MarkdownIt from "markdown-it";
import CommentsCardVue from "@/components/CommentsCard.vue";

export default {
  data() {
    return {
      showComments: [],
      comments: [],
      newComment: {
        author: "John Doe", // Replace with the desired author name
        content: "",
        timestamp: "",
      },
      dropdownOpen: false,
      markedContent: "## Hello world",
      dialog: false,
      components: CommentsCardVue,
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
          comments: [],
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
    viewPost() {
      this.dialog = true;
    },
    displaycomments() {
      return CommentsCardVue;
    },
    toggleComments(index) {
      this.$set(this.showComments, index, !this.showComments[index]);
    },
    editPost() { },
     addComment() {
      if (!this.newComment.content) {
        alert("Please enter a comment.");
        return;
      }
      this.newComment.timestamp = new Date().toLocaleString();
      this.comments.push({ ...this.newComment });
      this.newComment.content = "";
      this.newComment.timestamp = "";
    },
    showReplyForm(index) {
      this.$set(this.comments[index], "showReplyForm", !this.comments[index].showReplyForm);
    },
    addReply(index) {
      const comment = this.comments[index];
      if (!comment.replyContent) {
        alert("Please enter a reply.");
        return;
      }
      comment.replyAuthor = "John Doe"; // Replace with the desired author name
      comment.replyTimestamp = new Date().toLocaleString();
      comment.replied = true;
      comment.showReplyForm = false;
    },
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

.comment-section {
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
}

h3 {
  margin-bottom: 1em;
  color: #333;
}

.comment {
  padding: 1em;
  border-left: 3px solid #0079d3;
  background-color: #f6f7f8;
  border-radius: 5px;
  margin-bottom: 1em;
}

.comment p {
  margin: 0;
}

.comment strong {
  font-weight: 500;
  font-size: 14px;
  color: #333;
}

.comment>p:first-child {
  color: #3c3c3c;
  margin-bottom: 0.5em;
}

.comment .comment-timestamp {
  font-size: 12px;
  color: #999;
  margin-left: 5px;
}

.new-comment {
  margin-top: 1em;
}

.new-comment h4 {
  margin-bottom: 0.5em;
  color: #333;
}

.new-comment textarea {
  width: 100%;
  height: 100px;
  padding: 10px;
  font-size: 14px;
  margin-bottom: 0.5em;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
}

v-btn {
  font-size: 14px;
  color: #065fd4;
  text-transform: none;
}

textarea {
  resize: none;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  width: 100%;
  padding: 10px;
  margin-bottom: 0.5em;
}

.comment .reply-section {
  padding-left: 20px;
  margin-top: 10px;
  border-left: 1px solid #e0e0e0;
}

.v-card {
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
}

.v-card-subtitle {
  font-size: 14px;
  color: #666;
}

.v-card-title {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.v-card-actions {
  display: flex;
  justify-content: space-between;
}

.v-dialog {
  max-width: 600px;
}


</style>
