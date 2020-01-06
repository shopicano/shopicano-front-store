import Vue from 'vue'
import VueRouter from "vue-router";
import Vuex from 'vuex'
import { store } from './store'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueBraintree from 'vue-braintree';

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
import ContactUs from "@/components/ContactUs";
import Dashboard from "@/components/userDetails/Dashboard";
import Profile from "@/components/userDetails/Profile";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueBraintree);

// For map in contact us page
Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyDI__ldkg53UnWkVoL1TomSXJjRxH04tIc', // YOUR_API_TOKEN
    },

    //// If you intend to programmatically custom event listener code
    //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
    //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
    //// you might need to turn this on.
    autobindAllEvents: false,

    //// If you want to manually install components, e.g.
    //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
    //// Vue.component('GmapMarker', GmapMarker)
    //// then disable the following:
    installComponents: true,
});

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
        path: '/contact',
        component: ContactUs,
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
    {
        path: '/dashboard',
        component: Dashboard,
    },
    {
        path: '/profile-details',
        component: Profile,
    },
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

new Vue({
    store,
    render: h => h(App),
    router,
}).$mount('#app');
