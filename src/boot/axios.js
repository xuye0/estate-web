import { boot } from "quasar/wrappers";
import axios from "axios";
import { Notify } from "quasar";
import Router from "src/router";

const api = axios.create({ baseURL: "/api" });

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios;
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api;
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API

  api.interceptors.response.use(
    function (response) {
      if (response.data.code === 4000) {
        Router.push({ name: "login" });
      }
      if (response.data.code === 1001) {
        Notify.create({
          message: response.data.data,
          type: "negative",
        });
      }
      if (response.data.code === 1000) {
        Notify.create({
          message: "成功 ~ ",
          type: "positive",
          color: "primary",
          badgeColor: "secondary",
          timeout: 1,
        });
      }
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response.data;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    }
  );
});

export { axios, api };
