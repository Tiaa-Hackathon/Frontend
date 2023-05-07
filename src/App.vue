<template>
  <v-app>
    <v-main>
      <!--<LoadingSpinner v-if="false" /> -->
      <NavBar />
      <router-view />
      <Footer></Footer>
    </v-main>
  </v-app>
</template>
<script>
// import { mutationNames } from "@/store/mutationTypes";
import NavBar from "@/components/navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "App",
  components: {
    NavBar,
    //UserProfile,
    Footer,
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
#app{
  background-image: url('@/assets/bg.png');
  background-size: 100%;
  background-position: center center;
  
  /* background-repeat: no-repeat; */
}

</style>
