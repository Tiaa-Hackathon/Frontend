<template>
  <div class="create-post-container">
    <h1>Create Post</h1>
    <div class="titleInput">
      <input type="text" id="textInput" v-model="textInput" placeholder="Enter post Title" class="input"/>
      <button @click="savetofile()">Save</button>
      </div>
    <wysiwyg v-model="content" class="editor"/>
    <div class="content-display" v-html="content"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: ""
    };
  }
};
</script>

<style>
body {
  background-color: #2e3440;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1000px;
  margin: 0;
}


.wysiwyg-editor{
  min-height: 800px;
  min-width: 600px;
  font-size: 12;
}

.create-post-container {
  background-color: #4c566a; 
  padding: 20px;
  margin: 20px;
  text-align: left;
  width: 70vw;
  height: 70vh;
  border-radius: 30px; 
  box-shadow: #ECEFF4;
  transition: box-shadow 0.3s ease-in-out;
  color: #ECEFF4;
}

.create-post-container:hover{
  box-shadow: 0 5px 15px #ECEFF4
}
.input{
  width: 65vw;
  padding: 10px;
  border-radius: 15px;
  background: #3b4252;
  color: #ECEFF4;
}

h1 {
  margin-top: 0;
}

.editor {
  border: 1px solid #4c566a;
  padding: 5px;
  border-radius: 25px;

}
.editr--toolbar{
  width: 70vw;
  height: 70vh;
  color: #3b4252;
  border-radius: 10px;
}

.content-display {
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  max-width: 600px;
  max-height: 600px;
}
</style>