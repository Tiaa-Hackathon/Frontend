<template>
  <!-- <v-container align-self="center" justify="center">
    <v-row align-self="auto" justify="center">
      <v-col cols="12" md="6"> -->
  <v-card class="mb-5" style="margin: 20px">
    <v-card-subtitle class="post-info">
      <v-avatar style="margin: 10px; width: 80px; height: 80px">
        <img src="https://randomuser.me/api/portraits/men/71.jpg" />
      </v-avatar>
      <div class="author-info">
        <div>{{ post.author.name }} | {{ post.author.info }}</div>
        <div>{{ post.date }}</div>
      </div>
      <v-btn icon class="edit-icon" v-on:click="showEditPost = true">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <!-- <v-btn icon class="message-icon" @click="showMessage = true">
        <v-icon>mdi-comment</v-icon>
      </v-btn> -->
    </v-card-subtitle>
    <v-card-title>
      <h3>{{ post.title }}</h3>
    </v-card-title>
    <div style="margin: 1rem" v-html="markedContent"></div>
    <v-card-actions>
      <v-row no-gutters align-self="center">
        <v-col>
          <div>
            <v-btn icon v-on:click="upvote">
              <v-icon>mdi-thumb-up</v-icon>
            </v-btn>
            <span>{{ post.upvotes }}</span>
            <v-btn icon v-on:click="downvote">
              <v-icon>mdi-thumb-down</v-icon>
            </v-btn>
            <span>{{ post.downvotes }}</span>
            <v-icon @click="toggleComments(index)">mdi-comment</v-icon>
          </div>
        </v-col>
      </v-row>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="showComments[index]">
        <v-divider></v-divider>
        <v-card variant="tonal">
          <div class="comment-section">
            <h3>Comments</h3>
            <div
              v-for="(comment, index) in comments"
              :key="index"
              class="comment"
            >
              <p>
                <strong>{{ comment.author }}</strong> ({{ comment.timestamp }})
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
    <!-- <v-dialog
      v-model="showMessage"
      max-width="1280"
      style="
        border-radius: 10px;
        background: white;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
      "
    >
      <div style="background-color: white; width: 100%; height: 80vh">
        <h4>Message</h4>
      </div>
    </v-dialog> -->

    <v-dialog
      v-model="showEditPost"
      max-width="1280"
      style="
        border-radius: 10px;
        background: white;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
      "
    >
      <div class="edit-post-info">
        <h2 class="heading">Edit Post</h2>
        <div class="tags-container">
          <h3 class="tags-heading">Choose Relevant Tags:</h3>
          <Tags class="tags" />
        </div>
        <v-text-field
          style="width: 95%"
          label="Enter Post Title"
          v-model="post.title"
          outlined
          dense
        ></v-text-field>
      </div>
      <div style="background-color: white" class="createpost">
        <Editor class="editor" :bodyContent="post.content" />

        <div class="interact">
          <router-link
            target="_blank"
            :to="{
              path: '/post/edit',
              query: {
                title: post.title,
                content: post.content,
              },
            }"
          >
            <v-btn color="#E8D3FF">Open In External Editor</v-btn>
          </router-link>
          <v-btn color="#E8D3FF" style="margin-left: 10px">Post</v-btn>
        </div>
      </div>
    </v-dialog>
  </v-card>

  <!-- </v-col>
    </v-row>
  </v-container> -->
</template>

<script>
import MarkdownIt from "markdown-it";
import Editor from "@/components/Editor.vue";
import Tags from "@/components/Tags.vue";
import CommentsCardVue from "@/components/CommentsCard.vue";

export default {
  data() {
    return {
      showComments: [],
      comments: [],
      showEditPost: false,
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
  components: {
    Editor,
    Tags,
  },
  props: {
    post: {
      type: Object,
      required: true,
      default: () => {
        return {
          title: "What are the best ways to stay motivated and productive?",
          content:
            "We all struggle with motivation and productivity from time to time. Here are some tips and tricks that have worked for me:\n\n## 1. Set goals and break them down into smaller tasks\n\nHaving a clear goal in mind can help you stay motivated, but it can also feel overwhelming. That's why it's important to break your goal down into smaller, more manageable tasks. That way, you can make progress and feel accomplished without getting overwhelmed.\n\n## 2. Create a routine\n\nHaving a routine can help you establish good habits and make productivity feel more automatic. Try to create a daily routine that includes time for work, exercise, and relaxation.\n\n## 3. Eliminate distractions\n\nDistractions can kill your motivation and make it hard to focus. Try to eliminate distractions by turning off your phone or computer notifications, closing unnecessary tabs, and finding a quiet space to work.\n\n## 4. Take breaks\n\nIt's important to take breaks throughout the day to recharge your batteries and avoid burnout. Try to take short breaks every hour or so, and longer breaks for meals and exercise.\n\n## 5. Celebrate your accomplishments\n\nDon't forget to celebrate your accomplishments along the way! Whether it's completing a task, hitting a milestone, or just making progress, take the time to acknowledge your hard work and give yourself a pat on the back.\n\nWhat are some of your favorite tips for staying motivated and productive? Share them in the comments below!",
          upvotes: 0,
          downvotes: 0,
          author: { name: "John Doe", info: "University of Waterloo" },
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
    viewPost() {
      this.dialog = true;
    },
    editPost() {},
    displaycomments() {
      return CommentsCardVue;
    },
    addComment() {
      this.comments.push({
        author: "User",
        content: this.newComment.content,
        timestamp: new Date().toLocaleString(),
        replied: false,
        showReplyForm: false,
      });
      this.newComment.content = "";
    },
    showReplyForm(index) {
      this.comments[index].showReplyForm = !this.comments[index].showReplyForm;
    },
    toggleComments(index) {
      this.$set(this.showComments, index, !this.showComments[index]);
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
  top: 85px;
  right: 15px;
  cursor: pointer;
}
.message-icon {
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
}

.post-info {
  display: flex;
  font-size: 1.2rem;
  align-items: center;
  background-color: #e8d3ff;
}

.author-info {
  margin-left: 20px;
  color: rgb(0, 0, 0);
}
.edit-post-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
}

.heading {
  margin: 20px;
  font-size: 2rem;
}

.tags-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
createpost {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.editor {
  width: 100%;
  height: 100%;
  margin-top: 0;
  margin-bottom: 30px;
}

.interact {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
}
.close {
  margin-bottom: 5px;
  width: 5%;
  text-align: center;
  align-content: right;
  margin-left: 95%;
}

textarea {
  resize: none;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  width: 100%;
  padding: 10px;
  margin-bottom: 0.5em;
}

.comment-section {
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
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

.comment > p:first-child {
  color: #3c3c3c;
  margin-bottom: 0.5em;
}

.comment .comment-timestamp {
  font-size: 12px;
  color: #999;
  margin-left: 5px;
}
</style>
