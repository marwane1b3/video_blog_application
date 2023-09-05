<script>
import { ref } from "vue";
import { RouterLink } from "vue-router";

export default {
  setup() {
    const showSideBar = ref(true);
    return {
      showSideBar,
    };
  },
};
</script>

<template>
  <div class="flex relative min-h-screen">
    <div
      class="bg-cyan-600 text-cyan-100 w-64 space-y-6 px-2 absolute inset-y-0 left-0 md:-translate-x-0' transform -translate-x-full transition duration-200 ease-in-out"
      :class="{
        'relative translate-x-0': showSideBar,
      }"
    >
      <nav>
        <RouterLink
          class="group flex items-center py-3 px-4 space-x-2 hover:bg-cyan-700 rounded hover:text-cyan-300"
          to="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>

          <span class="text-white hover:text-cyan-300 group-hover:text-cyan-300"
            >Home</span
          >
        </RouterLink>
        <RouterLink
          class="group flex items-center py-3 px-4 space-x-2 px-4 hover:bg-cyan-700 rounded hover:text-cyan-300"
          to="/createBlog"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
            />
          </svg>
          <span class="text-white hover:text-cyan-300 group-hover:text-cyan-300"
            >create blog</span
          >
        </RouterLink>
      </nav>
    </div>
    <div class="flex-1">
      <div class="bg-white shadow px-2 py-4">
        <button
          @click="showSideBar = !showSideBar"
          class="text-cyan-600 font-extrabold"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </button>
      </div>
      <div class="p-8">
        <RouterView></RouterView>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
