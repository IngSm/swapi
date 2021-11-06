import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "@/store/index";
import { Quasar } from "quasar";
import axios from "axios";
import VueAxios from "vue-axios";

const quasarUserOptions = require("./quasar-user-options.js");

const app = createApp(App)
  .use(Quasar, quasarUserOptions)
  .use(store)
  .use(router)
  .use(VueAxios, axios)
  .mount("#app");