require('./bootstrap');

import Vue from 'vue';

import App from './views/App';


new Vue({
    el: '#app',
   render: h => h(App)
});
