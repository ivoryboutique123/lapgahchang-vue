<template>
  <!-- site__body -->
  <div class="site__body">
    <bread-crumb></bread-crumb>
    <div class="block">
      <div v-if="$store.state.Product.product" class="container">
        <div class="product product--layout--standard" data-layout="standard">
          <div class="product__content"><!-- .product__gallery -->
            <div class="product__gallery">
              <div class="product-gallery">
                <div class="product-gallery__featured">
                  <detail-carousel
                      :images="images"
                  ></detail-carousel>
                </div>
              </div>
            </div><!-- .product__gallery / end --><!-- .product__info -->
            <div class="product__info">
              <div class="product__wishlist-compare">
                <button @click="addWishlist($store.state.Product.product)" type="button" class="btn btn-sm btn-light btn-svg-icon" data-toggle="tooltip"
                        data-placement="right" title="Wishlist">
                  <svg width="16px" height="16px">
                    <use xlink:href="/resources/images/sprite.svg#wishlist-16"></use>
                  </svg>
                </button>
                <button type="button" class="btn btn-sm btn-light btn-svg-icon" data-toggle="tooltip"
                        data-placement="right" title="Compare">
                  <svg width="16px" height="16px">
                    <use xlink:href="/resources/images/sprite.svg#compare-16"></use>
                  </svg>
                </button>
              </div>
              <h1 class="product__name">{{ $store.state.Product.product.name }}</h1>
              <div class="product__description"
                   v-html="$store.state.Product.product.description">

              </div>
              <ul class="product__features">
                <li>Speed: 750 RPM</li>
                <li>Power Source: Cordless-Electric</li>
                <li>Battery Cell Type: Lithium</li>
                <li>Voltage: 20 Volts</li>
                <li>Battery Capacity: 2 Ah</li>
              </ul>
              <ul class="product__meta">
                <li class="product__meta-availability">Availability: <span
                    class="text-success">In Stock</span></li>
                <li>SLUG: {{ $store.state.Product.product.slug }}</li>
              </ul>
            </div><!-- .product__info / end --><!-- .product__sidebar -->
            <div class="product__sidebar">
              <div class="product__availability">Availability: <span class="text-success">In Stock</span>
              </div>
              <div class="product__prices">{{getCurrency()}} {{ currencyString($store.state.Product.product.price) }}</div><!-- .product__options -->
              <form class="product__options">
                <div class="form-group product__option"><label class="product__option-label"
                                                               for="product-quantity">Quantity</label>
                  <div class="product__actions">
                    <div class="product__actions-item">
                      <div class="input-number product__quantity"><input id="product-quantity"
                                                                         class="input-number__input form-control form-control-lg"
                                                                         type="number" min="1"
                                                                         v-model="qty">
                        <div class="input-number__add" @click="qty++"></div>
                        <div class="input-number__sub" @click="deduct()"></div>
                      </div>
                    </div>
                    <div class="product__actions-item product__actions-item--addtocart">
                      <div @click="addToCart($store.state.Product.product)" class="btn btn-primary btn-lg">Add to cart</div>
                    </div>
                    <div class="product__actions-item product__actions-item--wishlist">
                      <button @click="addWishlist($store.state.Product.product)" type="button" class="btn btn-secondary btn-svg-icon btn-lg"
                              data-toggle="tooltip" title="Wishlist">
                        <svg width="16px" height="16px">
                          <use xlink:href="/resources/images/sprite.svg#wishlist-16"></use>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </form><!-- .product__options / end --></div><!-- .product__end -->
            <div class="product__footer">
              <div v-if="$store.state.Product.product" class="product__tags tags">
                <div class="tags__list">
                  <a v-for="category in $store.state.Product.product.categories" :key="category.id" href="#">{{category.name}}</a>
                </div>
              </div>
<!--              <div class="product__share-links share-links">-->
<!--                <ul class="share-links__list">-->
<!--                  <li class="share-links__item share-links__item&#45;&#45;type&#45;&#45;like"><a href="#">Like</a>-->
<!--                  </li>-->
<!--                  <li class="share-links__item share-links__item&#45;&#45;type&#45;&#45;tweet"><a href="#">Tweet</a>-->
<!--                  </li>-->
<!--                  <li class="share-links__item share-links__item&#45;&#45;type&#45;&#45;pin"><a href="#">Pin It</a>-->
<!--                  </li>-->
<!--                  <li class="share-links__item share-links__item&#45;&#45;type&#45;&#45;counter"><a href="#">4K</a>-->
<!--                  </li>-->
<!--                </ul>-->
<!--              </div>-->
            </div>
          </div>
        </div>
      </div>
    </div><!-- .block-products-carousel -->
   <loader v-if="$store.state.Loading.loading"></loader>
  </div>
  <!-- site__body / end -->
</template>

<script>
import BreadCrumb from "@/components/headers/BreadCrumb";
import DetailCarousel from "@/components/products/DetailCarousel";
import Loader from "@/components/Loader";

export default {
  name: "Detail",
  components: {
    BreadCrumb,
    DetailCarousel,
    Loader
  },
  data() {
    return {
      show: false,
      qty: 1,
      images: []
    }
  },
  mounted() {
    this.get();
  },
  methods: {
    deduct() {
      if(this.qty > 1) {
        this.qty--;
      }
    },
    get() {
      this.$store.dispatch('Product/detail', {id: this.$route.params.id})
          .then(res => {
            this.$store.commit('Product/SET_PRODUCT', res);
            this.images = this.$store.getters['Product/prepareImages'];
          })
          .finally(() => this.$store.commit('Loading/SET_LOADING', false));
    },

    addToCart(product) {
      let productStockId = 1;

      if(product.stocks.length > 0) {
        productStockId = product.stocks[0].id;
      }

      this.$store.dispatch('Cart/add', {product_id: product.id, quantity: this.qty, product_stock_id: productStockId})
          .then(() => {
            this.$store.dispatch('Cart/get')
                .then((res) => {
                  this.$store.commit('Cart/SET_CARTS', res)
                })
          })
          .catch(err => console.log(err))
          .finally(() => this.$store.commit('Loading/SET_LOADING', false));
    },

    addWishlist(product) {
      this.$store.dispatch('Wishlist/add', {id: product.id})
          .then(
              () => this.$store.dispatch('Wishlist/get')
                  .then((res) => this.$store.commit('Wishlist/SET_WISHLISTS', res))
                  .catch(err => console.log(err))
          )
          .catch(err => console.log(err))
          .finally(() => this.$store.commit('Loading/SET_LOADING', false));
    },
  }
}
</script>

<style scoped>

</style>