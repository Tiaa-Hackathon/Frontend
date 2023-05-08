<template>
  <v-container>
    <v-row class="text-center mb-4">
      <v-col >
        
      </v-col>
    </v-row>
    <v-row >
      <v-col cols="12" sm="10" md="8" lg="10" xl="40" class="mx-auto">
        <v-card
          v-for="(topic, index) in trendingTopics"
          :key="index"
          class="mb-4"
        >
          <v-img
            :src="topic.image"
            aspect-ratio=""
            class="grey lighten-2"
            contain

          ></v-img>
          <v-card-title>{{ topic.title }}</v-card-title>
          <v-card-subtitle>{{ topic.subtitle }}</v-card-subtitle>
          <v-card-actions>
            <v-btn text color="#6E0095" @click="goToTopic(topic)">Read More</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>



<script>
export default {
  name: "TrendingTopicsVue",
  data() {
    return {
      trendingTopics: [
        // Add your trending topics here
        {
          title: "Russia at war",
          subtitle: "NATO's resistance",
          image: "https://qph.cf2.quoracdn.net/main-qimg-e6a96348a094cb2276e6a3203dea5c63",
        },

        // ...
      ],
    };
  },

  methods: {
    goToTopic(topic) {
      // Implement your navigation logic here
      console.log("Navigating to:", topic.title);
    },
  },
  mounted() {
    // fetch the trending topics and set the data
    fetch(
      "https://trends.google.com/trends/api/dailytrends?hl=en-US&tz=-240&ed=20210529"
    )
      .then((response) => response.json())
      .then((data) => {
        const trendingSearches =
          data.default.trendingSearchesDays[0].trendingSearches;
        const topics = trendingSearches.map((search) => search.title.query);
        this.topics = topics;
      });
  },
};
</script>

<style scoped>
.trending-topics {
  margin-top: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
}

h2 {
  font-size: 20px;
  margin-bottom: 10px;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin-bottom: 5px;
  font-size: 16px;
}
</style>
