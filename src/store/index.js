import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        cartProducts: [],
        cartTotal: 0,
        shipping_sameAs_billing: Boolean,
        billingInfo: {},
        shippingInfo: {},
        isAllProductDigital: '',
        storeID: '',
        grandTotal: 0,
        discount: '',
        deliveryCharge: '',
    },
    mutations: {
        addItemToCart: (state, payload) => {
            if (state.cartProducts.length!==0 && state.cartProducts.some(item => item.itemID === payload.itemID)){
                const index = state.cartProducts.findIndex(x => x.itemID === payload.itemID);

                if (Object.keys(payload).length === 6) {
                    state.cartProducts[index].itemQuantity += payload.itemQuantity;
                    const subTotal = state.cartProducts[index].itemPrice * state.cartProducts[index].itemQuantity;
                    Object.assign(state.cartProducts[index], {subTotal: subTotal});

                    state.cartTotal += payload.itemPrice;
                } else if (Object.keys(payload).length === 7) {
                    state.cartProducts[index].itemQuantity = payload.itemQuantity;

                    const subTotal = state.cartProducts[index].itemPrice * state.cartProducts[index].itemQuantity;
                    Object.assign(state.cartProducts[index], {subTotal: subTotal});

                    state.cartTotal = 0;
                    state.cartProducts.forEach( element => {
                        state.cartTotal = state.cartTotal + element.subTotal;
                    })
                }



            } else {
                Object.assign(payload, {subTotal: payload.itemPrice});
                state.cartProducts.push(payload);
                state.cartTotal += payload.itemPrice;
            }


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
        storeIfShippingSameAsBilling: (state, payload) => {
            state.shipping_sameAs_billing = payload;
        },
        storeBillingInfo: (state, payload) => {
            Object.assign(state.billingInfo, payload);
        },
        storeShippingInfo: (state, payload) => {
            Object.assign(state.shippingInfo, payload);
        },
        storeIsProductDigital(state, payload) {
            state.isAllProductDigital = payload;
        },
        isFromSameStore: (state, payload) => {
            state.storeID = payload;
        },
        storeGrandTotal: (state, payload) => {
            state.grandTotal = payload;
        },
        storeDiscount: (state, payload) => {
            state.discount = payload;
        },
        storeDeliveryCharge: (state, payload) => {
            state.deliveryCharge = payload;
        },
        resetState: (state) => {
            state.cartProducts = [];
            state.cartTotal = 0;
            state.shipping_sameAs_billing = Boolean;
            state.billingInfo = {};
            state.shippingInfo = {};
            state.isAllProductDigital = '';
            state.storeID = '';
            state.grandTotal = 0;
            state.discount = '';
            state.deliveryCharge = '';
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
        storeIfShippingSameAsBillingAction: (context, payload) => {
            context.commit('storeIfShippingSameAsBilling', payload)
        },
        storeBillingInfoAction: (context, payload) => {
            context.commit('storeBillingInfo', payload)
        },
        storeShippingInfoAction: (context, payload) => {
            context.commit('storeShippingInfo', payload)
        },
        storeIsProductDigitalAction: (context, payload) => {
            context.commit('storeIsProductDigital', payload)
        },
        isFromSameStoreAction: (context, payload) => {
            context.commit('isFromSameStore', payload)
        },
        storeGrandTotalAction: (context, payload) => {
            context.commit('storeGrandTotal', payload)
        },
        storeDiscountAction: (context, payload) => {
            context.commit('storeDiscount', payload)
        },
        storeDeliveryChargeAction: (context, payload) => {
            context.commit('storeDeliveryCharge', payload)
        },
        resetStateAction: (context) => {
            context.commit('resetState')
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
        getterIfShippingSameAsBilling: (state) => {
            return state.shipping_sameAs_billing
        },
        getterBillingInfo: (state) => {
            return state.billingInfo
        },
        getterShippingInfo: (state) => {
            return state.shippingInfo
        },
        getterIsAllProductDigital: (state) => {
            return state.isAllProductDigital
        },
        getterIsFromSameStore: (state) => {
            return state.storeID
        },
        getterStoreGrandTotal: (state) => {
            return state.grandTotal
        },
        getterStoreDiscount: (state) => {
            return state.discount
        },
        getterStoreDeliveryCharge: (state) => {
            return state.deliveryCharge
        }
    },
});
