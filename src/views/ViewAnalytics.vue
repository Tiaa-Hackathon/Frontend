<template>
  <div>
    <v-row style="margin-top: 20vh;  ">
      <v-col cols="2" offset="1">
        <v-card style="background-color: rgb(246, 246, 246); padding: 1vh; height: 35vh; border-radius: 2vh; box-shadow: 20%;">
          <v-row style="margin-top: 3vh; height: 50%;">
            <v-col class="text-center">
              <p class="user-registered-value">{{ userRegs }}</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="text-center">
              <p class="user-registered-text" style="margin-left: 1vh; margin-right: 1vh;">NUMBER OF USERS REGISTERED</p>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="2" offset="2">
        <v-card style="background-color: rgb(246, 246, 246); padding: 1vh; height: 35vh; border-radius: 2vh; box-shadow: 20%;">
          <v-row style="margin-top: 3vh; height: 50%;">
            <v-col class="text-center">
              <p class="user-registered-value">{{ numPosts }}</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="text-center">
              <p class="user-registered-text" style="margin-left: 1vh; margin-right: 1vh;">NUMBER OF POSTS FOR THE DAY</p>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="2" offset="2">
        <v-card style="background-color: rgb(246, 246, 246); padding: 1vh; height: 35vh; border-radius: 2vh; box-shadow: 20%;">
          <v-row style="margin-top: 3vh; height: 50%;">
            <v-col class="text-center">
              <p class="user-registered-value">{{ flagInap }}</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="text-center">
              <p class="user-registered-text" style="margin-left: 1vh; margin-right: 1vh;">POSTS FLAGGED INAPPROPRIATE</p>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default{
  data(){
    return{
      userRegs: 0,
      numPosts: 0,
      flagInap: 0
    }
  }
}
</script>

<style>

.user-registered-value{
  font-size: 300%;
  font-weight: 700;
  color: purple;
}

.user-registered-text{
  font-size: 120%;
  font-weight: 500;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;;
}
</style>