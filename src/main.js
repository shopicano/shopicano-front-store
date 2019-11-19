import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import Index from "@/components/Index";
import Shop from "@/components/Shop";
import Login from "@/components/Login";
import SignUp from "@/components/SignUp";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Index
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/signup',
        component: SignUp,
    },
    {
        path: '/shop',
        component: Shop
    }
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

new Vue({
    render: h => h(App),
    router
}).$mount('#app');
