import apis from "@/commons/helper/apiHelper";

const state = {
    categories: null
}

//to handle state
const getters = {}

//to handle actions
const actions = {
    get({ commit }, params = {}) {
        commit('Loading/SET_LOADING', true, { root: true });

        let url = '/categories';

        if(Object.prototype.hasOwnProperty.call(params,'page')) {
            url += `?page=${params.page}`;
        }

        return apis.get(url, params);
    }
}

//to handle mutations
const mutations = {
    SET_CATEGORIES(state, categories) {
        state.categories = categories
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}