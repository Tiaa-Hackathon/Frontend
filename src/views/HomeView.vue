<template>
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

<style lang="scss" scoped></style>
