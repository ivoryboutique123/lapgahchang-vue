import apis from "@/commons/helper/apiHelper";

const state = {
    products: null,
    product: null,
}

//to handle state
const getters = {
    firstImage: state => {
        if(state.product && (state.product.images.length > 0)) {
            return state.product.images[0];
        }

        return null;
    },
    prepareImages: state => {
        let images = [];

        if(state.product && (state.product.images.length > 0)) {
            images = state.product.images.map((img) => {
                return {
                    id: img.id,
                    big: img.url,
                    thumb: img.url
                }
            })
        }

        return images;
    }
}

//to handle actions
const actions = {
    get({ commit }, params = {}) {
        commit('Loading/SET_LOADING', true, { root: true });

        let url = '/products';

        if(Object.prototype.hasOwnProperty.call(params,'page')) {
            url += `?page=${params.page}`;
        }

        if(Object.prototype.hasOwnProperty.call(params,'filter')) {
            url += `&filter=${params.filter}`;
        }

        if(Object.prototype.hasOwnProperty.call(params,'search')) {
            url += `&search=${params.search}`;
        }

        if(Object.prototype.hasOwnProperty.call(params,'sort_by')) {
            url += `&sort_by=${params.sort_by}`;
        }

        if(Object.prototype.hasOwnProperty.call(params,'sort_desc')) {
            url += `&sort_desc=${params.sort_desc}`;
        }

        return apis.get(url, params);
    },
    detail({commit}, params) {
        commit('Loading/SET_LOADING', true, { root: true });

        return apis.get(`/product/${params.id}`, null);
    }
}

//to handle mutations
const mutations = {
    SET_PRODUCTS(state, products) {
        state.products = products
    },
    SET_PRODUCT(state, product) {
        state.product = product
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}