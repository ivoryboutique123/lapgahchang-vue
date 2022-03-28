import apis from "@/commons/helper/apiHelper";

const state = {
    url: null
}

//to handle state
const getters = {
}

//to handle actions
const actions = {
    submit({ commit }, params) {
        commit('Loading/SET_LOADING', true, { root: true });

        return apis.post('/checkout', params)
    }
}

//to handle mutations
const mutations = {
    SET_URL(state, url) {
        state.url = url
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}