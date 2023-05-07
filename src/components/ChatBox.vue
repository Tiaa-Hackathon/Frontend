<template>
  <div>
    <v-list-item>
      <template>
        <v-list-item-content>
          <v-list-item-title class="text-h5"
            >Get authorname from message card</v-list-item-title
          >
        </v-list-item-content>
      </template>
    </v-list-item>

    <v-list-item>
      <ChatBubbleVue author="John Doe"></ChatBubbleVue>
    </v-list-item>
    <v-list-item>
      <ChatBubbleVue isUser text_content="this is right"></ChatBubbleVue>
    </v-list-item>

    <v-list-item>
      <ChatBubbleVue author="John Doe"></ChatBubbleVue>
    </v-list-item>
    <v-list-item>
      <ChatBubbleVue isUser></ChatBubbleVue>
    </v-list-item>
    <v-list-item>
      <ChatBubbleVue author="John Doe"></ChatBubbleVue>
    </v-list-item>
    <v-list-item>
      <ChatBubbleVue isUser></ChatBubbleVue>
    </v-list-item>
    <v-list-item>
      <ChatBubbleVue author="John Doe"></ChatBubbleVue>
    </v-list-item>
    <v-list-item>
      <ChatBubbleVue isUser></ChatBubbleVue>
    </v-list-item>

    <v-list-item>
      <v-text-field
        v-model="typed_text"
        :error-messages="errors"
        label="Type a message"
      ></v-text-field>
      <v-btn rounded color="purple darken-3">
        <v-icon color="white">mdi-send</v-icon>
      </v-btn>
    </v-list-item>
  </div>
</template>

<script>
import ChatBubbleVue from "../components/ChatBubble.vue";

export default {
  data() {
    return {
      name: "chatbox",
      typed_message: "",
    };
  },
  components: {
    ChatBubbleVue,
  },

  props: {
    authorName: String,
  },

  methods: {
    handleShowMore(authorName) {
      this.authorName = authorName;
    },
  },

  mounted() {
    this.$on("show-more", this.handleShowMore);
  },

  beforeDestroy() {
    this.$off("show-more", this.handleShowMore);
  },
};
</script>

<style lang="scss" scoped></style>
