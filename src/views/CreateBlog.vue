<script setup>
import { computed, onMounted, ref } from "vue";
import router from "../router";
import store from "../store";
const blogid = ref(Math.round(Math.random() * 100).toString());
const blogText = ref("");
const blogTitle = ref("");
const blogVideos = ref([]);

const handleVideoUploads = (ev) => {
  if (ev.target) {
    const file = ev.target.files[0];
    const videoUrl = URL.createObjectURL(file);
    blogVideos.value.push({
      videoId: Math.round(Math.random() * 100).toString(),
      videoUrlStream: videoUrl,
      startTime: 0,
      endTime: null,
    });
  }
};

const handleSaveBlog = () => {
  if (blogTitle.value.length === 0 || blogTitle.value.length < 3) {
    alert("veuillez saissir un titre");
  } else if (blogText.value.length === 0 || blogText.value.length < 3) {
    alert("veuillez saissir une description");
  } else if (blogVideos.value.length === 0) {
    alert("veuillez ajouter une video");
  } else {
    // push to store as incomplete
    blogid.value = (Math.random() * 100).toString();

    let data = {
      blogid: blogid.value,
      blogTitle: blogTitle.value,
      blogText: blogText.value,
      createdAt: new Date().getDate().toLocaleString("EN"),
      completed: false,
      videos: blogVideos.value,
    };

    store.commit("ADD_BLOG_MUTATION", { data });
    router.push({
      name: "videoedit",
      params: {
        blogid: blogid.value,
      },
    });
  }
};
</script>

<template>
  <div class="flex flex-col">
    <h1 class="text-3xl font-bold">create blog page</h1>
    <div class="form-video-input-container">
      <div class="form-control-container">
        <label for="title">blog title</label>

        <input
          type="text"
          class="w-64 rounded py-2 px-2"
          name="title"
          id="title"
          v-model="blogTitle"
        />
      </div>
      <div class="form-control-container">
        <label for="description">blog description</label>

        <input
          type="text"
          class="w-64 rounded py-2 px-2"
          name="description"
          v-model="blogText"
          id="description"
        />
      </div>

      <input
        @change="handleVideoUploads"
        type="file"
        name="video-uploader"
        id="video-uploader"
        multiple
        class="hidden"
        accept="video/mp4,video/mkv, video/x-m4v,video/*"
      />
      <label class="button-select-file" for="video-uploader"
        >selectionner un fichier</label
      >
      <button class="flex justify-center" @click="handleSaveBlog">
        Save blog
      </button>
    </div>
  </div>
</template>

<style scoped>
.form-video-input-container {
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: flex-start;
  align-items: center;
  background-color: antiquewhite;
  flex-wrap: wrap;
  flex-grow: 1;
}
.form-control-container {
  display: flex;
  background-color: aliceblue;
  flex-grow: 1;
}
.button-select-file {
}
</style>
