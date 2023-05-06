<template>
  <div>
    <PostCardVue />
    <PostCardVue />
    <PostCardVue />
    <PostCardVue />
    <PostCardVue />
  </div>
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
