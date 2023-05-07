<!-- <template>
  <v-container align-self="center" justify="center">
    <v-row align-self="auto" justify="center">
      <v-col cols="12" md="6">
        <div>
          <PostCardVue />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PostCardVue from "@/components/PostCard.vue";
export default {
  name: "HomeView",

  components: {
    PostCardVue,
  },
};
</script>

<style lang="scss" scoped></style> -->

<!-- <template>
  <v-container>
    <v-row>
      <v-col cols="2">
        <v-container>
          <v-checkbox
            v-for="(category, index) in categories"
            :key="index"
            :label="category"
            v-model="selectedCategories"
          ></v-checkbox>
        </v-container>
      </v-col>
      <v-col cols="6">
        <PostCardVue v-for="post in postList" :key="post._id" :post="post" />
      </v-col>
      <v-col cols="3">
        <v-card>
          <v-card-title>Useful Info</v-card-title>
          <v-card-text>
            <ul>
              <li><b>Weather:</b> Sunny, 23°C</li>
              <li><b>Today's Date:</b> {{ currentDate }}</li>
              <li><b>Upcoming Events:</b></li>
              <ul>
                <li>Meeting with Client A (2:00 PM)</li>
                <li>Team Lunch (12:00 PM)</li>
                <li>Deadline for Project B (5:00 PM)</li>
              </ul>
              <li><b>Tasks:</b></li>
              <ul>
                <li>Finish UI Design for Project A</li>
                <li>Review Code for Project B</li>
                <li>Prepare Presentation for Meeting with Client A</li>
              </ul>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PostCardVue from "@/components/PostCard.vue";

export default {
  name: "ThreeColumnLayout",

  components: {
    PostCardVue,
  },
  data() {
    return {
      categories: ["Category 1", "Category 2", "Category 3"],
      selectedCategories: [],
      currentDate: new Date().toLocaleDateString(),

      postList: [],
    };
  },
  methods: {
    async getAllPosts() {
      const url = `${process.env.VUE_APP_BACKEND_URL}/post/all`;

      const response = await fetch(url);

      return response;
    },
  },
  async created() {
    const response = await this.getAllPosts();
    const {
      data: { posts },
    } = await response.json();
    this.postList = posts;
  },
};
</script>

<style lang="scss" scoped></style> -->

<!-- <template>
  <v-container align-self="center" justify="center">
    <v-row align-self="auto" justify="center">
      <v-col cols="12" md="6">
        <div>
          <PostCardVue />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PostCardVue from "@/components/PostCard.vue";
export default {
  name: "HomeView",

  components: {
    PostCardVue,
  },
};
</script>

<style lang="scss" scoped></style> -->

<template>
  <v-container>
    <v-row>
      <v-col cols="8">
        <CreatePost @click.native="showModal = true" />
        <div v-for="post in postList" :key="post._id">
          <PostCardVue :post="post" />
        </div>
      </v-col>
      <v-col cols="3">
        <TrendingTopics />
      </v-col>
      <v-dialog
        v-model="showModal"
        max-width="1280"
        style="
          border-radius: 10px;
          background: white;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        "
      >
        <v-btn class="close" color="#E8D3FF" @click="showModal = false"
          >X</v-btn
        >
        <div class="post-info">
          <h2 class="heading">Create A New Post</h2>
          <div class="tags-container">
            <h3 class="tags-heading">Choose Relevant Tags:</h3>
            <Tags class="tags" />
          </div>
          <v-text-field
            style="width: 95%"
            label="Enter Post Title"
            v-model="inputValue"
            outlined
            dense
          ></v-text-field>
        </div>
        <div style="background-color: white" class="createpost">
          <Editor class="editor" />

          <div class="interact">
            <router-link to="/post/create" target="_blank">
              <v-btn color="#E8D3FF">Open In External Editor</v-btn>
            </router-link>
            <v-btn color="#E8D3FF" style="margin-left: 10px">Post</v-btn>
          </div>
        </div>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
import PostCardVue from "@/components/PostCard.vue";
import CreatePost from "@/components/CreatePost.vue";
import TrendingTopics from "@/components/TrendingTopics.vue";
import Editor from "@/components/Editor.vue";
import Tags from "@/components/Tags.vue";
export default {
  name: "ThreeColumnLayout",

  components: {
    PostCardVue,
    TrendingTopics,
    CreatePost,
    Editor,
    Tags,
  },
  data() {
    return {
      showModal: false,
      postList: [],
    };
  },
  methods: {
    async getAllPosts() {
      const url = `${process.env.VUE_APP_BACKEND_URL}/post/all`;

      const response = await fetch(url);
      return response;
    },
  },
  async created() {
    const response = await this.getAllPosts();

    const {
      data: { posts },
    } = await response.json();

    this.postList = posts;
  },
};
</script>

<style lang="scss" scoped>
.createpost {
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
.post-info {
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
</style>
