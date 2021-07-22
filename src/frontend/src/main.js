import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueApexCharts from "vue3-apexcharts";
import "./index.css";

//prime components
import PrimeVue from "primevue/config";
//axios
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8181";
// axios.defaults.baseURL = process.env.VUE_APP_API_URL;
// import $ from "jquery";

// import store from './store'
createApp(App)
  // .use(store)
  // .use($)
  .use(router)
  // .use(VGrid)
  .use(VueApexCharts)
  .use(PrimeVue)
  .mount("#app");
