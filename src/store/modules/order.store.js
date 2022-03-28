import apis from "@/commons/helper/apiHelper";

const state = {
    orders: null,
    order: null
}

//to handle state
const getters = {
    getImage: () => (item) => {
        if(item && item.product && item.product.images.length > 0) {
            return item.product.images[0].url;
        }

        return null;
    },
}

//to handle actions
const actions = {
    get({ commit }, params = {}) {
        commit('Loading/SET_LOADING', true, { root: true });

        return apis.get('/users/orders', params)
    },
    detail({ commit }, params = {}) {
        commit('Loading/SET_LOADING', true, { root: true });

        let url = '/orders';

        if(Object.prototype.hasOwnProperty.call(params,'id')) {
            url += `/${params.id}`;
        }

        return apis.get(url, params);
    }
}

//to handle mutations
const mutations = {
    SET_ORDERS(state, orders) {
        state.orders = orders
    },
    SET_ORDER(state, order) {
        state.order = order
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}