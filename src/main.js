/* eslint-disable quotes */
/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable arrow-parens */
/* eslint-disable comma-dangle */

import Vue from "vue";
import vuetify from "@/plugins/vuetify"; // path to vuetify export
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount("#app");