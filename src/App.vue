<template>
  <v-app>
    <v-main>
      <LoadingSpinner v-if="false" />
      <NavBar />
      <router-view />
      <Footer></Footer>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "@/components/navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "App",
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style>
/*
@import url("@/assets/styles.css");
*/
</style>
