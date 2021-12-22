import { createStore } from "vuex";
import user from "./user";
import createPersistedState from "vuex-persistedstate";

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

const store = createStore({
  modules: {
    user,
  },
  plugins: [createPersistedState()],
  strict: process.env.DEBUGGING,
});
export default store;
