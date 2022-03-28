import apis from "@/commons/helper/apiHelper";

const state = {
    auth: null
}

//to handle state
const getters = {}

//to handle actions
const actions = {
    login({ commit }, params) {
        commit('Loading/SET_LOADING', true, { root: true });

        return apis.post('/login', params);
    },
    logout({ commit }, params) {
        commit('Loading/SET_LOADING', true, { root: true });

        return apis.post('/logout', params);
    }
}

//to handle mutations
const mutations = {
    SET_AUTH(state, auth) {
        console.log('SET_AUTH');
        state.auth = auth
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}