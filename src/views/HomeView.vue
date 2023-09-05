<script>
import store from "../store";
import ConfirmDialogue from "../components/ConfirmDialog.vue";

export default {
  components: { ConfirmDialogue },
  computed: {
    blogs: () => store.getters.getBlogsDataByUser,
  },

  methods: {
    async deleteBlog(blogid = "") {
      const ok = await this.$refs.confirmDialogue.show({
        title: "Delete Page",
        message:
          "Are you sure you want to delete this blog? It cannot be undone.",
        okButton: "Delete Forever",
      });
      // If you throw an error, the method will terminate here unless you surround it wil try/catch
      if (ok) {
        alert("You have successfully deleted this blog.");
        store.commit("BLOG_MUTATION", { data: blogid });
      }
    },
  },
};
</script>

<template>
  <confirm-dialogue ref="confirmDialogue"></confirm-dialogue>

  <div class="flex flex-col">
    <h1 class="text-3xl font-bold my-3">My blogs</h1>
    <main>
      <div class="grid xl:grid-cols-2 md:grid-cols-1 m gap-3">
        <div
          v-for="blog in blogs"
          :key="blog.blogid"
          class="relative max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:cursor-pointer"
        >
          <div class="md:flex">
            <div class="p-8">
              <div
                class="uppercase tracking-wide text-sm text-cyan-500 font-semibold"
              >
                {{ blog.blogTitle }}
              </div>

              <p class="mt-2 text-clip overflow-hidden flex-wrap px-1 md:w-48">
                {{ blog.blogText }}
              </p>

              <button class="absolute right-1" @click="deleteBlog(blog.blogid)">
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
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
