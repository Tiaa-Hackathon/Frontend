<template>
  <div>
    <v-list-item>
      <template>
        <v-list-item-content>
          <v-list-item-title class="text-h5">{{ to }}</v-list-item-title>
        </v-list-item-content>
      </template>
    </v-list-item>

    <v-list-item v-for="(msg, id) in messages" :key="id">
      <ChatBubbleVue
        :author="msg.from"
        :text_content="msg.content"
        :is-user="me === msg.from"
      ></ChatBubbleVue>
    </v-list-item>

    <v-list-item>
      <v-text-field
        v-model="typed_message"
        :error-messages="errors"
        label="Type a message"
      ></v-text-field>
      <v-btn rounded color="purple darken-3" @click="sendMessage">
        <v-icon color="white">mdi-send</v-icon>
      </v-btn>
    </v-list-item>
  </div>
</template>

<script>
import ChatBubbleVue from "../components/ChatBubble.vue";
import { socket } from "../utils/socket";

export default {
  data() {
    return {
      me: this.$store.state.auth.user.email,
      name: "chatbox",
      typed_message: "",
    };
  },
  components: {
    ChatBubbleVue,
  },

  props: {
    messages: [],
    authorName: String,
    to: String,
  },

  methods: {
    sendMessage() {
      // send to server
      socket.emit("dm", {
        content: this.typed_message,
        to: this.to,
        from: this.$store.state.auth.user.email,
      });

      // Populate own chatbox
      this.$emit("selfmsg", this.typed_message);

      // Clear after send
      this.typed_message = "";
    },
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
