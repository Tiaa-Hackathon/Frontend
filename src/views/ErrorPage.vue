<template>
    <v-app class="page">
      <v-container justify="center" fluid="true">
        <v-row justify="center">
          <v-col cols="12" sm="10" md="8" lg="6" xl="4">
            <v-card class="error-card">
              <v-img src="../assets/error-404.png" height="120" contain></v-img>
              <v-card-title class="error-title"
                >Something Went Wrong</v-card-title
              >
              <v-card-subtitle class="error-subtitle"
                >Error 404 - Page not found</v-card-subtitle
              >
              <v-card-text class="error-text">
                Sorry, the page you were looking for could not be found. Please
                check the URL or try again later.
              </v-card-text>
              <v-card-actions class="error-actions">
                <v-btn color="primary" dark to="/">Go to Home</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </template>
  
  <style scoped lang="scss">
  .page {
    min-height: 100dvh !important;
  }
  
  .error-card {
    max-width: 400px;
    margin: auto;
    padding: 32px;
    text-align: center;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
  }
  
  .error-title {
    font-size: 24px;
    font-weight: bold;
    margin-top: 16px;
    margin-bottom: 12px;
    justify-content: center;
    color: #333;
  }
  
  .error-subtitle {
    font-size: 16px;
    margin-bottom: 24px;
    color: #777;
  }
  
  .error-text {
    font-size: 14px;
    margin-bottom: 16px;
    color: #444;
  }
  
  .error-actions {
    display: flex;
    justify-content: center;
  }
  
  .error-actions button {
    text-transform: none;
    font-weight: bold;
    font-size: 14px;
    padding: 8px 16px;
    border-radius: 32px;
  }
  </style>
  