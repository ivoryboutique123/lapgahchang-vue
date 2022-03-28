import Vue from 'vue';
import App from './App.vue';
import store from './store';
import "@/filters";
import axios from 'axios';
import router from "../src/router.js";
import VueLodash from 'vue-lodash';
import lodash from 'lodash';
import storage from './commons/constant/storage';

Vue.config.productionTip = false;

axios.defaults.baseURL = `${process.env.VUE_APP_HOST}/api`;

axios.interceptors.request.use(request => {

  const token = localStorage.getItem(storage.token);

  if (token) {
    request.headers.common.Authorization = `Bearer ${token}`;
  }

  return request;
});

axios.interceptors.response.use(response =>  {
  return response;
}, function (error) {
  if (error.response.status === 401)
  {
    Vue.set(store.state.Auth, 'auth', null);
    localStorage.removeItem(storage.token);

    if(error.response.config.url !== '/login'
        && error.response.config.url !== '/carts'
        && error.response.config.url !== '/wishlists'
    ) {
      window.location.href = "/login";
    }
  }
  return Promise.reject(error);
});

Vue.mixin({
  methods: {
    getCurrency: function() {
      return process.env.VUE_APP_CURRENCY;
    },
    currencyString: function(amount) {
      return Number(amount)
          .toLocaleString(undefined,
              {minimumFractionDigits: 2, maximumFractionDigits: 2}
              );
    }
  }
});

Vue.use(VueLodash, { name: 'custom' , lodash: lodash });
Vue.use(require('vue-moment'));

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
