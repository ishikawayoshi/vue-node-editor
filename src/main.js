import Vue from "vue";
import App from "./App.vue";
import axios from "axios";

import Buefy from "buefy";
import "buefy/dist/buefy.css";

Vue.use(Buefy);

Vue.prototype.axios = axios.create({
  baseURL: "http://localhost:8080/api"
});

new Vue({
  el: "#app",
  render: h => h(App)
});
