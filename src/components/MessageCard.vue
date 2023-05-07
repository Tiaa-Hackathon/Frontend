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

      <div v-for="message in chatRooms" :key="message.id" class="message">
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
                  @click="initiateChat(message.email)"
                  v-bind="attrs"
                  v-on="on"
                >
                  Open Chat
                </v-btn>
              </template>
              <v-card>
                <ChatBoxVue
                  @selfmsg="pushMessageFromMe"
                  :to="chattingTo"
                  :messages="roomMessages"
                ></ChatBoxVue>
              </v-card>
            </v-dialog>
          </v-row>
        </v-list-item>
      </div>
    </v-container>
  </div>
</template>

<script>
import { socket } from "../utils/socket";
import ChatBoxVue from "../components/ChatBox.vue";
import { mutationNames } from "@/store/mutationTypes";
export default {
  data() {
    return {
      roomMessages: [],
      chattingTo: "",
      chatRooms: [
        {
          author: "A",
          email: "achyut.shukla.btech2020@sitpune.edu.in",
          content: "message content",
          timestamp: "25-05-2020",
        },
        {
          author: "B",
          email: "shriji.jha.btech2020@sitpune.edu.in",
          content: "message content",
          timestamp: "25-05-2020",
        },
        {
          author: "Author",
          email: "abcaaaa@yahoo.com",
          content: "message content",
          timestamp: "25-05-2020",
        },
        {
          author: "Author",
          email: "abcaa@yahoo.com",
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
    initiateChat(receiverEmail) {
      this.chattingTo = receiverEmail;
    },
    pushMessageFromMe(content) {
      this.roomMessages.push({
        content,
        from: this.$store.state.auth.user.email,
      });
    },
  },
  async mounted() {
    // Refetching email here since we need it for socketing
    // Env this
    const myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      `Bearer ${localStorage.getItem("token")}`
    );
    const url = `${process.env.VUE_APP_BACKEND_URL}/auth/jwt`;

    const requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };

    const response = await fetch(url, requestOptions);
    const res = await response.json();

    this.$store.commit(mutationNames.setEmail, res.email);

    socket.connect();
    socket.once("connect", () => {
      // Replace myemail with store.user.auth.email or it's equivalent
      socket.emit("mapUserEmailToSocketId", {
        email: this.$store.state.auth.user.email,
        id: socket.id,
      });

      // Bandaid fix, preferably overhaul this by having a user messages global state and receiving this event in the base socket.js file itself
      socket.on("receiveDM", ({ content, from }) => {
        console.log(content, from);

        this.roomMessages.push({ content, from });
      });

      // manage connected state here if any
    });
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
