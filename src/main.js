import Vue from "vue";
import App from "./App.vue";
import "@/components";
import store from "@/store";
import "./assets/images/icons/icons-import.js";

import UIIcon from "./components/UI/UIIcon";
Vue.component("UIIcon", UIIcon);

Vue.config.productionTip = false;

new Vue({
	store,
	"render": h => h(App),
}).$mount("#app");
