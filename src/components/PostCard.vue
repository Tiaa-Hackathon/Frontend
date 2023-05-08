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
        <div>
          {{ new Date(this.post.createdAt).toLocaleDateString() }}
        </div>
      </div>
      <v-btn icon class="edit-icon" v-on:click="showEditPost = true" v-if="isAuthor">
        <v-icon>mdi-pencil</v-icon>

      </v-btn>

      <v-btn @click="toggleThreeButton" icon class="edit-icon2">
        <v-icon>mdi-dots-vertical</v-icon>
      <v-menu v-model="menu" :close-on-content-click="false" offset-x>
        <template v-slot:activator="{ on }">
          <span v-on="on"></span>
        </template>
        <v-list>
        <v-list-item>
            <v-checkbox
              v-model="checkboxValue"
              @change="handleCheckboxChange"
              label="Option 1"
              color="#6E0095"
            ></v-checkbox>
          </v-list-item>
          <v-list-item @click="handleClick('Option 2')">
            <v-list-item-title>Option 1</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
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
            <v-btn icon v-on:click="upvote" :color="upvoted && 'primary'">
              <v-icon>mdi-thumb-up</v-icon>
            </v-btn>
            <span>{{ post.upvotes || 0 }}</span>
            <v-btn icon v-on:click="downvote" :color="downvoted && 'primary'">
              <v-icon>mdi-thumb-down</v-icon>
            </v-btn>
            <span>{{ post.downvotes || 0 }}</span>
            <v-icon @click="toggleComments(index)">mdi-comment</v-icon>
            <span>{{ 0 }}</span>
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
            <div v-for="(comment, index) in comments" :key="index" class="comment">
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

    <v-dialog v-model="showEditPost" max-width="1280" style="
        border-radius: 10px;
        background: white;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
      ">
      <div class="edit-post-info">
        <h2 class="heading">Edit Post</h2>
        <div class="tags-container">
          <h3 class="tags-heading">Choose Relevant Tags:</h3>
          <Tags class="tags" />
        </div>
        <v-text-field style="width: 95%" label="Enter Post Title" v-model="post.title" outlined dense></v-text-field>
      </div>
      <div style="background-color: white" class="createpost">
        <Editor class="editor" :bodyContent="post.body" />

        <div class="interact">
          <router-link target="_blank" :to="{
            path: '/post/edit',
            query: {
              title: post.title,
              content: post.body,
            },
          }">
            <v-btn color="#E8D3FF">Open In External Editor</v-btn>
          </router-link>
          <v-btn color="#E8D3FF" style="margin-left: 10px" @click="handleEditPost">Post</v-btn>
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
import markdownIt from "markdown-it";

export default {
  data() {
    return {
      menu: false,
      checkboxValue: false,
      isAuthor: false,
      showComments: [],
      comments: [],
      showEditPost: false,
      newComment: {
        author: "John Doe", // Replace with the desired author name
        content: "",
        timestamp: "",
      },
      dropdownOpen: false,
      markedContent: markdownIt().render(this.post.body) || "## hello world",
      dialog: false,
      components: CommentsCardVue,
      upvoted: false,
      downvoted: false,
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
          body: "We all struggle with motivation and productivity from time to time. Here are some tips and tricks that have worked for me:\n\n## 1. Set goals and break them down into smaller tasks\n\nHaving a clear goal in mind can help you stay motivated, but it can also feel overwhelming. That's why it's important to break your goal down into smaller, more manageable tasks. That way, you can make progress and feel accomplished without getting overwhelmed.\n\n## 2. Create a routine\n\nHaving a routine can help you establish good habits and make productivity feel more automatic. Try to create a daily routine that includes time for work, exercise, and relaxation.\n\n## 3. Eliminate distractions\n\nDistractions can kill your motivation and make it hard to focus. Try to eliminate distractions by turning off your phone or computer notifications, closing unnecessary tabs, and finding a quiet space to work.\n\n## 4. Take breaks\n\nIt's important to take breaks throughout the day to recharge your batteries and avoid burnout. Try to take short breaks every hour or so, and longer breaks for meals and exercise.\n\n## 5. Celebrate your accomplishments\n\nDon't forget to celebrate your accomplishments along the way! Whether it's completing a task, hitting a milestone, or just making progress, take the time to acknowledge your hard work and give yourself a pat on the back.\n\nWhat are some of your favorite tips for staying motivated and productive? Share them in the comments below!",
          upvotes: 0,
          downvotes: 0,
          author: { name: "John Doe", info: "University of Waterloo" },
          date: "May 6, 2023",
        };
      },
    },
  },
  methods: {
    async upvote() {
      const url = process.env.VUE_APP_BACKEND_URL + "/post/activity";

      const headers = new Headers();
      headers.append("Content-Type", "application/json");
      headers.append(
        "Authorization",
        `Bearer ${localStorage.getItem("token")}`
      );

      const body = {
        activity_type: "upvote",
        post_id: this.post._id,
      };

      const response = await fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify(body),
        redirect: "follow",
      });
      if (response.ok) {
        const {
          data: { message },
        } = await response.json();
        if (message.includes("upvoted")) {
          this.upvoted = true;
          this.downvoted = false;
          this.post.upvotes += 1;
        } else {
          this.upvoted = false;
        }
      } else {
        return alert(response.message);
      }
    },
    async downvote() {
      const url = process.env.VUE_APP_BACKEND_URL + "/post/activity";

      const headers = new Headers();
      headers.append("Content-Type", "application/json");
      headers.append(
        "Authorization",
        `Bearer ${localStorage.getItem("token")}`
      );

      const body = {
        activity_type: "downvote",
        post_id: this.post._id,
      };

      const response = await fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify(body),
        redirect: "follow",
      });
      if (response.ok) {
        this.downvoted = !this.post.is_downvote;
      } else {
        return alert(response.message);
      }
    },
    viewPost() {
      this.dialog = true;
    },
    editPost() { },
    displaycomments() {
      return CommentsCardVue;
    },
    toggleThreeButton() {
      this.menu = !this.menu;
    },
    handleCheckboxChange() {
      console.log(`Checkbox value: ${this.checkboxValue}`);
    },
    handleClick(option) {
      console.log(`Clicked: ${option}`);
      this.menu = false;
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
    async alterPost() {
      const url = process.env.VUE_APP_BACKEND_URL + "/post/" + this.post._id;
      // const url = `${process.env.VUE_APP_BACKEND_URL}/post/${this.post._id}}`;
      console.log("url", url);

      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };

      const body = {};

      if (this.post.title) {
        body.title = this.post.title;
      }

      if (this.post.body) {
        body.body = this.post.body;
      }

      const response = await fetch(url, {
        method: "PUT",
        headers,
        body: JSON.stringify(body),
      });

      return response.json();
    },
    async handleEditPost() {
      const response = await this.alterPost();
      if (response.ok) {
        this.showEditPost = false;
        alert("Post edited successfully");
      } else {
        alert(response.message);
      }
    },
  },
  created() {
    const md = new MarkdownIt();
    const data = md.render(this.post.content);
    this.markedContent = data;
    this.post["date"] = new Date(this.post.createdAt).toLocaleDateString();
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      this.isAuthor = user._id === this.post.author._id;
    }
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

.edit-icon2 {
  position: absolute;
  top: 10px;
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

.comment>p:first-child {
  color: #3c3c3c;
  margin-bottom: 0.5em;
}

.comment .comment-timestamp {
  font-size: 12px;
  color: #999;
  margin-left: 5px;
}
</style>
