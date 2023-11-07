import { createApp } from "vue";
import "./style.css";
import router from "./router";
import App from "./App.vue";
import ApexCharts from "apexcharts";
import VueApexCharts from "vue3-apexcharts";

const app = createApp(App);
app.use(router);
app.use(VueApexCharts, { apexpages: { ApexCharts } });
app.mount("#app");