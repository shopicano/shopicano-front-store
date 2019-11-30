import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        cartProducts: [
            {itemID: '111111', itemThumbnail: '', itemName: 'RRrrrrr', itemQuantity: null, itemPrice: null},
            {itemID: '222222', itemThumbnail: '', itemName: 'Nnnnommk', itemQuantity: null, itemPrice: null}
        ],
    },
    mutations: {
        addItemToCart: (state, payload) => {
            state.cartProducts.push(payload)
        }
    },
    actions: {},
    getters: {},
});