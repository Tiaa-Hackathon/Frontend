<template>
  <v-app>
    <v-main>
      <router-view />
      <NavBar />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "@/components/navbar.vue";
export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style>
/*
@import url("@/assets/styles.css");
*/
</style>
