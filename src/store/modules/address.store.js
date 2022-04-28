import apis from "@/commons/helper/apiHelper";

const state = {
    addresses: null
}

//to handle state
const getters = {}

//to handle actions
const actions = {
    get({ commit }, params = {}) {
        commit('Loading/SET_LOADING', true, { root: true });

        return apis.get('/users/addresses', params)
    },
}

//to handle mutations
const mutations = {
    SET_ADDRESSES(state, addresses) {
        state.addresses = addresses
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}