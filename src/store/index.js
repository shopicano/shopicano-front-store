import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        cartProducts: [],
        cartTotal: 0,
    },
    mutations: {
        addItemToCart: (state, payload) => {
            state.cartProducts.push(payload);

            state.cartTotal += payload.itemPrice;
        },
        removeItemFromCart: (state, payloadID) => {
            state.cartProducts.forEach( element => {
                if (element.itemID === payloadID) {
                    state.cartProducts.splice(state.cartProducts.indexOf(element), 1);
                    state.cartTotal -= element.itemPrice;
                }
            })
        },
        calculateTotal: (state) => {

        }
    },
    actions: {
        addItemToCartAction: (context, payload) => {
            context.commit('addItemToCart', payload)
        },
        removeItemFromAction: (context, payloadId) => {
            context.commit('removeItemFromCart', payloadId)
        },
    },
    getters: {
        getCart: (state) => {
            return state.cartProducts
        },
        cartItemCount: (state) => {
            return state.cartProducts.length
        },
        cartTotalPrice: (state) => {
            return state.cartTotal
        }
    },
});