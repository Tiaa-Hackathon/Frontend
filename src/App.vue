<template>
  <v-app>
    <v-main>
      <!--<LoadingSpinner v-if="false" /> -->
      <NavBar />
      <router-view />
    </v-main>
  </v-app>
</template>
"
<script>
import NavBar from "@/components/navbar.vue";

export default {
  name: "App",
  components: {
    NavBar,
    //UserProfile,
  },
};
</script>

<style>
/*
@import url("@/assets/styles.css");
*/
</style>
