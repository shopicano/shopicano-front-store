import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        cartProducts: [],
        cartTotal: 0,
        shippingInfo: {},
        paymentInfo: {},
    },
    mutations: {
        addItemToCart: (state, payload) => {
            if (state.cartProducts.length!==0 && state.cartProducts.some(item => item.itemID === payload.itemID)){
                const index = state.cartProducts.findIndex(x => x.itemID === payload.itemID);

                state.cartProducts[index].itemQuantity += payload.itemQuantity;
                const subTolat = state.cartProducts[index].itemPrice * state.cartProducts[index].itemQuantity;

                Object.assign(state.cartProducts[index], {subTotal: subTolat});
            } else {
                Object.assign(payload, {subTotal: payload.itemPrice});
                state.cartProducts.push(payload);
            }

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
        updateQuantity: (state, payload) => {
            const index = state.cartProducts.findIndex(x => x.itemID === payload.itemId);

            state.cartProducts[index].itemQuantity = parseInt(payload.qntt);
            state.cartProducts[index].subTotal = state.cartProducts[index].itemPrice * state.cartProducts[index].itemQuantity;

            state.cartTotal = 0;
            state.cartProducts.forEach( element => {
                state.cartTotal = state.cartTotal + element.subTotal;
            })
        },
        storeShippingInfo: (state, payload) => {
            Object.assign(state.shippingInfo, payload);
        },
        storeCardInfo: (state, payload) => {
            Object.assign(state.paymentInfo, payload);
        },
    },
    actions: {
        addItemToCartAction: (context, payload) => {
            context.commit('addItemToCart', payload)
        },
        removeItemFromAction: (context, payloadId) => {
            context.commit('removeItemFromCart', payloadId)
        },
        changeQuantityAction: (context, payload) => {
            context.commit('updateQuantity', payload)
        },
        storeShippingInfoAction: (context, payload) => {
            context.commit('storeShippingInfo', payload)
        },
        storeCardInfoAction: (context, payload) => {
            context.commit('storeCardInfo', payload)
        }
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
        },
        getterShippingInfo: (state) => {
            return state.shippingInfo
        },
        getterPaymentInfo: (state) => {
            return state.paymentInfo
        }
    },
});
