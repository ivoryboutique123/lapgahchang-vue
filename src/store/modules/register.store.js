import apis from "@/commons/helper/apiHelper";

const state = {
    email: null
}

//to handle state
const getters = {}

//to handle actions
const actions = {
    register({ commit }, params) {
        commit('Loading/SET_LOADING', true, { root: true });

        return apis.post('/register', params);
    }
}

//to handle mutations
const mutations = {
    SET_EMAIL(state, email) {
        state.email = email
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}