<template>
  <header class="site__header d-lg-block d-none">
    <div class="site-header">
      <!-- .topbar -->
      <div class="site-header__topbar topbar">
        <div class="topbar__container container">
          <div class="topbar__row">
            <div class="topbar__item topbar__item--link">
              <a class="topbar-link" href="/abouts">About Us</a>
            </div>
            <div class="topbar__item topbar__item--link">
              <a class="topbar-link" href="/contacts">Contacts</a>
            </div>
            <div class="topbar__spring"></div>
            <div v-if="$store.state.Auth.auth" class="topbar__item">
              <div class="topbar-dropdown">
                <button class="topbar-dropdown__btn" type="button">
                  My Account
                  <svg width="7px" height="5px">
                    <use
                        xlink:href="/resources/images/sprite.svg#arrow-rounded-down-7x5"
                    ></use>
                  </svg>
                </button>
                <div class="topbar-dropdown__body">
                  <!-- .menu -->
                  <ul class="menu menu--layout--topbar">
                    <li><a href="#">Orders</a></li>
                    <li><a href="#">Addresses</a></li>
                    <li><a @click="logout" style="cursor: pointer;">Logout</a></li>
                  </ul>
                  <!-- .menu / end -->
                </div>
              </div>
            </div>
            <div v-else class="topbar__item topbar__item--link">
              <a class="topbar-link" href="/login">Login</a>
            </div>
          </div>
        </div>
      </div>
      <!-- .topbar / end -->
      <div class="site-header__middle container">
        <div class="site-header__logo">
          <a href="/">
            <img src="/resources/images/lgc_logo.png" alt="" />
          </a>
        </div>
        <div class="site-header__search">
          <div class="search">
            <form class="search__form" action="#">
              <input
                  v-model="keyword"
                  class="search__input"
                  placeholder="Search over 10,000 products"
                  aria-label="Site search"
                  type="text"
                  autocomplete="off"
              />
              <button @click="search()" class="search__button">
                <svg width="20px" height="20px">
                  <use xlink:href="/resources/images/sprite.svg#search-20"></use>
                </svg>
              </button>
              <div class="search__border"></div>
            </form>
          </div>
        </div>
        <div class="site-header__phone">
          <div class="site-header__phone-title">Customer Service</div>
          <div class="site-header__phone-number">(800) 060-0730</div>
        </div>
      </div>
      <div class="site-header__nav-panel">
        <div class="nav-panel">
          <div class="nav-panel__container container">
            <div class="nav-panel__row">
              <!-- .nav-links -->
              <div class="nav-panel__nav-links nav-links">
                <ul class="nav-links__list">
                  <li class="nav-links__item nav-links__item--with-submenu">
                    <a href="/"
                    ><span
                    >Home
                            <svg
                                class="nav-links__arrow"
                                width="9px"
                                height="6px"
                            >
                              <use
                                  xlink:href="/resources/images/sprite.svg#arrow-rounded-down-9x6"
                              ></use></svg></span
                    ></a>
                    <div class="nav-links__menu">
                      <!-- .menu -->
                      <ul class="menu menu--layout--classic">
                        <li><a href="/">Home 1</a></li>
                        <li><a href="index-2.html">Home 2</a></li>
                      </ul>
                      <!-- .menu / end -->
                    </div>
                  </li>
                  <li class="nav-links__item nav-links__item--with-submenu">
                    <a href="#"
                    ><span
                    >Megamenu
                            <svg
                                class="nav-links__arrow"
                                width="9px"
                                height="6px"
                            >
                              <use
                                  xlink:href="/resources/images/sprite.svg#arrow-rounded-down-9x6"
                              ></use></svg></span
                    ></a>
                    <div
                        class="
                            nav-links__megamenu nav-links__megamenu--size--nl
                          "
                    >
                      <!-- .megamenu -->
                      <div class="megamenu">
                        <div class="row">
                          <div class="col-6">
                            <ul
                                class="
                                    megamenu__links megamenu__links--level--0
                                  "
                            >
                              <li
                                  class="
                                      megamenu__item
                                      megamenu__item--with-submenu
                                    "
                              >
                                <a href="#">Power Tools</a>
                                <ul
                                    class="
                                        megamenu__links
                                        megamenu__links--level--1
                                      "
                                >
                                  <li class="megamenu__item">
                                    <a href="#">Engravers</a>
                                  </li>
                                  <li class="megamenu__item">
                                    <a href="#">Wrenches</a>
                                  </li>
                                  <li class="megamenu__item">
                                    <a href="#">Wall Chaser</a>
                                  </li>
                                  <li class="megamenu__item">
                                    <a href="#">Pneumatic Tools</a>
                                  </li>
                                </ul>
                              </li>
                              <li
                                  class="
                                      megamenu__item
                                      megamenu__item--with-submenu
                                    "
                              >
                                <a href="#">Machine Tools</a>
                                <ul
                                    class="
                                        megamenu__links
                                        megamenu__links--level--1
                                      "
                                >
                                  <li class="megamenu__item">
                                    <a href="#">Thread Cutting</a>
                                  </li>
                                  <li class="megamenu__item">
                                    <a href="#">Chip Blowers</a>
                                  </li>
                                  <li class="megamenu__item">
                                    <a href="#">Sharpening Machines</a>
                                  </li>
                                  <li class="megamenu__item">
                                    <a href="#">Pipe Cutters</a>
                                  </li>
                                  <li class="megamenu__item">
                                    <a href="#">Slotting machines</a>
                                  </li>
                                  <li class="megamenu__item">
                                    <a href="#">Lathes</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                          <div class="col-6">
                            <ul
                                class="
                                    megamenu__links megamenu__links--level--0
                                  "
                            >
                              <li
                                  class="
                                      megamenu__item
                                      megamenu__item--with-submenu
                                    "
                              >
                                <a href="#">Hand Tools</a>
                                <ul
                                    class="
                                        megamenu__links
                                        megamenu__links--level--1
                                      "
                                >
                                  <li class="megamenu__item">
                                    <a href="#">Screwdrivers</a>
                                  </li>
                                  <li class="megamenu__item">
                                    <a href="#">Handsaws</a>
                                  </li>
                                  <li class="megamenu__item">
                                    <a href="#">Knives</a>
                                  </li>
                                  <li class="megamenu__item">
                                    <a href="#">Axes</a>
                                  </li>
                                  <li class="megamenu__item">
                                    <a href="#">Multitools</a>
                                  </li>
                                  <li class="megamenu__item">
                                    <a href="#">Paint Tools</a>
                                  </li>
                                </ul>
                              </li>
                              <li
                                  class="
                                      megamenu__item
                                      megamenu__item--with-submenu
                                    "
                              >
                                <a href="#">Garden Equipment</a>
                                <ul
                                    class="
                                        megamenu__links
                                        megamenu__links--level--1
                                      "
                                >
                                  <li class="megamenu__item">
                                    <a href="#">Motor Pumps</a>
                                  </li>
                                  <li class="megamenu__item">
                                    <a href="#">Chainsaws</a>
                                  </li>
                                  <li class="megamenu__item">
                                    <a href="#">Electric Saws</a>
                                  </li>
                                  <li class="megamenu__item">
                                    <a href="#">Brush Cutters</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <!-- .megamenu / end -->
                    </div>
                  </li>
                  <li class="nav-links__item nav-links__item--with-submenu">
                    <a href="shop-grid-3-columns-sidebar.html"
                    ><span
                    >Shop
                            <svg
                                class="nav-links__arrow"
                                width="9px"
                                height="6px"
                            >
                              <use
                                  xlink:href="/resources/images/sprite.svg#arrow-rounded-down-9x6"
                              ></use></svg></span
                    ></a>
                    <div class="nav-links__menu">
                      <!-- .menu -->
                      <ul class="menu menu--layout--classic">
                        <li>
                          <a href="shop-grid-3-columns-sidebar.html"
                          >Shop Grid
                            <svg
                                class="menu__arrow"
                                width="6px"
                                height="9px"
                            >
                              <use
                                  xlink:href="/resources/images/sprite.svg#arrow-rounded-right-6x9"
                              ></use></svg
                            ></a>
                          <div class="menu__submenu">
                            <!-- .menu -->
                            <ul class="menu menu--layout--classic">
                              <li>
                                <a href="shop-grid-3-columns-sidebar.html"
                                >3 Columns Sidebar</a
                                >
                              </li>
                              <li>
                                <a href="shop-grid-4-columns-full.html"
                                >4 Columns Full</a
                                >
                              </li>
                              <li>
                                <a href="shop-grid-5-columns-full.html"
                                >5 Columns Full</a
                                >
                              </li>
                            </ul>
                            <!-- .menu / end -->
                          </div>
                        </li>
                        <li><a href="shop-list.html">Shop List</a></li>
                        <li>
                          <a href="shop-right-sidebar.html"
                          >Shop Right Sidebar</a
                          >
                        </li>
                        <li>
                          <a href="product.html"
                          >Product
                            <svg
                                class="menu__arrow"
                                width="6px"
                                height="9px"
                            >
                              <use
                                  xlink:href="/resources/images/sprite.svg#arrow-rounded-right-6x9"
                              ></use></svg
                            ></a>
                          <div class="menu__submenu">
                            <!-- .menu -->
                            <ul class="menu menu--layout--classic">
                              <li><a href="product.html">Product</a></li>
                              <li>
                                <a href="product-alt.html">Product Alt</a>
                              </li>
                              <li>
                                <a href="product-sidebar.html"
                                >Product Sidebar</a
                                >
                              </li>
                            </ul>
                            <!-- .menu / end -->
                          </div>
                        </li>
                        <li><a href="/carts">Cart</a></li>
                        <li><a href="/wishlists">Wishlist</a></li>
                        <li><a href="account.html">My Account</a></li>
                      </ul>
                      <!-- .menu / end -->
                    </div>
                  </li>
                  <li class="nav-links__item nav-links__item--with-submenu">
                    <a href="blog-classic.html"
                    ><span
                    >Blog
                            <svg
                                class="nav-links__arrow"
                                width="9px"
                                height="6px"
                            >
                              <use
                                  xlink:href="/resources/images/sprite.svg#arrow-rounded-down-9x6"
                              ></use></svg></span
                    ></a>
                    <div class="nav-links__menu">
                      <!-- .menu -->
                      <ul class="menu menu--layout--classic">
                        <li>
                          <a href="blog-classic.html">Blog Classic</a>
                        </li>
                        <li><a href="blog-grid.html">Blog Grid</a></li>
                        <li><a href="blog-list.html">Blog List</a></li>
                        <li>
                          <a href="blog-left-sidebar.html"
                          >Blog Left Sidebar</a
                          >
                        </li>
                        <li><a href="post.html">Post Page</a></li>
                        <li>
                          <a href="post-without-sidebar.html"
                          >Post Without Sidebar</a
                          >
                        </li>
                      </ul>
                      <!-- .menu / end -->
                    </div>
                  </li>
                  <li class="nav-links__item nav-links__item--with-submenu">
                    <a href="#"
                    ><span
                    >Pages
                            <svg
                                class="nav-links__arrow"
                                width="9px"
                                height="6px"
                            >
                              <use
                                  xlink:href="/resources/images/sprite.svg#arrow-rounded-down-9x6"
                              ></use></svg></span
                    ></a>
                    <div class="nav-links__menu">
                      <!-- .menu -->
                      <ul class="menu menu--layout--classic">
                        <li><a href="/abouts">About Us</a></li>
                        <li><a href="/contacts">Contact Us</a></li>
                        <li>
                          <a href="contact-us-alt.html">Contact Us Alt</a>
                        </li>
                        <li><a href="404.html">404</a></li>
                        <li>
                          <a href="terms-and-conditions.html"
                          >Terms And Conditions</a
                          >
                        </li>
                        <li><a href="faq.html">FAQ</a></li>
                        <li><a href="components.html">Components</a></li>
                        <li><a href="typography.html">Typography</a></li>
                      </ul>
                      <!-- .menu / end -->
                    </div>
                  </li>
                  <li class="nav-links__item">
                    <a href="/contacts"><span>Contact Us</span></a>
                  </li>
                  <li class="nav-links__item">
                    <a href="https://themeforest.net/user/kos9/portfolio"
                    ><span>Buy Theme</span></a
                    >
                  </li>
                </ul>
              </div>
              <!-- .nav-links / end -->
              <div v-if="$store.state.Auth.auth" class="nav-panel__indicators">
                <div class="indicator">
                  <a href="/wishlists" class="indicator__button"
                  ><span class="indicator__area"
                  >
                    <svg width="20px" height="20px">
                      <use xlink:href="/resources/images/sprite.svg#heart-20"></use>
                    </svg>
                    <span v-if="$store.state.Wishlist.wishlists" class="indicator__value">{{ $store.state.Wishlist.wishlists.items.length }}</span>
                    <span v-else class="indicator__value">0</span>
                  </span
                  ></a
                  >
                </div>
                <cart :from="'desktop'"></cart>
              </div>
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
  name: "DesktopHeader",
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
            location.href = '/';
          })
          .catch(err => console.log(err))
          .finally(() => this.$store.commit('Loading/SET_LOADING', false));
    }
  }
}
</script>

<style scoped>

</style>