import Vue from "vue";
import App from "./App.vue";
import axios from "axios";

import Buefy from "buefy";
import "buefy/dist/buefy.css";

Vue.use(Buefy);

Vue.prototype.axios = axios.create({
  baseURL
});

new Vue({
  el: "#app",
  render: h => h(App)
});
