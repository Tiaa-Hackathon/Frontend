<template>
  <v-container>
    <v-row>
      <v-col cols="8">
        <!-- <CreatePost @click.native="showModal = true" /> -->
        <div v-for="post in postList" :key="post._id">
          <PostCardVue :post="post" />
        </div>
      </v-col>
      <v-col cols="3">
        <!-- <TrendingTopics /> -->
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
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
import PostCardVue from "@/components/PostCard.vue";
// import CreatePost from "@/components/CreatePost.vue";
// import TrendingTopics from "@/components/TrendingTopics.vue";
// import Editor from "@/components/Editor.vue";
// import Tags from "@/components/Tags.vue";
export default {
  name: "ThreeColumnLayout",

  components: {
    PostCardVue,
    // TrendingTopics,
    // CreatePost,
    // Editor,
    // Tags,
  },
  data() {
    return {
      showModal: false,
      postList: [],
    };
  },
  methods: {
    async getAllPosts() {
      const url = `${process.env.VUE_APP_BACKEND_URL}/post/flag/all`;

      const headers = new Headers();
      headers.append(
        "Authorization",
        `Bearer ${localStorage.getItem("token")}`
      );

      const requestOptions = {
        method: "GET",
        headers: headers,
        redirect: "follow",
      };

      const response = await fetch(url, requestOptions);
      return response;
    },
  },
  async created() {
    const response = await this.getAllPosts();

    const { data } = await response.json();
    console.log("data", data);
    const temp = [];
    for (let post in data) {
      temp.push(data[post].post_id);

      // console.log(post, data[post].post_id);
    }
    console.log(temp);
    this.postList = temp;

    // const temp = [];
    // for (let post in data) {
    //   // post.post_id
    //   temp.push(data[post].post_id);
    // }
    // this.postList = temp;
    // console.log("post list", this.postList);
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
