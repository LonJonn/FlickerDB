import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { firestorePlugin } from "vuefire";
Vue.use(firestorePlugin);

import "@/assets/css/tailwind.css";

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount("#app");
