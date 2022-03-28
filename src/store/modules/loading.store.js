const state = {
    loading: false
}

//to handle state
const getters = {}

//to handle actions
const actions = {}

//to handle mutations
const mutations = {
    SET_LOADING(state, loading) {
        state.loading = loading
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}