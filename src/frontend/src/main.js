<<<<<<< HEAD
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueApexCharts from "vue3-apexcharts";
import "./index.css";

//axios
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8181";
// axios.defaults.baseURL = process.env.VUE_APP_API_URL;
// import $ from "jquery";
=======
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueApexCharts from 'vue3-apexcharts';
import VGrid from '@revolist/vue3-datagrid'
import './index.css';
import $ from 'jquery';
>>>>>>> main

// import store from './store'
createApp(App)
  // .use(store)
  // .use($)
  .use(router)
<<<<<<< HEAD
  // .use(VGrid)
=======
  .use(VGrid)
>>>>>>> main
  .use(VueApexCharts)
  .mount("#app");
