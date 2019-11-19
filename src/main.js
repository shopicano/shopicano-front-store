import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import Index from "@/components/Index";
import Shop from "@/components/Shop";
import Login from "@/components/Login";
import SignUp from "@/components/SignUp";
import Cart from "@/components/Cart";
import Shipping from "@/components/Shipping";

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
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

new Vue({
    render: h => h(App),
    router
}).$mount('#app');
