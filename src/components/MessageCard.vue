<template>
  <div class="message-list">
    <!-- code for without avatar -->
    <!-- <div v-for="message in messages" :key="message.id" class="message">
        <div class="message__author">{{ message.author }}</div>
        <div class="message__content">{{ message.content }}</div>
        <div class="message__timestamp">{{ message.timestamp }}</div>
    </div> -->

    <!-- code with avatar -->
    <v-container class="message-container">
      <v-list-item class="title-container">
        <v-list-item-content>
          <div class="top-line">
            <v-list-item-title class="headline mx-auto"
              >MyChats</v-list-item-title
            >
            <v-btn icon>
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </div>
        </v-list-item-content>
      </v-list-item>

      <div v-for="message in messages" :key="message.id" class="message">
        <v-list-item>
          <v-list-item>
            <v-list-item-avatar color="grey darken-3">
              <v-img
                class="elevation-6"
                alt=""
                src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
              ></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <div class="message__author">Name: {{ message.author }}</div>
              <div class="message__content">Message:{{ message.content }}</div>
              <div class="message__timestamp">
                timestamp: {{ message.timestamp }}
              </div>
            </v-list-item-content>

            <v-icon class="mr-1" color="blue"> mdi-radiobox-marked </v-icon>
          </v-list-item>

          <v-row justify="center">
            <v-dialog v-model="dialog" width="80%" top :offset="60">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  @click="Passnametochatwindow(message.author)"
                  v-bind="attrs"
                  v-on="on"
                >
                  Show More
                </v-btn>
              </template>
              <v-card>
                <ChatBoxVue />
              </v-card>
            </v-dialog>
          </v-row>
        </v-list-item>
      </div>
    </v-container>
  </div>
</template>

<script>
import ChatBoxVue from "../components/ChatBox.vue";
export default {
  data() {
    return {
      messages: [
        {
          author: "Author",
          content: "message content",
          timestamp: "25-05-2020",
        },
        {
          author: "Author",
          content: "message content",
          timestamp: "25-05-2020",
        },
        {
          author: "Author",
          content: "message content",
          timestamp: "25-05-2020",
        },
        {
          author: "Author",
          content: "message content",
          timestamp: "25-05-2020",
        },
      ],
    };
  },

  components: {
    ChatBoxVue,
  },

  methods: {
    Passnametochatwindow(authorName) {
      this.$emit("show-more", authorName);
    },
  },
};
</script>

<style scoped>
.message {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
}

.message__author {
  font-weight: bold;
  margin-bottom: 5px;
}

.message__timestamp {
  font-size: 12px;
  color: #999;
  margin-top: 5px;
}

.message-container {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 20px;
}

.message-box {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 20px;
}

.top-line {
  display: flex;
}
</style>
