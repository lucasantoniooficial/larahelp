import Vue from 'vue';
import VueRouter from "vue-router";

import Login from "../views/login/Login";
import Dashboard from "../views/dashboard/Dashboard";
import TheContainer from "../containers/TheContainer";

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Login
        },
        {
            path: '/dashboard',
            component: TheContainer,
            children: [
                {
                    path: '',
                    component: Dashboard
                }
            ]
        }
    ]
})
