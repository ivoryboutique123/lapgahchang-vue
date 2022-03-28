<template>
  <header class="site__header d-lg-none">
    <div class="mobile-header mobile-header--sticky mobile-header--stuck">
      <div class="mobile-header__panel">
        <div class="container">
          <div class="mobile-header__body">
            <button class="mobile-header__menu-button">
              <svg width="18px" height="14px">
                <use xlink:href="/resources/images/sprite.svg#menu-18x14"></use>
              </svg>
            </button>
            <a class="mobile-header__logo" href="/">
              <img src="/resources/images/lgc_logo_mobile.png" alt="" />
            </a>
            <div class="mobile-header__search">
              <form class="mobile-header__search-form" action="#">
                <input
                    v-model="keyword"
                    class="mobile-header__search-input"
                    placeholder="Search over 10,000 products"
                    aria-label="Site search"
                    type="text"
                    autocomplete="off"
                />
                <button
                    @click="search()"
                    class="
                        mobile-header__search-button
                      "
                >
                  <svg width="20px" height="20px">
                    <use xlink:href="/resources/images/sprite.svg#search-20"></use>
                  </svg>
                </button>
                <button
                    class="
                        mobile-header__search-button
                        mobile-header__search-button--close
                      "
                    type="button"
                >
                  <svg width="20px" height="20px">
                    <use xlink:href="/resources/images/sprite.svg#cross-20"></use>
                  </svg>
                </button>
                <div class="mobile-header__search-body"></div>
              </form>
            </div>
            <div class="mobile-header__indicators">
              <div
                  class="
                      indicator indicator--mobile-search indicator--mobile
                      d-sm-none
                    "
              >
                <button class="indicator__button">
                      <span class="indicator__area"
                      ><svg width="20px" height="20px">
                          <use
                              xlink:href="/resources/images/sprite.svg#search-20"
                          ></use></svg
                      ></span>
                </button>
              </div>
              <div class="indicator indicator--mobile d-sm-flex d-none">
                <a href="/wishlists" class="indicator__button"
                ><span class="indicator__area"
                ><svg width="20px" height="20px">
                          <use xlink:href="/resources/images/sprite.svg#heart-20"></use>
                        </svg>
                        <span class="indicator__value">0</span></span
                ></a
                >
              </div>
              <cart :from="'mobile'"></cart>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Cart from "@/components/carts/Cart";
import storage from "@/commons/constant/storage";
export default {
  name: "MobileHeader",
  components: { Cart },
  props: ['route'],
  data() {
    return {
      keyword: ''
    }
  },
  mounted() {
    this.keyword = this.$route.params.search ?? '';

    if(this.$store.state.Auth.auth) {
      this.getCarts();
      this.getWishlists();
    }
  },
  methods: {
    search() {
      if(this.keyword === '' || this.keyword === null) {
        this.$router.push({ path: `/products` });
      } else {
        this.$router.push({ name: `products`, params: { search: this.keyword} });
      }
    },
    getCarts() {
      this.$store.dispatch('Cart/get')
          .then((res) => this.$store.commit('Cart/SET_CARTS', res))
          .catch(err => console.log(err));
    },
    getWishlists() {
      this.$store.dispatch('Wishlist/get')
          .then((res) => this.$store.commit('Wishlist/SET_WISHLISTS', res))
          .catch(err => console.log(err));
    },
    logout() {
      this.$store.dispatch('Auth/logout')
          .then(() => {
            this.$store.commit('Auth/SET_AUTH', null);
            localStorage.removeItem(storage.token);
          })
          .catch(err => console.log(err))
          .finally(() => this.$store.commit('Loading/Loading', false));
    }
  }
}
</script>

<style scoped>

</style>