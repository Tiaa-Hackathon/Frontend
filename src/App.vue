<template>
  <div class="create-post-container">
    <h1>Create Post</h1>
    <div class="titleInput">
      <input type="text" id="textInput" v-model="textInput" placeholder="Enter post Title" class="input"/>
      <button @click="savetofile()">Save</button>
    </div>
    <div class="editor-container">
      <wysiwyg v-model="content" class="editor"/>
      <div class="editor-footer">
        <span class="editor-footer-text">Add image</span>
        <span class="editor-footer-text">Add link</span>
      </div>
       <div>
      <parameter-input v-model="parameters" />
      <p>Input value: {{ parameters }}</p>
     </div>
    </div>
    <div class="content-display" v-html="content"></div>
  </div>
</template>

<script>

import ParameterInput from './components/ParameterInput.vue';
export default {
  components:{
    ParameterInput,
  },
  data() {
    return {
      content: "",
      textInput: "",
      parameters: "",
    };
  },
  methods: {
    savetofile() {
      // your save logic here
    }
  }
};
</script>

<style>
body {
  background-color: #f1f1f1;
}

.create-post-container {
  background-color: #fff; 
  padding: 20px;
  margin: 20px auto;
  text-align: left;
  max-width: 800px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

h1 {
  margin-top: 0;
  font-size: 24px;
  color: #2e3d49;
}

.titleInput {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.input{
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background: #f1f1f1;
  color: #2e3d49;
  font-size: 18px;
  font-weight: 500;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
}

.input:focus {
  outline: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

button {
  background-color: #2e3d49;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

button:hover {
  background-color: #3c4c5a;
}

.editor-container {
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.editor {
  min-height: 400px;
  padding: 1px;
  font-size: 18px;
  font-weight: 500;
  color: #2e3d49;
}

.editor-footer {
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  border-top: 1px solid #ddd;
}

.editor-footer-text {
  margin-left: 10px;
  font-size: 16px;
  font-weight: 500;
  color: #282828;
}
</style>