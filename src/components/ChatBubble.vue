<template>
  <div :class="['chat-bubble', { user: isUser, 'align-right': isUser }]">
    <div class="user-name">{{ UserName }}</div>
    <div class="text_content">{{ text_content }}</div>
    <div class="timestamp">{{ timestamp }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timestamp: new Date().toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        month: "numeric",
        day: "numeric",
      }),
    };
  },

  props: {
    isUser: {
      type: Boolean,
      default: false,
    },
    text_content: {
      type: String,
      default: "Heyy, Welcome to Quora Clone",
    },
    author: {
      type: String,
    },
  },

  computed: {
    UserName() {
      if (this.isUser) {
        return "You";
      } else if (this.author) {
        return this.author;
      } else {
        return "Unknown User";
      }
    },
  },
};
</script>

<style scoped>
.chat-bubble {
  background-color: #eee;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 10px;
  display: inline-block;
  position: relative; /* position:relative is required to position the timestamp element */
}

.chat-bubble.user {
  background-color: #e8a5ff;
  color: #fff;
  align-self: flex-end;
}

.user-name {
  font-weight: bold;
  margin: 5px 0;
  font-size: 0.8em; /* Add this to adjust font size */
}

.timestamp {
  text-align: right;
  bottom: -16px;
  right: -20px;
  font-size: 0.75em;
  color: grey;
}

.text_content {
  font-size: 1em;
}
</style>
