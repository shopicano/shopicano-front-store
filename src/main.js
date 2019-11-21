import Vue from 'vue'
import VueRouter from "vue-router";

import App from './App.vue';
import Index from "@/components/Index";
import Shop from "@/components/Shop";
import Login from "@/components/Login";
import SignUp from "@/components/SignUp";
import Cart from "@/components/Cart";
import Shipping from "@/components/Shipping";
import Payment from "@/components/Payment";
import Review from "@/components/Review";
import Confirmation from "@/components/Confirmation";

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
        path: '/cart',
        component: Cart,
    },
    {
        path: '/shop',
        component: Shop,
    },
    {
        path: '/shipping',
        component: Shipping,
    },
    {
        path: '/payment',
        component: Payment,
    },
    {
        path: '/review',
        component: Review,
    },
    {
        path: '/confirmation',
        component: Confirmation,
    },
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

new Vue({
    render: h => h(App),
    router
}).$mount('#app');
