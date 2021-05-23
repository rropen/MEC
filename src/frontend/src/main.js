import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueApexCharts from "vue3-apexcharts";
import "./index.css";
// import $ from "jquery";

// const env = process.env.VUE_APP_ENV;

// import store from './store'
createApp(App)
  // .use(store)
  // .use($)
  .use(router)
  .use(VueApexCharts)
  .mount("#app");
