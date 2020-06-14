require('./bootstrap');

import Vue from 'vue';
import CoreuiVue from "@coreui/vue";
import App from './views/App';
import {iconsSet as icons} from "./asset/icons/icons";

import router from './routes';
import store from './store';

Vue.config.performance = true
Vue.use(CoreuiVue);

new Vue({
    el: '#app',
    router,
    store,
    icons,
    render: h => h(App)
});
