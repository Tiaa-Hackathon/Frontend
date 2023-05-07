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
        <PostCardVue />
        <PostCardVue />
        <PostCardVue />
        <PostCardVue />
        <PostCardVue />
        <PostCardVue />
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
    };
  },
};
</script>

<style lang="scss" scoped></style>
