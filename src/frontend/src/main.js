import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueApexCharts from 'vue3-apexcharts';
import './index.css';
import $ from 'jquery';

// import store from './store'
createApp(App)
  // .use(store)
  .use($)
  .use(router)
  .use(VueApexCharts)
  .mount('#app');
