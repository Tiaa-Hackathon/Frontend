<template lang="html">
  <div class="comment">
    <h4>
      by <a href="" style="color: black">{{ user.username }}</a> on
      {{ created }}
    </h4>
    <p v-html="content"></p>
  </div>
</template>

<script>
export default {
  name: "comment",
  data() {
    return {
      user: {
        username: "username",
      },
      created: "created",
      content: "content",
    };
  },
};
</script>

<style scoped lang="css">
.comment {
  background: #f2f2f2;
  padding: 20px 10px;
  margin-bottom: 20px;
}

h4 {
  margin: 5px 0;
}

p {
  margin: 5px 0;
}
</style>
