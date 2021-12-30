import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";

import PrimeVue from "primevue/config";
import axios from "axios";
import { createClient } from "villus";

axios.defaults.baseURL = "http://localhost:8181";
// const app = createApp({});
const client = createClient({
  url: "http://localhost:8080/v1/graphql",
});

createApp(App).use(router).use(PrimeVue).use(client).mount("#app");
