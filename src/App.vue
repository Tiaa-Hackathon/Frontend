<template>
  <v-app>
    <v-main>
      <LoadingSpinner v-if="false" />
      <NavBar />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
// import { mutationNames } from "@/store/mutationTypes";
import NavBar from "@/components/navbar.vue";
export default {
  name: "App",
  components: {
    NavBar,
  },
  // created() {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     this.$store.commit(mutationNames.setLoggedIn, true);
  //   } else {
  //     this.$store.commit(mutationNames.setLoggedIn, false);
  //     this.$router.push("/login");
  //   }
  // },
};
</script>

<style>
/*
@import url("@/assets/styles.css");
*/
</style>
