<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
const unfinishedBlogVideo = computed(
  () => store.getters.getUnfinishedBlogDataByUser
);
const newStartDate = ref("");
const newEndDate = ref("");

const verifyVBeginTimeFrame = () => {
  // console.log(newStartDate.value);
  // console.log(newEndDate.value);
  // if (newStartDate.value.length > newEndDate.value.length) {
  //   return false;
  // }
  // if (newEndDate.value.length === newStartDate.value.length) {
  //   return false;
  // }
  // if (newStartDate.value.length === videoData.value.endTime) {
  //   return false;
  // }
  // if (newEndDate.value.length < newStartDate.value.length) {
  //   return false;
  // }
  // return true;
};

const submitEditVideos = () => {
  // if (newStartDate.value.length > 0 || newEndDate.value.length > 0) {
  //   if (!verifyTimeFrame()) {
  //     alert(
  //       "veuillez saissir un temps entre le debut et la fin comme placeholder"
  //     );
  //   } else {
  //     console.log("new times to store", newStartDate.value, newEndDate.value);
  //   }
  // } else {
  //   console.log("new times to store 2", newStartDate.value, newEndDate.value);
  // }
};
const videoref = ref(null);
const showForm = ref(false);
let videoData = ref({
  videoId: "",
  videoUrlStream: "",
  startTime: "",
  endTime: "",
});

const handleVideoClick = (video) => {
  showForm.value = true;
  videoData.value.videoId = video.videoId;
  videoData.value.videoUrlStream = video.videoUrlStream;
};

onMounted(() => {
  console.log(unfinishedBlogVideo);
  videoref.value.forEach((el) =>
    el.addEventListener("click", (ev) => {
      videoData.value.endTime = new Date(el.duration * 1000)
        .toISOString()
        .slice(11, 19);
      videoData.value.startTime = "00:00:00";
    })
  );
});
</script>

<template>
  <div class="container">
    <div class="video-container">
      <video
        v-for="video in unfinishedBlogVideo"
        :key="video.videoId"
        ref="videoref"
        class="video-styles"
        @click="handleVideoClick(video)"
        :src="`${video.videoUrlStream}`"
      ></video>
    </div>
    <div
      v-show="showForm"
      v-for="video in unfinishedBlogVideo"
      :key="video.videoId"
      class="video-data-container-styles"
    >
      <div class="start-time-container-styles">
        <span>start time : {{ videoData.startTime }}</span>
      </div>
      <div class="start-time-container-styles">
        <span>end time : {{ videoData.endTime }} </span>
      </div>
      <div class="input-newtime-container">
        <span> new startTime :</span>
        <input
          type="text"
          :placeholder="`${videoData.startTime}`"
          v-model="newStartDate"
        />
      </div>
      <div class="input-newtime-container">
        <span> new endTime :</span>
        <input
          type="text"
          :placeholder="`${videoData.endTime}`"
          v-model="newEndDate"
        />
      </div>
    </div>
    <div>
      <button @click="submitEditVideos">next</button>
    </div>
  </div>
</template>

<style scoped>
.video-container {
  display: flex;
  flex-direction: row;
  border: 1px solid lightcyan;
  overflow-y: hidden;
  overflow-x: auto;
  white-space: nowrap;
  gap: 15px;
  align-items: center;
  padding: 25px;
  border-radius: 5px;
  border-inline-end: none;
  border-inline-start: none;
}
.video-form-container-styles {
  background-color: blanchedalmond;
  flex: 1;
}
.video-styles {
  width: 15%;

  border-radius: 5px;
}
.video-styles:hover {
  width: 250px;
  cursor: pointer;
  transform: translate(0, -10px);
}
.video-data-container-styles {
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  justify-content: center;
}
.start-time-container-styles {
  display: flex;
  padding: 25px;
  align-items: center;
}
.input-newtime-container {
  display: flex;
  padding: 25px;
  align-items: center;
}
.input-newtime-container span {
  padding-right: 5px;
}
</style>
