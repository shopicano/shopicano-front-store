import Vue from 'vue'
import VueRouter from "vue-router";
import BootstrapVue from 'bootstrap-vue'

import App from './App.vue';
import Index from "@/components/Index";
import Shop from "@/components/Shop";
import Login from "@/components/userForms/Login";
import SignUp from "@/components/userForms/SignUp";
import Cart from "@/components/cart/Cart";
import Shipping from "@/components/cart/Shipping";
import Payment from "@/components/cart/Payment";
import Review from "@/components/cart/Review";
import Confirmation from "@/components/cart/Confirmation";
import ProductView from "@/components/ProductView";

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
    {
        path: '/products/:id',
        component: ProductView,
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
