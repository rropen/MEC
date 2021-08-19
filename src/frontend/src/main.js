import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";

import PrimeVue from "primevue/config";
import axios from "axios";

// Uses Ncodb backend by default, if user passes in follwing will use fastAPI instead:

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.headers.common["xc-auth"] =
  import.meta.env.VITE_NOCODB_AUTH_TOKEN;

// import store from './store'
createApp(App)
  // .use(store)
  // .use($)
  .use(router)
  // .use(VGrid)
  .use(PrimeVue)
  .mount("#app");
