import { createStore } from "vuex";
import state from "./state";

const store = createStore({
  state,
  actions: {
    deleteBlogAction({ commit }, data) {
      commit("BLOG_MUTATION", { data });
    },
    addBlogAction({ commit }, data) {
      commit("ADD_BLOG_MUTATION", { data });
    },
    modifyVideosTimeAction({ commit }, data) {
      commit("MODIFY_VIDEOS_TIME_MUTATION", data);
    },
  },
  mutations: {
    BLOG_MUTATION(state, { data }) {
      const mutatedBlogs = state.data.userData.blogs;

      state.data.userData.blogs = mutatedBlogs.filter(
        (el) => el.blogid !== data
      );
    },

    ADD_BLOG_MUTATION(state, { data }) {
      state.data.userData.blogs.push(data);
      console.log("current state::", state.data.userData.blogs);
    },
    MODIFY_VIDEOS_TIME_MUTATION(state, { data }) {
      console.log("incoming data", data);
    },
  },
  getters: {
    getBlogsDataByUser: (state) => {
      return state.data.userData.blogs.filter((el) => el.completed);
    },
    getUnfinishedBlogDataByUser: (state) => {
      return state.data.userData.blogs.filter((el) => !el.completed)[0].videos;
    },
  },
});

export default store;
