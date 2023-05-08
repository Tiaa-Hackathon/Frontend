<template>
  <div class="main">
    <div class="AnalyticsList">
      <v-row>
        <v-col cols="4" sm="4" md="4" lg="4">
          <div class="metric-box">
            <div class="metric-value">{{ userRegs }}</div>
            <div class="metric-label">Number of User Registered</div>
          </div>
        </v-col>
        <v-col cols="4" sm="4" md="4" lg="4">
          <div class="metric-box">
            <div class="metric-value">{{ numPosts }}</div>
            <div class="metric-label">Number of Posts for the Day</div>
          </div>
        </v-col>
        <v-col cols="4" sm="4" md="4" lg="4">
          <div class="metric-box">
            <div class="metric-value">{{ flagInap }}</div>
            <div class="metric-label">Posts flagged Inappropriate</div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userRegs: 0,
      numPosts: 0,
      flagInap: 0,
    };
  },
  async created() {
    const response = await this.getAnalytics();
    if (response.ok) {
      const { data } = await response.json();
      this.userRegs = data.userAnalytics;
      this.numPosts = data.postAnalytics;
      this.flagInap = data.postActivity;
    } else {
      alert("Some error occured");
    }
  },
  methods: {
    async getAnalytics() {
      const url = process.env.VUE_APP_BACKEND_URL + "/analytics";

      const headers = new Headers();
      headers.append(
        "Authorization",
        `Bearer ${localStorage.getItem("token")}`
      );
      console.log("reched here");

      const requestOptions = {
        method: "GET",
        headers: headers,
        redirect: "follow",
      };

      const response = await fetch(url, requestOptions);
      return response;
    },
  },
};
</script>

<style>
.main {
  margin: 20px;
}

.AnalyticsList {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.metric-box {
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 20px;
  margin: 20px;
  width: 250px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.metric-value {
  font-size: 48px;
  font-weight: 600;
  margin-bottom: 10px;
}

.metric-label {
  font-size: 16px;
  font-weight: 400;
}
</style>
