import { createApp } from "vue";
import App from "./App.vue";
import "./assets/scss/index.scss";
// import VueRouter from "vue-router";
import router from "./router";

createApp(App).use(router).mount("#app");
