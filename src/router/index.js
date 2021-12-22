import { route } from "quasar/wrappers";
import store from "src/store/index";
import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import routes from "./routes";
import { Notify } from "quasar";

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

const createHistory =
  process.env.MODE === "ssr"
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === "history"
    ? createWebHistory
    : createWebHashHistory;

const Router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  routes,

  // Leave this as is and make changes in quasar.conf.js instead!
  // quasar.conf.js -> build -> vueRouterMode
  // quasar.conf.js -> build -> publicPath
  history: createHistory(
    process.env.MODE === "ssr" ? void 0 : process.env.VUE_ROUTER_BASE
  ),
});

Router.beforeEach((to, from, next) => {
  // login和welcome路由免认证
  const { user } = store.state;
  if (to.name === "login" || to.path === "/welcome") {
    next();
  } else {
    //未认证的必须认证
    if (!user.is_authenticated) {
      next({ path: "/login" });
    } else if (to.matched[0].path === "/admin") {
      if (user.is_administrator) next();
      else {
        Notify.create({
          type: "negative",
          message: "你没有管理权限，不能进入管理后台",
        });
        next({ path: from.fullPath });
      }
    } else {
      next();
    }
  }
});

export default Router;
