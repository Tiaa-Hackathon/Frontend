<template>
  <div class="trending-topics">
    <h2>Trending Topics</h2>
    <ul>
      <li v-for="(topic, index) in topics" :key="index">{{ topic }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TrendingTopicsVue",
  data() {
    return {
      topics: [],
    };
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
