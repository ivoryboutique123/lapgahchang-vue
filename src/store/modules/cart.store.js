import apis from "@/commons/helper/apiHelper";
import Vue from 'vue';

const state = {
    carts: {
        items: []
    },
    cart: null,
}

//to handle state
const getters = {
    qty: state => {
        let quantity = 0;

        if(state.carts.items.length > 0) {
            quantity = state.carts.items.length;
        }

        return quantity;
    },
    totalPrice: state => {
        return state.carts.items.reduce(function(sum, item) {

            return sum + (item.product.price * item.quantity);
        }, 0);
    }
}

//to handle actions
const actions = {
    get({ commit }, params = {}) {
        commit('Loading/SET_LOADING', true, { root: true });

        return apis.get('/carts', params)
    },
    add({ commit }, params = {}) {
        commit('Loading/SET_LOADING', true, { root: true });

        return apis.post('/carts', params);
    },
    delete({ commit }, params = {}) {
        commit('Loading/SET_LOADING', true, { root: true });

        return apis.delete(`/carts/${params.id}`, null);
    },
    addQty({ commit }, params = {}) {
        commit('Loading/SET_LOADING', true, { root: true });

        return apis.put(`/carts/${params.id}`, params);
    },
    subQty({ commit }, params = {}) {
        commit('Loading/SET_LOADING', true, { root: true });

        return apis.put(`/carts/${params.id}`, params);
    },
}

//to handle mutations
const mutations = {
    SET_CARTS(state, carts) {
        state.carts = carts
    },
    SET_CART(state, cart) {
        state.cart = cart
    },
    UPDATE_CART(state, cart) {
        if(state.carts.items) {
            let index = state.carts.items.findIndex(x => x.id === cart.id);

            if(index !== -1) {
                Vue.set(state.carts.items, index, cart);
            }
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}