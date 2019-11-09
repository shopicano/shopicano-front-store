import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import Index from "@/components/Index";
import Shop from "@/components/Shop";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Index
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
