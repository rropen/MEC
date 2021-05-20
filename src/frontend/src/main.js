import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueApexCharts from 'vue3-apexcharts';
import VGrid from '@revolist/vue3-datagrid'
import './index.css';
import $ from 'jquery';

// import store from './store'
createApp(App)
  // .use(store)
  .use($)
  .use(router)
  .use(VGrid)
  .use(VueApexCharts)
  .mount('#app');
