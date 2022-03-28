import apis from "@/commons/helper/apiHelper";

const state = {
    wishlists: {
        items: []
    }
}

//to handle state
const getters = {
    firstImage: (state) => (item) => {
        if(state.wishlists.items.length > 0 && ('product' in item) && ('images' in item.product)) {

            return item.product.images[0].url;
        }

        return null;
    }
}

//to handle actions
const actions = {
    get({ commit }, params = {}) {
        commit('Loading/SET_LOADING', true, { root: true });

        return apis.get(`/wishlists`, params);
    },
    add({ commit }, params = {}) {
        commit('Loading/SET_LOADING', true, { root: true });

        return apis.put(`/wishlists/${params.id}`, params);
    },
    delete({ commit }, params = {}) {
        commit('Loading/SET_LOADING', true, { root: true });

        return apis.delete(`/wishlists/${params.id}`, null);
    }
}

//to handle mutations
const mutations = {
    SET_WISHLISTS(state, wishlists) {
        state.wishlists = wishlists
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}