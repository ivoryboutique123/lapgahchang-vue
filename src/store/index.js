import Vuex from 'vuex';
import Vue from 'vue';
import modules from './modules';
import createPersistedState from "vuex-persistedstate";

//load Vuex
Vue.use(Vuex);

//export store module
export default new Vuex.Store({
    modules,
    plugins: [
        createPersistedState({
            paths: ['Auth.auth', 'Cart.carts', 'Wishlist.wishlists', 'Register.email']
        })
    ],
})