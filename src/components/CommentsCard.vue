<template>
  <div class="comment">
    <div class="comment-header">
      <div class="comment-author">John Doe</div>
      <div class="comment-created-at">May 6, 2023</div>
    </div>

    <div class="comment-body">
      <v-card class="mx-auto" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </div>
  </div>
</template>

<style>
.comment {
  margin-top: 15px;
  display: flex;
  flex-direction: row;
}

.comment-header {
  font-weight: bold;
  color: #999;
  font-size: 12px;
  margin: 10px;
}

.comment-author {
  margin-right: 5px;
}

.comment-body {
  background-color: #f6f6f6;
  border-radius: 5px;
  padding: 10px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.comment-body .v-card {
  background-color: white;
  width: 95%;
  padding: 10px;
}

.comment-body .v-list-item {
  margin-bottom: 0;
}

.comment-body .v-list-item-content {
  margin-right: 20px;
}

.comment-body .v-list-item-title {
  font-size: 16px;
  font-weight: bold;
}

.comment-body .v-list-item-subtitle {
  font-size: 14px;
  color: #666;
  margin-top: 5px;
  margin-bottom: 10px;
}

.comment-body .v-card-actions {
  padding-top: 0;
  padding-bottom: 0;
}

</style>
